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
exports.obtener = exports.actualizarPorId = exports.crear = void 0;
const curso_repo_1 = __importDefault(require("../repository/curso.repo"));
const curso_dto_1 = __importDefault(require("../dtos/curso.dto"));
let crear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const cursoDto = new curso_dto_1.default(body);
        const cursoRepo = new curso_repo_1.default();
        const nuevoPrograma = yield cursoRepo.create(cursoDto);
        res.json({
            ok: true,
            data: nuevoPrograma,
            message: 'Programa creado con éxito',
            error: null
        });
    }
    catch (err) {
        res.json({
            ok: false,
            error: err,
            message: 'Error al crear programa'
        });
    }
});
exports.crear = crear;
let actualizarPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const cursoRepo = new curso_repo_1.default();
        const curso = yield cursoRepo.actualizarPorId(body.id, body);
        res.json({
            ok: true,
            data: curso.valueOf,
            message: 'Información de curso actualizada con éxito',
            error: null
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            ok: false,
            error: error,
            message: 'Error al actualizar información del curso'
        });
    }
});
exports.actualizarPorId = actualizarPorId;
let obtener = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cursoRepo = new curso_repo_1.default();
        const curso = yield cursoRepo.obtener();
        res.json({
            ok: true,
            data: curso,
            message: '',
            error: null
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            error: error,
            message: 'Error al obtener curso'
        });
    }
});
exports.obtener = obtener;
