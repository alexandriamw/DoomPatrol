"use strict";
module.exports = (sequelize, DataTypes) => {
  const InventoryTable = sequelize.define(
    "InventoryTable",
    {
      itemname: DataTypes.STRING,
      ItemID: DataTypes.INTEGER,
      ItemSlot: DataTypes.STRING,
      Melee: DataTypes.INTEGER,
      Defence: DataTypes.INTEGER,
      Magic: DataTypes.INTEGER,
      OwnerID: DataTypes.INTEGER
    },
    {}
  );
  InventoryTable.associate = function(models) {
    // associations can be defined here
  };
  return InventoryTable;
};
