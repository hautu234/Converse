"use strict";

var _ = require('underscore'),
    express = require('express'),
    router = express.Router(),
    Category = require('../entity/category'),
    entityService = require('../service/entity-service');

// define constant
var RESULT = "result",
    MESSAGE = "message",
    SUCCESS = "success!",
    FAILED = "failed",
    uri = "uri";


var createCategory = function(req, res, category , err) {
    if(err) {
        var message = "Something when wrong with registering this category " + category;
        if(err.code && err.code === 11000) {
            message = "The category you're registering already existed!";
        }
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        res.json({RESULT:SUCCESS,MESSAGE:category});
    }
};

var getCategories = function(req, res, categories, err) {
    // define default messages
    var result = SUCCESS;
    var message = "no categories found!";

    if (err) {
        message = "something wrong !";
        result = FAILED;
    }

    if(!categories || categories.length == 0) {
        message = "no categories found!";
    } else {
        message = categories;
    }

    res.json({RESULT:result, MESSAGE:message});
};

var updateCategory = function(req, res, category , err) {
    if(err) {
        var message = "Something when wrong with updating this category " + category;
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        res.json({RESULT:SUCCESS,MESSAGE:category});
    }
};

var deleteCategory = function(req, res, category , err) {
    if(err) {
        var message = "Something when wrong with deleting this category " + category;
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        res.json({RESULT:SUCCESS,MESSAGE:category});
    }
};

/**
 * Create category with parameter
 * Param: req.body
 */
router.post('/create', function(req, res) {
    var category = req.body;
    entityService.create(req, res, category, createCategory, Category);
});

/**
 * Get categorie with category's uri
 * Param: req.body
 */
router.get('/get/:uri', function(req,res) {
    var searchOptions = {uri: req.params.uri};

    entityService.find(req, res, searchOptions, getCategories, Category);
});


/**
 * Get all categories with parameter
 * Param: req.body
 */
router.get('/get-all', function(req,res) {
    var searchOptions = {};

    entityService.find(req, res, searchOptions, getCategories, Category);
});

/**
 * Find categories with parameter
 * Param: req.body
 */
router.get('/find', function(req,res) {
    var searchOption = req.body;
    entityService.find(req, res, searchOptions, getCategories, Category);
});

/**
 * Update category with parameter
 * Param: req.body
 */
router.post('/update', function(req,res) {
    var updatingCategory = req.body;
    if(updatingCategory && updatingCategory._id) {
        var id = updatingCategory._id;
        delete updatingCategory._id; // clear _id field
        entityService.update(req, res, id, updatingCategory, updateCategory, Category);
    } else {
        res.json({MESSAGE : "invalid parameters!"});
    }
});

/**
 * Delete category with parameter
 * Param: req.body
 */
router.post('/delete', function(req,res) {
    var searchOption = req.body;
    if(searchOption && searchOption._id) {
        var id = searchOption._id;
        entityService.delete(res, res, id, deleteCategory, Category);
    } else {
        res.json({MESSAGE : "invalid parameters!"});
    }
});


module.exports = router;