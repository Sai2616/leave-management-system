# 🚀 Leave Management System

A full-stack **Leave Management System** built using **Node.js, Express, MongoDB, and Vue.js**.
This application allows employees to apply for leave and employers to manage (approve/reject) leave requests efficiently.

---

## 🧠 Project Overview

This system is designed to simplify the leave management process in organizations by providing:

* Role-based authentication (Employee & Employer)
* Leave application and tracking
* Leave approval/rejection workflow
* Secure API with JWT authentication
* Clean and responsive UI

---

## 🛠️ Tech Stack

### 🔹 Frontend

* Vue.js
* Tailwind CSS
* Vue Router

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### 🔹 Deployment

* AWS EC2 (Backend & Frontend)
* GitHub (Version Control)

---

## ✨ Features

### 👨‍💻 Employee

* Signup & Login
* Apply for leave
* View leave status (Pending / Approved / Rejected)

### 🧑‍💼 Employer (Admin)

* Login
* View all leave requests
* Approve / Reject leave requests

---

## 🔐 Authentication

* JWT-based authentication
* Role-based access control
* Protected routes for secure navigation

---

## 📁 Project Structure

```
leave-management-system/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── router/
│   │   ├── services/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 Clone Repository

```bash
git clone https://github.com/Sai2616/leave-management-system.git
cd leave-management-system
```

---

### 🔹 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run server:

```bash
node server.js
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Deployment (AWS EC2)

* Hosted on AWS EC2 instance
* Backend running on Node.js server
* Frontend served using Vite
* Process managed using PM2

---



## 🚀 Future Enhancements

* Email notifications
* Leave balance tracking
* Mobile responsiveness improvements

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Sai Prakash Kashetti

* GitHub: https://github.com/Sai2616
* LinkedIn: www.linkedin.com/in/sai2609


