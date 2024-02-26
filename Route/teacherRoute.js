const express = require("express");
const router = express.Router();
const teacherController = require("./../Controller/teacherController");
const isAuth = require("./../MiddleWare/authMW");
const multer = require("multer");
const upload = require("./../multerMW");
const validation = require("./../Validation/TeacherValidations");

router.route("/teachers")
    .get(isAuth,teacherController.getAllTeachers)
    .post(isAuth,validation.createTeacherValid ,teacherController.insertTeacher)
    .patch(isAuth,validation.updateTeacherValid ,teacherController.updateTeacher)
    .delete(isAuth ,validation.deleteTeacherValid ,teacherController.deleteTeacher);

router.get("/teachers/:id" , isAuth,validation.getTeacherByIdValid ,teacherController.getTeacherByID);

router.get("teachers/supervisors" ,isAuth,teacherController.getAllSupervisors);


module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the teacher.
 *         name:
 *           type: string
 *           description: The name of the teacher.
 *         // Define other properties of the teacher here
 *       required:
 *         - name
 */

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: API endpoints for managing teachers.
 */

/**
 * @swagger
 * /teachers:
 *   get:
 *     summary: Retrieve all teachers.
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of teachers.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 */

/**
 * @swagger
 * /teachers:
 *   post:
 *     summary: Add a new teacher.
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       201:
 *         description: The newly created teacher.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       400:
 *         description: Bad request. Invalid data provided.
 */

/**
 * @swagger
 * /teachers:
 *   patch:
 *     summary: Update a teacher.
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: The updated teacher.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       404:
 *         description: Teacher not found.
 *       400:
 *         description: Bad request. Invalid data provided.
 */

/**
 * @swagger
 * /teachers:
 *   delete:
 *     summary: Delete a teacher.
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Teacher deleted successfully.
 *       404:
 *         description: Teacher not found.
 */

/**
 * @swagger
 * /teachers/{id}:
 *   get:
 *     summary: Get a teacher by ID.
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the teacher to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The teacher with the specified ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       404:
 *         description: Teacher not found.
 */

/**
 * @swagger
 * /teachers/supervisors:
 *   get:
 *     summary: Retrieve all supervisors.
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of supervisors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 */
