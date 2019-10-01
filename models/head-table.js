"use strict";
module.exports = (sequelize, DataTypes) => {
  const headTable = sequelize.define(
    "headTable",
    {
      Name: DataTypes.STRING,
      Melee: DataTypes.INTEGER,
      defence: DataTypes.INTEGER,
      magic: DataTypes.INTEGER
    },
    {}
  );
  headTable.associate = function(models) {
    // associations can be defined here
  };
  return headTable;
};
