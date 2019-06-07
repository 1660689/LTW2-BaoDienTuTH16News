var express = require('express');
var categoriesModel = require('../models/categories.model');

var router = express.Router();

router.get('/', (req, res) =>{
    categoriesModel.all()
    .then(rows => {
        res.render('categories/index',{
            categories: rows
        });
    })
    // .then(rows =>{
    //     console.log(rows);
    //     res.end('rows');
    // })
    .catch(error => {
        res.render('404');
    });
})

router.get('/single', (req, res) =>{
    res.end('category');
})

module.exports = router;