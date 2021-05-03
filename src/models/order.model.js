const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("Order", {
    orderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderDate: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    shippingDate: {
      type: DataTypes.DATE,
    },
    orderAmount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    orderStatus: {
      type: DataTypes.ENUM,
      values: ["pending", "shipped", "delivered", "canceled"],
      defaultValue: "pending",
    },
  });
};
