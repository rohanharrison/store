//Include
var express = require('express');
var app = express();

//Config
app.set('view engine', 'pug')

//Routes, routes.js
routes = require('./routes')(app);

//Server
app.listen(3000, function () {
  console.log('localhost:3000');
});

module.exports = app;