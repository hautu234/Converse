var express = require('express')
  , router = express.Router()
  , Comment = require('../models/comment');

router.get('/:id', function(req, res) {
  Comment.get(req.params.id, function (err, comment) {
    res.json({ message: 'Comment created!' , id: req.params.id});
  })
});

module.exports = router;