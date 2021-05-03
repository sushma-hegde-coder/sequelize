//this is database configuration file
//db setup
const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: "mysql",//mysql 2 is a driver 
});

async function testDbConnectivity(){
  try{
      await sequelize.authenticate();
      console.log("connection has been established successfully ")
  }
  catch (error){
      console.log("unable to connect to database:", error);
  }
}

//testDbConnectivity();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.employee = require("./employee.model")(sequelize);
db.department = require("./department.model")(sequelize);

//console.log(`employee ${db.employee},department ${db.deparment}`);

db.department.belongsTo(db.employee, { foreignKey: 'empId' });
//db.department.hasMany(db.employee, { foreignKey: 'empId' });

//console.log("db",db);

module.exports = db;