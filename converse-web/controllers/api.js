var express = require('express')
    , router = express.Router();

router.get('/', function(req, res){
    res.json({message: "you're trying to access awesome APIs"});
});

router.route('/bears')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .get(function(req, res) {
        var _id = req.param('id');
        res.json({ message: 'Bear created!' , id: _id});
    });

module.exports = router;