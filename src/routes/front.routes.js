var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/',(req,res,next) => {
  res.render('index');
});

router.get('/guitarras',(req,res,next) => {
  request.get('http://localhost:3000/api', (err,response,body)=>{
    if(err) res.status(404).json({mensaje:"Error al consumir"});
    else res.render('guitarras',{'datos': JSON.parse(body) });
  });
});


module.exports = router;