import { Router, Request, Response } from "express";
import * as controller from "../controllers/tipoDocumento.controller";

const tipoDocumentoRoutes = Router();


tipoDocumentoRoutes.get('/obtener', controller.obtener);





export default tipoDocumentoRoutes;