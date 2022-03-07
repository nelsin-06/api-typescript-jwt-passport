import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// INICIO
const app = express();

// Middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());   

export default app;