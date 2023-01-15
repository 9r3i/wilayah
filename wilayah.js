const http = require("http");
const fs = require('fs').promises;

/* WilayahServer */
function WilayahServer(port,host){
  const rl=function(req,res){
    if(res.headersSent){return;}
    headers(res);
    /* checking options */
    if(req.method=="OPTIONS"){
      return options(res);
    }
    console.log(req.method,req.url);
    const path=__dirname+'/api/2022'+req.url;
    res.setHeader("Content-Type","application/json");
    fs.access(path).then(r=>{
      fs.readFile(path).then(con=>{
        res.writeHead(200);
        res.end(con);
      }).catch(err => {
        res.writeHead(500);
        res.end(JSON.stringify({
          code:500,
          message:'Error: 500 - Failed to read data.',
        }));
      });
    }).catch(err=>{
      res.writeHead(404);
      res.end(JSON.stringify({
        code:404,
        message:'Error: 404 - Data is not found.',
      }));
    });
  },
  serv=http.createServer(rl);
  port=port?port:3000;
  host=host?host:'localhost';
  serv.listen(port,host,()=>{
    console.log(`WilayahServer on http://${host}:${port}`);
  });
/* options headers */
function options(res){
  res.setHeader("Content-Language","en-US");
  res.setHeader("Content-Encoding","gzip");
  res.setHeader("Content-Length","0");
  res.setHeader("Vary","Accept-Encoding, Origin");
  res.writeHead(200);
  res.end('');
}
/* default headers */
function headers(res){
  /* access control - to allow the access via ajax */
  res.setHeader("Access-Control-Allow-Origin","*"); // allow origin
  res.setHeader("Access-Control-Request-Method","POST, GET, OPTIONS"); // request method
  res.setHeader("Access-Control-Request-Headers","X-PINGOTHER, Content-Type"); // request header
  res.setHeader("Access-Control-Max-Age","86400"); // max age (24 hours)
  res.setHeader("Access-Control-Allow-Credentials","true"); // allow credentials
  /* set content type of response header */
  res.setHeader("Content-Type","text/plain;charset=utf-8;");
}
}

/* WilayahClient */
function WilayahClient(host){
this.version='1.0.1';
this.host=host?host:'https://9r3i.github.io/wilayah/api/2022/';
this.fetch=function(path){
  const _WilayahClient=this;
  return new Promise(resolve=>{
    return _WilayahClient.fetchCB(path,r=>{
      return resolve(r);
    });
  });
};
this.fetchCB=function(path,cb){
  cb=typeof cb==='function'?cb:function(){};
  if(typeof path!=='string'){return cb(false);}
  let url=this.host+path+'.json';
  return fetch(url).then(r=>r.json()).then(cb);
};
}

exports.WilayahServer=WilayahServer;
exports.WilayahClient=WilayahClient;
