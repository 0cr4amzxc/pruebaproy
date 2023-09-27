import { Router } from "express";
import { getAdmin, getAdmins, createAdmin, updateAdmin, deleteAdmin } from '../controllers/administrador.controllers.js';

const router = Router();

//rutas para cada peticion
router.get("/admin", getAdmins);
router.get("/admin/:id", getAdmin);
router.post("/admin", createAdmin);
router.put("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);

export default router;