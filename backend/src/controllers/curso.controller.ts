import { Response, Request } from "express";
import CursoRepo from "../repository/curso.repo";
import CursoDto from "../dtos/curso.dto";



export let crear = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const cursoDto = new CursoDto(body);
        const cursoRepo = new CursoRepo();
        const nuevoPrograma = await cursoRepo.create(cursoDto);
        res.json({
            ok: true,
            data: nuevoPrograma,
            message: 'Programa creado con éxito',
            error: null
        });
    } catch (err) {
        res.json({
            ok: false,
            error: err,
            message: 'Error al crear programa'
        });
    }
}

export let actualizarPorId = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const cursoRepo = new CursoRepo();
        const curso = await cursoRepo.actualizarPorId(body.id, body);
        res.json({
            ok: true,
            data:curso.valueOf,
            message:'Información de curso actualizada con éxito',
            error:null
        });
    } catch (error) {
        console.log(error);
        res.json({
            ok: false,
            error: error,
            message: 'Error al actualizar información del curso'
        });
    }
}

export let obtener = async (req: Request, res: Response) => {
    try {
        const cursoRepo = new CursoRepo();
        const  curso = await cursoRepo.obtener();
        res.json({
            ok: true,
            data:  curso,
            message: '',
            error: null
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            error: error,
            message: 'Error al obtener curso'
        });
    }
}
