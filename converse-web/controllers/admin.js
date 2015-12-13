var express = require('express')
    , router = express.Router()
    , restrict = require('../helpers/auth').restrict;

router.get('/', restrict, function(req, res){
    console.log("you're trying to access restricted area");
});

module.exports = router;