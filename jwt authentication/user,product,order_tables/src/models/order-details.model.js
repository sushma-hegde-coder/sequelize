const { DataTypes } = require("sequelize");
const Order = require("./order.model");

module.exports = function (sequelize) {
  const model = sequelize.define("OrderDetail", {
    orderId: {
      type: DataTypes.INTEGER,
    },
    productId: {
      type: DataTypes.INTEGER,
    },
    productQty: {
      type: DataTypes.INTEGER,
    },
    productValue: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    orderSequence: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
  return model;
};
