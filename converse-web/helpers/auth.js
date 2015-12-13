var hash = require('../helpers/pass').hash;

var users = {
    admin: { name: 'admin' }
};

hash('foobar', function(err, salt, hash){
    if (err) throw err;
    // store the salt & hash in the "db"
    users.admin.salt = salt;
    users.admin.hash = hash;
});

exports.authenticate = function (name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);
    var user = users[name];
    // query the db for the given username
    if (!user) return fn(new Error('cannot find user'));
    // apply the same algorithm to the POSTed password, applying
    // the hash against the pass / salt, if there is a match we
    // found the user
    hash(pass, user.salt, function(err, hash){
        if (err) return fn(err);
        if (hash == user.hash) {
            console.log("user found : " + user);
            return fn(null, user);
        }
        fn(new Error('invalid password'));
    });
};

exports.restrict = function (req, res, next) {
    if (req.session.user) {
        console.log(req.session.user + " is authenticated");
        next();
    } else {
        console.log("not a user, access denied!");
        var requestedUrl = req.protocol + '://' + req.get('Host') + req.url;
        req.session.error = 'Access denied!';
        res.redirect('/login?origin=' + requestedUrl);
    }
};