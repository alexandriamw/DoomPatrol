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
  Equipment.queryInterface.bulkInsert(
    "Equipment",
    [
      {
        itemname: "Test",
        itemSlot: "test",
        itemAttack: 1,
        itemDefence: 1,
        itemMagic: 1
      }
    ],
    {}
  );
  return Equipment;
};
