import { Router } from "express";
import {
  getContEmer,
  getContsEmer,
  createCont,
  updateCont,
  deleteCont,
} from "../controllers/contactoemergencia.controllers.js";

const router = Router();

router.get("/contactoEm", getContsEmer);
router.get("/contactoEm/:id", getContEmer);
router.post("/contactoEm", createCont);
router.put("/contactoEm/:id", updateCont);
router.delete("/contactoEm/:id", deleteCont);

export default router;

