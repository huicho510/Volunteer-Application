module.exports = function(sequelize, DataTypes) {
  const Organization = sequelize.define("Organization", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    catagory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Organization;
};
