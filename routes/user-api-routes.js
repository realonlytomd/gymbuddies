var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // Here, an "include" property to the options in the findAll query
    // Set the value to an array of the models to be included in a left outer join
    // In this case, just db.Exercise
    db.User.findAll({
      include: [db.Exercise]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:email", function(req, res) {
    // add an "include" property to the options in the findOne query
    // Set the value to an array of the models to be included in a left outer join
    // In this case, just db.Exercise
    db.User.findOne({
      where: {
        email: req.params.email
      },
      include: [db.Exercise]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {

    db.User.create({email: req.body.email}).then(function(dbUser) {
    

      res.json(dbUser);
    });
  });

  // app.delete("/api/users/:id", function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

};
