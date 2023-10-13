import { Router } from "express";
import { getCuest,
getCuests,
createCuest,
updateCuest,
deleteCuest } from "../controllers/cuestionario.controllers.js";


const router = Router();


router.get("/cuestionario", getCuests)
router.get("/cuestionario/:id", getCuest);
router.post("/cuestionario", createCuest);
router.put("/cuestionario/:id", updateCuest);
router.delete("/cuestionario/:id", deleteCuest);

export default router;