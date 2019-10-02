"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("InventoryTables", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemname: {
        type: Sequelize.STRING
      },
      ItemID: {
        type: Sequelize.INTEGER
      },
      ItemSlot: {
        type: Sequelize.STRING
      },
      Melee: {
        type: Sequelize.INTEGER
      },
      Defence: {
        type: Sequelize.INTEGER
      },
      Magic: {
        type: Sequelize.INTEGER
      },
      ownerID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("InventoryTables");
  }
};
