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

router.post("/", authMiddleware,createTodoValidation, validate, createTodo);

router.get("/", authMiddleware, getTodos);

router.patch("/:id", authMiddleware, updateTodoValidation, validate, updateTodo);

router.delete("/:id", authMiddleware, deleteTodo);

module.exports = router;
