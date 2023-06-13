
import { Schema, model, Document} from 'mongoose';


const estudianteSchema = new Schema({

    nombreCompleto: {
        type: String,
    },
    tipoDocumento:{
        type: String,
    },
    numeroDocumento: {
        type: String,
    },
    correoElectronico:{
        type: String,
    },
    codigoEstudiante: {
        type: String,
    },
    clave:{
        type: String,
    },
    activo: {
        type: Boolean
    }

});

interface IEstudiante extends Document {
    nombre: string;
    tipoDocumento: string;
    numeroDocumento: string;
    correoElectronico: string;
    codigoEstudiante: string;
    clave: string;
    activo: Boolean;
}

export const Estudiante = model<IEstudiante>('Estudiante',estudianteSchema, 'estudiantes');