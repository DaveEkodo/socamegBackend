'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('evenements', {
      id_evenement: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      titre: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      url_image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      date_debut: {
        type: Sequelize.DATE,
        allowNull: true
      },
      date_fin: {
        type: Sequelize.DATE,
        allowNull: true
      },
      statut: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      date_creation: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      date_derniere_modification: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('evenements');
  }
};
