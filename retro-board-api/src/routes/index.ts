import express from "express";

import root from "./root";
import column from "./column";

const router = express.Router();

router.use("/", root);
router.use("/column", column);

export default router;
