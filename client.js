const { WilayahClient } = require(__dirname+'/wilayah'),
path=process.argv[2]?process.argv[2]:'index',
host=process.argv[3]?process.argv[3]
  :'https://9r3i.github.io/wilayah/api/2022/';

(async function(){
  wilayah=new WilayahClient(host),
  result=await wilayah.fetch(path);
  console.log(result);
})();
