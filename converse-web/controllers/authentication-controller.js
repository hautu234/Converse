var express = require('express'),
    router = express.Router(),
    User = require('../entity/user'),
    entityService = require('../service/entity-service'),
    md5 = require('js-md5');

var authenticate = function(req, res, users) {
    if (users.length > 0) {
        var user = users[0]

        req.session.regenerate(function(){
            // Store the user's primary key
            // in the session store to be retrieved,
            // or in this case the entire user object
            req.session.user = user;
            req.session.success = 'Authenticated as ' + user.name
                + ' click to <a href="/logout">logout</a>. '
                + ' You may now access <a href="/restricted">/restricted</a>.';
            res.json({"result":"success!","message": "login success!", "user": user});
        });
    } else {
        req.session.error = 'Authentication failed, please check your '
            + ' username and password.'
            + ' (use "tj" and "foobar")';
        res.json({"result":"failed!","message": "Incorrect username or password!", "user": null});
    }
};

router.post('/', function(req, res){
    var origin = req.query.origin || "/index";
    var searchOptions = {'username': req.body.username, 'password': md5(req.body.password)};
    entityService.find(req, res, searchOptions, authenticate, User);
});

module.exports = router;