const { DataTypes } = require("sequelize");
const { employee } = require("./employee.model");

module.exports = function (sequelize) {
  const model = sequelize.define("Departments", {
    deptId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    deptName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // empId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "employee",
    //     key: "empId",
    //   },
    //   onDelete: "CASCADE",
    // },
  });
  return model;
};
