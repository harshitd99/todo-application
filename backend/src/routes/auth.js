const express = require("express");

const router = express.Router();

const { signup, login } = require("../controllers/authController");
const { validateSignup, validateLogin } = require("../validations/authValidation");

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/signup", validateSignup, signup);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", validateLogin, login);

module.exports = router;