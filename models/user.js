module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Give the User model a email of type STRING
    email: DataTypes.STRING
  });

  User.associate = function(models) {
    // Associate User with particular Exercises
    // When an User is deleted, also delete any associated Exercises
    User.hasMany(models.Exercise, {
      onDelete: "cascade"
    });
  };

  return User;
};
