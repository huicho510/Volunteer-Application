module.exports = function(sequelize, DataTypes) {
  const Event = sequelize.define("events", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timeFrame: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postedDate: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Event;
};
