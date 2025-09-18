'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('utilisateurs', {
      id_utilisateur: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: true
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull: true
      },
      date_naissance: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      lieu_naissance: {
        type: Sequelize.STRING,
        allowNull: true
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      role: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sexe: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lieu_residence: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lieu_exercice: {
        type: Sequelize.STRING,
        allowNull: true
      },
      annee_exercice: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pays_obtention: {
        type: Sequelize.STRING,
        allowNull: true
      },
      annee_obtention: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      faculte: {
        type: Sequelize.STRING,
        allowNull: true
      },
      numero_ordre: {
        type: Sequelize.STRING,
        allowNull: true
      },
      en_cours: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      condamnation_penale: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      motif_condamnation: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      motivation: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      derniere_connexion: {
        type: Sequelize.DATE,
        allowNull: true
      },
      statut: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    await queryInterface.dropTable('utilisateurs');
  }
};
