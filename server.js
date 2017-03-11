// Simple server
var express = require('express');
var unirest = require('unirest');
var http = require("http");

var app = express();

app.set('port', 8080);
console.log((__dirname));
app.use(express.static(__dirname));

var router = require('./routes.js');

app.get('/search', function(req, res) {

  unirest.post("https://savedeo.p.mashape.com/download")
  .header("X-Mashape-Key", "zwtchzLBP2msheBIGc2Fa4Bo3a26p1lrVEojsnL0dtlgBGCxOo")
  .header("Content-Type", "application/x-www-form-urlencoded")
  .header("Accept", "application/json")
  .send("url=" + req.headers.url)
  .end(function (result) {
    res.send(result.body);
    // console.log(result.status, result.headers, result.body);
  });
});

app.get('/playlist', function(req, res) {
  res.send('Hello World!!');
});

// app.listen(8080, function() {
//   console.log('Server listening on port 8080');
// })

app.listen(app.get('port'));
console.log('Listening on 8080');