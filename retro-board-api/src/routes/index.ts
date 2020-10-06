import express from "express";

import root from "./root";
import column from "./column";
import task from "./task";

const router = express.Router();

router.use("/", root);
router.use("/column", column);
router.use("/task", task);

export default router;
