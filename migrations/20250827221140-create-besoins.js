'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('besoins', {
      id_besoin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      titre: {
        type: Sequelize.STRING,
        allowNull: true
      },
      contenu: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      date_creation: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('besoins');
  }
};
