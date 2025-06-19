# Utilise l'image officielle Apache HTTPD
FROM httpd:2.4

# Spécifie le répertoire de travail (non obligatoire mais clair)
WORKDIR /usr/local/apache2/htdocs/

# Copie le contenu du projet dans le dossier du serveur Apache
COPY ./ ./

# Expose le port 80 pour accéder à l'application via navigateur
EXPOSE 80

# Aucun CMD nécessaire car httpd:2.4 lance déjà Apache en foreground
