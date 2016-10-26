var myModule = require('./coins.js')
var http = require('http');
var open = require('open');
var express = require('express')
var app = express()
var path    = require("path");
var swig = require('swig');

//Configuração do Express
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

//Rotas
//Rota Principal
app.get('/', function (req, res) {
	myModule.allCoins(function(err, coins){
        if(err) return done(err);
             res.render('index',coins);
     });
});

//Inicia servidor com porta randomica
var server = app.listen(0, function () {
	var port = server.address().port;
	open("http://localhost:" + server.address().port,"chrome");
	console.log('App listening at http://localhost:%s',  port);
});

