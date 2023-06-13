import { Router, Request, Response} from "express";
import * as controller from "../controllers/curso.controller";




const cursoRoutes = Router();

cursoRoutes.post('/crear', controller.crear);
cursoRoutes.post('/actualizarPorId', controller.actualizarPorId);
cursoRoutes.get('/obtener', controller.obtener);




export default cursoRoutes;