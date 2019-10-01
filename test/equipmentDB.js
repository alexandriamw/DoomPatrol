"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    //   return queryInterface.bulkInsert(
    //     "Equipment",
    //     [
    //       {
    //         itemName: "Beer Helmet",
    //         itemSlot: "Helment",
    //         itemAttack: 1,
    //         itemDefence: 1,
    //         itemMagic: 3,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Hockey Stick",
    //         itemSlot: "Weapon",
    //         itemAttack: 5,
    //         itemDefence: 2,
    //         itemMagic: 1,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Golf Club",
    //         itemSlot: "Weapon",
    //         itemAttack: 7,
    //         itemDefence: 0,
    //         itemMagic: 0,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Six-Pack",
    //         itemSlot: "Weapon",
    //         itemAttack: 2,
    //         itemDefence: 2,
    //         itemMagic: 5,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Lawn Mower",
    //         itemSlot: "Weapon",
    //         itemAttack: 4,
    //         itemDefence: 0,
    //         itemMagic: 11,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Tank Top",
    //         itemSlot: "Chest",
    //         itemAttack: 9,
    //         itemDefence: 0,
    //         itemMagic: 0,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Buisness Suit",
    //         itemSlot: "Chest",
    //         itemAttack: 2,
    //         itemDefence: 3,
    //         itemMagic: 7,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Dad Shorts",
    //         itemSlot: "Pants",
    //         itemAttack: 2,
    //         itemDefence: 6,
    //         itemMagic: 2,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Carrigan",
    //         itemSlot: "Chest",
    //         itemAttack: 0,
    //         itemDefence: 2,
    //         itemMagic: 5,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Crocs",
    //         itemSlot: "Feet",
    //         itemAttack: 2,
    //         itemDefence: 9,
    //         itemMagic: 3,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Flip-Flops",
    //         itemSlot: "Feet",
    //         itemAttack: 0,
    //         itemDefence: 2,
    //         itemMagic: 9,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "New Balance",
    //         itemSlot: "Feet",
    //         itemAttack: 1,
    //         itemDefence: 7,
    //         itemMagic: 2,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Football",
    //         itemSlot: "Weapon",
    //         itemAttack: 2,
    //         itemDefence: 0,
    //         itemMagic: 9,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Golf Trousers",
    //         itemSlot: "Pants",
    //         itemAttack: 3,
    //         itemDefence: 4,
    //         itemMagic: 2,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Dad Puns",
    //         itemSlot: "Weapon",
    //         itemAttack: 0,
    //         itemDefence: 0,
    //         itemMagic: 18,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "I'm With Stupid Shirt",
    //         itemSlot: "Chest",
    //         itemAttack: 1,
    //         itemDefence: 15,
    //         itemMagic: 3,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Newspaper",
    //         itemSlot: "Weapon",
    //         itemAttack: 4,
    //         itemDefence: 10,
    //         itemMagic: 2,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Recliner",
    //         itemSlot: "Weapon",
    //         itemAttack: 0,
    //         itemDefence: 12,
    //         itemMagic: 4,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Weed Wacker",
    //         itemSlot: "Weapon",
    //         itemAttack: 7,
    //         itemDefence: 2,
    //         itemMagic: 5,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Frying Pan",
    //         itemSlot: "Weapon",
    //         itemAttack: 6,
    //         itemDefence: 2,
    //         itemMagic: 3,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Pressure washer",
    //         itemSlot: "Weapon",
    //         itemAttack: 2,
    //         itemDefence: 3,
    //         itemMagic: 11,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Grill Apron",
    //         itemSlot: "Chest",
    //         itemAttack: 4,
    //         itemDefence: 8,
    //         itemMagic: 12,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       },
    //       {
    //         itemName: "Spatula",
    //         itemSlot: "Weapon",
    //         itemAttack: 5,
    //         itemDefence: 2,
    //         itemMagic: 1,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //       }
    //     ],
    //     {}
    //   );
  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("Equipment", null, {});
  }
};
