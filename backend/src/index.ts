import Server from "./classes/server";
import mongoose from "mongoose";
import cors from "cors";
import express from 'express';
import colors from "colors";
import * as dotenv from 'dotenv';


import testRoutes from "./routes/test";
import estudianteRoutes from "./routes/estudiante";
import administradorRoutes from "./repository/administrador";
import tipoDocumentoRoutes from "./routes/tipoDocumento";
import cursoRoutes from "./routes/curso";



dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}


const port: number = parseInt(process.env.PORT);

const server = new Server(port);
colors.enable();

//Body parser
server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());

server.app.use(cors({
    origin:'*'
}));


//Rutas de la app
server.app.use('/test', testRoutes);
server.app.use('/estudiante', estudianteRoutes);
server.app.use('/administrador', administradorRoutes);
server.app.use('/tipoDocumento', tipoDocumentoRoutes);
server.app.use('/curso', cursoRoutes);



//Conexión  de Base de datos
let URI = process.env.MONGO_URL as string;

mongoose.connect(URI).then(() => {
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
