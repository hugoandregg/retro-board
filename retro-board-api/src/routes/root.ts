import express, { Response } from "express";

const router = express.Router();

router.get("/", (_, response: Response) => {
  response.send("Hello world!");
});

export default router;
