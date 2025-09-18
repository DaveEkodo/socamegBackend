// models/like.js
module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        id_like: {
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
        tableName: 'likes',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: false
    });

    // Définition des associations
    Like.associate = function(models) {
        Like.belongsTo(models.Article, {
            foreignKey: 'id_article',
            as: 'article'
        });
        
        Like.belongsTo(models.Utilisateur, {
            foreignKey: 'id_utilisateur',
            as: 'utilisateur'
        });
    };

    return Like;
};