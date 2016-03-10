var _ = require('underscore'),
    express = require('express'),
    router = express.Router();

/**
 * Create entity with parameter
 * Param: req, res, entity and callback function
 */
exports.create = function(req, res, entity, cb, Entity) {
    var persistingEntity = new Entity(entity);
    persistingEntity.save(function(err) {
        cb(req, res, persistingEntity, err);
    });
};

/**
 * Find entities with parameter
 * Param: req, res, searchOptions and callback function
 */
exports.find = function(req, res, searchOptions, cb, Entity) {
    var promise = Entity.find(searchOptions).exec();

    promise.then(function(entities){
        console.log("find "+  JSON.stringify(searchOptions) + entities);
        cb(req, res, entities);
    });
};

/**
 * Update entity with parameter
 * Param: req, res, id, updatingEntity and callback function
 */
exports.update = function(req, res, id, updatingEntity, cb, Entity) {
    Entity.findById(id, function(err, entity) {
        if (!entity)
            return res.json({"message" : "could not find document with id " + id});
        else {
            console.log("updating " + JSON.stringify(updatingEntity) + " to " + JSON.stringify(entity));
            entity = _.extend(entity, updatingEntity);
            entity.save(function(err) {
                cb(req, res, entity, err);
            });
        }
    });
};

/**
 * Delete entity by id as parameter
 * Param: req, res, id and callback function
 */
exports.delete = function(req, res, id, cb, Entity) {
    Entity.findById(id, function(err, entity) {
        if (!entity)
            return res.json({"message" : "could not find document with id " + id});
        else {
            entity.remove(function(err) {
                cb(req, res, entity, err);
            });
        }
    });
};