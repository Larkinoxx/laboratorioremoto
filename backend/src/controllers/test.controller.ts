import TestDto from "../dtos/test.dto";
import { Response, Request } from "express";
import TestRepo from "../repository/test.repo";


export let create = async (req: Request, res: Response) => {
    try {
        const body = req.body;

        const testDto = new TestDto(body);
        const testRepository = new TestRepo();
        const answ = await testRepository.crear(testDto);

        res.json({
            ok: true,
            data: answ,
            message: 'Creado con éxito',
            error: null
        });

    } catch (error) {
        console.log(error);
        
        res.json({
            ok: false,
            error: error,
            message: 'Error al crear un test'
        });
    }
  

}


export let obtenerTest = async (req: Request, res: Response) => {
    try {
        let testRepository = new TestRepo();

        let tests = await testRepository.obtenerTest();

        res.json({
            ok: true,
            data: tests,
            message: 'Todo ok',
            error: null
        })

    } catch (error) {
        res.json({
            ok: false,
            error: error,
            message: 'ocurrió un problema al traer los datos'
        })
    }
}

export let obtenerTestEstado = async(req: Request, res: Response) => {

    try {
        const testEstado = req.params.activo;
        console.log("test cosa : ", testEstado);
        let testRepository = new TestRepo();
        let tests = await testRepository.obtenerTestEstado(JSON.parse(testEstado));
        res.json({
            ok: true,
            data: tests,
            error: null,
            message: "prueba exitosa"
        })
    } catch (error) {
        res.json({ 
            ok:false,
            error: error,
            message: "fiasco de prueba"
        })
    }
} 