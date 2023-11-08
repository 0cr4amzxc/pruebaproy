import { Router } from "express";
import {
  getVictima,
  getVictimas,
  createVictima,
  updateVictima,
  deleteVictima,
} from "../controllers/victima.controllers.js";

const router = Router();

router.get("/victima", getVictimas);
router.get("/victima/:id", getVictima);
router.post("/victima", createVictima);
router.put("/victima/:id", updateVictima);
router.delete("/victima/:id", deleteVictima);

export default router;
