

export default class CursoDto {
    private _id?: string;
    private nombreCurso: string;
    private codigoCurso: string; 
    private activo: boolean;

    constructor(data?: any) {
        if (!data) {
            this.nombreCurso = "";
            this.codigoCurso = "";
            this.activo = false;
        } else {
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
