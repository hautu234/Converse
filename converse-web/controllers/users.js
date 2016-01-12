var express = require('express')
    , router = express.Router()
    , User = require('../entity/user');

router.get('/:id', function(req,res) {
    var superhuy = new User({
       id: "1234",
       name: "superhuy"
    });
    superhuy.save(function(err) {
        if(err) throw err;
        console.log("user has been saved successfully");
    });
    
    res.json(superhuy);
});

// Define routes handling profile requests
module.exports = router;