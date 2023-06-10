import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(cors());

/**mongoose setup */

const PORT = process.env.PORT || 6001;
mongoose
.connect(process.env.MONGO_URL, {
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not conect`));