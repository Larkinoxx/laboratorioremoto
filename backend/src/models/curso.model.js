"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
const mongoose_1 = require("mongoose");
const cursoSchema = new mongoose_1.Schema({
    nombreCurso: {
        type: String,
        required: [true, 'El nombre del programa de formación es necesario']
    },
    codigoCurso: {
        type: String,
        unique: true,
        required: [true, 'El código del programa de formación es necesario']
    },
    activo: {
        type: Boolean
    }
});
;
exports.Curso = (0, mongoose_1.model)('Curso', cursoSchema, 'cursos');
