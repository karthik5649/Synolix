# 🚀 Synolix — Social Media Platform

## 📌 Overview

Synolix is a full-stack social media platform designed to enable community-based interactions, real-time messaging, and dynamic group discussions. The platform supports scalable communication using WebSockets and provides secure authentication using Clerk with Google OAuth.

---

## ✨ Features

* 🧑‍🤝‍🧑 Community-based interactions and group discussions
* 💬 Real-time one-to-one and group chat using WebSockets
* ⚡ Low-latency messaging with bidirectional communication
* 🟢 Dynamic user presence tracking (online/offline status)
* 🔐 Secure authentication using Clerk and Google OAuth 2.0
* 📡 RESTful APIs for user, chat, and data management

---

## 🛠️ Tech Stack

* **Frontend:** React.js, HTML, CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Real-Time:** WebSockets (Socket.IO)
* **Authentication:** Clerk API, Google OAuth

---

## 🧠 Architecture

The application follows a client-server architecture:

* React frontend handles UI and user interactions
* Node.js backend manages APIs and business logic
* MongoDB stores user, chat, and message data
* WebSockets enable real-time communication

---

## 🚀 Getting Started

### 🔹 Prerequisites

* Node.js installed
* MongoDB (local or cloud)
* Git installed

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/karthik5649/synolix.git
cd synolix
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
CLERK_API_KEY=your_clerk_key
```

Run backend:

```
npm start
```

---

### 3️⃣ Setup Frontend

```
cd client
npm install
npm start
```

---

### 4️⃣ Run the Application

* Frontend: http://localhost:3000
* Backend: http://localhost:5000

---

## 🔐 Authentication

* Implemented using Clerk API
* Supports Google OAuth login
* Secure session and user management

---

## 📈 Future Improvements

* Push notifications
* Media sharing (images/videos)
* AI-based content moderation
* Scalable microservices architecture

---

## 🤝 Contributing

Feel free to fork the repository and submit pull requests.

---

## 📧 Contact

Karthik Reddy
Email: [palakolukarthikreddy@gmail.com](mailto:palakolukarthikreddy@gmail.com)