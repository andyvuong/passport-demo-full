var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var passport = require('passport');

var app = express();
app.use(bodyParser.json());

/**
 * CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
 */ 
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    next();
};
app.use(allowCrossDomain);

/**
 * Configure the passport instance by passing it to our passport module and as middleware to our express
 * app instance.
 */
require('./app/backend/auth/passport')(passport);
app.use(passport.initialize()); 
app.use(passport.session());

/**
 * Pass our router and passport to the route module to connect all of our endpoints.
 */
require('./app/backend/routes')(app, router, passport);

/**
 * Serving app/frontend/public and and runs the server
 */
app.use(express.static(__dirname + 'app/frontend/public'));

var port = process.env.PORT || 3000;
console.log("Express server running on " + port);
app.listen(process.env.PORT || port);