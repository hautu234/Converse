var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// create a schema
var subcategorySchema = new Schema({
    name: {type: String, required: true, unique: true, index:true },
    imageUri: String,
    mainCategory: Boolean,
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: Number,
    color: String,
    material: String,
    created_at: Date,
    updated_at: Date
});

subcategorySchema.pre('save', function(next) {
    var subcategory = this;

    // generate created_at and updated_at
    if(!subcategory.created_at) {
        subcategory.created_at = new Date();
    }

    subcategory.updated_at = new Date();

    next();
});

subcategorySchema.post('init', function(doc) {
});

var Subcategory = mongoose.model('Subcategory', subcategorySchema);
module.exports = Subcategory;