const express = require("express");
const router = express.Router();
const child = require("../Controller/childController");
const isAuth = require("../MiddleWare/authMW");
const validation = require("./../Validation/ChildValidations")


router.route("/child")
            .get(isAuth, child.getAllChildren)
            .post(isAuth,validation.insertChildValidations,child.insertChild)
            .patch(isAuth,validation.updateChildValidations,child.updateChild)
            .delete(isAuth,validation.deleteChildValidations,child.deleteChild);
            
router.route("/child/:id",isAuth,validation.getChildByIdValidations ,child.getChildById);

module.exports= router;


/**
 * @swagger
 * components:
 *   schemas:
 *     Child:
 *       type: object
 *       properties:
 *         _id:
 *           type: number
 *           description: The auto-generated ID of the child.
 *         fullName:
 *           type: string
 *           description: The full name of the child.
 *         age:
 *           type: number
 *           description: The age of the child.
 *         level:
 *           type: string
 *           description: The level of the child (PreKG, KG1, KG2).
 *         address:
 *           type: object
 *           properties:
 *             city:
 *               type: string
 *               description: The city of the child's address.
 *             street:
 *               type: string
 *               description: The street of the child's address.
 *             building:
 *               type: string
 *               description: The building of the child's address.
 */

/**
 * @swagger
 * tags:
 *   name: Children
 *   description: API endpoints for managing children.
 */

/**
 * @swagger
 * /child:
 *   get:
 *     summary: Retrieve all children.
 *     tags: [Children]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of children.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Child'
 */

/**
 * @swagger
 * /child:
 *   post:
 *     summary: Add a new child.
 *     tags: [Children]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Child'
 *     responses:
 *       201:
 *         description: The newly created child.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Child'
 *       400:
 *         description: Bad request. Invalid data provided.
 */

/**
 * @swagger
 * /child:
 *   patch:
 *     summary: Update a child.
 *     tags: [Children]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Child'
 *     responses:
 *       200:
 *         description: The updated child.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Child'
 *       404:
 *         description: Child not found.
 *       400:
 *         description: Bad request. Invalid data provided.
 */

/**
 * @swagger
 * /child:
 *   delete:
 *     summary: Delete a child.
 *     tags: [Children]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Child deleted successfully.
 *       404:
 *         description: Child not found.
 */

/**
 * @swagger
 * /child/{id}:
 *   get:
 *     summary: Get a child by ID.
 *     tags: [Children]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the child to retrieve.
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: The child with the specified ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Child'
 *       404:
 *         description: Child not found.
 */