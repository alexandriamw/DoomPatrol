"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "gloveTables",
      [
        {
          name: "Beer Bottle",
          melee: 1,
          defence: 4,
          magic: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("gloveTables", null, {});
  }
};
