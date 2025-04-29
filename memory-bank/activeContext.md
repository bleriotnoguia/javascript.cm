# activeContext.md

## Focus de travail actuel

Configuration de l'environnement de développement avec Docker pour le projet JSCM. Nous avons mis en place une architecture basée sur des conteneurs avec trois services principaux : l'application AdonisJS, la base de données MySQL et un service dédié pour les migrations.

## Changements récents

- Création d'un Dockerfile multi-stage pour le service Node.js basé sur Node.js 20.12.2
- Configuration d'un service MySQL avec script d'initialisation
- Mise en place d'un service dédié pour les migrations de base de données
- Optimisation de l'architecture Docker pour améliorer les performances et la fiabilité
- Utilisation de l'étape de dépendances du Dockerfile pour le service de migrations

## Prochaines étapes

- Tester la configuration Docker complète
- Développer les fonctionnalités de l'application AdonisJS
- Mettre en place les modèles de données et les migrations
- Configurer l'authentification et les autorisations
- Développer les endpoints de l'API

## Décisions et considérations actives

- Utilisation de Docker pour garantir la cohérence entre les environnements
- Séparation des responsabilités entre les services
- Optimisation des images Docker pour réduire la taille et améliorer la sécurité
- Configuration des variables d'environnement pour une flexibilité maximale
- Utilisation de volumes Docker pour la persistance des données et le développement en temps réel 