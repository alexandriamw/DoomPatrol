// "use strict";
module.exports = (sequelize, DataTypes) => {
  const AccountName = sequelize.define(
    "AccountName",
    {
      accountName: DataTypes.STRING
    },
    {}
  );
  AccountName.associate = function(models) {
    // associations can be defined here
  };
  return AccountName;
};
