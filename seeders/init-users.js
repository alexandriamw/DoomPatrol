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
          weaponID: 1,
          headID: 1,
          chestID: 1,
          pantsID: 1,
          feetID: 1,
          email: "wwwwwwww@yahooo.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          accountName: "Another Account",
          hashedPW: null,
          wins: 30,
          loses: 70,
          weaponID: 1,
          headID: 1,
          chestID: 1,
          pantsID: 1,
          feetID: 1,
          email: "wwwwwwww@yahooo.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          accountName: "Account Three",
          hashedPW: null,
          wins: 1,
          loses: 3000,
          weaponID: 1,
          headID: 1,
          chestID: 1,
          pantsID: 1,
          feetID: 1,
          email: "wwwwwwww@yahooo.com",
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
