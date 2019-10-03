"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          accountName: "JohnsAccount",
          hashedPW: null,
          email: "some@email.com",
          level: 1,
          hp: 100,
          wins: 100,
          loses: 2,
          weaponID: null,
          headID: null,
          chestID: null,
          pantsID: null,
          feetID: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          accountName: "Another Account",
          hashedPW: null,
          email: "some@email.com",
          level: 1,
          hp: 100,
          wins: 30,
          loses: 70,
          weaponID: null,
          headID: null,
          chestID: null,
          pantsID: null,
          feetID: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          accountName: "Account Three",
          hashedPW: null,
          email: "some@email.com",
          level: 1,
          hp: 100,
          wins: 1,
          loses: 3000,
          weaponID: null,
          headID: null,
          chestID: null,
          pantsID: null,
          feetID: null,
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
