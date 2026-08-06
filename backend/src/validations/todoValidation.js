const { body } = require("express-validator");

const createTodoValidation = [

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ max: 100 })
        .withMessage("Title cannot exceed 100 characters"),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 500 })
        .withMessage("Description cannot exceed 500 characters"),

    body("priority")
        .optional()
        .isIn(["low", "medium", "high"])
        .withMessage("Invalid priority"),

    body("dueDate")
        .optional()
        .isISO8601()
        .withMessage("Invalid due date")

];

const updateTodoValidation = [
    body("title")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Title cannot be empty")
        .isLength({ min: 1, max: 100 })
        .withMessage("Title must be between 1 and 100 characters"),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 500 })
        .withMessage("Description cannot exceed 500 characters"),

    body("priority")
        .optional()
        .isIn(["low", "medium", "high"])
        .withMessage("Priority must be low, medium or high"),

    body("completed")
        .optional()
        .isBoolean()
        .withMessage("Completed must be true or false"),

    body("dueDate")
        .optional()
        .isISO8601()
        .withMessage("Invalid due date")
];

module.exports = {
    createTodoValidation,
    updateTodoValidation
};