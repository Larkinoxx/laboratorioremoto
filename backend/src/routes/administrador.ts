import { Router } from "express";

import * as controller from "../controllers/administrador.controller";


const administradorRoutes = Router();


administradorRoutes.post('/crear', controller.create);
administradorRoutes.post('/actualizarPorId', controller.actualizarPorId);
administradorRoutes.get('/obtener', controller.obtener);
administradorRoutes.get('/obtener/:id', controller.obtenerPorId);


export default administradorRoutes;