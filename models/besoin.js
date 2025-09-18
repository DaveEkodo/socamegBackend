// models/besoin.js
module.exports = (sequelize, DataTypes) => {
    const Besoin = sequelize.define('Besoin', {
        id_besoin: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contenu: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'besoins',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: false
    });

    // Définition des associations
    Besoin.associate = function(models) {
        Besoin.hasMany(models.Reponse, {
            foreignKey: 'id_besoin',
            as: 'reponses'
        });
    };

    return Besoin;
};