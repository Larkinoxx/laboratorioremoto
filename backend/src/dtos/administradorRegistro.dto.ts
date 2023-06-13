export default class AdministradorRegistroDto{
    private _id?: string;
    private nombreCompleto: string;
    private tipoDocumento: string;
    private numeroDocumento: string;
    private correoElectronico: string;
    private activo: boolean;
    private clave: string;

    constructor (data?: any) {
        if(!data){
            this.nombreCompleto="";
            this.tipoDocumento = "";
            this.numeroDocumento = "";
            this.correoElectronico= "";
            this.activo = false;
            this.clave= "";
        }else{
            this._id = data.id;
            this.nombreCompleto= data.nombreCompleto;
            this.tipoDocumento = data.tipoDocumento;
            this.numeroDocumento = data.numeroDocumento;
            this.correoElectronico= data.correoElectronico;
            this.activo = data.activo;
            this.clave= data.clave;
        }
    }

    getId(): string | undefined{
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

    getActivo(){
        return this.activo;
    }

    getClave(){
        return this.clave;
    }
}