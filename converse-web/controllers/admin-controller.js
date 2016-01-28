var express = require('express')
    , router = express.Router()
    , restrict = require('../helpers/auth').restrict;

router.get('/', restrict, function(req, res, next){
    console.log("you're trying to access restricted area");
    next();
});

module.exports = router;