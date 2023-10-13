import { Router } from "express";
import {
  getEvt,
  getEvts,
  createEvt,
  updateEvt,
  deleteEvt,
  imgEvt,
} from "../controllers/evento.controllers.js";
import multer from "multer";
import path from "path";


//const diskstorage = multer.diskStorage({
//  destination: path.join(__dirname, "../UploadFiles"),
//  filename: (req,file,cb) => {
//   cb(null, '01'+'evento'+file.originalname)
//  }
//})

const router = Router();

//rutas para cada peticion
router.get("/evento", getEvts);
router.get("/evento/:id", getEvt);
router.post("/evento", createEvt);
router.put("/evento/:id", updateEvt);
router.delete("/evento/:id", deleteEvt);
//prueba subir archivo
router.post("/imgEvento/", imgEvt);

export default router;
