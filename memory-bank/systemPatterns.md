# systemPatterns.md

## Architecture du système

Le projet utilise une architecture basée sur des conteneurs Docker avec trois services principaux :

1. **Service App**: Application AdonisJS qui expose l'API REST
2. **Service MySQL**: Base de données relationnelle pour le stockage des données
3. **Service Migrations**: Service dédié pour l'exécution des migrations de base de données

Cette architecture permet une séparation claire des responsabilités et facilite le développement et le déploiement.

## Décisions techniques clés

- **Utilisation de Docker**: Pour garantir la cohérence entre les environnements de développement et de production
- **Dockerfile multi-stage**: Pour optimiser la taille des images et améliorer la sécurité
- **Service de migrations dédié**: Pour garantir l'exécution correcte des migrations de base de données
- **Volumes Docker**: Pour la persistance des données et le développement en temps réel
- **Variables d'environnement**: Pour la configuration flexible des services

## Modèles de conception utilisés

- **Architecture en conteneurs**: Séparation des services dans des conteneurs distincts
- **Pattern Builder**: Utilisation de Dockerfiles multi-stage pour la construction des images
- **Pattern Dependency Injection**: Utilisation des variables d'environnement pour l'injection de configuration
- **Pattern Service**: Services dédiés pour des fonctionnalités spécifiques (migrations)

## Relations entre les composants

- Le service App dépend du service MySQL pour le stockage des données
- Le service Migrations dépend du service MySQL pour exécuter les migrations
- Tous les services partagent les mêmes variables d'environnement via le fichier .env
- Les volumes Docker permettent la persistance des données et le partage de code 