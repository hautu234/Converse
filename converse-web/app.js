var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.send('Hello World!');
});

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .get(function(req, res) {
        var _id = req.param('id');
        res.json({ message: 'Bear created!' , id: _id});
    });

app.use('/api', router);


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

var mongoose   = require('mongoose');
mongoose.connect('localhost:27017/local'); // connect to our database
