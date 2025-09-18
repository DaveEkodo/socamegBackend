// models/support.js
module.exports = (sequelize, DataTypes) => {
    const Support = sequelize.define('Support', {
        id_support: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        objet: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contenu: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        date_envoi: {
            type: DataTypes.DATE,
            allowNull: true
        }
        
    }, {
        tableName: 'supports',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: false
    });


    return Support;
};