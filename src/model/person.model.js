const { DataTypes } = require("sequelize");

module.exports = function(sequelize){
    return sequelize.define("People", {
        personName: {
          type: DataTypes.CHAR,  
          defaultValue: DataTypes.UUIDV4,         
          primaryKey: true,
          allowNull: false,                      
        },
    });
};