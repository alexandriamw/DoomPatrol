module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('weapon-tables', [{
        Name: 'Spatula',
        Melee: 5,
        defence:2,
        magic:1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    //{} for each new item
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('weapon-tables', null, {});
  }
};
