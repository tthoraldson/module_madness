//NODE
var http = require('http');
var module3 = require('./module3.js');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(module3.printResult(module3.finalNumber()));
  res.end();

}).listen(3000);
