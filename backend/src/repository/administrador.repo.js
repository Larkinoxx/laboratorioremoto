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
const administradorLogin_dto_1 = __importDefault(require("../dtos/administradorLogin.dto"));
const administrador_model_1 = require("../models/administrador.model");
//import bcrypt from 'bcrypt';
//import Token from "../classes/token";
class AdministradorRepo {
    create(administradorRegistroDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let administradorModel = new administrador_model_1.Administrador({
                    nombreCompleto: administradorRegistroDto.getNombreCompleto(),
                    tipoDocumento: administradorRegistroDto.getTipoDocumento(),
                    numeroDocumento: administradorRegistroDto.getNumeroDocumento(),
                    correoElectronico: administradorRegistroDto.getCorreoElectronico(),
                    activo: administradorRegistroDto.getActivo(),
                    clave: administradorRegistroDto.getClave()
                });
                let administradorCreado = yield administrador_model_1.Administrador.create(administradorModel);
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
                    let administradoresArray = [];
                    let administadoresData = yield administrador_model_1.Administrador.find();
                    administadoresData.forEach(admin => {
                        administradoresArray.push(new administradorLogin_dto_1.default(admin));
                    });
                    resolve(administradoresArray);
                }
                catch (error) {
                    return reject(error);
                }
            }));
        });
    }
    obtenerPorId(administradorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let administrador = yield administrador_model_1.Administrador.findById(administradorId).populate('tipoDocumento');
                return administrador;
            }
            catch (error) {
                console.log(error);
                throw new Error('error al obtener administrador');
            }
        });
    }
    obtenerPorCorreo(correoElectronico) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return administrador_model_1.Administrador.findOne({ correoElectronico: correoElectronico, activo: true }).exec();
            }
            catch (error) {
                console.log(error);
                throw new Error('error al obtener aprendiz');
            }
        });
    }
    actualizarPorId(administradorId, administrador) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let administradorActualizado = yield administrador_model_1.Administrador.findByIdAndUpdate(administradorId, Object.assign({}, administrador));
                console.log('devuelve: ', administradorActualizado);
                return true;
            }
            catch (error) {
                throw new Error('error al actualizar el administrador');
            }
        });
    }
    actualizarPorCorreo(correoElectronico, administrador) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield administrador_model_1.Administrador.updateOne({ correoElectronico: correoElectronico }, Object.assign({}, administrador));
                return true;
            }
            catch (error) {
                throw new Error('Error al actualizar el aprendiz');
            }
        });
    }
}
exports.default = AdministradorRepo;
