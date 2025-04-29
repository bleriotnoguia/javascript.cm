FROM mysql:8.0

# Créer le répertoire de travail
WORKDIR /app

# Copier le script d'initialisation
COPY docker/mysql/init.sh /docker-entrypoint-initdb.d/

# Donner les permissions d'exécution au script
RUN chmod +x /docker-entrypoint-initdb.d/init.sh

# Exposer le port MySQL
EXPOSE 3306

# Commande par défaut
CMD ["mysqld"] 