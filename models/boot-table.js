"use strict";
module.exports = (sequelize, DataTypes) => {
  const bootTable = sequelize.define(
    "bootTable",
    {
      Name: DataTypes.STRING,
      Melee: DataTypes.INTEGER,
      defence: DataTypes.INTEGER,
      magic: DataTypes.INTEGER
    },
    {}
  );
  bootTable.associate = function(models) {
    // associations can be defined here
  };
  return bootTable;
};
