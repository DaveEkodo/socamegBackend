// models/evenement.js
module.exports = (sequelize, DataTypes) => {
    const Evenement = sequelize.define('Evenement', {
        id_evenement: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        url_image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date_debut: {
            type: DataTypes.DATE,
            allowNull: true
        },
        date_fin: {
            type: DataTypes.DATE,
            allowNull: true
        },
        statut: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'evenements',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: 'date_derniere_modification'
    });

    // Définition des associations
    Evenement.associate = function(models) {
        // Un Évènement peut avoir plusieurs Participations
        Evenement.hasMany(models.Participation, {
            foreignKey: 'id_evenement',
            as: 'participations'
        });
    };

    return Evenement;
};