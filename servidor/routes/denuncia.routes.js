import { Router } from "express";
import {
  getDenuncia,
  getDenuncias,
  createDenuncia,
  updateDenuncia,
  deleteDenuncia,
  getDenunciaCartesiano
} from "../controllers/denuncia.controllers.js";

const router = Router();

router.get("/denuncia", getDenuncias);
//router.get("/denuncia/:id", getDenuncia);
router.get("/denuncia/Completo/:id", getDenunciaCartesiano);
router.post("/denuncia", createDenuncia);
router.put("/denuncia/:id", updateDenuncia);
router.delete("/denuncia/:id", deleteDenuncia);

export default router;
