module.exports = function(sequelize, DataTypes) {
  var ExerciseList = sequelize.define("ExerciseList", {
    title: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    body_part: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    equipment: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  });

  return ExerciseList;

};
