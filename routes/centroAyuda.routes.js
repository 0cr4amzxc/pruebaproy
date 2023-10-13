import { Router } from "express";
import {
  getCentro,
  getCentros,
  createCentro,
  updateCentro,
  deleteCentro,
} from "../controllers/centroAyuda.controllers.js";

const router = Router();

router.get("/centroAyuda", getCentros);
router.get("/centroAyuda/:id", getCentro);
router.post("/centroAyuda", createCentro);
router.put("/centroAyuda/:id", updateCentro);
router.delete("/centroAyuda/:id", deleteCentro);

export default router;
