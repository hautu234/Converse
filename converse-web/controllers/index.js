var express = require('express')
  , router = express.Router();

router.use('/comments', require('./comments'));
router.use('/admin', require('./admin'));
// router.use('/login', require('./login'));
router.use('/api', require('./api'));

router.get('/', function(req, res) {
  res.render('index')
});

module.exports = router;