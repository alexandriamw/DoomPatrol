"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "chestsTables",
      [
        {
          Name: "Tank Top",
          Melee: 2,
          defence: 5,
          magic: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("chestsTables", null, {});
  }
};