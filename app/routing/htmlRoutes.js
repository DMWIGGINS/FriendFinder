// use npm path for get requests
var path = require("path");

// make function(app) accessible from other places in the program
module.exports = function (app) {

  // send user to the survey page 
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // send user to home page or default to home if request is not recognized
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};