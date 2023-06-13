
export default class TipoDocumentoDto {
    private _id?: string;
    private nombre: string;
    private descripcion: string;

    constructor (data?: any) {
        if(!data){
            this.nombre = "";
            this.descripcion = "";
        }else{
            this._id = data.id;
            this.nombre = data.nombre;
            this.descripcion = data.descripcion;
        }
    }

    getId(){
        return this._id;
    }

    getNombre(){
        return this.nombre;
    }

    getDescripcion(){
        return this.descripcion;
    }
}


