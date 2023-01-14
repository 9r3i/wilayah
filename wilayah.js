
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
