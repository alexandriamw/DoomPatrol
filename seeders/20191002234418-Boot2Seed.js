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
        },
        {
          name: "New Balance",
          melee: 2,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Crocs",
          melee: 2,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Loafers",
          melee: 2,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Golf shoes",
          melee: 2,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Tennis Shoes",
          melee: 2,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Work Boots",
          melee: 2,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Flip Flops",
          melee: 2,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Grass Stained Shoes",
          melee: 2,
          defence: 2,
          magic: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
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
