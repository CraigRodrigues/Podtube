module.exports = {
  search: {
    get: function (req, res) {
      res.send('SEARCHING');
    }
  },

  playlist: {
    get: function (req, res) {
      res.send('GETTINGPLAYLIST');
    },
    post: function (req, res) {
      res.send('UPDATING PLAYLIST');
    }
  }
};