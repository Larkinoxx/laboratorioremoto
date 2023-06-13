export default class EstudianteLoginDto {

    private _id?: string;
    private nombreCompleto: string;
    private tipoDocumento: string;
    private numeroDocumento: string;
    private correoElectronico: string;
    private codigoEstudiante: string;
    private activo: boolean;

    constructor(data?: any){
        if (!data) {
            this.nombreCompleto = "";
            this.tipoDocumento = "";
            this.numeroDocumento = "";
            this.correoElectronico = "";
            this.codigoEstudiante = "";
            this.activo = false;
        } else {
            this._id = data.id;
            this.nombreCompleto = data.nombreCompleto;
            this.tipoDocumento = data.tipoDocumento;;
            this.numeroDocumento = data.numeroDocumento;
            this.correoElectronico = data.correoElectronico;
            this.codigoEstudiante = data.codigoEstudiante;
            this.activo = data.activo;
        }
    }

    getId(){
        return this._id;
    }

    getNombreCompleto(){
        return this.nombreCompleto;
    }

    getTipoDocumento(){
        return this.tipoDocumento;
    }

    getNumeroDocumento(){
        return this.numeroDocumento;
    }

    getCorreoElectronico(){
        return this.correoElectronico;
    }

    getCodigoEstudiante(){
        return this.codigoEstudiante;
    }

    getActivo(){
        return this.activo;
    }

}