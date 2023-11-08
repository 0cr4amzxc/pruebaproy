import { Router } from "express";
import {
  getTestigo,
  getTestigos,
  createTest,
  updateTest,
  deleteTest,
} from "../controllers/testigo.controllers.js";

const router = Router();

router.get("/testigo", getTestigos);
router.get("/testigo/:id", getTestigo);
router.post("/testigo", createTest);
router.put("/testigo/:id", updateTest);
router.delete("/testigo/:id", deleteTest);

export default router;
