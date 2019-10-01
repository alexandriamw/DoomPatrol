"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "headTables",
      [
        {
          name: "Beer Hate",
          Melee: 0,
          defence: 2,
          magic: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("headTables", null, {});
  }
};
