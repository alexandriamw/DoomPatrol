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
        },
        {
          name: "Motorcycle Gloves",
          melee: 3,
          defence: 2,
          magic: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Plastic Gloves",
          melee: 0,
          defence: 5,
          magic: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Work Leather Gloves",
          melee: 3,
          defence: 8,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cooking Gloves",
          melee: 10,
          defence: 0,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Red Gloves",
          melee: 1,
          defence: 4,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Blue Gloves",
          melee: 0,
          defence: 1,
          magic: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Green Gloves",
          melee: 4,
          defence: 1,
          magic: 0,
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
