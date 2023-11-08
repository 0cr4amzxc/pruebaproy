import { Router } from "express";
import {
  getPrueba,
  getPruebas,
  createPrueba,
  updatePrueba,
  deletePrueba,
} from "../controllers/prueba.controllers.js";

const router = Router();

router.get("/prueba", getPruebas);
router.get("/prueba/:id", getPrueba);
router.post("/prueba", createPrueba);
router.put("/prueba/:id", updatePrueba);
router.delete("/prueba/:id", deletePrueba);

export default router;
