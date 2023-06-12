import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import estudianteRoutes from './routes/estudiante.js';

dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());


app.use(estudianteRoutes);

/**mongoose setup */

const PORT = process.env.PORT || 6001;
mongoose
.connect(process.env.MONGO_URL, {
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not conect`));