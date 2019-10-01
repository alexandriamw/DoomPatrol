'use strict';
module.exports = (sequelize, DataTypes) => {
  const boot - table = sequelize.define('boot-table', {
    Name: DataTypes.STRING,
    Melee: DataTypes.INTEGER,
    defence: DataTypes.INTEGER,
    magic: DataTypes.INTEGER
  }, {});
  boot - table.associate = function(models) {
    // associations can be defined here
  };
  return boot - table;
};