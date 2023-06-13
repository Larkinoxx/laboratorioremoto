import { Schema, model, Document} from 'mongoose';

const tipoDocumentoSchema = new Schema({
    nombre:{
        type: String,
    },
    descripcion:{
        type: String,
    },
});

interface ITipoDocumento extends Document{
    nombre: string;
    descripcion: string;
}

export const TipoDocumento = model<ITipoDocumento>('TipoDocumento', tipoDocumentoSchema, 'tipos-documentos');