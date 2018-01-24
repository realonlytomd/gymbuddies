module.exports = function(sequelize, DataTypes) {
  var ExerciseList = sequelize.define("ExerciseList", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    body_part: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    equipment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return ExerciseList;

};
