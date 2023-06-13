export default class TestDto {
    
    private _id?: string;
    private nombre: string;
    private cantidad: Number;
    private activo: boolean;


    constructor(data?: any) {
        if (!data) {
            this.nombre = "";
            this.cantidad = 0;
            this.activo = false;
        } else {
            this._id = data.id;
            this.nombre = data.nombre;
            this.cantidad = data.cantidad;
            this.activo = data.activo;
        }
    }


    getId(){
        return this._id;
    }

    getNombre(){
        return this.nombre;
    }

    getCantidad() {
        return this.cantidad;
    }

    getActivo() {
        return this.activo;
    }
}