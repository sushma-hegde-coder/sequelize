const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("Listeners", {
    listenerName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    listenerPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
