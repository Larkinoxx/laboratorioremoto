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
exports.obtenerTestEstado = exports.obtenerTest = exports.create = void 0;
const test_dto_1 = __importDefault(require("../dtos/test.dto"));
const test_repo_1 = __importDefault(require("../repository/test.repo"));
let create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const testDto = new test_dto_1.default(body);
        const testRepository = new test_repo_1.default();
        const answ = yield testRepository.crear(testDto);
        res.json({
            ok: true,
            data: answ,
            message: 'Creado con éxito',
            error: null
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            ok: false,
            error: error,
            message: 'Error al crear un test'
        });
    }
});
exports.create = create;
let obtenerTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let testRepository = new test_repo_1.default();
        let tests = yield testRepository.obtenerTest();
        res.json({
            ok: true,
            data: tests,
            message: 'Todo ok',
            error: null
        });
    }
    catch (error) {
        res.json({
            ok: false,
            error: error,
            message: 'ocurrió un problema al traer los datos'
        });
    }
});
exports.obtenerTest = obtenerTest;
let obtenerTestEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testEstado = req.params.activo;
        console.log("test cosa : ", testEstado);
        let testRepository = new test_repo_1.default();
        let tests = yield testRepository.obtenerTestEstado(JSON.parse(testEstado));
        res.json({
            ok: true,
            data: tests,
            error: null,
            message: "prueba exitosa"
        });
    }
    catch (error) {
        res.json({
            ok: false,
            error: error,
            message: "fiasco de prueba"
        });
    }
});
exports.obtenerTestEstado = obtenerTestEstado;
