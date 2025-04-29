# techContext.md

## Technologies utilisées

- **Framework Backend**: AdonisJS (Node.js)
- **Base de données**: MySQL 8.0
- **Conteneurisation**: Docker et Docker Compose
- **Node.js**: Version 20.12.2 (pour la production)

## Configuration du développement

Le projet utilise Docker pour l'environnement de développement avec trois services principaux :

1. **Service App**: Conteneur Node.js qui exécute l'application AdonisJS
   - Utilise un Dockerfile multi-stage optimisé pour la production
   - Expose le port 3333 pour l'API
   - Montage des volumes pour le développement en temps réel

2. **Service MySQL**: Base de données MySQL 8.0
   - Configuration via variables d'environnement
   - Persistance des données via volume Docker
   - Script d'initialisation pour créer la base de données

3. **Service Migrations**: Service dédié pour exécuter les migrations AdonisJS
   - Utilise l'étape de dépendances du Dockerfile Node.js
   - S'exécute après le démarrage de MySQL
   - Exécute les migrations de la base de données

## Contraintes techniques

- Node.js 20.6+ requis pour AdonisJS
- MySQL 8.0 pour la base de données
- Variables d'environnement configurées dans le fichier .env

## Dépendances

- **AdonisJS**: Framework Node.js pour l'API
- **MySQL**: Base de données relationnelle
- **Docker**: Pour la conteneurisation
- **Docker Compose**: Pour l'orchestration des conteneurs 