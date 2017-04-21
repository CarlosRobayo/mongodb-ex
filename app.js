var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/login', function(req, res){
    res.render('login');
});

app.listen(8080, function() {
    console.log('Esperando peticiones en el puerto 8080');
});