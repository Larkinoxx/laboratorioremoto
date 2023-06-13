"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const colors_1 = __importDefault(require("colors"));
const dotenv = __importStar(require("dotenv"));
const test_1 = __importDefault(require("./routes/test"));
const estudiante_1 = __importDefault(require("./routes/estudiante"));
const administrador_1 = __importDefault(require("./repository/administrador"));
const tipoDocumento_1 = __importDefault(require("./routes/tipoDocumento"));
const curso_1 = __importDefault(require("./routes/curso"));
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}
const port = parseInt(process.env.PORT);
const server = new server_1.default(port);
colors_1.default.enable();
//Body parser
server.app.use(express_1.default.urlencoded({ extended: true }));
server.app.use(express_1.default.json());
server.app.use((0, cors_1.default)({
    origin: '*'
}));
//Rutas de la app
server.app.use('/test', test_1.default);
server.app.use('/estudiante', estudiante_1.default);
server.app.use('/administrador', administrador_1.default);
server.app.use('/tipoDocumento', tipoDocumento_1.default);
server.app.use('/curso', curso_1.default);
//Conexión  de Base de datos
let URI = process.env.MONGODB_URL;
mongoose_1.default.connect(URI).then(() => {
    console.log("\n");
    console.log("*****************************".bgGreen);
    console.log("Mongo conectado correctamente".italic.green);
    console.log("*****************************".bgGreen);
    console.log("\n");
}).catch((err) => {
    console.log("\n");
    console.log("****************************".bgRed);
    console.log("Mongo no se pudo conectar".red);
    console.log("****************************".bgRed);
    console.log("\n");
    console.log(err);
});
//Levantar express
server.start(() => {
    console.log("\n");
    console.log(`Servidor corriendo el puerto ${server.port}`.italic.grey);
});
