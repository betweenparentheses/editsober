var Paragraph = require('./config/db');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var port = process.env.PORT || 8080;
var router = express.Router();



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// router.post('/create', function(req, res){
//   new Paragraph({
//     text    : req.body.content,
//     updated_at : Date.now()
//   }).save( function( err, todo, count ){
//     res.redirect( '/' );
//   });
// });
router.get('/', function(req, res){
  new Paragraph({
    text    : "Hello World again",
    createdAt : Date.now()
  }).save( function( err, todo, count ){
    Paragraph.find(function(err, pars){
      res.json(pars);
    })
  });
});

router.post('/file', function(req, res){
  res.set({"Content-Disposition":"attachment; filename=\"writedrunk.txt\""});
  res.send(req.body.text);
});


// register our routes.
// all routes prefixed with api
app.use('/api', router);

app.listen(port);
console.log("EXPRESS MAGIC happens on port " + port);