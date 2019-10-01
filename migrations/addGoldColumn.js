"use strict";
module.exports = {
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn("users", "gold", Sequelize.integer);
  },

  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
    console.log("\n\n\n Whats happening here? does it reach here?");
    return queryInterface.removeColumn("users", "gold");
  }
};
