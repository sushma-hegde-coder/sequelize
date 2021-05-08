const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("Recordings", {
    songName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    songType: {
      type: DataTypes.ENUM,
      values: ["hindustani classical", "pop", "bollywood"],
    },
  });
};
