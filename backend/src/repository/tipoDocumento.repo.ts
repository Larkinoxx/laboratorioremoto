import TipoDocumentoDto from "../dtos/tipoDocumento.dto";
import { TipoDocumento } from "../models/tipoDocumento.model";



class TipoDocumentoRepo {
    static find: any;
    
    async obtener(): Promise<TipoDocumentoDto[]>{
        return new Promise(async (resolve, reject) => {
            try {
                let tipoDocumentoArray: TipoDocumentoDto[] = [];

                let documentosData = await TipoDocumento.find();

                documentosData.forEach((doc: any) => {
                    tipoDocumentoArray.push(new TipoDocumentoDto(doc));
                });

                resolve(tipoDocumentoArray);

            } catch (error) {
                return reject(error);
            }
        })
    }
   
}

export default TipoDocumentoRepo;