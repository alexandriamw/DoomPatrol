'use strict';
module.exports = (sequelize, DataTypes) => {
  const head - table = sequelize.define('head-table', {
    Name: DataTypes.STRING,
    Melee: DataTypes.INTEGER,
    defence: DataTypes.INTEGER,
    magic: DataTypes.INTEGER
  }, {});
  head - table.associate = function(models) {
    // associations can be defined here
  };
  return head - table;
};