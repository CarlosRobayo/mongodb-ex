var express = require('express');
var bodyParser = require('body-parser');
var User = require('./public/js/models/dbModel.js').User;

var app = express();

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.post('/register', function (req, res) {
    var user = new User({ email: req.body.email, password: req.body.password });
    user.save(function () {
        res.send('Datos guardados');
    });
});

app.listen(8080, function () {
    console.log('Esperando peticiones en el puerto 8080');
});