import { Router } from "express";
import {
  getAcusado,
  getAcusados,
  createAcu,
  updateAcu,
  deleteAcu,
} from "../controllers/acusado.controllers.js";

const router = Router();

router.get("/acusado", getAcusados);
router.get("/acusado/:id", getAcusado);
router.post("/acusado", createAcu);
router.put("/acusado/:id", updateAcu);
router.delete("/acusado/:id", deleteAcu);

export default router;
