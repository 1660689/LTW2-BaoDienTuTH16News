var express = require('express');

var router = express.Router();

router.get('/register', (req, res, next) =>{
    res.render('account/register');
})

router.post('/register', (req,res, next) =>{

})

module.exports = router;