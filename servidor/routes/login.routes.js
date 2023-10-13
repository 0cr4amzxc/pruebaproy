import { Router } from "express";
import { loginUsuario, logoutUsuario } from "../controllers/auth.controllers.js";

const router = Router();

//rutas para cada peticion
router.post("/login", loginUsuario);
router.delete("/logout", logoutUsuario);

export default router;