const { WilayahClient } = require(__dirname+'/wilayah');

(async function(){
  const host='https://9r3i.github.io/wilayah/api/2022/',
  wilayah=new WilayahClient(host),
  result=await wilayah.fetch('index');
  console.log(result);
})();
