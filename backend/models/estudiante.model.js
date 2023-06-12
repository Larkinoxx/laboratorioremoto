import { Schema,model} from 'mongoose';


const estudianteSchema = new Schema({

    nombreCompleto: {
        type: String,
        required: true,
    },
    tipoDocumento:{
        type: String,
        required: true,
    },
    numeroDocumento: {
        type: String,
        required: true,
        unique: true,
    },
    correoElectronico:{
        type: String,
        required: true,
        unique:true,
    },
    codigoEstudiante: {
        type: String,
        required: true,
        unique:true,
    },
    clave:{
        type: String,
        required: true,
    },
    activo: {
        type: Boolean
    }

}/* , {timestamps:true} */);

export const Estudiante = model('Estudiante',estudianteSchema);