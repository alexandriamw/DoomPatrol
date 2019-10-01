"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountName: {
        type: Sequelize.STRING
      },
      hashedPW: {
        type: Sequelize.STRING
      },
      wins: {
        type: Sequelize.INTEGER
      },
      loses: {
        type: Sequelize.INTEGER
      },
      weaponID: {
        type: Sequelize.INTEGER
      },
      headID: {
        type: Sequelize.INTEGER
      },
      chestID: {
        type: Sequelize.INTEGER
      },
      pantsID: {
        type: Sequelize.INTEGER
      },
      feetID: {
        type: Sequelize.INTEGER
      },
      gold: {
        type: Sequelize.INTEGER
      },
      emeralds: {
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
    return queryInterface.dropTable("Users");
  }
};
