import express from "express";
import TIENDAcontroller from "../controller/TIENDA.controller.js";

const router = express.Router();
//endpoints para la API TIENDA

router.get('/TIENDA/:id', TIENDAcontroller.getTIENDAById);
router.post('/TIENDA', TIENDAcontroller.createTIENDA);
router.put('/TIENDA/:id', TIENDAcontroller.updateTienda);
router.delete('/TIENDA/:id', TIENDAcontroller.deleteTienda);

export default router