import { Router } from "express";
import {
  getLugar,
  getLugares,
  createLugar,
  updateLugar,
  deleteLugar,
} from "../controllers/lugar.controllers.js";

const router = Router();

router.get("/lugar", getLugares);
router.get("/lugar/:id", getLugar);
router.post("/lugar", createLugar);
router.put("/lugar/:id", updateLugar);
router.delete("/lugar/:id", deleteLugar);

export default router;
