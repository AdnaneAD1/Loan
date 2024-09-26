# Utiliser une image PHP officielle avec extensions requises
FROM php:8.2-fpm

# Installer les dépendances système
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    unzip \
    git \
    curl \
    libonig-dev \
    libzip-dev \
    zip \
    libpq-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql mbstring zip exif pcntl bcmath gd

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configurer le répertoire de travail
WORKDIR /var/www

# Copier les fichiers de l'application
COPY . .

# Installer les dépendances PHP
RUN composer install --optimize-autoloader --no-dev

# Permissions pour le dossier de stockage et cache
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Exposer le port 9000 pour l'application
EXPOSE 9000

# Démarrer le serveur Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=9000"]
