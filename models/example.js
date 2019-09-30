module.exports = function(sequelize, DataTypes) {
  var Equipment = sequelize.define("Equipment", {
    slot: DataTypes.STRING,
    meleeStat: DataTypes.TEXT,
    defenceStat: DataTypes.INTEGER,
    magicStat: DataTypes.INTEGER,
  });
  return Equipment;
};
