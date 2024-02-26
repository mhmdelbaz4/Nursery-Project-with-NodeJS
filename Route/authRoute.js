const express = require("express");
const router = express.Router();
const auth = require("../Controller/authController");

router.post("/login",auth.Login);
router.post("/changePassword",auth.changePassword);
router.post("/signup",auth.signup);

module.exports= router;


/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API endpoints for user authentication.
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login to the system.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Logged in successfully.
 *       401:
 *         description: Unauthorized. Invalid credentials.
 */

/**
 * @swagger
 * /auth/changePassword:
 *   post:
 *     summary: Change user password.
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *             required:
 *               - oldPassword
 *               - newPassword
 *     responses:
 *       200:
 *         description: Password changed successfully.
 *       401:
 *         description: Unauthorized. Invalid credentials.
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Bad request. User already exists or missing required fields.
 */
