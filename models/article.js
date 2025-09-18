// models/article.js
module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        id_article: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contenu: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        url_image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date_publication: {
            type: DataTypes.DATE,
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
        tableName: 'articles',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: 'date_derniere_modification'
    });

    // Définition des associations
    Article.associate = function(models) {
        Article.belongsTo(models.Utilisateur, {
            foreignKey: 'id_utilisateur',
            as: 'utilisateur'
        });
        
        Article.hasMany(models.Like, {
            foreignKey: 'id_article',
            as: 'likes'
        });
        
        Article.hasMany(models.Vue, {
            foreignKey: 'id_article',
            as: 'vues'
        });
    };

    return Article;
};