'use strict';
module.exports = (sequelize, DataTypes) => {
  const weapon - table = sequelize.define('weapon-table', {
    Name: DataTypes.STRING,
    Melee: DataTypes.INTEGER,
    defence: DataTypes.INTEGER,
    magic: DataTypes.INTEGER
  }, {});
  weapon - table.associate = function(models) {
    // associations can be defined here
  };
  return weapon - table;
};