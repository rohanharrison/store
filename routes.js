var app = require('./app');

module.exports = function(app){

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

}