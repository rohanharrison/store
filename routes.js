var app = require('./app');

module.exports = function(app){
    //Index
    app.get('/', function (req, res) {
        res.render('index', { title: 'Test', message: 'Passing message from routes' })
    });

    //Register
    app.get('/register', function (req, res) {
        res.render('register')
    });

    app.post('/register', function (req, res) {
        res.send(req.body)
    });

}