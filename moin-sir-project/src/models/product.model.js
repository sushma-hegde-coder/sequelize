const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("Product", {
    productId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    productImage: {
      type: DataTypes.STRING,
    },
    productSalePrice: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    productStock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
  });
};
