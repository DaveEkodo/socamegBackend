'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('supports', {
      id_support: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      objet: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contenu: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      date_envoi: {
        type: Sequelize.DATE,
        allowNull: true
      },
      date_creation: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('supports');
  }
};
