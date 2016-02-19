var _ = require('underscore'),
    express = require('express'),
    router = express.Router();

/**
 * Create user with parameter
 * Param: req, res, user and callback function
 */
exports.create = function(req, res, user, cb, Entity) {
    var persistingUser = new Entity(user);
    persistingUser.save(function(err) {
        cb(req, res, persistingUser, err);
    });
};

/**
 * Find users with parameter
 * Param: req, res, searchOptions and callback function
 */
exports.find = function(req, res, searchOptions, cb, Entity) {
    var promise = Entity.find(searchOptions).exec();

    promise.then(function(users){
        console.log("find "+  JSON.stringify(searchOptions) + users);
        cb(req, res, users);
    });
};

/**
 * Update user with parameter
 * Param: req, res, id, updatingUser and callback function
 */
exports.update = function(req, res, id, updatingUser, cb, Entity) {
    Entity.findById(id, function(err, user) {
        if (!user)
            return res.json({"message" : "could not find document with id " + id});
        else {
            console.log("updating " + JSON.stringify(updatingUser) + " to " + JSON.stringify(user));
            user = _.extend(user, updatingUser);
            user.save(function(err) {
                cb(req, res, user, err);
            });
        }
    });
};

/**
 * Delete user by id as parameter
 * Param: req, res, id and callback function
 */
exports.delete = function(req, res, id, cb, Entity) {
    Entity.findById(id, function(err, user) {
        if (!user)
            return res.json({"message" : "could not find document with id " + id});
        else {
            user.remove(function(err) {
                cb(req, res, user, err);
            });
        }
    });
};