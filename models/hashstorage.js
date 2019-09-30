'use strict';
module.exports = (sequelize, DataTypes) => {
  const hashstorage = sequelize.define('hashstorage', {
    hashedpw: DataTypes.STRING
  }, {});
  hashstorage.associate = function(models) {
    // associations can be defined here
  };
  return hashstorage;
};