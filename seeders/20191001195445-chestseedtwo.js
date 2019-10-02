"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "chestsTables",
      [
        {
          Name: "Too Small T-Shirt",
          Melee: 7,
          defence: -2,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Sweater",
          Melee: 1,
          defence: 6,
          magic: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Beer Gut",
          Melee: -2,
          defence: 9,
          magic: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "I'm With Stupid Shirt",
          Melee: 5,
          defence: 5,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Golf Shirt",
          Melee: 2,
          defence: 4,
          magic: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Grill Apron",
          Melee: 1,
          defence: 10,
          magic: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Hoodie",
          Melee: 4,
          defence: 8,
          magic: -2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Grill Plate Armor",
          Melee: 7,
          defence: 12,
          magic: -4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Polo",
          Melee: 5,
          defence: 2,
          magic: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Tuexdeo",
          Melee: 0,
          defence: 2,
          magic: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Mustard Stained Shirt",
          Melee: 4,
          defence: 2,
          magic: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Coffee Stained Shirt",
          Melee: 7,
          defence: 4,
          magic: -2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Borat Bikini",
          Melee: 10,
          defence: -7,
          magic: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
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
