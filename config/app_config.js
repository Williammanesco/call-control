var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = {
   app: app
 , router: express.Router()
}

var allowCors = function(req, res, next) {
	  res.header('Access-Control-Allow-Origin', '127.0.0.1:5000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
  	next();
}


app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

module.exports = config;
