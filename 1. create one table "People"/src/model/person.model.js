const { DataTypes } = require("sequelize");

module.exports = function(sequelize){
    return sequelize.define("People", {
        personName: {
          type: DataTypes.TEXT,                        
        },
    });
};