# 🛒 ShopEasy – E-commerce Web App (DevOps-Focused)

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/status-Development-informational)

ShopEasy is a responsive e-commerce web application designed to help developers practice DevOps pipelines, containerization, and deployment workflows. With a clean UI, real-time features, and MongoDB integration, it covers the entire shopping flow.

---

## 🔥 Demo

> 🌐 Live link coming soon  
> 📸 Screenshots will be added after full styling integration

---

## 🧰 Tech Stack

### 🚀 Frontend
| Technology | Description |
|------------|-------------|
| ![React](https://img.icons8.com/color/48/000000/react-native.png) | **React.js** – SPA with component-based architecture |
| 🎨 CSS Modules | Custom professional animations & responsive layout |

### 🔧 Backend
| Technology | Description |
|------------|-------------|
| ![Node](https://img.icons8.com/color/48/nodejs.png) | **Node.js** – Backend runtime |
| ![MongoDB](https://img.icons8.com/color/48/mongodb.png) | **MongoDB** – NoSQL database with Mongoose ODM |

### 🛡️ Authentication
| Tool | Description |
|------|-------------|
| 🔐 JWT | Secure user auth with tokens |
| 🔏 bcrypt | Password hashing |

---
- ✅ Dockerize backend and frontend
- ✅ GitHub Actions CI/CD pipeline
- 🧩 Monitoring & Logging tools (optional)

---

## ✨ Features

- 🔐 JWT-based Login/Signup
- 🛒 Add to Cart / View Cart
- ❤️ Wishlist Feature
- 🧑‍💼 Admin Product Control
- 🔍 Search Functionality
- 🖼️ Animated UI with responsive layout
- 🗃️ MongoDB Integration
- 🌈 Professional UI/UX

---

## 📁 Folder Structure

```bash
project-root/
├── backend/                 # Express + MongoDB server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/                # React app
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── styles/
│   └── App.js
└── README.md
```

---

## 🛠️ Setup Instructions

### 📌 Prerequisites

- Node.js (v16+)
- MongoDB installed locally or Atlas URI
- npm / yarn

---

### ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/shopeasy.git
cd shopeasy
```

2. **Install frontend dependencies**

```bash
cd frontend
npm install
```

3. **Install backend dependencies**

```bash
cd ../backend
npm install
```

4. **Configure Environment Variables**

Create a `.env` file in the `backend/` folder:

```env
PORT=5174
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 🏁 Running the App Locally

1. **Start the backend**

```bash
cd backend
npm start
```

2. **Start the frontend**

```bash
cd ../frontend
npm run dev
```

Open your browser at: `http://localhost:5174`

---



## 📦 Future Enhancements

- [ ] 🐳 Dockerized Setup – Containerize frontend & backend for consistent environments  
- [ ] 🛠️ CI/CD Pipeline – Automate deployment using GitHub Actions / Jenkins   
- [ ] 📊 Monitoring with Grafana/Prometheus – Track app metrics and logs (DevOps)  
- [ ] 📦 Infrastructure as Code (IaC) – Setup using Terraform or AWS CloudFormation  
- [ ] 🚦 Load Balancing & Scaling – AWS ALB with autoscaling groups


---

## 📚 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [DummyJSON API](https://dummyjson.com) – Free fake e-commerce API
- [Icons8](https://icons8.com) – Icons used in this README

---

## 🤝 Connect

**Kartik Naik**  
📧 [x45961020@gmail.com](mailto:x45961020@gmail.com)   
🐙 [GitHub](https://github.com/KARTIKNAIK18)

