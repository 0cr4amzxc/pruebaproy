import { Router } from "express";
import {
  getUsuario,
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuario.controllers.js";

const router = Router();

//rutas para cada peticion
router.get("/usuario", getUsuarios);
router.get("/usuario/:id", getUsuario);
router.post("/usuario", createUsuario);
router.put("/usuario/:id", updateUsuario);
router.delete("/usuario/:id", deleteUsuario);

export default router;
