"use strict";
module.exports = (sequelize, DataTypes) => {
  const weaponTable = sequelize.define(
    "weaponTable",
    {
      Name: DataTypes.STRING,
      Melee: DataTypes.INTEGER,
      defence: DataTypes.INTEGER,
      magic: DataTypes.INTEGER
    },
    {}
  );
  weaponTable.associate = function(models) {
    // associations can be defined here
  };
  return weaponTable;
};
