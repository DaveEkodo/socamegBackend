// models/utilisateur.js
module.exports = (sequelize, DataTypes) => {
    const Utilisateur = sequelize.define('Utilisateur', {
        id_utilisateur: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        date_naissance: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        lieu_naissance: {
            type: DataTypes.STRING,
            allowNull: true
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        sexe: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        lieu_residence: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lieu_exercice: {
            type: DataTypes.STRING,
            allowNull: true
        },
        annee_exercice: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        pays_obtention: {
            type: DataTypes.STRING,
            allowNull: true
        },
        annee_obtention: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        faculte: {
            type: DataTypes.STRING,
            allowNull: true
        },
        numero_ordre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        en_cours: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        condamnation_penale: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        motif_condamnation: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        motivation: {
            type: DataTypes.TEXT(500), // Pour 500 caractères max
            allowNull: true
        },
        derniere_connexion: {
            type: DataTypes.DATE,
            allowNull: true
        },
        statut: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
        
    }, {
        tableName: 'utilisateurs',
        timestamps: true,
        createdAt: 'date_creation',
        updatedAt: 'date_derniere_modification'
    });

    // DÉFINITION DES ASSOCIATIONS
    Utilisateur.associate = function(models) {
        // Un Utilisateur peut avoir plusieurs Participations
        Utilisateur.hasMany(models.Participation, {
            foreignKey: 'id_utilisateur',
            as: 'participations'
        });
        
        // Un Utilisateur peut avoir plusieurs Articles (si vous avez ce modèle)
        Utilisateur.hasMany(models.Article, {
            foreignKey: 'id_utilisateur',
            as: 'articles'
        });
        
        // Un Utilisateur peut avoir plusieurs Commentaires (si vous avez ce modèle)
        Utilisateur.hasMany(models.Commentaire, {
            foreignKey: 'id_utilisateur',
            as: 'commentaires'
        });
        
        // Un Utilisateur peut avoir un Abonnement (si vous avez ce modèle)
        Utilisateur.hasMany(models.Abonnement, {
            foreignKey: 'id_utilisateur',
            as: 'abonnements'
        });
        
        // Un Utilisateur peut avoir plusieurs Likes (si vous avez ce modèle)
        Utilisateur.hasMany(models.Like, {
            foreignKey: 'id_utilisateur',
            as: 'likes'
        });
        
        // Un Utilisateur peut avoir plusieurs Vues (si vous avez ce modèle)
        Utilisateur.hasMany(models.Vue, {
            foreignKey: 'id_utilisateur',
            as: 'vues'
        });
        
        // Un Utilisateur peut avoir plusieurs Paiements (si vous avez ce modèle)
        Utilisateur.hasMany(models.Paiement, {
            foreignKey: 'id_utilisateur',
            as: 'paiements'
        });

    };

    return Utilisateur;
};