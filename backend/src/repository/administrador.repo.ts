import AdministradorLoginDto from "../dtos/administradorLogin.dto";
import AdministradorRegistroDto from "../dtos/administradorRegistro.dto";
import {Administrador}  from '../models/administrador.model';
import { TipoDocumento } from "../models/tipoDocumento.model";
//import bcrypt from 'bcrypt';
//import Token from "../classes/token";


class AdministradorRepo{

    async create(administradorRegistroDto: AdministradorRegistroDto): Promise<Boolean> {
        try {
            let administradorModel = new Administrador({
                nombreCompleto: administradorRegistroDto.getNombreCompleto(),
                tipoDocumento: administradorRegistroDto.getTipoDocumento(),
                numeroDocumento: administradorRegistroDto.getNumeroDocumento(),
                correoElectronico: administradorRegistroDto.getCorreoElectronico(),
                activo: administradorRegistroDto.getActivo(),
                clave: administradorRegistroDto.getClave()
            });
            let administradorCreado = await Administrador.create(administradorModel);
            return true;
        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    async obtener(): Promise<AdministradorLoginDto[]> {
        return new Promise(async (resolve, reject) => {
            try {
                let administradoresArray: AdministradorLoginDto[] = [];
                let administadoresData = await Administrador.find();
                administadoresData.forEach(admin => {
                    administradoresArray.push(new AdministradorLoginDto(admin));
                });
                resolve(administradoresArray);
            } catch (error) {
                return reject(error);
            }
        })
    }

    async obtenerPorId(administradorId: string): Promise<any> {
        try {
            let administrador = await Administrador.findById(administradorId).populate(
                'tipoDocumento'
            )
            return administrador;
        } catch (error) {
            console.log(error);
            throw new Error('error al obtener administrador');
        }
    }

    async obtenerPorCorreo(correoElectronico: string): Promise<any> {
        try {
            return Administrador.findOne({ correoElectronico: correoElectronico, activo: true }).exec();
        } catch (error) {
            console.log(error);
            throw new Error('error al obtener aprendiz');
        }
    }

    async actualizarPorId(administradorId: string, administrador: any): Promise<Boolean> {
        try {
            let administradorActualizado = await Administrador.findByIdAndUpdate(administradorId, { ...administrador });
            console.log('devuelve: ', administradorActualizado);
            return true;
        } catch (error) {
            throw new Error('error al actualizar el administrador');
        }
    }

    async actualizarPorCorreo(correoElectronico: string, administrador: any): Promise<Boolean> {
        try {
            await Administrador.updateOne({ correoElectronico: correoElectronico }, { ...administrador });
            return true;
        } catch (error) {
            throw new Error('Error al actualizar el aprendiz');
        }
    }

    /*
    async iniciarSesion(administrador: any, clave: string): Promise<AdministradorLoginDto> {
        return new Promise(async (resolve, reject) => {
            try {
                if (!administrador) {
                    return reject();
                }
                if (bcrypt.compareSync(clave, administrador.clave)) {
                    const token = Token.obtenerJwtToken({
                        nombreCompleto: administrador.nombreCompleto,
                        correoElectronico: administrador.correoElectronico,
                        rol: 'ADMINISTRADOR'
                    });
                    administrador.token = token;
                    const administradorLoginDto = new AdministradorLoginDto(administrador);
                    resolve(administradorLoginDto);
                } else {
                    return reject();
                }
            } catch (error) {
                console.log(error);
                return reject();
            }
        })
    }
    */

}

export default AdministradorRepo;