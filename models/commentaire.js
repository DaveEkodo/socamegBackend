// models/commentaire.js
module.exports = (sequelize, DataTypes) => {
    const Commentaire = sequelize.define('Commentaire', {
        id_commentaire: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        contenu: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        statut: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        id_utilisateur: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'utilisateurs',
                key: 'id_utilisateur'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }, {
        tableName: 'commentaires',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: false
    });

    // Définition des associations
    Commentaire.associate = function(models) {
        Commentaire.belongsTo(models.Utilisateur, {
            foreignKey: 'id_utilisateur',
            as: 'utilisateur'
        });
    };

    return Commentaire;
};