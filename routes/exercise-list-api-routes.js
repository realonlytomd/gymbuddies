// Dependencies
// =============================================================

// Requiring the models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the exercises
  app.get("/api/exercise-list/:bodyPart", function(req, res) {
    db.ExerciseList.findAll({
      where: {body_part: req.params.bodyPart},
    }).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });

};