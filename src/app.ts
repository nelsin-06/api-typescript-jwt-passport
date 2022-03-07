import { Router } from 'express';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rutasUsuario from './routes/auth.routes';

// INICIO
const app = express();

// Middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());   
app.use(cors());

//RUTAS
app.use(rutasUsuario);

export default app;