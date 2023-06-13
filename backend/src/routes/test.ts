import { Router, Request, Response } from "express";
import * as controller from "../controllers/test.controller";


const testRoutes = Router();


testRoutes.post('/crear', controller.create);
testRoutes.get('/obtenerTest', controller.obtenerTest);
testRoutes.get('/obtenerTestEstado/:activo', controller.obtenerTestEstado);



export default testRoutes;
