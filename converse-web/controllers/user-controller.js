"use strict";

var _ = require('underscore'),
    express = require('express'),
    router = express.Router(),
    User = require('../entity/user'),
    entityService = require('../service/entity-service');

// define constant
var RESULT = "result",
    MESSAGE = "message",
    SUCCESS = "success!",
    FAILED = "failed",
    uri = "uri";


var createUser = function(req, res, user , err) {
    if(err) {
        console.log(err);
        var message = "Something when wrong with registering this user " + user;
        if(err.code && err.code === 11000) {
            message = "The user you're registering already existed!";
        }
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        console.log("user has been saved successfully");
        res.json({RESULT:SUCCESS,MESSAGE:user});
    }
};

var getUsers = function(req, res, users, err) {
    // define default messages
    var result = SUCCESS;
    var message = "no users found!";

    if (err) {
        console.log(err);
        message = "something wrong !";
        result = FAILED;
    }

    if(!users || users.length == 0) {
        message = "no users found!";
    } else {
        message = users;
    }

    res.json({RESULT:result, MESSAGE:message});
};

var updateUser = function(req, res, user , err) {
    if(err) {
        console.log(err);
        var message = "Something when wrong with updating this user " + user;
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        console.log("user has been updated successfully");
        res.json({RESULT:SUCCESS,MESSAGE:user});
    }
};

var deleteUser = function(req, res, user , err) {
    if(err) {
        console.log(err);
        var message = "Something when wrong with deleting this user " + user;
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        console.log("user has been deleted successfully");
        res.json({RESULT:SUCCESS,MESSAGE:user});
    }
};

/**
 * Create user with parameter
 * Param: req.body
 */
router.post('/create', function(req, res) {
    var user = req.body;
    entityService.create(req, res, user, createUser, User);
});

/**
 * Get user with user's uri
 * Param: req.body
 */
router.get('/get/:uri', function(req,res) {
    var searchOptions = {uri: req.params.uri};

    entityService.find(req, res, searchOptions, getUsers, User);
});


/**
 * Get all users with parameter
 * Param: req.body
 */
router.get('/get-all', function(req,res) {
    var searchOptions = {};

    entityService.find(req, res, searchOptions, getUsers, User);
});

/**
 * Find users with parameter
 * Param: req.body
 */
router.get('/find', function(req,res) {
    var searchOption = req.body;
    entityService.find(req, res, searchOptions, getUsers, User);
});

/**
 * Update user with parameter
 * Param: req.body
 */
router.post('/update', function(req,res) {
    var updatingUser = req.body;
    if(updatingUser && updatingUser._id) {
        var id = updatingUser._id;
        delete updatingUser._id; // clear _id field
        delete updatingUser.username; // clear username field
        entityService.update(req, res, id, updatingUser, updateUser, User);
    } else {
        res.json({MESSAGE : "invalid parameters!"});
    }
});

/**
 * Delete user with parameter
 * Param: req.body
 */
router.post('/delete', function(req,res) {
    var searchOption = req.body;
    if(searchOption && searchOption._id) {
        var id = searchOption._id;
        entityService.delete(res, res, id, deleteUser, User);
    } else {
        res.json({MESSAGE : "invalid parameters!"});
    }
});


module.exports = router;