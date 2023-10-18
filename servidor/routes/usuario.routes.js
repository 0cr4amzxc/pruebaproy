import { Router } from "express";
import {
  getUsuario,
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuario.controllers.js";
import { verificarSesionActiva, verificarAdmin } from "../middleware/auth.js";

const router = Router();

//rutas para cada peticion
//router.get("/usuario", verificarSesionActiva, verificarAdmin, getUsuarios);
router.get("/usuario",verificarSesionActiva, verificarAdmin, getUsuarios);
router.get("/usuario/:id",verificarSesionActiva, verificarAdmin, getUsuario);
//router.post("/usuario",createUsuario);
router.post("/usuario", verificarAdmin,createUsuario);
router.put("/usuario/:id", verificarSesionActiva,verificarAdmin,updateUsuario);
router.delete("/usuario/:id", verificarSesionActiva,verificarAdmin,deleteUsuario);

export default router;