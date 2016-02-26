"use strict";

var _ = require('underscore'),
    express = require('express'),
    router = express.Router(),
    Category = require('../entity/category'),
    categoryService = require('../service/category-service');

// define constant
var RESULT = "result",
    MESSAGE = "message",
    SUCCESS = "success!",
    FAILED = "failed",
    uri = "uri";


var createCategory = function(req, res, category , err) {
    if(err) {
        console.log(err);
        var message = "Something when wrong with registering this category " + category;
        if(err.code && err.code === 11000) {
            message = "The category you're registering already existed!";
        }
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        console.log("category has been saved successfully");
        res.json({RESULT:SUCCESS,MESSAGE:category});
    }
};

var getCategories = function(req, res, categories, err) {
    // define default messages
    var result = SUCCESS;
    var message = "no categories found!";

    if (err) {
        console.log(err);
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
        console.log(err);
        var message = "Something when wrong with updating this category " + category;
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        console.log("category has been updated successfully");
        res.json({RESULT:SUCCESS,MESSAGE:category});
    }
};

var deleteCategory = function(req, res, category , err) {
    if(err) {
        console.log(err);
        var message = "Something when wrong with deleting this category " + category;
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        console.log("category has been deleted successfully");
        res.json({RESULT:SUCCESS,MESSAGE:category});
    }
};

/**
 * Create category with parameter
 * Param: req.body
 */
router.post('/create', function(req, res) {
    var category = req.body;
    categoryService.create(req, res, category, createCategory);
});

/**
 * Get categorie with category's uri
 * Param: req.body
 */
router.get('/get/:uri', function(req,res) {
    var searchOptions = {uri: req.params.uri};

    categoryService.find(req, res, searchOptions, getCategories);
});


/**
 * Get all categories with parameter
 * Param: req.body
 */
router.get('/get-all', function(req,res) {
    var searchOptions = {};

    categoryService.find(req, res, searchOptions, getCategories);
});

/**
 * Find categories with parameter
 * Param: req.body
 */
router.get('/find', function(req,res) {
    var searchOption = req.body;
    categoryService.find(req, res, searchOptions, getCategories);
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
        categoryService.update(req, res, id, updatingCategory, updateCategory);
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
        categoryService.delete(res, res, id, deleteCategory);
    } else {
        res.json({MESSAGE : "invalid parameters!"});
    }
});


module.exports = router;