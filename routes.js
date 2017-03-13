var controller = require('./controllers');
var router = require('express').Router();

// Rest API to /podcasts
router.get('/search', controller.search.get);
router.post('/search', controller.search.post);
router.get('/playlist', controller.playlist.get);
router.post('/playlist', controller.playlist.post);

module.exports = router;