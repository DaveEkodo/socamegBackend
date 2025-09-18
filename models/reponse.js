// models/reponse.js
module.exports = (sequelize, DataTypes) => {
    const Reponse = sequelize.define('Reponse', {
        id_reponse: {
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
            type: DataTypes.ENUM('en attente', 'rejeté', 'accepté'),
            defaultValue: 'en attente'
        },
        id_besoin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'besoins',
                key: 'id_besoin'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }, {
        tableName: 'reponses',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: false
    });

    // Définition des associations
    Reponse.associate = function(models) {
        Reponse.belongsTo(models.Besoin, {
            foreignKey: 'id_besoin',
            as: 'besoin'
        });
    };

    return Reponse;
};