var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var handlebars_sections = require('express-handlebars-sections');
var multer = require('multer');
var mysql = require('mysql');
var morgan = require('morgan');
var firebase = require('firebase');
var react = require('react');
var createError = require('http-errors');
var numeral = require('numeral');

// var categoriesModel = require('../models/categories.model');
app.use(express.static('public'));

app.use(morgan('dev'));
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/' ,require('./routes/categories'));
app.use('/' ,require('./routes/account'));
// var categories = require('./routes/categories');
// app.use('/', categories);
// var indexPage = require('./routes/index');
// app.use('/', indexPage);
// app.get('/categories',(req,res)=>{
// 	res.render('')
// })

// app.get('/', (req, res) =>{
// 	res.render('home');
// })

app.get('/404', (req, res) =>{
	res.render('404');
})

app.get('/kiemtra', (req, res) =>{
	res.render('kiemtra');
})

app.get('/audio-post', (req, res) =>{
	res.render('audio-post');
})

var port = 3000;

// app.get('/', function(req, res){
// 	res.render('home');
// })
app.listen(port, function(){
	console.log(`Server started on port ${port}`);
});