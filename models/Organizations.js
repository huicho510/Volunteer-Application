module.exports = function(sequelize, DataTypes) {
  const Organization = sequelize.define("organizations", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    catagory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Organization;
};
