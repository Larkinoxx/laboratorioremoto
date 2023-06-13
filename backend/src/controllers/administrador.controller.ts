
import { Response, Request} from "express";
import AdministradorRegistroDto from '../dtos/administradorRegistro.dto';
import administradorRepo from "../repository/administrador.repo";
import AdministradorRepo from '../repository/administrador.repo';
//import EmailSender from "../services/email-sender.service";




export let create = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        console.log('body:', body);
        const administradorDto = new AdministradorRegistroDto(body);
        console.log('dto', administradorDto);
        const administradorRepo = new AdministradorRepo();
        const nuevoAdministrador = await administradorRepo.create(administradorDto);
        /*
        if (nuevoAdministrador) {
            let servicioCorreo = new EmailSender();

            servicioCorreo.enviarCorreoConfirmacionRegistroAdministrador(administradorDto, body.urlRegistro);
        }
        */
        res.json({
            ok: true,
            data: nuevoAdministrador,
            message: 'Administrador creado con éxito',
            error: null
        });
    } catch (error: any) {
        res.json({
            ok: false,
            error: error,
            message: 'Error al crear nuevo administrador: ' + error.message
        });
    }

}

export let actualizarPorId = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const administradorRepo = new AdministradorRepo();
        const answ = await administradorRepo.actualizarPorId(body.id, body);
        res.json({
            ok: true,
            data: answ,
            message: 'Información administrador actualizada con éxito',
            error: null
        });
    } catch (error) {
        console.log(error);
        res.json({
            ok:false,
            error: error,
            message: 'Error al actualizar información de administrador'
        });
    }

}

export let obtener = async (req: Request, res: Response) => {
    try {
        const administradorRepo = new AdministradorRepo();
        const administradores = await administradorRepo.obtener();
        return res.json({
            ok: true,
            data: administradores,
            message: '',
            error: null
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error: error,
            message: 'Error al obtener administradores'
        });
    }
}

export let obtenerPorId = async (req: Request, res: Response) => {
    const administradorId = req.params.id;
    try {
        const administradorRepo = new AdministradorRepo();
        const administrador = await administradorRepo.obtenerPorId(administradorId);
        res.json({
            ok: true,
            data: administrador,
            message: '',
            error: null
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            error: error,
            message: 'Error al obtener administrador'
        });
    }

}