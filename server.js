var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var router = express.Router();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})



router.get('/', function(req, res){
    res.end('This is just an empty endpoint for a service that isn\'t for you! :(')
  })
  .post('/txt', function(req, res){
    if (req.body.token !== "s3cret-W0wWwWw") {return res.send(403);};

    res.set({
      "Content-Disposition":"attachment; filename=\"writedrunk-" + new Date().toDateString()+".txt\""
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