// "use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      accountName: DataTypes.STRING,
      hashedPW: DataTypes.STRING
      // wins: DataTypes.INTEGER,
      // loses: DataTypes.INTEGER,
      // weaponID: DataTypes.INTEGER,
      // headID: DataTypes.INTEGER,
      // chestID: DataTypes.INTEGER,
      // pantsID: DataTypes.INTEGER,
      // feetID: DataTypes.INTEGER
    },
    {}
  );

  Users.associate = function(models) {
    // associations can be defined here
    models.Users.belongsTo(models.HashedPW);
    console.log("\n\n\n" + models.HashedPW + "\n\n\n");
  };
  return Users;
};
