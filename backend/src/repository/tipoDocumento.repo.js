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
const tipoDocumento_dto_1 = __importDefault(require("../dtos/tipoDocumento.dto"));
const tipoDocumento_model_1 = require("../models/tipoDocumento.model");
class TipoDocumentoRepo {
    obtener() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    let tipoDocumentoArray = [];
                    let documentosData = yield tipoDocumento_model_1.TipoDocumento.find();
                    documentosData.forEach((doc) => {
                        tipoDocumentoArray.push(new tipoDocumento_dto_1.default(doc));
                    });
                    resolve(tipoDocumentoArray);
                }
                catch (error) {
                    return reject(error);
                }
            }));
        });
    }
}
exports.default = TipoDocumentoRepo;
