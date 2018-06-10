//Include
var express = require('express');
var app = express();

//Routes
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Server
app.listen(3000, function () {
  console.log('localhost:3000');
});