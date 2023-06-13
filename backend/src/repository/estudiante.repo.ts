import EstudianteDto from "../dtos/estudianteRegistro.dto";
import { Estudiante } from "../models/estudiante.model";


class EstudianteRepo {
    async create(estudianteDto: EstudianteDto): Promise<Boolean>{
        try {
            let estudianteModel = new Estudiante({
                nombreCompleto: estudianteDto.getNombreCompleto(),
                tipoDocumento: estudianteDto.getTipoDocumento(),
                numeroDocumento: estudianteDto.getNumeroDocumento(),
                correoElectronico: estudianteDto.getCorreoElectronico(),
                codigoEstudiante: estudianteDto.getCodigoEstudiante(),
                clave: estudianteDto.getClave(),
                activo: estudianteDto.getActivo()
            });
            let estudianteCreado = await Estudiante.create(estudianteModel);
            return true;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async obtener(): Promise<EstudianteDto[]> {

        return new Promise<EstudianteDto[]>(async (resolve, reject) => {
            try {
                let estudianteArray: EstudianteDto[] = [];

                let estudianteData = await Estudiante.find();

                estudianteData.forEach(estudiante => {
                    estudianteArray.push(new EstudianteDto(estudiante));
                });

                resolve(estudianteArray);

            } catch (error) {
                return reject(error);
            }
        })
    }

    async obtenerPorId(estudianteId: string): Promise<any> {
        try {
            let estudiante = await Estudiante.findById(estudianteId).populate(
                'tipoDocumento'
            ).exec();
            return estudiante;
        } catch (error) {
            console.log(error);
            throw new Error('error al obtener estudiante');
        }
    }

    async obtenerPorcorreo(correoElectronico: string): Promise<any> {
        try {
            return Estudiante.findOne({ correoElectronico: correoElectronico, activo: true }).populate([{
                path: 'tipoDocumento'
            }]).exec();
        } catch (error) {
            console.log(error);
            throw new Error('error al obtener estudiante');
        }
    }

    async actualizarPorId(estudianteId: string, estudiante: any): Promise<Boolean> {
        try {
            let estudianteActualizado = await Estudiante.findByIdAndUpdate(estudianteId, { ...estudiante });
            console.log('devuelve: ', estudianteActualizado);
            return true;
        } catch (error) {
            console.log(error);
            throw new Error('error al obtener estudiante');
        }
    }

    async actualizarPorCorreo(correoElectronico: string, estudiante: any): Promise<Boolean> {
        try {
            await Estudiante.updateOne({ correoElectronico: correoElectronico }, { ...estudiante });
            return true;
        } catch (error) {
            throw new Error('Error al actualizar el estudiante');
        }
    }
}

export default EstudianteRepo;