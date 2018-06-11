//Include
var express = require('express');
var app = express();

//Routes, routes.js
routes = require('./routes')(app);

//Server
app.listen(3000, function () {
  console.log('localhost:3000');
});

module.exports = app;