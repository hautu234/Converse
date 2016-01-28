var express = require('express')
  , router = express.Router();

router.use('/admin', require('./admin-controller'));
router.use('/api', require('./api-controller'));

router.get('/', function(req, res) {
  res.render('index')
});

module.exports = router;