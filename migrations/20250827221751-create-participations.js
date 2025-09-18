'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('participations', {
      id_participation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      statut: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      id_evenement: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'evenements',
          key: 'id_evenement'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('participations');
  }
};
