// "use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      accountName: DataTypes.STRING,
      hashedPW: DataTypes.STRING,
      wins: DataTypes.INTEGER,
      loses: DataTypes.INTEGER,
      weaponID: DataTypes.INTEGER,
      headID: DataTypes.INTEGER,
      chestID: DataTypes.INTEGER,
      pantsID: DataTypes.INTEGER,
      feetID: DataTypes.INTEGER
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    console.log(models);
  };
  return User;
};
