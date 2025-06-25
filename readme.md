🚀 Static Web App – Dockerized with Apache

static web application served using Apache HTTP Server in Docker.
---

## 📦 Project Structure

```
.

├── script/
│   ├── script_css/
│   │   └── style.css
│   └── script_js/
│       └── script.js
├── dockerfile
├── index.html
└── docker-compose.yml
```

---


Download the `docker-compose.yml` file directly from the repository:
[Download docker-compose.yml](https://github.com/HamiciYoucef/web-app-cloud-project/blob/main/docker-compose.yaml)

```
cd \path\to\docker-compose-file
docker pull splinter168/cloud-project
docker compose up -d
```

Then open: [http://localhost](http://localhost)

---

---

## 🛑 Stop the Container

```
cd \path\to\docker-compose\
docker compose down
```

Or

```
docker ps
docker stop <container_id>
```

---

## 📁 Notes

- `.htaccess` is used to avoid 404 errors when typing wrong URL.

---

## 📝 Additional Information

- For troubleshooting, check container logs with:

  ```
  docker logs <container_id>
  ```

- You can delete built images and build your own image using:

```
docker images
docker rmi <image_id>
```

GitHub :

# 1. Initialiser le dépôt Git :
git init

# 2. Lier ton dépôt local au dépôt GitHub :
git remote add origin https://github.com/HamiciYoucef/web-app-cloud-project.git

# 3. Ajouter tous les fichiers à l’index :
git add .

# 4. Valider les fichiers avec un message de commit :
git commit -m "Premier commit"

# 5. Renommer la branche principale en 'main':
git branch -M main

# 6. Pousser vers GitHub pour la première fois :
git push -u origin main

# 7. Pour push une autre fois :
git add .
git commit -m "Ton message de commit"
git push

Docker :

# 1. Cloner le projet
git clone https://github.com/splinter168/cloud-project.git
cd cloud-project

# 2. Construire l’image
docker build -t splinter168/cloud-project .

# 3. Se connecter à Docker Hub
docker login

# 4. Taguer l’image
docker tag cloud-project splinter168/cloud-project

# 5. Pousser vers Docker Hub
docker push splinter168/cloud-project

# 6. Tirer l’image ailleurs (autre machine)
docker pull splinter168/cloud-project

# 7. Lancer un conteneur depuis cette image
docker run -d -p 8080:80 splinter168/cloud-project