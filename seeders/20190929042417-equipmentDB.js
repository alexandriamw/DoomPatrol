"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Equipment",
      [
        {
          itemName: "Beer Helmet",
          itemSlot: "Helment",
          itemAttack: 1,
          itemDefence: 1,
          itemMagic: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          itemName: "Hockey Stick",
          itemSlot: "Weapon",
          itemAttack: 5,
          itemDefence: 2,
          itemMagic: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Equipment", null, {});
  }
};
