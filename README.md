# 📚 Readers Roost

**Readers Roost** is a modern eBook store built with the **MERN stack** that allows users to browse, purchase, and peacefully read books in a user-friendly digital environment. With secure **JWT-based authentication**, users can create an account, log in, and access a wide range of course books.

---


## 🚀 Features

- 🔐 **User Authentication** using **JWT** (JSON Web Token)
- 📝 **Signup & Login** required to access or purchase books
- 🛍️ **Buy Books Online** instantly
- 📖 **Read Purchased Books** in a comfortable reader interface
- 🖼️ Modern and clean **UI with React**
- 📱 Fully **responsive design**

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Axios
- React Router DOM
- Tailwind CSS (optional if used)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

---

## 🔧 Getting Started

### 1. Clone the Repository

git clone https://github.com/ridimashrotriya12/Reader-sRoost.git
cd Reader-sRoost



**Install Dependencies**
# For backend
cd Frontend
npm install

# For frontend
cd ../Backend
npm install

### 3. Setup Environment Variables
Create a .env file inside the server directory and add:

PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret


**4. Run the Application**

# Run backend
cd server
npm run dev

# Run frontend in a separate terminal
cd ../client
npm start
