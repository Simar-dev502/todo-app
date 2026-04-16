# 🚀 Full Stack To-Do App (MERN)

A modern full-stack To-Do application built using the MERN stack (MongoDB, Express, React, Node.js) with authentication and task management features.

---

## ✨ Features

- 🔐 User Authentication (Signup/Login with JWT)
- 📝 Create, Read, Update, Delete Tasks (CRUD)
- ✅ Mark tasks as completed
- 📅 Task status management
- 🔍 Protected routes (only logged-in users)
- 🎨 Modern UI with responsive design
- 🚪 Logout functionality

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Axios
- Tailwind CSS

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt (Password Hashing)

---

## 📁 Project Structure
todo-app/
│── backend/
│── todo-frontend/


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/todo-app.git
cd todo-app

2️⃣ Backend Setup
cd backend
npm install

Create .env file:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000

Run server:
node server.js

3️⃣ Frontend Setup
cd todo-frontend
npm install
npm start

🌐 API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login

Tasks
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

🚀 Deployment
Backend → Render
Frontend → Vercel

📌 Future Improvements
🔔 Notifications
📊 Task analytics
🌙 Dark mode
🗂️ Categories / Tags

👩‍💻 Author
Simarjeet Kaur

⭐ If you like this project, give it a star!
 
