"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CursoDto {
    constructor(data) {
        if (!data) {
            this.nombreCurso = "";
            this.codigoCurso = "";
            this.activo = false;
        }
        else {
            this._id = data.id;
            this.nombreCurso = data.nombreCurso;
            this.codigoCurso = data.codigoCurso;
            this.activo = data.activo;
        }
    }
    getId() {
        return this._id;
    }
    getNombreCurso() {
        return this.nombreCurso;
    }
    getCodigoCurso() {
        return this.codigoCurso;
    }
    getActivo() {
        return this.activo;
    }
}
exports.default = CursoDto;
