"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPorId = exports.obtener = exports.actualiZarPorId = exports.create = void 0;
const estudianteRegistro_dto_1 = __importDefault(require("../dtos/estudianteRegistro.dto"));
const estudiante_repo_1 = __importDefault(require("../repository/estudiante.repo"));
let create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        console.log('body:', body);
        const estudianteDto = new estudianteRegistro_dto_1.default(body);
        console.log('dto: ', estudianteDto);
        const estudianteRepo = new estudiante_repo_1.default();
        const nuevoEstudiante = yield estudianteRepo.create(estudianteDto);
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
    }
    catch (error) {
        res.json({
            ok: false,
            error: error,
            message: 'Error al crear nuevo estudiante: ' + error.message
        });
    }
});
exports.create = create;
let actualiZarPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const estudianteRepo = new estudiante_repo_1.default();
        const answ = yield estudianteRepo.actualizarPorId(body.id, body);
        res.json({
            ok: true,
            data: answ,
            message: 'Información estudiante actualizada con éxito',
            error: null
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            ok: false,
            error: error,
            message: 'Error al actualizar información de estudiante'
        });
    }
});
exports.actualiZarPorId = actualiZarPorId;
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
let obtener = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estudianteRepo = new estudiante_repo_1.default();
        const estudiantes = yield estudianteRepo.obtener();
        res.json({
            ok: true,
            data: estudiantes,
            message: '',
            error: null
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            error: error,
            message: 'Error al obtener estudiantes'
        });
    }
});
exports.obtener = obtener;
let obtenerPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estudianteId = req.params.id;
    try {
        const estudianteRepo = new estudiante_repo_1.default();
        const estudiante = yield estudianteRepo.obtenerPorId(estudianteId);
        res.json({
            ok: true,
            data: estudiante,
            message: '',
            error: null
        });
    }
    catch (error) {
        res.status(404).json({
            ok: false,
            error: error,
            message: 'Error al obtener estudiante'
        });
    }
});
exports.obtenerPorId = obtenerPorId;
