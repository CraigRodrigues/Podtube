var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/search', function(req, res) {
  console.log('safsfasdfas');
});
router.get('/playlist', controller.playlist.get);
router.post('/playlist', controller.playlist.post);

module.exports = router;