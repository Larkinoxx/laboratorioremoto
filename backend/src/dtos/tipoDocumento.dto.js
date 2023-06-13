"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TipoDocumentoDto {
    constructor(data) {
        if (!data) {
            this.nombre = "";
            this.descripcion = "";
        }
        else {
            this._id = data.id;
            this.nombre = data.nombre;
            this.descripcion = data.descripcion;
        }
    }
    getId() {
        return this._id;
    }
    getNombre() {
        return this.nombre;
    }
    getDescripcion() {
        return this.descripcion;
    }
}
exports.default = TipoDocumentoDto;
