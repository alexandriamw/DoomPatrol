'use strict';
module.exports = (sequelize, DataTypes) => {
  const chests - table = sequelize.define('chests-table', {
    Name: DataTypes.STRING,
    Melee: DataTypes.INTEGER,
    defence: DataTypes.INTEGER,
    magic: DataTypes.INTEGER
  }, {});
  chests - table.associate = function(models) {
    // associations can be defined here
  };
  return chests - table;
};