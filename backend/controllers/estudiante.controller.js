import { Estudiante } from "../models/estudiante.model.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const create = async (req, res) => {
  try {
    const {
      nombreCompleto,
      tipoDocumento,
      numeroDocumento,
      correoElectronico,
      codigoEstudiante,
      clave,
      activo,
    } = req.body;
    const salt = await bycrypt.genSalt();
    const passHash = await bycrypt.hash(clave, salt);
    const newStudent = new Estudiante({
      nombreCompleto,
      tipoDocumento,
      numeroDocumento,
      correoElectronico,
      codigoEstudiante,
      clave: passHash,
      activo,
    });
    const userSaved = await newStudent.save();
    res.status(201).json(userSaved);
  } catch (err) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const {email,pass}= req.body;
    const estudiante = await Estudiante.findOne({correoElectronico: email});
    if(!estudiante) return res.status(400).json({msg: "Usuario no existe"});
    
    const isMatch = await bycrypt.compare(pass, estudiante.clave);
    if(!isMatch) return res.status(400).json({msg: "Credenciales inválidas"});

    const token = jwt.sign({id:estudiante.id},process.env.JWT_SECRET);
  } catch (error) {
    res.status(500).json(error);
  }
};
