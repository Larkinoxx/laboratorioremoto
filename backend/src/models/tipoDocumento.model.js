"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoDocumento = void 0;
const mongoose_1 = require("mongoose");
const tipoDocumentoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
    },
    descripcion: {
        type: String,
    },
});
exports.TipoDocumento = (0, mongoose_1.model)('TipoDocumento', tipoDocumentoSchema, 'tipos-documentos');
