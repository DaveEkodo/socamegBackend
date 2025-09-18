// models/abonnement.js
module.exports = (sequelize, DataTypes) => {
    const Abonnement = sequelize.define('Abonnement', {
        id_abonnement: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tarif: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        statut: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        date_debut: {
            type: DataTypes.DATE,
            allowNull: true
        },
        date_fin: {
            type: DataTypes.DATE,
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
        tableName: 'abonnements',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: 'date_derniere_modification'
    });

    // Définition des associations
    Abonnement.associate = function(models) {
        Abonnement.belongsTo(models.Utilisateur, {
            foreignKey: 'id_utilisateur',
            as: 'utilisateur'
        });
    };

    return Abonnement;
};