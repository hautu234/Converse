var express = require('express')
    , router = express.Router()
    , authenticate = require('../helpers/auth').authenticate;

router.post('/', function(req, res){
    authenticate(req.body.username, req.body.password, function(err, user){
        console.log("authenticating " + req.body.username + " password " + req.body.password);
        console.log("test user " + user);
        var origin = req.query.origin || "/index";

        if (user) {
            console.log("I'm generating session for " + user);

            // Regenerate session when signing in
            // to prevent fixation
            req.session.regenerate(function(){
                // Store the user's primary key
                // in the session store to be retrieved,
                // or in this case the entire user object
                req.session.user = user;
                req.session.success = 'Authenticated as ' + user.name
                    + ' click to <a href="/logout">logout</a>. '
                    + ' You may now access <a href="/restricted">/restricted</a>.';
                console.log("origin" + origin);
                res.redirect(origin);
            });
        } else {
            req.session.error = 'Authentication failed, please check your '
                + ' username and password.'
                + ' (use "tj" and "foobar")';
            res.redirect('/login?username=' + req.body.username + "&error=invalidcredential" + origin ? "" : origin);
        }
    });
});

module.exports = router;