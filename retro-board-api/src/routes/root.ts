import express, { Response } from "express";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Root
 *     description: Root endpoints
 */

/**
 * @swagger
 * /:
 *   get:
 *     tags: [Root]
 *     description: Basic response
 *     produces:
 *       - text/plain
 *     responses:
 *       200:
 *         description: Hello world
 */
router.get("/", (_, response: Response) => {
  response.send("Hello world!");
});

export default router;
