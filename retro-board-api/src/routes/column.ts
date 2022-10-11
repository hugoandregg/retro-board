import express from "express";

import ColumnController from "../controllers/ColumnController";
import Validators from "../middlewares/validators";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Column
 *     description: Column related endpoints
 */

/**
 * @swagger
 * definitions:
 *   NewColumn:
 *     type: object
 *     required:
 *       - title
 *     properties:
 *       title:
 *         type: string
 */

/**
 * @swagger
 * /column:
 *   post:
 *     tags: [Column]
 *     description: Add new column
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Column
 *         description: Add new Column
 *         in: body
 *         type: string
 *         required: true
 *         schema:
 *           $ref: '#/definitions/NewColumn'
 *     responses:
 *       200:
 *         description: New column
 */
router.post("/", Validators.validateColumn, ColumnController.add);

/**
 * @swagger
 * /column:
 *   get:
 *     tags: [Column]
 *     description: Get all columns
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: withTask
 *         description: Get related tasks
 *         in: query
 *         type: boolean
 *     responses:
 *       200:
 *         description: Columns
 */
router.get("/", ColumnController.getAll);

/**
 * @swagger
 * /column/{uuid}:
 *   get:
 *     tags: [Column]
 *     description: Get column by uuid
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: uuid
 *         description: Column id 
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Column
 *       404:
 *         description: Column not found
 */
router.get("/:uuid", Validators.validateUUID, ColumnController.getTasks);

/**
 * @swagger
 * /task:
 *   delete:
 *     tags:
 *        - Task
 *     description: Delete a column
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: uuid
 *         description: Task id
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Description of how many row affected
 */
router.delete("/:uuid", Validators.validateUUID, ColumnController.delete);

export default router;
