var app = require('./app');

module.exports = function(app){

    app.get('/', function (req, res) {
        res.render('index', { title: 'Test', message: 'Passing message from routes' })
    });

}