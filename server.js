var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var router = express.Router();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


router.get('/', function(req), res){
    res.send('This is just a microservice. Try again with a real endpoint.')
  })
  .post('/txt', function(req, res){
    res.set({
      "Content-Disposition":"attachment; filename=\"writedrunk"+ new Date.toDateString()+".txt\""
    });
    res.send(req.body.text);
  });


app.use('/', router);
app.listen(port);
console.log("EXPRESS MAGIC happens on port " + port);





// COMMENTED OUT SAVED FOR LATER

// var Paragraph = require('./config/db');
// var mongoose = require('mongoose');

// router.get('/', function(req, res){
//   new Paragraph({
//     text    : "Hello World again",
//     createdAt : Date.now()
//   }).save( function( err, todo, count ){
//     Paragraph.find(function(err, pars){
//       res.json(pars);
//     })
//   });
// });