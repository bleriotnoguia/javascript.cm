#!/bin/bash

# Attendre que MySQL soit prêt
until mysql -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "SELECT 1"; do
  echo "Waiting for MySQL to be ready..."
  sleep 2
done

# Créer la base de données si elle n'existe pas
mysql -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "CREATE DATABASE IF NOT EXISTS $MYSQL_DATABASE;"

echo "Database initialization completed!" 