# 📝 MERN Todo Application

A full-stack **Todo Application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This app allows users to **create, edit, delete, and mark tasks as completed** with real-time updates.

---

## 🚀 Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ❌ Delete tasks
- ✅ Mark tasks as completed / not completed
- 🔄 Real-time UI updates
- 📦 REST API integration
- 🎨 Clean UI using Tailwind CSS
- 🔗 Axios for API communication

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
project-root/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── App.jsx
│ │ └── index.js
│
├── server/ # Node backend
│ ├── models/
│ │ └── TaskModel.js
│ ├── routes/
│ │ └── taskRoutes.js
│ ├── server.js
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
cd server
npm install
PORT=3000
MONGO_URI=your_mongodb_connection_string
npm start
http://localhost:3000
cd client
npm install
npm run dev
http://localhost:5173
```
🔗 API Endpoints
| Method | Endpoint               | Description        |
| ------ | ---------------------- | ------------------ |
| GET    | `/task/alltasks`       | Fetch all tasks    |
| POST   | `/task/create`         | Create new task    |
| POST   | `/task/updateTask/:id` | Update task        |
| DELETE | `/task/delete/:id`     | Delete task        |
| POST   | `/task/toggleDone/:id` | Toggle task status |

##🧠 App Logic Overview

Tasks are stored in MongoDB

Each task contains:

task (string)

isdone (boolean)

Checkbox toggles completion status

Line-through effect applied to completed tasks

Axios handles frontend-backend communication

##🧑‍💻 Author
🔗 GitHub: https://github.com/shiva2005-maker

##⭐ Support
If you like this project, please give it a ⭐ on GitHub!
