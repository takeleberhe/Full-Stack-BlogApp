# Blog Application

## 📝 Overview
This is a full-stack blog application built with modern web technologies. It allows users to create, edit, and manage blog posts with a seamless experience. The application features user authentication with JWT, form validation, and regex-based validation for login and registration.

## 🚀 Tech Stack

### **Front-end:**
- React.js (Vite for fast development)
- Redux.js (State management)
- Tailwind CSS (Styling)
- React Hook Form (Form validation)
- Regex (Input validation)

### **Back-end:**
- Node.js (Runtime environment)
- Express.js (Backend framework)
- MongoDB (Database)
- JSON Web Token (JWT) for authentication

## 🎯 Features
- 📝 **Create, edit, and delete blog posts**
- 🔐 **User authentication (Login & Registration) with JWT**
- 🛡 **Secure password handling**
- ✅ **Form validation with React Hook Form and Regex**
- 🎨 **Responsive UI with Tailwind CSS**
- ⚡ **Fast development with Vite**

## 🛠 Installation & Setup

Follow these steps to set up the project on your local machine:

### **1. Clone the Repository**
```sh
git clone https://github.com/takeleberhe/Full-Stack-BlogApp.git
cd Full-Stack-BlogApp
```

### **2. Set up the Front-end**
```sh
cd front-end
npm install
npm run dev
```
The front-end will start running at `http://localhost:5173` (default Vite port).

### **3. Set up the Back-end**
```sh
cd ../back-end
npm install
npm start
```
The backend will start running at `http://localhost:5000` (default Express port).

## 🔧 Configuration
To run this application locally, follow these steps:

### **1. Create a `.env` file in the `back-end` root folder and add the following environment variables:**
```env
# WARNING: Do not expose these credentials on GitHub or in public repositories.
# This setup is for local testing only. Ensure `.env` is added to `.gitignore` in production.

# Database connection string
DATABASE=mongodb://localhost:27017/yourdatabaseTableName

# JWT Authentication keys
JWT_SECRET_KEY=secret_key  # Sample secret key for signing JWT tokens
JWT_VERIFY_KEY=verify_key  # Sample verification key for JWT


### **2. Start the Application**
- To run the front-end server:
  ```sh
  npm run dev
  ```
- To run the back-end server:
  ```sh
  npm start
  ```

## 🤝 Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## 📜 License
This project is licensed under the MIT License.

