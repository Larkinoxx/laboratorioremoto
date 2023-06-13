import { Response, Request} from "express";
import TipoDocumentoRepo from "../repository/tipoDocumento.repo";


export let obtener = async (req: Request, res: Response) => {
    try {
        const tipoDocumentoRepo = new TipoDocumentoRepo();

        const documentos = await tipoDocumentoRepo.obtener();

        return res.json({
            ok:true,
            data: documentos,
            message: '',
            error: null
        });

    } catch (error) {
        res.status(400).json({
            ok: false,
            error: error,
            message: 'Error al obtener documentos'
        });
    }
}