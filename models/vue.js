// models/vue.js
module.exports = (sequelize, DataTypes) => {
    const Vue = sequelize.define('Vue', {
        id_vue: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_article: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'articles',
                key: 'id_article'
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
        tableName: 'vues',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: false
    });

    // Définition des associations
    Vue.associate = function(models) {
        Vue.belongsTo(models.Article, {
            foreignKey: 'id_article',
            as: 'article'
        });
        
        Vue.belongsTo(models.Utilisateur, {
            foreignKey: 'id_utilisateur',
            as: 'utilisateur'
        });
    };

    return Vue;
};