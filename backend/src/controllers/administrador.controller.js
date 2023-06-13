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
exports.obtenerPorId = exports.obtener = exports.actualizarPorId = exports.create = void 0;
const administradorRegistro_dto_1 = __importDefault(require("../dtos/administradorRegistro.dto"));
const administrador_repo_1 = __importDefault(require("../repository/administrador.repo"));
//import EmailSender from "../services/email-sender.service";
let create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        console.log('body:', body);
        const administradorDto = new administradorRegistro_dto_1.default(body);
        console.log('dto', administradorDto);
        const administradorRepo = new administrador_repo_1.default();
        const nuevoAdministrador = yield administradorRepo.create(administradorDto);
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
    }
    catch (error) {
        res.json({
            ok: false,
            error: error,
            message: 'Error al crear nuevo administrador: ' + error.message
        });
    }
});
exports.create = create;
let actualizarPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const administradorRepo = new administrador_repo_1.default();
        const answ = yield administradorRepo.actualizarPorId(body.id, body);
        res.json({
            ok: true,
            data: answ,
            message: 'Información administrador actualizada con éxito',
            error: null
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            ok: false,
            error: error,
            message: 'Error al actualizar información de administrador'
        });
    }
});
exports.actualizarPorId = actualizarPorId;
let obtener = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const administradorRepo = new administrador_repo_1.default();
        const administradores = yield administradorRepo.obtener();
        return res.json({
            ok: true,
            data: administradores,
            message: '',
            error: null
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            error: error,
            message: 'Error al obtener administradores'
        });
    }
});
exports.obtener = obtener;
let obtenerPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const administradorId = req.params.id;
    try {
        const administradorRepo = new administrador_repo_1.default();
        const administrador = yield administradorRepo.obtenerPorId(administradorId);
        res.json({
            ok: true,
            data: administrador,
            message: '',
            error: null
        });
    }
    catch (error) {
        res.status(404).json({
            ok: false,
            error: error,
            message: 'Error al obtener administrador'
        });
    }
});
exports.obtenerPorId = obtenerPorId;
