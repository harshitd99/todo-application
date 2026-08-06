const express = require("express");
const validate = require("../middleware/validate");

const { authMiddleware } = require("../middleware/auth");

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const { createTodoValidation, updateTodoValidation } = require("../validations/todoValidation");

const router = express.Router();

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a todo
 *     tags:
 *       - Todos
 */
router.post("/", authMiddleware,createTodoValidation, validate, createTodo);

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos
 *     tags:
 *       - Todos
 */
router.get("/", authMiddleware, getTodos);

/**
 * @swagger
 * /todos/{id}:
 *   patch:
 *     summary: Update a todo
 *     tags:
 *       - Todos
 */
router.patch("/:id", authMiddleware, updateTodoValidation, validate, updateTodo);

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     tags:
 *       - Todos
 */
router.delete("/:id", authMiddleware, deleteTodo);

module.exports = router;
