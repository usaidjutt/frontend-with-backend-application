# Connect Frontend with Backend

This project is a **Full Stack Application** that connects a React (Vite) frontend with a Node.js + Express backend.  
It demonstrates how to fetch data from a backend API and display it beautifully on the frontend.

---

## 📂 Project Structure
Connect Frontend with Backend/
│── backend/ # Express backend (API + images)
│── frontend/ # React frontend (Vite + Axios)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/username/connect-frontend-backend.git
cd "Connect Frontend with Backend"

**2. Backend Setup**

cd backend

**📦 Backend Dependencies **

express → For creating server and APIs
cors → To handle CORS policy
nodemon (dev) → For auto-restart during development

npm install
npm start

**Backend will run at:**

http://localhost:3000
API Endpoint example:

http://localhost:3000/jamiadata
Images served from:

**3. Frontend Setup**

cd ../frontend
npm install
npm run dev
**📦 Frontend Dependencies  **
react & react-dom → Core React
vite → Development server & build tool
axios → To fetch data from backend

Frontend will run at:

http://localhost:5173
🖼️ Features
Backend serves staff data with image links

API consumed in React using Axios

Data displayed in a responsive card design

Images + details shown with hover effects


📸 Example API Response
json
[
  {
    "id": 1,
    "name": "Hafiz Umair",
    "designation": "CEO",
    "image": "http://localhost:3000/images/umair.jpg"
  },
  {
    "id": 2,
    "name": "Hafiz Zuhair",
    "designation": "Head of Finance",
    "image": "http://localhost:3000/images/zuhair.jpg"
  }
]

⚡ How It Works
Start backend → serves API at localhost:3000
Start frontend → fetches data from backend using Axios

React maps over the data and displays cards with names, designations, and profile pictures

📌 Notes
Always run backend first, then frontend.
