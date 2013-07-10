var express = require('express');
buf = new Buffer(256);
var app = express.createServer(express.logger());
var fs = require('fs');
buf[0] = fs.readFileSync('/home/ubuntu/bitstarter/index.html');
var ret = buf.toString('utf8'); 
app.get('/', function(request, response) {
  response.send(ret);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
