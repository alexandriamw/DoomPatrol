"use strict";
module.exports = (sequelize, DataTypes) => {
  const chestsTable = sequelize.define(
    "chestsTable",
    {
      Name: DataTypes.STRING,
      Melee: DataTypes.INTEGER,
      defence: DataTypes.INTEGER,
      magic: DataTypes.INTEGER
    },
    {}
  );
  chestsTable.associate = function(models) {
    // associations can be defined here
  };
  return chestsTable;
};
