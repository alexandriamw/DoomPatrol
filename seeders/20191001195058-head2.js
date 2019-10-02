"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "headTables",
      [
        {
          name: "Beer Hat",
          Melee: 0,
          defence: 2,
          magic: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Baseball Hat",
          Melee: 6,
          defence: 1,
          magic: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Visor",
          Melee: 10,
          defence: 1,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Man Bun",
          Melee: 0,
          defence: 1,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Fedora",
          Melee: -9,
          defence: 10,
          magic: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Viking Helm",
          Melee: 7,
          defence: 7,
          magic: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bald",
          Melee: 10,
          defence: 10,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chef Hat",
          Melee: 2,
          defence: 9,
          magic: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Helm Of Doom",
          Melee: 10,
          defence: 10,
          magic: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bear Skin Hat",
          Melee: 4,
          defence: 6,
          magic: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Straw Hat",
          Melee: 2,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Doofus Hat",
          Melee: 0,
          defence: 0,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Party Hat",
          Melee: 0,
          defence: 2,
          magic: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hard Hat",
          Melee: 0,
          defence: 10,
          magic: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ski Mask",
          Melee: 10,
          defence: 10,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Wizard Hat",
          Melee: 7,
          defence: 0,
          magic: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Shoe",
          Melee: 5,
          defence: 5,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "ZipLock Bag",
          Melee: 0,
          defence: 10,
          magic: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Male Pattern Baldness",
          Melee: 10,
          defence: -3,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoodie",
          Melee: 6,
          defence: 7,
          magic: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cowboy Hat",
          Melee: 3,
          defence: 6,
          magic: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Welding Mask",
          Melee: -2,
          defence: 10,
          magic: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Beer Goggles",
          Melee: 2,
          defence: 2,
          magic: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Black Hat",
          Melee: 6,
          defence: 7,
          magic: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Blue Hat",
          Melee: 0,
          defence: 2,
          magic: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Green Hat",
          Melee: 0,
          defence: 2,
          magic: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Red Hat",
          Melee: 15,
          defence: 4,
          magic: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Oil Stained Hat",
          Melee: 7,
          defence: 7,
          magic: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Worlds Best Dad Hat",
          Melee: 5,
          defence: 8,
          magic: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "I Love NY",
          Melee: 0,
          defence: 0,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "MAGA Hat",
          Melee: 5,
          defence: 5,
          magic: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sweat Band",
          Melee: 8,
          defence: 8,
          magic: 8,
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
