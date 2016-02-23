var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// create a schema
var categorySchema = new Schema({
    name: {type: String, required: true, unique: true, index:true },
    type: String,
    description: String,

    imageUri: String,
    mainCategory: Boolean,
    meta: {
        averageRating: Number,
        numberReviews: Number,
    },
    uri: String,
    created_at: Date,
    updated_at: Date
});

categorySchema.pre('save', function(next) {
    var category = this;

    // generate created_at and updated_at
    if(!category.created_at) {
        category.created_at = new Date();
    }

    category.updated_at = new Date();

    // generate user uri
    if(!category.uri) {
        category.uri = category.name;
    }

    next();
});

categorySchema.post('init', function(doc) {
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;