"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrador = void 0;
const mongoose_1 = require("mongoose");
const administradorSchema = new mongoose_1.Schema({
    nombreCompleto: {
        type: String,
        required: [true, 'El nombre completo es necesario']
    },
    tipoDocumento: {
        type: mongoose_1.Schema.Types.ObjectId, ref: "TipoDocumento",
        required: [true, 'El tipo de documento es necesario']
    },
    numeroDocumento: {
        type: String,
        unique: true,
        required: [true, 'El documento es necesario']
    },
    correoElectronico: {
        type: String,
        unique: true,
        required: [true, 'El correo electrónico es necesario']
    },
    activo: {
        type: Boolean,
        required: [true, 'El estado es necesario']
    },
    clave: {
        type: String,
    }
});
;
exports.Administrador = (0, mongoose_1.model)('Administrador', administradorSchema, 'administradores');
