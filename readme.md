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
docker pull yazzyd/static-web-app
docker compose up -d image
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
