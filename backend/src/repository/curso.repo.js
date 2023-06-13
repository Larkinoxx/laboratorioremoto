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
const curso_dto_1 = __importDefault(require("../dtos/curso.dto"));
const curso_model_1 = require("../models/curso.model");
class CursoRepo {
    create(cursoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cursoModel = new curso_model_1.Curso({
                    nombreCurso: cursoDto.getNombreCurso(),
                    codigoCurso: cursoDto.getCodigoCurso(),
                    activo: cursoDto.getActivo(),
                });
                let respuesta = yield curso_model_1.Curso.create(cursoModel);
                return true;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    actualizarPorId(curso, cursos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cursoActualizado = yield curso_model_1.Curso.findByIdAndUpdate(curso, Object.assign({}, cursos));
                console.log('devuelve: ', cursoActualizado);
                return true;
            }
            catch (error) {
                console.log(error);
                throw new Error('Error al actualizar curso');
            }
        });
    }
    obtener() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let cursoArray = [];
                    let cursoData = yield curso_model_1.Curso.find();
                    cursoData.forEach(nCurso => {
                        cursoArray.push(new curso_dto_1.default(nCurso));
                    });
                    resolve(cursoArray);
                }
                catch (error) {
                    return reject(error);
                }
            }));
        });
    }
}
exports.default = CursoRepo;
