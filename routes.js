var app = require('./app');

module.exports = function(app){
    //Index
    app.get('/', function (req, res) {
        res.render('index', { title: 'Home', message: 'Passing message from routes' })
    });

    app.post('/index_login', function (req, res) {
        res.redirect('../login')
    });

    app.post('/index_register', function (req, res) {
        res.redirect('../register')
    });
    

    //Register
    app.get('/register', function (req, res) {
        res.render('register')
    });

    app.post('/register', function (req, res) {
        res.send(req.body)
    });


    //Login
    app.get('/login', function (req, res) {
        res.render('login')
    });

    app.post('/login', function (req, res) {
        res.send(req.body)
    });


    /*
    Store
        List
    */

    //List
    app.get('/store/list', function (req, res) {
        res.render('store/list')
    });

    app.post('/store/list', function (req, res) {
        res.send(req.body)
    });

}