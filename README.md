# 🚀 Synolix — Social Media Platform

Synolix is a full-stack social media platform designed to enable community-based interactions, real-time messaging, and dynamic group discussions. The platform supports scalable communication using WebSockets and provides secure authentication using Clerk with Google OAuth.

---

## ✨ Features
* 🧑‍🤝‍🧑 **Community-Based Interactions:** Join, leave, and chat within communities.
* 💬 **Real-Time Messaging:** Instant one-to-one and group messaging powered by WebSockets (Socket.IO).
* 🟢 **Dynamic User Presence:** Real-time online/offline status tracking.
* 🔐 **Secure Authentication:** Identity management and Google OAuth login via Clerk.
* 📡 **RESTful APIs:** Robust express backend for user, chat, and community data management.
* 📱 **Responsive UI:** Built with React, Vite, and Bootstrap for a modern, seamless experience.

---

## 🛠️ Tech Stack
* **Frontend:** React.js, Vite, Bootstrap, Socket.IO Client, Clerk React SDK
* **Backend:** Node.js, Express.js, Socket.IO, Multer
* **Database:** MongoDB & Mongoose
* **Authentication:** Clerk API

---

## 🚀 Getting Started

### 🔹 Prerequisites
* [Node.js](https://nodejs.org/en/) installed
* [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally on port 27017 (or a cloud MongoDB URI).
* A Clerk account for API keys.

---

## 🔒 Environment Settings (.env configuration)

To run this project fully, you need `.env` files in your **server**, and **client** directories.

### 1️⃣ Server Environment Variables
Create a file named `.env` inside the `/server` directory and add the following keys. Replace the placeholder values with your actual credentials.

```env
# server/.env

# Port for the Node.js server
PORT=3000

# MongoDB Connection String (127.0.0.1 is recommended for local development to avoid IPv6 issues)
DB_URL=mongodb://127.0.0.1:27017/sewadproject
DB_NAME=sewadproject

# Clerk Authentication Keys (From your Clerk Dashboard)
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 2️⃣ Client Environment Variables
Create a file named `.env.local` inside the `/client` directory and add the following keys.

```env
# client/.env.local

# Clerk Publishable Key (Must start with VITE_ to be exposed to your React app)
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/karthik5649/synolix.git
cd synolix
```

### 2️⃣ Setup Backend
Install the backend dependencies and start the Node server.
```bash
cd server
npm install
node server.js
```

### 3️⃣ Setup Frontend
Open a new terminal window, install the frontend dependencies, and start the Vite development server.
```bash
cd client
npm install
npm run dev
```

### 4️⃣ Run the Application
* **Frontend UI:** `http://localhost:5173`
* **Backend API:** `http://localhost:3000`

Your Websocket proxy automatically routes between them!

---

## 📈 Future Improvements
* Push notifications implementation
* Advanced media sharing via Cloudinary
* AI-based content moderation
* Scalable microservices architecture

---

## 🤝 Contributing
Feel free to fork the repository, make enhancements, and submit pull requests!

---

## 📧 Contact
**Karthik Reddy**  
Email: [palakolukarthikreddy@gmail.com](mailto:palakolukarthikreddy@gmail.com)