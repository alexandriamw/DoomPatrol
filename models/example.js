module.exports = function(sequelize, DataTypes) {
  var Equipment = sequelize.define("Equipment", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.Integer
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT
  });
  return Equipment;
};
