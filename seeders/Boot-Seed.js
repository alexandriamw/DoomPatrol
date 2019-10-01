"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "bootTables",
      [
        {
          name: "Socks and Sandals",
          melee: 2,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bootTables", null, {});
  }
};
