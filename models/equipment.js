"use strict";
module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define(
    "Equipment",
    {
      itemName: DataTypes.STRING,
      itemSlot: DataTypes.STRING,
      itemAttack: DataTypes.INTEGER,
      itemDefence: DataTypes.INTEGER,
      itemMagic: DataTypes.INTEGER
    },
    {}
  );
  Equipment.associate = function(models) {
    // associations can be defined here
  };

  return Equipment;
};
