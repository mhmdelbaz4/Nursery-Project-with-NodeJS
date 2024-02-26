const express = require("express");
const router = express.Router();
const classController = require("./../Controller/classController");
const isAuth = require("./../MiddleWare/authMW");
const validation = require("./../Validation/ClassValidations");

console.log("Hello");
router.route("/class")
    .all(isAuth)
    .get(classController.getAllClasses)
    .post(validation.addClassValidation,classController.insertClass)
    .patch(validation.updateClassValidation,classController.updateClass)
    .delete(validation.deleteClassValidation,classController.deleteClass);

router.get("/class/:id",isAuth,validation.getClassByIdValidation ,classController.getClassById);
router.get("/class/child/:id",isAuth,validation.getClassByIdValidation ,classController.getClassChildren);
router.get("/class/teacher/:id",isAuth,validation.getClassByIdValidation ,classController.getClassSupervisor);

module.exports = router;


/**
 * @swagger
 * components:
 *   schemas:
 *     Class:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the class.
 *         name:
 *           type: string
 *           description: The name of the class.
 *         // Define other properties of the class here
 *       required:
 *         - name
 */

/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: API endpoints for managing classes.
 */

/**
 * @swagger
 * /class:
 *   get:
 *     summary: Retrieve all classes.
 *     tags: [Classes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of classes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Class'
 * */

/**
 * @swagger
 * /class:
 *   post:
 *     summary: Add a new class.
 *     tags: [Classes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       201:
 *         description: The newly created class.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       400:
 *         description: Bad request. Invalid data provided.
 * */

/**
 * @swagger
 * /class:
 *   patch:
 *     summary: Update a class.
 *     tags: [Classes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: The updated class.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       404:
 *         description: Class not found.
 *       400:
 *         description: Bad request. Invalid data provided.
 * */

/**
 * @swagger
 * /class:
 *   delete:
 *     summary: Delete a class.
 *     tags: [Classes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Class deleted successfully.
 *       404:
 *         description: Class not found.
 * */

/**
 * @swagger
 * /class/{id}:
 *   get:
 *     summary: Get a class by ID.
 *     tags: [Classes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the class to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The class with the specified ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       404:
 *         description: Class not found.
 * */

/**
 * @swagger
 * /class/child/{id}:
 *   get:
 *     summary: Get children in a class.
 *     tags: [Classes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the class to retrieve children from.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of children in the class.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Child'
 *       404:
 *         description: Class not found.
 * */

/**
 * @swagger
 * /class/teacher/{id}:
 *   get:
 *     summary: Get teacher of a class.
 *     tags: [Classes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the class to retrieve the teacher from.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The teacher of the class.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 teacherName:
 *                   type: string
 *       404:
 *         description: Class not found.
 * */
