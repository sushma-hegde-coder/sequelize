// DB SETUP
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
});

async function testDBConnectivity() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
// testDBConnectivity();

// configuring the database object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// configure the models (tables)
db.product = require("./product.model")(sequelize);
db.order = require("./order.model")(sequelize);
db.orderDetail = require("./order-details.model")(sequelize);
db.user = require("./user.model")(sequelize);

// db.orderDetail.belongsTo(db.product, { foreignKey: "productId" });
// db.orderDetail.belongsTo(db.order, { foreignKey: "orderId" });
// db.order.hasMany(db.orderDetail, { foreignKey: "orderId" });
db.order.belongsTo(db.user, { foreignKey: "userId" }); // relationship

module.exports = db;
