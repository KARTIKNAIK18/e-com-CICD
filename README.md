




# 🛒 ShopEasy – DevOps Learning E-commerce App

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/status-In%20Progress-lightgrey)

**ShopEasy** is a work-in-progress e-commerce web app built mainly to explore DevOps workflows. The focus is on containerization with Kubernetes, deployment practices, and eventually setting up CI/CD.



## 🧰 Tech Stack

### 🖥️ Frontend

![React](https://img.icons8.com/color/48/000000/react-native.png) React.js  
CSS Modules for styling  

### 🔙 Backend

![Node](https://img.icons8.com/color/48/nodejs.png) Node.js + Express  
![MongoDB](https://img.icons8.com/color/48/mongodb.png) MongoDB via Mongoose  

### 🔐 Authentication

JWT – Token-based user authentication  
bcrypt – Secure password hashing


---

## ⚙️ DevOps Progress

- ✅ Kubernetes manifests created (frontend + backend)
- ✅ Ingress configured for routing
- 🛠️ CI/CD setup (coming next)
- 🧪 Monitoring & Logging (planned for later)

---

## ✨ Basic Features (So Far)

- Signup / Login (JWT auth)
- Add to Cart / View Cart
- Wishlist (early version)
- Admin product management (basic)
- Search
- Responsive layout (basic animations)
- MongoDB integration

> Feature development is ongoing and subject to change as DevOps tooling progresses.

---

## 📁 Project Structure

```bash
project-root/
├── backend/                 # Express API
├── frontend/                # React App
└── k8s/                     # Kubernetes manifests
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+)
* MongoDB (local or Atlas)
* npm / yarn

### Installation

```bash
git clone https://github.com/yourusername/shopeasy.git
cd shopeasy

# Install frontend
cd frontend
npm install

# Install backend
cd ../backend
npm install
```

### Environment Variables

Create `.env` inside `backend/`:

```env
PORT=5174
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 🧪 Run Locally

```bash
# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm run dev
```

Open `http://localhost:5174` in your browser.

---

## ☸️ Kubernetes Setup (`k8s/` Folder)

This project includes Kubernetes manifest files to deploy the full stack locally using **Minikube**. This includes backend, frontend, MongoDB, persistent volumes, secrets, and ingress routing.

---

### 📁 k8s Folder Structure

```bash
k8s/
├── ecom-backend-deployment.yml       # Backend deployment
├── ecom-backend-service.yml          # Backend service
├── ecom-frontend-deployment.yml      # Frontend deployment
├── ecom-frontend-service.yml         # Frontend service
├── ecom-ingress.yml                  # Ingress routing
├── ecom-mongo-service.yml            # MongoDB service
├── mongodb-deployment.yml            # MongoDB deployment
├── mongo-pvc.yml                     # PersistentVolumeClaim for Mongo
├── ecom-pv.yml                       # PersistentVolume definition
├── secret.yml                        # Secrets for sensitive env vars
├── namespace.yml                     # Custom namespace (optional)
├── kube.sh                           # Shell script to apply all files
```

---

### 🚀 Steps to Deploy

#### 1. **Start Minikube**

```bash
minikube start
```

#### 2. **Enable Ingress Addon**

```bash
minikube addons enable ingress
```

#### 3. **Run Deployment Script**

```bash
cd k8s
chmod +x kube.sh
./kube.sh
```

Or apply manually:

```bash
kubectl apply -f namespace.yml
kubectl apply -f secret.yml
kubectl apply -f mongo-pvc.yml
kubectl apply -f ecom-pv.yml
kubectl apply -f mongodb-deployment.yml
kubectl apply -f ecom-mongo-service.yml
kubectl apply -f ecom-backend-deployment.yml
kubectl apply -f ecom-backend-service.yml
kubectl apply -f ecom-frontend-deployment.yml
kubectl apply -f ecom-frontend-service.yml
kubectl apply -f ecom-ingress.yml
```

> ⚠️ Apply in order to avoid dependency issues.

---

### 🧾 Update `/etc/hosts`

Edit your `/etc/hosts` file and add:

```bash
121.0.0.1 shopeasy.local
```

> Used in Ingress config for local testing.

---

### ✅ Verify Setup

```bash
kubectl get all -n your-namespace-name  # if using a namespace
kubectl get ingress
```

Then visit:

```
http://shopeasy.local
```

---

### 📌 Notes

- Make sure ports match (5174 backend, etc.)
- Mongo uses PVC + PV for storage
- Secrets handled via `secret.yml`
- `kube.sh` helps deploy all manifests at once

---

## 📌 Next Steps

* [ ] CI/CD pipeline with GitHub Actions
* [ ] Monitoring setup
* [ ] Infra enhancements (IaC, scaling, etc.)

---

## 📚 License

MIT – see [LICENSE](LICENSE)

---
---

## 🤝 Connect

**Kartik Naik**  
📧 [x45960@gmail.com](mailto:x45960@gmail.com)  
🐙 [GitHub](https://github.com/KARKNAIK18)

