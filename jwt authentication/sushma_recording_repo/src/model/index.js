//this is database configuration file
//db setup
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql", //mysql 2 is a driver
});

async function testDbConnectivity() {
  try {
    await sequelize.authenticate();
    console.log("connection has been established successfully ");
  } catch (error) {
    console.log("unable to connect to database:", error);
  }
}

//testDbConnectivity();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.listener = require("./listener.model")(sequelize);
db.recording = require("./recording.model")(sequelize);

module.exports = db;
