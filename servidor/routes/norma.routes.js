import { Router } from "express";
import {
  getNorma,
  getNormas,
  createNorma,
  updateNorma,
  deleteNorma
} from "../controllers/norma.controllers.js";

const router = Router();

//rutas para cada peticion
router.get("/norma", getNormas);
router.get("/norma/:id", getNorma);
router.post("/norma", createNorma);
router.put("/norma/:id", updateNorma);
router.delete("/norma/:id", deleteNorma);

export default router;