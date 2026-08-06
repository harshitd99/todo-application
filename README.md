# 🚀 Todo Application API

<div align="center">

A **production-ready RESTful Todo API** built with **Node.js**, **Express.js**, and **MongoDB** following modern backend architecture and best development practices.

Designed as a learning project to understand how scalable backend applications are built in real-world software development.

![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-5.x-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb\&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

---

# 📑 Table of Contents

* Project Overview
* Features
* Tech Stack
* Project Structure
* System Architecture
* Database Schema
* API Endpoints
* Authentication Flow
* Installation
* Environment Variables
* Running the Project
* Sample API Requests
* Error Response Format
* Security Features
* Development Roadmap
* Testing
* Future Improvements
* Contributing
* Author
* License

---

# 📌 Project Overview

The Todo Application API is a secure backend service that allows users to manage their personal tasks.

Every user has their own account and can securely perform CRUD operations on their own todos using JWT authentication.

The project follows a clean layered architecture that separates routing, controllers, business logic, validation, middleware, and database operations.

This repository is built to demonstrate production-style backend development using JavaScript and Express.js.

---

# ✨ Features

## User Authentication

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Protected Routes
* Token Verification

---

## Todo Management

* Create Todo
* Get All Todos
* Get Todo by ID
* Update Todo
* Delete Todo

---

## Validation

* Request Validation
* Input Sanitization
* Proper Validation Errors
* Express Validator Integration

---

## Security

* Password Hashing
* JWT Authentication
* Environment Variables
* Helmet Security
* Compression
* CORS
* Protected APIs

---

## Production Features

* MVC Architecture
* Service Layer
* Centralized Error Handling
* Environment Configuration
* Modular Routing
* Consistent API Responses

---

# 🛠 Tech Stack

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication

* JWT
* bcrypt

## Validation

* express-validator

## Documentation

* Swagger UI
* OpenAPI

## Development Tools

* Nodemon
* dotenv
* Git
* GitHub
* Postman
* Bruno

---

# 📂 Project Structure

```text
todo-application/
│
├── backend/
│
├── src/
│   │
│   ├── config/
│   │     db.js
│   │
│   ├── controllers/
│   │     authController.js
│   │     todoController.js
│   │
│   ├── middleware/
│   │     auth.js
│   │     errorHandler.js
│   │     validate.js
│   │
│   ├── models/
│   │     User.js
│   │     Todo.js
│   │
│   ├── routes/
│   │     auth.js
│   │     todo.js
│   │     index.js
│   │
│   ├── services/
│   │
│   ├── validations/
│   │
│   ├── utils/
│   │     jwt.js
│   │     ApiResponse.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

---

# 🏗 System Architecture

```text
                Client
                   │
                   ▼
              Express Routes
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

---

# 🗄 Database Schema

## User

```javascript
{
    username: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date
}
```

---

## Todo

```javascript
{
    title: String,
    description: String,
    completed: Boolean,
    priority: String,
    user: ObjectId,
    createdAt: Date,
    updatedAt: Date
}
```

Relationship

```text
One User
     │
     │
     ├──────────────► Many Todos
```

---

# 🌐 API Endpoints

## Authentication

| Method | Endpoint            | Description   |
| ------ | ------------------- | ------------- |
| POST   | /api/v1/auth/signup | Register User |
| POST   | /api/v1/auth/login  | Login User    |

---

## Todos

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| GET    | /api/v1/todos     | Get All Todos |
| GET    | /api/v1/todos/:id | Get Todo      |
| POST   | /api/v1/todos     | Create Todo   |
| PATCH  | /api/v1/todos/:id | Update Todo   |
| DELETE | /api/v1/todos/:id | Delete Todo   |

---

# 🔑 Authentication Flow

```text
User Login
      │
      ▼
Verify Credentials
      │
      ▼
Generate JWT Token
      │
      ▼
Return Token
      │
      ▼
Client Stores Token
      │
      ▼
Authorization Header

Bearer <token>

      │
      ▼
Protected Routes
```

---

# ⚙ Installation

Clone Repository

```bash
git clone git@github.com:harshitd99/todo-application.git
```

Navigate

```bash
cd todo-application/backend
```

Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside the backend directory.

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

# 📨 Sample Request

## Signup

### Request

```http
POST /api/v1/auth/signup
```

```json
{
    "username":"john",
    "email":"john@example.com",
    "password":"Password123"
}
```

---

### Response

```json
{
    "success":true,
    "message":"User registered successfully",
    "data":{
        "id":"...",
        "username":"john",
        "email":"john@example.com"
    }
}
```

---

# ❌ Error Response

```json
{
    "success":false,
    "message":"Validation Failed",
    "errors":[
        {
            "field":"email",
            "message":"Invalid Email"
        }
    ]
}
```

---

# 🔒 Security Features

* Password Hashing using bcrypt
* JWT Authentication
* Environment Variable Protection
* Helmet Middleware
* Compression Middleware
* Request Validation
* Centralized Error Handling

---

# 📈 Development Progress

| Feature                    | Status |
| -------------------------- | ------ |
| Project Setup              | ✅      |
| MongoDB Connection         | ✅      |
| User Authentication        | ✅      |
| JWT Middleware             | ✅      |
| Todo CRUD                  | ✅      |
| Request Validation         | ✅      |
| Centralized Error Handling | ✅      |
| Helmet                     | ✅      |
| Compression                | ✅      |
| Swagger Documentation      | ✅      |
| Docker                     | ⏳      |
| Unit Testing               | ⏳      |
| CI/CD                      | ⏳      |

---

# 🧪 Testing

The API can be tested using:

* Postman
* Bruno
* Thunder Client
* Swagger UI

---

# 🚀 Future Improvements

* Refresh Tokens
* Email Verification
* Password Reset
* Search Todos
* Pagination
* Sorting
* File Uploads
* Role Based Authorization
* Redis Cache
* Docker Compose
* Kubernetes
* Unit Testing
* Integration Testing
* GitHub Actions CI/CD
* Logging
* Monitoring

---

# 🤝 Contributing

1. Fork the repository.

2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Commit changes.

```bash
git commit -m "Add new feature"
```

4. Push the branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# 📚 Learning Objectives

This project demonstrates knowledge of:

* REST API Design
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Password Hashing
* Validation
* Middleware
* Error Handling
* Clean Architecture
* Service Layer Pattern
* API Documentation
* Git & GitHub Workflow
* Production Backend Development

---

# 👨‍💻 Author

**Harshit Dubey**

GitHub: **https://github.com/harshitd99**

---

# 📄 License

This project is licensed under the MIT License.

Feel free to fork, learn from, and contribute to this project.
