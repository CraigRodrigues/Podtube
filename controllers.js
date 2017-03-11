var unirest = require('unirest');
var http = require('http');

module.exports = {
  search: {
    get: function(req, res) {
      console.log('SEARCHING YOUTUBE');
      console.log(req.headers);

      unirest.post("https://savedeo.p.mashape.com/download")
      .header("X-Mashape-Key", "zwtchzLBP2msheBIGc2Fa4Bo3a26p1lrVEojsnL0dtlgBGCxOo")
      .header("Content-Type", "application/x-www-form-urlencoded")
      .header("Accept", "application/json")
      .send("url=" + req.headers.url)
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
      .header("X-Mashape-Key", "zwtchzLBP2msheBIGc2Fa4Bo3a26p1lrVEojsnL0dtlgBGCxOo")
      .header("Content-Type", "application/x-www-form-urlencoded")
      .header("Accept", "application/json")
      .send("url=" + req.headers.url)
      .end(function (result) {
        res.send(result.body);
        // console.log(result.status, result.headers, result.body);
      });
    }
  }
};