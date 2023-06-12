export default class EstudianteRegistroDto {

    constructor(data){
        if (!data) {
            this.nombreCompleto = "";
            this.tipoDocumento = "";
            this.numeroDocumento = "";
            this.correoElectronico = "";
            this.codigoEstudiante = "";
            this.clave = "";
            this.activo = false;
        } else {
            this._id = data.id;
            this.nombreCompleto = data.nombreCompleto;
            this.tipoDocumento = data.tipoDocumento;;
            this.numeroDocumento = data.numeroDocumento;
            this.correoElectronico = data.correoElectronico;;
            this.clave = data.clave;
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

    getClave(){
        return this.clave;
    }

    getActivo(){
        return this.activo;
    }

}