'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('abonnements', {
      id_abonnement: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tarif: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      statut: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      date_debut: {
        type: Sequelize.DATE,
        allowNull: true
      },
      date_fin: {
        type: Sequelize.DATE,
        allowNull: true
      },
      id_utilisateur: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'utilisateurs',
          key: 'id_utilisateur'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      date_creation: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      date_derniere_modification: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('abonnements');
  }
};
