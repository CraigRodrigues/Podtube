var unirest = require('unirest');
var http = require('http');
var api = require('./env/config.js')

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

      unirest.get('https://www.googleapis.com/youtube/v3/search')
      .query(headers.youtube)
      // .send("url=" + req.headers.url)
      .end(function (result) {
        res.send(result.body);
        // console.log(result.status, result.headers, result.body);
      });
    }
  },

  playlist: {
    get: function (req, res) {
      res.send('GETTINGPLAYLIST');
    },
    post: function(req, res) {
      console.log('UPDATING PLAYLIST');

      unirest.post("https://savedeo.p.mashape.com/download")
      .header(headers.mashape)
      .send("url=" + req.headers.url)
      .end(function (result) {
        res.send(result.body);
        // console.log(result.status, result.headers, result.body);
      });
    }
  }
};