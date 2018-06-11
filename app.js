//Include
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

//Config
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes, routes.js
routes = require('./routes')(app);

//Server
app.listen(3000, function () {
  console.log('localhost:3000');
});

module.exports = app;