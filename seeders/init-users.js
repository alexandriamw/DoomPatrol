"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          accountName: "JohnsAccount",
          hashedPW: null,
          wins: 100,
          loses: 2,
          weaponID: null,
          headID: null,
          chestID: null,
          pantsID: null,
          feetID: null,
          gold: 250,
          emeralds: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          accountName: "Another Account",
          hashedPW: null,
          wins: 30,
          loses: 70,
          weaponID: null,
          headID: null,
          chestID: null,
          pantsID: null,
          feetID: null,
          gold: 250,
          emeralds: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          accountName: "Account Three",
          hashedPW: null,
          wins: 1,
          loses: 3000,
          weaponID: null,
          headID: null,
          chestID: null,
          pantsID: null,
          feetID: null,
          gold: 250,
          emeralds: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
