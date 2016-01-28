var db, db_address, mongoose;
mongoose = require("mongoose");
db_address = "localhost:27017/conversebmt";

mongoose.connection.on("open", function(ref) {
    return console.log("Connected to mongo server!".green);
});

mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!".yellow);
    return console.log(err.message.red);
});


exports.connect = function() {
    try {
        mongoose.connect("mongodb://" + db_address);
        db = mongoose.connection;
        console.log("Started connection on " + ("mongodb://" + db_address).cyan + ", waiting for it to open...".grey);
    } catch (err) {
        console.log(("Setting up failed to connect to " + db_address).red, err.message);
    }
}