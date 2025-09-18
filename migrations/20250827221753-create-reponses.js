'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reponses', {
      id_reponse: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      contenu: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      statut: {
        type: Sequelize.ENUM('en attente', 'rejeté', 'accepté'),
        defaultValue: 'en attente'
      },
      id_besoin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'besoins',
          key: 'id_besoin'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      date_creation: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reponses');
  }
};
