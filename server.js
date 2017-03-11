// Simple server
var express = require('express');

var app = express();

app.set('port', 8080);
console.log((__dirname));
app.use(express.static(__dirname));

var router = require('./routes.js');

// Setting up routes
app.use('/podcasts', router);

app.listen(app.get('port'));
console.log('Listening on 8080');