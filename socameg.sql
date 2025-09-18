-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 18 sep. 2025 à 14:01
-- Version du serveur : 8.0.30
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `socameg`
--

-- --------------------------------------------------------

--
-- Structure de la table `abonnements`
--

CREATE TABLE `abonnements` (
  `id_abonnement` int NOT NULL,
  `tarif` decimal(10,2) DEFAULT NULL,
  `statut` tinyint(1) DEFAULT '1',
  `date_debut` datetime DEFAULT NULL,
  `date_fin` datetime DEFAULT NULL,
  `id_utilisateur` int NOT NULL,
  `date_creation` datetime NOT NULL,
  `date_derniere_modification` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `abonnements`
--

INSERT INTO `abonnements` (`id_abonnement`, `tarif`, `statut`, `date_debut`, `date_fin`, `id_utilisateur`, `date_creation`, `date_derniere_modification`) VALUES
(1, 50000.00, 1, '2025-09-01 00:00:00', '2026-09-01 00:00:00', 1, '2025-09-18 12:55:09', '2025-09-18 12:55:09');

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id_article` int NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `contenu` text,
  `url_image` varchar(255) DEFAULT NULL,
  `id_utilisateur` int NOT NULL,
  `statut` tinyint(1) DEFAULT '1',
  `date_creation` datetime NOT NULL,
  `date_publication` datetime DEFAULT NULL,
  `date_derniere_modification` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id_article`, `titre`, `contenu`, `url_image`, `id_utilisateur`, `statut`, `date_creation`, `date_publication`, `date_derniere_modification`) VALUES
(1, 'Les bienfaits de la méditation pour les professionnels de santé', 'De nombreuses études ont montré que la méditation peut réduire le stress, améliorer la concentration et favoriser le bien-être général, des aspects cruciaux pour les médecins et autres professionnels de la santé. Cet article explore des techniques simples et pratiques...', NULL, 1, 1, '2025-09-18 12:58:52', '2025-09-18 14:30:00', '2025-09-18 12:58:52');

-- --------------------------------------------------------

--
-- Structure de la table `besoins`
--

CREATE TABLE `besoins` (
  `id_besoin` int NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `contenu` text,
  `date_creation` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `besoins`
--

INSERT INTO `besoins` (`id_besoin`, `titre`, `contenu`, `date_creation`) VALUES
(1, 'Besoin d\'un psychologue spécialisé en burn-out', 'Je recherche un psychologue ou un thérapeute expert dans la prise en charge des professionnels de santé souffrant d\'épuisement professionnel. La prise de rendez-vous en ligne serait un plus. Merci d\'avance.', '2025-09-18 13:01:33');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `id_commentaire` int NOT NULL,
  `contenu` text,
  `statut` tinyint(1) DEFAULT '1',
  `id_utilisateur` int NOT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`id_commentaire`, `contenu`, `statut`, `id_utilisateur`, `date_creation`) VALUES
(1, 'Ceci est un excellent article ! Je suis tout à fait d\'accord avec les points soulevés sur l\'importance de la méditation pour le bien-être.', 1, 1, '2025-09-18 13:05:23');

-- --------------------------------------------------------

--
-- Structure de la table `evenements`
--

CREATE TABLE `evenements` (
  `id_evenement` int NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` text,
  `url_image` varchar(255) DEFAULT NULL,
  `date_debut` datetime DEFAULT NULL,
  `date_fin` datetime DEFAULT NULL,
  `statut` tinyint(1) DEFAULT '1',
  `date_creation` datetime DEFAULT NULL,
  `date_derniere_modification` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `evenements`
--

INSERT INTO `evenements` (`id_evenement`, `titre`, `description`, `url_image`, `date_debut`, `date_fin`, `statut`, `date_creation`, `date_derniere_modification`) VALUES
(1, 'Webinaire sur les nouvelles avancées en cardiologie', 'Ce webinaire explorera les dernières innovations en cardiologie, y compris les techniques d\'imagerie avancées et les traitements non invasifs. Il sera animé par le Dr. Martin.', 'https://example.com/images/webinaire-cardio.jpg', '2025-11-05 10:00:00', '2025-11-05 12:00:00', 1, '2025-09-18 13:11:50', '2025-09-18 13:11:50');

-- --------------------------------------------------------

--
-- Structure de la table `likes`
--

CREATE TABLE `likes` (
  `id_like` int NOT NULL,
  `id_article` int NOT NULL,
  `id_utilisateur` int NOT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `likes`
--

INSERT INTO `likes` (`id_like`, `id_article`, `id_utilisateur`, `date_creation`) VALUES
(1, 1, 1, '2025-09-18 13:16:39');

-- --------------------------------------------------------

--
-- Structure de la table `paiements`
--

CREATE TABLE `paiements` (
  `id_paiement` int NOT NULL,
  `date_transfert` datetime DEFAULT NULL,
  `heure` time DEFAULT NULL,
  `id_utilisateur` int NOT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `paiements`
--

INSERT INTO `paiements` (`id_paiement`, `date_transfert`, `heure`, `id_utilisateur`, `date_creation`) VALUES
(1, '2025-09-18 00:00:00', '14:30:00', 1, '2025-09-18 13:18:36');

-- --------------------------------------------------------

--
-- Structure de la table `participations`
--

CREATE TABLE `participations` (
  `id_participation` int NOT NULL,
  `statut` tinyint(1) DEFAULT '1',
  `id_evenement` int NOT NULL,
  `id_utilisateur` int NOT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `participations`
--

INSERT INTO `participations` (`id_participation`, `statut`, `id_evenement`, `id_utilisateur`, `date_creation`) VALUES
(1, 1, 1, 1, '2025-09-18 13:22:40');

-- --------------------------------------------------------

--
-- Structure de la table `reponses`
--

CREATE TABLE `reponses` (
  `id_reponse` int NOT NULL,
  `contenu` text NOT NULL,
  `statut` enum('en attente','rejeté','accepté') DEFAULT 'en attente',
  `id_besoin` int NOT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `reponses`
--

INSERT INTO `reponses` (`id_reponse`, `contenu`, `statut`, `id_besoin`, `date_creation`) VALUES
(1, 'Bonjour, je suis un psychologue spécialisé dans le traitement du burn-out chez les professionnels de la santé. Je suis disponible pour des consultations en ligne. N\'hésitez pas à me contacter pour plus de détails.', 'en attente', 1, '2025-09-18 13:25:57');

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20250827220152-create-utilisateurs.js'),
('20250827221138-create-abonnements.js'),
('20250827221140-create-besoins.js'),
('20250827221143-create-commentaires.js'),
('20250827221145-create-evenements.js'),
('20250827221146-create-articles.js'),
('20250827221148-create-likes.js'),
('20250827221749-create-paiements.js'),
('20250827221751-create-participations.js'),
('20250827221753-create-reponses.js'),
('20250827221756-create-supports.js'),
('20250827221758-create-vues.js');

-- --------------------------------------------------------

--
-- Structure de la table `supports`
--

CREATE TABLE `supports` (
  `id_support` int NOT NULL,
  `objet` varchar(255) NOT NULL,
  `contenu` text NOT NULL,
  `date_envoi` datetime DEFAULT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `supports`
--

INSERT INTO `supports` (`id_support`, `objet`, `contenu`, `date_envoi`, `date_creation`) VALUES
(1, 'Problème de connexion au compte', 'Bonjour, je n\'arrive plus à me connecter à mon compte. J\'ai essayé de réinitialiser mon mot de passe, mais je ne reçois pas l\'e-mail. Pourriez-vous m\'aider ? Merci.', '2025-09-18 14:45:00', '2025-09-18 13:29:20');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id_utilisateur` int NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `lieu_naissance` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `lieu_residence` varchar(255) DEFAULT NULL,
  `lieu_exercice` varchar(255) DEFAULT NULL,
  `annee_exercice` int DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pays_obtention` varchar(255) DEFAULT NULL,
  `annee_obtention` int DEFAULT NULL,
  `faculte` varchar(255) DEFAULT NULL,
  `numero_ordre` varchar(255) DEFAULT NULL,
  `en_cours` tinyint(1) DEFAULT '1',
  `condamnation_penale` tinyint(1) DEFAULT '0',
  `motif_condamnation` text,
  `motivation` text,
  `derniere_connexion` datetime DEFAULT NULL,
  `statut` tinyint(1) DEFAULT '1',
  `date_creation` datetime NOT NULL,
  `date_derniere_modification` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id_utilisateur`, `nom`, `prenom`, `date_naissance`, `lieu_naissance`, `photo`, `telephone`, `role`, `sexe`, `lieu_residence`, `lieu_exercice`, `annee_exercice`, `email`, `password`, `pays_obtention`, `annee_obtention`, `faculte`, `numero_ordre`, `en_cours`, `condamnation_penale`, `motif_condamnation`, `motivation`, `derniere_connexion`, `statut`, `date_creation`, `date_derniere_modification`) VALUES
(1, 'wouamba', 'roy', '1990-05-15', 'yaounde', '1758199947273.jpeg', '657432316', 'Medecin', 'masculin', 'Odza', 'Essos', 2023, 'wouamba@gmail.com', '$2b$10$aVs0zqRfhmxQ88..dfN7r.giW2Z5QAd5exXqJgYvk/SyuPAPBBavy', 'Cameroun', 2021, 'Cardiologue', '23', 1, 0, 'null', 'aider les autres', '2025-09-18 12:52:27', 1, '2025-09-18 12:52:27', '2025-09-18 12:52:27');

-- --------------------------------------------------------

--
-- Structure de la table `vues`
--

CREATE TABLE `vues` (
  `id_vue` int NOT NULL,
  `id_article` int NOT NULL,
  `id_utilisateur` int NOT NULL,
  `date_creation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `vues`
--

INSERT INTO `vues` (`id_vue`, `id_article`, `id_utilisateur`, `date_creation`) VALUES
(1, 1, 1, '2025-09-18 13:32:31');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `abonnements`
--
ALTER TABLE `abonnements`
  ADD PRIMARY KEY (`id_abonnement`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id_article`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Index pour la table `besoins`
--
ALTER TABLE `besoins`
  ADD PRIMARY KEY (`id_besoin`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id_commentaire`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Index pour la table `evenements`
--
ALTER TABLE `evenements`
  ADD PRIMARY KEY (`id_evenement`);

--
-- Index pour la table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id_like`),
  ADD KEY `id_article` (`id_article`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Index pour la table `paiements`
--
ALTER TABLE `paiements`
  ADD PRIMARY KEY (`id_paiement`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Index pour la table `participations`
--
ALTER TABLE `participations`
  ADD PRIMARY KEY (`id_participation`),
  ADD KEY `id_evenement` (`id_evenement`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Index pour la table `reponses`
--
ALTER TABLE `reponses`
  ADD PRIMARY KEY (`id_reponse`),
  ADD KEY `id_besoin` (`id_besoin`);

--
-- Index pour la table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `supports`
--
ALTER TABLE `supports`
  ADD PRIMARY KEY (`id_support`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id_utilisateur`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `vues`
--
ALTER TABLE `vues`
  ADD PRIMARY KEY (`id_vue`),
  ADD KEY `id_article` (`id_article`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `abonnements`
--
ALTER TABLE `abonnements`
  MODIFY `id_abonnement` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id_article` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `besoins`
--
ALTER TABLE `besoins`
  MODIFY `id_besoin` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id_commentaire` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `evenements`
--
ALTER TABLE `evenements`
  MODIFY `id_evenement` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `likes`
--
ALTER TABLE `likes`
  MODIFY `id_like` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `paiements`
--
ALTER TABLE `paiements`
  MODIFY `id_paiement` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `participations`
--
ALTER TABLE `participations`
  MODIFY `id_participation` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `reponses`
--
ALTER TABLE `reponses`
  MODIFY `id_reponse` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `supports`
--
ALTER TABLE `supports`
  MODIFY `id_support` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id_utilisateur` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `vues`
--
ALTER TABLE `vues`
  MODIFY `id_vue` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `abonnements`
--
ALTER TABLE `abonnements`
  ADD CONSTRAINT `abonnements_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD CONSTRAINT `commentaires_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`id_article`) REFERENCES `articles` (`id_article`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `paiements`
--
ALTER TABLE `paiements`
  ADD CONSTRAINT `paiements_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `participations`
--
ALTER TABLE `participations`
  ADD CONSTRAINT `participations_ibfk_1` FOREIGN KEY (`id_evenement`) REFERENCES `evenements` (`id_evenement`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `participations_ibfk_2` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `reponses`
--
ALTER TABLE `reponses`
  ADD CONSTRAINT `reponses_ibfk_1` FOREIGN KEY (`id_besoin`) REFERENCES `besoins` (`id_besoin`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `vues`
--
ALTER TABLE `vues`
  ADD CONSTRAINT `vues_ibfk_1` FOREIGN KEY (`id_article`) REFERENCES `articles` (`id_article`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vues_ibfk_2` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
