"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "weaponTables",
      [
        {
          Name: "Spatula",
          Melee: 5,
          defence: 2,
          magic: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Tongs",
          Melee: 2,
          defence: 8,
          magic: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Beer Can",
          Melee: 8,
          defence: 8,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Lawn Mower",
          Melee: 5,
          defence: 4,
          magic: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Not Mad, Just Disappointed",
          Melee: 10,
          defence: 10,
          magic: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Dad Humor",
          Melee: -2,
          defence: 0,
          magic: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "The Thermostat",
          Melee: 9,
          defence: 2,
          magic: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Braided Belt",
          Melee: 9,
          defence: 2,
          magic: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Clip On Phone",
          Melee: 2,
          defence: 11,
          magic: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Car He Loves More Than You",
          Melee: 10,
          defence: 9,
          magic: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Pool Cue",
          Melee: 7,
          defence: 7,
          magic: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Favorite Mug",
          Melee: 9,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "The Worst Gatorade Flavor",
          Melee: 8,
          defence: 4,
          magic: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Fishing Pole",
          Melee: 2,
          defence: 8,
          magic: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Webber Grill",
          Melee: 6,
          defence: 10,
          magic: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Cast Iron",
          Melee: 10,
          defence: 1,
          magic: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "FootBall",
          Melee: 4,
          defence: 4,
          magic: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Baseball",
          Melee: 6,
          defence: 6,
          magic: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Hockey Stick",
          Melee: 8,
          defence: 8,
          magic: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Monkey Wrench",
          Melee: 10,
          defence: 0,
          magic: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Crow Bar",
          Melee: 5,
          defence: 3,
          magic: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Fiscal Conservatism",
          Melee: 4,
          defence: 10,
          magic: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Old Man Watch",
          Melee: 3,
          defence: 3,
          magic: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "SI From 2004",
          Melee: 11,
          defence: 2,
          magic: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Cribbage Board",
          Melee: 5,
          defence: 7,
          magic: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "The Remote",
          Melee: 5,
          defence: 2,
          magic: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Too Many Keys",
          Melee: 3,
          defence: 8,
          magic: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Recliner",
          Melee: 0,
          defence: 6,
          magic: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Antiquated Advice",
          Melee: 3,
          defence: 4,
          magic: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Oil Change Punch Card",
          Melee: 6,
          defence: 7,
          magic: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "BlockBuster Card",
          Melee: 2,
          defence: 1,
          magic: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Busch Latte",
          Melee: 12,
          defence: 12,
          magic: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Golden Retriever",
          Melee: 5,
          defence: 2,
          magic: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Oversized Text",
          Melee: 2,
          defence: 7,
          magic: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Name: "Fishing Lure",
          Melee: 8,
          defence: 9,
          magic: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("weaponTables", null, {});
  }
};
