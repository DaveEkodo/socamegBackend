// models/participation.js
module.exports = (sequelize, DataTypes) => {
    const Participation = sequelize.define('Participation', {
        id_participation: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        statut: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        id_evenement: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'evenements',
                key: 'id_evenement'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
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
        tableName: 'participations',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: false
    });

    // Définition des associations
    Participation.associate = function(models) {
        // Une Participation appartient à un Évènement
        Participation.belongsTo(models.Evenement, {
            foreignKey: 'id_evenement',
            as: 'evenement'
        });
        
        // Une Participation appartient à un Utilisateur
        Participation.belongsTo(models.Utilisateur, {
            foreignKey: 'id_utilisateur',
            as: 'utilisateur'
        });
    };

    return Participation;
};