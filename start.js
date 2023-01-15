const { WilayahServer } = require(__dirname+'/wilayah'),
port=process.argv[2]&&process.argv[2].match(/^\d+$/)
  ?process.argv[2]:3000,
host='localhost',
wilserv=new WilayahServer(port,host);
