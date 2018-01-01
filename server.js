// npm packages 
// express for api routing, bodyParser middleware, and path to return directory name
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

// will work on heroku or local port 8080
var PORT = process.env.PORT || 8080;

// for use with express to handle data-parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// map for server of how to respond based on user request-which page to show or data to return
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// when port is open will log listening message with which PORT
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});