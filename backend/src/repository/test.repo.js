"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_dto_1 = __importDefault(require("../dtos/test.dto"));
const test_model_1 = require("../models/test.model");
class TestRepo {
    crear(testDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let testModel = new test_model_1.Test({
                    nombre: testDto.getNombre(),
                    cantidad: testDto.getCantidad(),
                    activo: testDto.getActivo()
                });
                let testCreado = yield test_model_1.Test.create(testModel);
                return true;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    obtenerTest() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let testArray = [];
                    let testData = yield test_model_1.Test.find();
                    testData.forEach(test => {
                        testArray.push(new test_dto_1.default(test));
                    });
                    resolve(testArray);
                }
                catch (error) {
                    return reject(error);
                }
            }));
        });
    }
    obtenerTestEstado(activo) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let testArray = [];
                    let testData = yield test_model_1.Test.find({
                        activo: activo
                    });
                    console.log(testData);
                    testData.forEach(trueTest => {
                        testArray.push(new test_dto_1.default(trueTest));
                    });
                    resolve(testArray);
                }
                catch (error) {
                    return reject(error);
                }
            }));
        });
    }
}
exports.default = TestRepo;
