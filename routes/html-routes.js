// *********************************************************************************
// html-routes.js - this file sets up routes to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // create exercise route loads create.html
  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  // exercise route loads exercise.html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });


  // login route loads login.html
  app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // log route log.html
  app.get('/log', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/log.html"));
  });

  // route to summary.html
  app.get("/summary", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/summary.html"));
  });

};
