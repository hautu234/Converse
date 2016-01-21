var express = require('express'),
    router = express.Router(),
    User = require('../entity/user');


router.get('/:id', function(req,res) {
    var user = new User(req.data);
    user.save(function(err) {
        console.log("saving data");
        if(err) throw err;
        console.log("user has been saved successfully");
    });
    
    res.json(user);
});

router.post('/', function(req,res) {
    console.log('saving data ' + req.body.toString());
    var user = new User(req.body);
    console.log(user);
    user.save(function(err) {
        console.log("I'm saving");
        if(err) {
            console.log(err);
            var message = "Something when wrong with registering this user " + user;
            if(err.code && err.code === 11000) {
                message = "The user you're registering already existed!";
            }
            res.json({"result":"failed!","message":message});
        } else {
            console.log("user has been saved successfully");
            res.json({"result":"success!","message":user});
        }
    });
});

// Define routes handling profile requests
module.exports = router;