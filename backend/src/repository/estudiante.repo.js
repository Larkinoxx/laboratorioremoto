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
const estudianteRegistro_dto_1 = __importDefault(require("../dtos/estudianteRegistro.dto"));
const estudiante_model_1 = require("../models/estudiante.model");
class EstudianteRepo {
    create(estudianteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let estudianteModel = new estudiante_model_1.Estudiante({
                    nombreCompleto: estudianteDto.getNombreCompleto(),
                    tipoDocumento: estudianteDto.getTipoDocumento(),
                    numeroDocumento: estudianteDto.getNumeroDocumento(),
                    correoElectronico: estudianteDto.getCorreoElectronico(),
                    codigoEstudiante: estudianteDto.getCodigoEstudiante(),
                    clave: estudianteDto.getClave(),
                    activo: estudianteDto.getActivo()
                });
                let estudianteCreado = yield estudiante_model_1.Estudiante.create(estudianteModel);
                return true;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    obtener() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let estudianteArray = [];
                    let estudianteData = yield estudiante_model_1.Estudiante.find();
                    estudianteData.forEach(estudiante => {
                        estudianteArray.push(new estudianteRegistro_dto_1.default(estudiante));
                    });
                    resolve(estudianteArray);
                }
                catch (error) {
                    return reject(error);
                }
            }));
        });
    }
    obtenerPorId(estudianteId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let estudiante = yield estudiante_model_1.Estudiante.findById(estudianteId).populate('tipoDocumento').exec();
                return estudiante;
            }
            catch (error) {
                console.log(error);
                throw new Error('error al obtener estudiante');
            }
        });
    }
    obtenerPorcorreo(correoElectronico) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return estudiante_model_1.Estudiante.findOne({ correoElectronico: correoElectronico, activo: true }).populate([{
                        path: 'tipoDocumento'
                    }]).exec();
            }
            catch (error) {
                console.log(error);
                throw new Error('error al obtener estudiante');
            }
        });
    }
    actualizarPorId(estudianteId, estudiante) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let estudianteActualizado = yield estudiante_model_1.Estudiante.findByIdAndUpdate(estudianteId, Object.assign({}, estudiante));
                console.log('devuelve: ', estudianteActualizado);
                return true;
            }
            catch (error) {
                console.log(error);
                throw new Error('error al obtener estudiante');
            }
        });
    }
    actualizarPorCorreo(correoElectronico, estudiante) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield estudiante_model_1.Estudiante.updateOne({ correoElectronico: correoElectronico }, Object.assign({}, estudiante));
                return true;
            }
            catch (error) {
                throw new Error('Error al actualizar el estudiante');
            }
        });
    }
}
exports.default = EstudianteRepo;
