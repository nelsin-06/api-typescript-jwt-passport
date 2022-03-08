import { Request, Response } from 'express'
import usuarioModelo, { UIuser } from '../models/user.model';
import jwt from 'jsonwebtoken';
import VE from '../config/variablesEntorno';

function createToken(user: UIuser) {
    return jwt.sign({ id: user.id, email: user.email }, VE.jsonwebtoken, {
        expiresIn: 86400
    });
};


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

export const singIN = async (req: Request, res: Response)=> {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Se debe ingresar correo y contrasena' });
        }
        const login: any = await usuarioModelo.findOne({ email });
        if (!login) {
            return res.status(404).json('Correo no existe');
        }
        const loginExistodo = await login.comparePassword(req.body.password);
        if (loginExistodo) {
            return res.status(200).json({token: createToken(login)})
        }
        return res.status(400).json({ message: 'El correo o la contrasena son incorrectos' })
    } catch(e) {
        res.status(500).json('INTERNAL SERVER ERROR');
    }
}