var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/podtube');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

// Create playlist schema
var playlistSchema = mongoose.Schema({
  username: String,
  playlist: { type: Array, required: true }
});

var Playlist = mongoose.model('Playlist', playlistSchema);