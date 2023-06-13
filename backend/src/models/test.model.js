"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const mongoose_1 = require("mongoose");
const testSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
    },
    cantidad: {
        type: Number,
    },
    activo: {
        type: Boolean
    }
});
exports.Test = (0, mongoose_1.model)('Test', testSchema, 'test');
