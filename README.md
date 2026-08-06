# 🚀 Todo Application API

A production-style **RESTful Todo Application Backend** built with **Node.js**, **Express.js**, and **MongoDB**, following industry-standard architecture and best practices.

This project is being developed as a learning journey, with each feature implemented step by step to understand not only *how* to build a backend but also *why* real-world applications are structured this way.

---

# 📖 Table of Contents

* [Project Overview](#-project-overview)
* [Features](#-features)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [Architecture](#-architecture)
* [API Endpoints](#-api-endpoints)
* [Installation](#-installation)
* [Environment Variables](#-environment-variables)
* [Running the Project](#-running-the-project)
* [Development Roadmap](#-development-roadmap)
* [Testing](#-testing)
* [Future Improvements](#-future-improvements)
* [Learning Outcomes](#-learning-outcomes)
* [Author](#-author)
* [License](#-license)

---

# 📌 Project Overview

This project provides a secure REST API for managing personal todos.

Users can:

* Register an account
* Login securely
* Authenticate using JWT
* Create todos
* View their own todos
* Update todos
* Delete todos

The application follows a layered architecture to keep business logic, routing, validation, and database operations separate and maintainable.

---

# ✨ Features

## Authentication

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Protected Routes

---

## Todo Management

* Create Todo
* View All Todos
* View Single Todo
* Update Todo
* Delete Todo

---

## Validation

* Request Validation
* Input Sanitization
* Error Messages

---

## Security

* Password Hashing
* JWT Tokens
* Environment Variables
* Protected API Routes

---

## Production Practices

* MVC Architecture
* Centralized Error Handling
* Reusable Middleware
* Consistent API Responses
* Clean Folder Structure

---

# 🛠 Technology Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt

### Validation

* express-validator

### Development Tools

* Nodemon
* dotenv
* Git
* GitHub
* Postman / Bruno

---

# 📂 Project Structure

```text
todo-application/
│
├── backend/
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │     └── db.js
│   │   │
│   │   ├── controllers/
│   │   │     ├── authController.js
│   │   │     └── todoController.js
│   │   │
│   │   ├── middleware/
│   │   │     ├── auth.js
│   │   │     ├── errorHandler.js
│   │   │     └── validate.js
│   │   │
│   │   ├── models/
│   │   │     ├── User.js
│   │   │     └── Todo.js
│   │   │
│   │   ├── routes/
│   │   │     ├── auth.js
│   │   │     ├── todo.js
│   │   │     └── index.js
│   │   │
│   │   ├── services/
│   │   │
│   │   ├── validations/
│   │   │     ├── authValidation.js
│   │   │     └── todoValidation.js
│   │   │
│   │   ├── utils/
│   │   │     ├── jwt.js
│   │   │     └── ApiResponse.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   ├── .env
│   ├── .env.example
│   └── README.md
│
└── frontend/
```

---

# 🏗 Architecture

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Models
   │
   ▼
MongoDB
```

### Responsibilities

| Layer       | Responsibility                             |
| ----------- | ------------------------------------------ |
| Routes      | API endpoints                              |
| Controllers | Handle request and response                |
| Services    | Business logic                             |
| Models      | Database interaction                       |
| Middleware  | Authentication, validation, error handling |
| Utils       | Helper functions                           |
| Config      | Database configuration                     |

---

# 🌐 API Endpoints

## Authentication

| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| POST   | `/api/v1/auth/signup` | Register user |
| POST   | `/api/v1/auth/login`  | Login user    |

---

## Todos

| Method | Endpoint            | Description     |
| ------ | ------------------- | --------------- |
| GET    | `/api/v1/todos`     | Get all todos   |
| GET    | `/api/v1/todos/:id` | Get single todo |
| POST   | `/api/v1/todos`     | Create todo     |
| PATCH  | `/api/v1/todos/:id` | Update todo     |
| DELETE | `/api/v1/todos/:id` | Delete todo     |

---

# ⚙ Installation

Clone the repository

```bash
git clone git@github.com:harshitd99/todo-application.git
```

Move into the project

```bash
cd todo-application/backend
```

Install dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# ▶ Running the Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# 📈 Development Roadmap

* [x] Project Setup
* [x] MongoDB Connection
* [x] User Model
* [x] Signup API
* [x] Login API
* [x] JWT Authentication
* [x] Authentication Middleware
* [x] Todo Model
* [x] Create Todo API
* [x] Get Todos API
* [x] Update Todo API
* [x] Delete Todo API
* [x] Request Validation
* [ ] Centralized Error Handling
* [ ] API Documentation
* [ ] Rate Limiting
* [ ] Helmet Security
* [ ] CORS Configuration
* [ ] Docker Support
* [ ] Swagger Documentation
* [ ] Unit Testing
* [ ] CI/CD Pipeline

---

# 🧪 Testing

API endpoints can be tested using:

* Postman
* Bruno
* Thunder Client

Every endpoint should be verified before moving to the next feature.

---

# 🚀 Future Improvements

* Refresh Token Authentication
* Email Verification
* Password Reset
* File Uploads
* Search & Filter Todos
* Pagination
* Sorting
* Role-Based Authorization
* Redis Caching
* Docker Compose
* Kubernetes Deployment
* GitHub Actions CI/CD
* Logging with Winston/Morgan
* API Versioning
* OpenAPI (Swagger)

---

# 🎯 Learning Outcomes

This project demonstrates understanding of:

* REST API Design
* Express.js
* MongoDB
* Mongoose ODM
* JWT Authentication
* Password Hashing
* Request Validation
* Middleware
* MVC Architecture
* Service Layer Pattern
* Error Handling
* Environment Variables
* Git & GitHub Workflow
* Clean Code Principles
* Production Backend Structure

---

# 👨‍💻 Author

**Harshit Dubey**

GitHub: https://github.com/harshitd99

---

# 📄 License

This project is intended for educational purposes and personal learning.

Feel free to fork the repository, experiment with it, and build upon it.
