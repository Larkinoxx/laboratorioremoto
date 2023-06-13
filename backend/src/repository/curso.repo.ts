import CursoDto from "../dtos/curso.dto";
import { Curso } from "../models/curso.model";



class CursoRepo {

    async create(cursoDto: CursoDto): Promise<Boolean> {
        try {
            let cursoModel = new Curso({
                nombreCurso: cursoDto.getNombreCurso(),
                codigoCurso: cursoDto.getCodigoCurso(),
                activo: cursoDto.getActivo(),
            });
            let respuesta = await Curso.create(cursoModel)
            return true;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async actualizarPorId (curso: string, cursos: any): Promise<Boolean> {
        try {
            let cursoActualizado = await Curso.findByIdAndUpdate (curso, { ...cursos });
            console.log('devuelve: ', cursoActualizado);
            return true;
        } catch (error) {
            console.log(error);
            throw new Error('Error al actualizar curso');
        }
    }

    async obtener(): Promise<CursoDto[]> {
        return new Promise<CursoDto[]>(async (resolve, reject) => {
            try {
                let cursoArray: CursoDto[] = [];
                let cursoData = await Curso.find();
                cursoData.forEach(nCurso => {
                    cursoArray.push(new CursoDto(nCurso));
                });
                resolve(cursoArray);
            } catch (error) {
                return reject(error);
            }
        });
    }


}



export default CursoRepo;