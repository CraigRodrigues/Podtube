// Simple server to serve index.html
var path = require('path');
var express = require('express');
var app = express();

app.set('port', 8080);
app.use(express.static(__dirname));

app.listen(app.get('port'));
console.log('Listening on 8080');