"use strict";
module.exports = (sequelize, DataTypes) => {
  const gloveTable = sequelize.define(
    "gloveTable",
    {
      name: DataTypes.STRING,
      melee: DataTypes.INTEGER,
      defence: DataTypes.INTEGER,
      magic: DataTypes.INTEGER
    },
    {}
  );
  gloveTable.associate = function(models) {
    // associations can be defined here
  };
  return gloveTable;
};
