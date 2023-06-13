"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestDto {
    constructor(data) {
        if (!data) {
            this.nombre = "";
            this.cantidad = 0;
            this.activo = false;
        }
        else {
            this._id = data.id;
            this.nombre = data.nombre;
            this.cantidad = data.cantidad;
            this.activo = data.activo;
        }
    }
    getId() {
        return this._id;
    }
    getNombre() {
        return this.nombre;
    }
    getCantidad() {
        return this.cantidad;
    }
    getActivo() {
        return this.activo;
    }
}
exports.default = TestDto;
