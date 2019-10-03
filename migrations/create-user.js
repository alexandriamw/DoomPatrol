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
      email: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      hp: {
        type: Sequelize.INTEGER
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
