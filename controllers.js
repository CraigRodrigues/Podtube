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
    maxResults: 5
  }
}

module.exports = {
  search: {
    get: function(req, res) {
      console.log('SEARCHING YOUTUBE');

      headers.youtube.q = req.query.query;

      unirest.get('https://www.googleapis.com/youtube/v3/search')
      .query(headers.youtube)
      .end(function (result) {
        res.send(result.body);
      });
    }
  },

  playlist: {
    get: function (req, res) {
      res.send('GETTINGPLAYLIST');
    },
    post: function(req, res) {
      console.log('UPDATING PLAYLIST');
      console.log(req.body.data);

      let craigsList = new Playlist({
        username: 'Craig',
        playlist: [
          {
            title: 'Title',
            audioUrl: 'www.google.com',
            thumbnail: 'www.thumbnail.com'
          },
          {
            title: 'Title 2',
            audioUrl: 'www.google.com',
            thumbnail: 'www.thumbnail.com'
          }
        ]
      });

      console.log(craigsList);

      craigsList.save(function(err) {
        if (err) throw err;

        console.log('Playlist saved successfully!');
      });

      unirest.post("https://savedeo.p.mashape.com/download")
      .header(headers.mashape)
      .send("url=http://www.youtube.com/watch?v=" + req.body.data)
      .end(function (result) {
        res.send(result.body);
      });
    }
  }
};