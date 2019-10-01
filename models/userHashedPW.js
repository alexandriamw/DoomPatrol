// "use strict";
module.exports = (sequelize, DataTypes) => {
  const HashedPW = sequelize.define(
    "HashedPW",
    {
      hashedPW: DataTypes.STRING
    },
    {}
  );

  HashedPW.associate = function(models) {
    // associations can be defined here
    models.HashedPW.hasMany(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return HashedPW;
};
