// Simple server
var express = require('express');
var app = express();

app.set('port', 8080);
app.use(express.static(__dirname + '/app'));

// app.get('/', function(req, res) {
//   res.send('Hello World');
// });

// app.listen(8080, function() {
//   console.log('Server listening on port 8080');
// })

app.listen(app.get('port'));
console.log('Listening on 8080');