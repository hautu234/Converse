var express = require('express')
    , router = express.Router()
    , User = require('../models/user');

router.get('/', function(req,res) {
    User.all(function() {
        res.json({message: "getting all users"});
    })
});

// Define routes handling profile requests
module.exports = router;