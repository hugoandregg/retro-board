import express from "express";
import TaskController from "../controllers/TaskController";
import Validators from "../middlewares/validators";


const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Task
 *     description: Task related endpoints
 */

/**
 * @swagger
 * definitions:
 *   NewTask:
 *     type: object
 *     required:
 *       - columnId
 *       - content
 *     properties:
 *       columnId:
 *         type: string
 *       content:
 *         type: string
 */

/**
 * @swagger
 * /task:
 *   post:
 *     tags: [Task]
 *     description: Add new task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Task
 *         description: Add new task
 *         in: body
 *         type: string
 *         required: true
 *         schema:
 *           $ref: '#/definitions/NewTask'
 *     responses:
 *       200:
 *         description: New task
 */
router.post("/", Validators.validateTask, TaskController.add);

/**
 * @swagger
 * /task:
 *   get:
 *     tags:
 *        - Task
 *     description: Get all task
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: All tasks
 */
router.get("/", TaskController.getAll);

export default router;
