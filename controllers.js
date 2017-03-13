var unirest = require('unirest');
var http = require('http');
var api = require('./env/config.js')
var Playlist = require('./db.js')

let headers = {
  mashape: {
    'X-Mashape-Key': api.MASHAPE_API_KEY,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  youtube: {
    part: 'snippet',
    q: 'cats',
    type: 'video',
    key: api.YOUTUBE_API_KEY,
    maxResults: 10
  }
}

module.exports = {
  search: {
    get(req, res) {
      console.log('SEARCHING YOUTUBE');
      headers.youtube.q = req.query.query;

      unirest.get('https://www.googleapis.com/youtube/v3/search')
      .query(headers.youtube)
      .end(function (result) {
        res.send(result.body);
      });
    },
    post(req, res) {
      console.log('FETCHING AUDIO');

      unirest.post("https://savedeo.p.mashape.com/download")
      .header(headers.mashape)
      .send("url=" + req.body.data)
      .end(function (result) {
        res.send(result.body);
      });
    }
  },

  playlist: {
    get: function (req, res) {
      console.log('RETRIEVING PLAYLIST');

      Playlist.findOne({ username: 'Craig' }, function(err, user) {
        if (err) throw err;

        res.send(user.playlist);
      });

    },
    post: function(req, res) {
      console.log('FETCHING AUDIO');

      // Playlist.findOne({ username: 'Craig' }, function(err, user) {
      //   if (err) throw err;

      //   user.playlist = req.body.currentPlaylist;
      //   console.log(user.playlist);

      //   user.save(function(err) {
      //     if (err) throw err;

      //     console.log('Playlist successfully updated!');
      //   });

      // });

      unirest.post("https://savedeo.p.mashape.com/download")
      .header(headers.mashape)
      .send("url=" + req.body.data)
      .end(function (result) {
        res.send(result.body);
      });
    }
  }
};