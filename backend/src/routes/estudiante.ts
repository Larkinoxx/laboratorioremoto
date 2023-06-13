import { Router } from "express";

import * as controller from "../controllers/estudiante.controller";


const estudianteRoutes = Router();


estudianteRoutes.post('/crear', controller.create);
estudianteRoutes.post('/actualizarPorId', controller.actualiZarPorId);
estudianteRoutes.get('/obtener', controller.obtener);
estudianteRoutes.get('/obtener/:id', controller.obtenerPorId);
//estudianteRoutes.post('/registroMasivo', controller.registroMasivo);


export default estudianteRoutes;