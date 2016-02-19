var _ = require('underscore'),
    express = require('express'),
    router = express.Router(),
    entityService = require('./entity-service'),
    Category = require('../entity/category');

/**
 * Create user with parameter
 * Param: req, res, user and callback function
 */
exports.create = function(req, res, user, cb) {
    entityService.create(req, res, user, cb, Category);
};

/**
 * Find users with parameter
 * Param: req, res, searchOptions and callback function
 */
exports.find = function(req, res, searchOptions, cb) {
    entityService.find(req, res, searchOptions, cb, Category);
};

/**
 * Update user with parameter
 * Param: req, res, id, updatingUser and callback function
 */
exports.update = function(req, res, id, updatingUser, cb) {
    entityService.update(req, res, id, updatingUser, cb, Category);
};

/**
 * Delete user by id as parameter
 * Param: req, res, id and callback function
 */
exports.delete = function(req, res, id, cb) {
    entityService.delete(req, res, id, cb, Category);
};