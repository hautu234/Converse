var express = require('express')
    , router = express.Router();

router.get('/', function(req, res){
    res.json({message: "you're trying to access awesome APIs"});
});

router.use('/auth', require('./authentication-controller'));
router.use('/user', require('./user-controller'));
router.use('/category', require('./category-controller'));
router.use('/subcategory', require('./subcategory-controller'));


module.exports = router;