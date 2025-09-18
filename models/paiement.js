// models/paiement.js
module.exports = (sequelize, DataTypes) => {
    const Paiement = sequelize.define('Paiement', {
        id_paiement: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        date_transfert: {
            type: DataTypes.DATE,
            allowNull: true
        },
        heure: {
            type: DataTypes.TIME,
            allowNull: true
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
        tableName: 'paiements',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: false
    });

    // Définition des associations
    Paiement.associate = function(models) {
        Paiement.belongsTo(models.Utilisateur, {
            foreignKey: 'id_utilisateur',
            as: 'utilisateur'
        });
    };

    return Paiement;
};