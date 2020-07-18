module.exports = function(sequelize, DataTypes) {
  const Event = sequelize.define("event", {
    event_name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a event from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our event is between 1 and 100 characters
      validate: {
        len: [1, 100]
      }
    },
    address: {
      type: DataTypes.STRING,

      allowNull: false,

      validate: {
        len: [1, 50]
      }
    },
    city: {
      type: DataTypes.STRING,

      allowNull: false,

      validate: {
        len: [1, 50]
      }
    },
    state: {
      type: DataTypes.STRING,

      allowNull: false,

      validate: {
        len: [1, 50]
      }
    },
    zip: {
      type: DataTypes.STRING,

      allowNull: false,

      validate: {
        len: [1, 10]
      }
    },
    state: {
      type: DataTypes.STRING,

      allowNull: false,

      validate: {
        len: [1, 50]
      }
    },
    time_frame: {
      type: DataTypes.STRING,

      allowNull: false,

      validate: {
        len: [1, 20]
      }
    },
    posted_date: {
      type: DataTypes.STRING,

      allowNull: false,

      validate: {
        len: [1, 20]
      }
    }
  });
  return Event;
};
