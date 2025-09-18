'use strict';
module.exports = {
  /** @type {import('sequelize-cli').Migration} */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('commentaires', {
      id_commentaire: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      contenu: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      statut: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    await queryInterface.dropTable('commentaires');
  }
};
