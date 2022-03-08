import { Router } from 'express';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rutasUsuario from './routes/auth.routes';
import passport from 'passport';
import passportMidleware from './middlewares/passport';

// INICIO
const app = express();

// Middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());   
app.use(cors());
app.use(passport.initialize());
passport.use(passportMidleware);
//RUTAS
app.use(rutasUsuario);

export default app;