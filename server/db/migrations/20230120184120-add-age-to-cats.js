'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Cats', 'age', Sequelize.INTEGER);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Cats', 'age');
  }
};
