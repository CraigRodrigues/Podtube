const Playlist = require('./db.js');

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

craigsList.save(function(err) {
  if (err) throw err;

  console.log('Playlist saved successfully!');
});