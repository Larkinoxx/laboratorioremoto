import { Schema, model, Document} from 'mongoose';

const administradorSchema = new Schema({
    nombreCompleto:{
        type: String,
        required: [true, 'El nombre completo es necesario']
    },
    tipoDocumento: {
        type: Schema.Types.ObjectId, ref: "TipoDocumento",
        required: [true, 'El tipo de documento es necesario']
    },
    numeroDocumento:{
        type: String,
        unique: true,
        required: [true, 'El documento es necesario']
    },
    correoElectronico:{
        type: String,
        unique: true,
        required: [true, 'El correo electrónico es necesario']
    },
    activo:{
        type: Boolean,
        required: [true, 'El estado es necesario']
    },
    clave:{
        type: String,
    }
});

interface IAdministrador extends Document {
    nombreCompleto: string;
    tipoDocumento: string;
    numeroDocumento: string;
    correoElectronico: string;
    activo: Boolean;
    clave: string;
};

export const Administrador = model<IAdministrador>('Administrador', administradorSchema, 'administradores');