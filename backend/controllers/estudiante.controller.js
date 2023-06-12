import { Estudiante } from "../models/estudiante.model.js";

export const create = async (req, res) => {
    
    try {
        const body = req.body;
        const newStudent = new Estudiante(body);
        const userSaved =await newStudent.save();
        res.send(userSaved);
    } catch (error) {
       res.status(500).json({error});
    }
}