import express from "express";
import TaskController from "../controllers/TaskController";
import Validators from "../middlewares/validators";


const router = express.Router();

router.post("/", Validators.validateTask, TaskController.add);
router.get("/", TaskController.getAll);

export default router;
