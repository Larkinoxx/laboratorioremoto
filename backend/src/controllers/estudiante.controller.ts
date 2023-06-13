import { log } from "console";
import EstudianteRegistroDto from "../dtos/estudianteRegistro.dto";
import estudianteRepo from "../repository/estudiante.repo";
import EstudianteRepo from "../repository/estudiante.repo";
import { Response, Request } from "express";


export let create = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        console.log('body:', body);
        const estudianteDto = new EstudianteRegistroDto(body);
        console.log('dto: ', estudianteDto);
        const estudianteRepo = new EstudianteRepo();
        const nuevoEstudiante = await estudianteRepo.create(estudianteDto);
        /*
        if (nuevoEstudiante) {
            let servicioCorreo = new EmailSender();
            servicioCorreo.enviarCorreoConfirmacionRegistroAprendiz(estudianteDto, body.urlRegistro);
        }
        */
        res.json({
            ok: true,
            data: nuevoEstudiante,
            message: 'Creado con éxito',
            error: null
        });
    } catch (error: any) {
        res.json({
            ok: false,
            error: error,
            message: 'Error al crear nuevo estudiante: ' + error.message
        });
    }

}

export let actualiZarPorId = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const estudianteRepo = new EstudianteRepo();
        const answ = await estudianteRepo.actualizarPorId(body.id, body);
        res.json({
            ok: true,
            data: answ,
            message: 'Información estudiante actualizada con éxito',
            error: null
        });
    } catch (error) {
        console.log(error);
        res.json({
            ok: false,
            error: error,
            message: 'Error al actualizar información de estudiante'
        });
    }

}

/*
export let registroMasivo = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        console.log('body:', body);
        for (let i = 0; i < body.json_estudiantes.length; i++) {
            const estudianteDto = new EstudianteRegistroDto(body.json_estudiantes[i]);
            console.log('dto: ', estudianteDto);
            const estudianteRepo = new EstudianteRepo();
            try {
                console.log("antes de nuevo estudiante")
                const nuevoEstudiante = await estudianteRepo.create(estudianteDto);
                if (nuevoEstudiante) {
                    console.log("Configurar texto correo");
                    //let servicioCorreo = new EmailSender();
                    //servicioCorreo.enviarCorreoConfirmacionRegistroEstudiante(estudianteDto, body.urlRegistro);
                }
            } catch (error) {
                res.json({
                    ok: false,
                    error: error,
                    message: 'Error al hacer registro masivo de estudiantes'
                });
                return
            }
        }
        res.json({
            ok: true,
            data: true,
            message: 'Registro masivo de estudiantes exitoso',
            error: null
        });

    } catch (error) {
        res.json({
            ok: false,
            error: error,
            message: 'Error al hacer registro masivo de aprendices'
        });
    }
}
*/

export let obtener = async (req: Request, res: Response) => {
    try {
        const estudianteRepo = new EstudianteRepo();
        const estudiantes = await estudianteRepo.obtener();
        res.json({
            ok: true,
            data: estudiantes,
            message: '',
            error: null
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error: error,
            message: 'Error al obtener estudiantes'
        });
    }
}

export let obtenerPorId = async (req: Request, res: Response) => {
    const estudianteId = req.params.id;
    try {
        const estudianteRepo = new EstudianteRepo();
        const estudiante = await estudianteRepo.obtenerPorId(estudianteId);
        res.json({
            ok: true,
            data: estudiante,
            message: '',
            error: null
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            error: error,
            message: 'Error al obtener estudiante'
        });
    }
}
