"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdministradorLoginDto {
    constructor(data) {
        if (!data) {
            this.nombreCompleto = "";
            this.tipoDocumento = "";
            this.numeroDocumento = "";
            this.correoElectronico = "";
            this.activo = false;
        }
        else {
            this._id = data.id;
            this.nombreCompleto = data.nombreCompleto;
            this.tipoDocumento = data.tipoDocumento;
            this.numeroDocumento = data.numeroDocumento;
            this.correoElectronico = data.correoElectronico;
            this.activo = data.activo;
        }
    }
    getId() {
        return this._id;
    }
    getNombreCompleto() {
        return this.nombreCompleto;
    }
    getTipoDocumento() {
        return this.tipoDocumento;
    }
    getNumeroDocumento() {
        return this.numeroDocumento;
    }
    getCorreoElectronico() {
        return this.correoElectronico;
    }
    getActivo() {
        return this.activo;
    }
}
exports.default = AdministradorLoginDto;
