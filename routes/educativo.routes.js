import { Router } from "express";
import {
  getEducativo,
  getEducativos,
  createEducativo,
  updateEducativo,
  deleteEducativo
} from "../controllers/educativo.controllers.js";

const router = Router();

//rutas para cada peticion
router.get("/edu", getEducativos);
router.get("/edu/:id", getEducativo);
router.post("/edu", createEducativo);
router.put("/edu/:id", updateEducativo);
router.delete("/edu/:id", deleteEducativo);

export default router;