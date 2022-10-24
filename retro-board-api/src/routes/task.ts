import express from 'express'
import TaskController from '../controllers/TaskController'
import Validators from '../middlewares/validators'

const router = express.Router()

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
router.post('/', Validators.validateTask, TaskController.add)

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
router.get('/', TaskController.getAll)

/**
 * @swagger
 * /task:
 *   delete:
 *     tags:
 *        - Task
 *     description: Delete a task
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
 *         description: Task deleted
 *       404:
 *         description: Task not found
 */
router.delete('/:uuid', TaskController.delete)

export default router
