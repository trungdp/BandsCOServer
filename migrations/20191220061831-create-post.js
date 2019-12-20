'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      postedby: {
        type: Sequelize.INTEGER
      },
      members: {
        type: Sequelize.STRING
      },
      musicals: {
        type: Sequelize.TEXT
      },
      require: {
        type: Sequelize.TEXT
      },
      aspiration: {
        type: Sequelize.TEXT
      },
      freetime: {
        type: Sequelize.STRING
      },
      device: {
        type: Sequelize.TEXT
      },
      exbands: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};