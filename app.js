var express = require('express');
var exphbs = require('express-handlebars');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) =>{
    res.render('home');
})

app.engine('handlebars', exphbs({
    defaultLayout: 'price_main'
}));
app.set('view engine', 'handlebars');

app.get('/pricing', (req,res) =>{
    // res.end('hello express');
    res.render('price_home');
})

var port = 3000;
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});