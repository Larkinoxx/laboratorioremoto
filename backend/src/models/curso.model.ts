import { Schema, model, Document } from 'mongoose';


const cursoSchema = new Schema({
    nombreCurso: {
        type: String,
        required: [true, 'El nombre del programa de formación es necesario']
    },
    codigoCurso: {
        type: String,
        unique: true,
        required: [true, 'El código del programa de formación es necesario']
    },
    activo: {
        type: Boolean
    }
});


interface ICurso extends Document {
    nombreCurso: string;
    codigoCurso: string;
    activo: boolean;
};

export const Curso = model<ICurso>('Curso', cursoSchema, 'cursos');
