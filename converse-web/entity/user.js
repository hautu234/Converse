var mongoose = require('mongoose'),
    Schema = mongoose.Schema
    md5 = require('js-md5');
// create a schema
var userSchema = new Schema({
    id: String,
    name: String,
    username: { type: String, required: true, unique: true, index:true },
    password: { type: String, required: true },
    uri: String,
    admin: Boolean,
    location: String,
    meta: {
        age: Number,
    },
    created_at: Date,
    updated_at: Date
});

userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (user.isModified('password')) {
        // generate a salt
        user.password = md5(user.password);
    }

    // generate created_at and updated_at
    if(!user.created_at) {
        user.created_at = new Date();
    }

    user.updated_at = new Date();

    // generate user uri
    if(!user.uri) {
        user.uri = user.username;
    }

    next();
});

userSchema.post('init', function(doc) {
    doc.password = "******";
});

var User = mongoose.model('User', userSchema);
module.exports = User;