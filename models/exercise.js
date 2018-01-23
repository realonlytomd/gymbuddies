module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    body_part: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1,200]
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  Exercise.associate = function(models) {
    // We're saying that a Exercise should belong to a User
    // An Exercise can't be created without a User due to the foreign key constraint
    Exercise.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Exercise;
};
