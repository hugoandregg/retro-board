import express from "express";

import ColumnController from "../controllers/ColumnController";
import Validators from "../middlewares/validators";

const router = express.Router();

router.post("/", Validators.validateColumn, ColumnController.add);

export default router;
