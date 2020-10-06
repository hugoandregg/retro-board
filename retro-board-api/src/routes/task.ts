import express from "express";

import Validators from "../middlewares/validators";
import TaskController from "../controllers/TaskController";

const router = express.Router();

router.post("/", Validators.validateTask, TaskController.add);

export default router;
