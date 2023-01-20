'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await renameColumn('Games', 'numPlayers', 'maxPlayers' )
    await removeColumn('Games', 'estPlayTime')

  },

  down: async (queryInterface, Sequelize) => {

    await renameColumn('Games', 'maxPlayers', 'numPlayers' )
    await addColumn('Games', 'estPlayTime', Sequelize.INTEGER)
    

  }
};
