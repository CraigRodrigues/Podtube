var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/podtube');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var playlistSchema = mongoose.Schema({
  username: String,
  description: String
});

var playlist = mongoose.model('Playlist', playlistSchema);