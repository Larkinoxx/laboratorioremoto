import TestDto from "../dtos/test.dto";
import { Test } from "../models/test.model";


class TestRepo{
    async crear(testDto: TestDto): Promise<Boolean> {
        try {
            let testModel = new Test({
                nombre: testDto.getNombre(),
                cantidad: testDto.getCantidad(),
                activo: testDto.getActivo()
            });

            let testCreado = await Test.create(testModel);
            return true;

        } catch (error:any) {
            console.log(error);
            throw error;
        }
    }

    async obtenerTest(): Promise<TestDto[]> {
        return new Promise<TestDto[]>(async (resolve, reject) => {
            try {
                let testArray: TestDto[] = [];
                let testData = await Test.find();

                testData.forEach(test =>{
                    testArray.push(new TestDto(test));
                });

                resolve(testArray);

            } catch (error) {
                return reject(error);
            }
        })
    }

    async obtenerTestEstado(activo:boolean): Promise<TestDto[]> {
        return new Promise <TestDto[]> (async (resolve, reject) => { 
            try {
                let testArray: TestDto[] = [];
                let testData = await Test.find({
                    activo: activo
                });
                console.log(testData);
                
                testData.forEach(trueTest =>{
                    testArray.push(new TestDto(trueTest));
                });

                resolve(testArray);

            } catch (error) {
                return reject(error);
            }
        })
    }

}

export default TestRepo;