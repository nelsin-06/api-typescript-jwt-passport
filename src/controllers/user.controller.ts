import { Request, Response } from 'express'
import usuarioModelo, { UIuser } from '../models/user.model';

export const singUP = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Se debe ingresar correo y contrasena' });
    }
    const userHallado = await usuarioModelo.findOne({ email });
    if (userHallado) {
        return res.status(400).json('El correo ya se encuentra registrado')
    }
    const resultado = await new usuarioModelo(req.body).save();
    return res.status(201).json('USUARIO CREADO EXITOSAMENTE');
}

export const singIN = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Se debe ingresar correo y contrasena' });
    }

    const login: any = await usuarioModelo.findOne({ email });
    if (!login) {
        res.status(404).json('Correo no existe');
    }
    const loginExistodo = await login.comparePassword(req.body.password);
    if (loginExistodo) {
        res.status(200).json({message: 'Inicio de secion exitoso', token: "asdfg"})
    }
    return res.json('23')
}