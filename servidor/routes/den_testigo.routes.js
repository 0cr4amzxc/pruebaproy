import { Router } from "express";
import {
    getDenTestigos,
    createDenTest,
} from "../controllers/den_testigo.controllers.js";

const router = Router();

router.get("/den_testigo", getDenTestigos);
router.post("/den_testigo", createDenTest);

export default router;
