'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            accountid: {
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            avatar: {
                type: Sequelize.TEXT,
                defaultValue: ""
            },
            phone: {
                type: Sequelize.STRING,
                defaultValue: ""
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: ""
            },
            skill: {
                type: Sequelize.TEXT,
                defaultValue: ""
            },
            musical: {
                type: Sequelize.TEXT,
                defaultValue: ""
            },
            achievements: {
                type: Sequelize.TEXT,
                defaultValue: ""
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
        return queryInterface.dropTable('Users');
    }
};