"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const mongoose_1 = require("mongoose");
const estudianteSchema = new mongoose_1.Schema({
    nombreCompleto: {
        type: String,
    },
    tipoDocumento: {
        type: String,
    },
    numeroDocumento: {
        type: String,
    },
    correoElectronico: {
        type: String,
    },
    codigoEstudiante: {
        type: String,
    },
    clave: {
        type: String,
    },
    activo: {
        type: Boolean
    }
});
exports.Estudiante = (0, mongoose_1.model)('Estudiante', estudianteSchema, 'estudiantes');
