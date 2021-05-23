const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("Employees", {
    empId: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
    },
    empName: {
      type: DataTypes.STRING,
      allowNull: false,
    }      
  });
};