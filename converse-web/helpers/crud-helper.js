/**
 * Created by huyduong on 3/10/2016.
 */

// define constants
var RESULT = "result",
    MESSAGE = "message",
    SUCCESS = "success!",
    FAILED = "failed",
    URI = "uri";

exports.create = function(req, res, entity , err, Entity) {
    if(err) {
        console.log(err);
        var message = "Something when wrong with registering this" + Entity;
        if(err.code && err.code === 11000) {
            message = "The" + Entity + "you're registering already existed!";
        }
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        console.log("category has been saved successfully");
        res.json({RESULT:SUCCESS,MESSAGE:entity});
    }
};

exports.get = function(req, res, entities, err, Entity) {
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

exports.update = function(req, res, category , err) {
    if(err) {
        console.log(err);
        var message = "Something when wrong with updating this category " + category;
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        console.log("category has been updated successfully");
        res.json({RESULT:SUCCESS,MESSAGE:category});
    }
};

exports.remove = function(req, res, category , err) {
    if(err) {
        console.log(err);
        var message = "Something when wrong with deleting this category " + category;
        res.json({RESULT:FAILED,MESSAGE:message});
    } else {
        console.log("category has been deleted successfully");
        res.json({RESULT:SUCCESS,MESSAGE:category});
    }
};
