import { Router } from "express";
import {
  getEvt,
  getEvts,
  createEvt,
  updateEvt,
  deleteEvt,
} from "../controllers/evento.controllers.js";

const router = Router();

//rutas para cada peticion
router.get("/evento", getEvts);
router.get("/evento/:id", getEvt);
router.post("/evento", createEvt);
router.put("/evento/:id", updateEvt);
router.delete("/evento/:id", deleteEvt);

export default router;
