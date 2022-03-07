import app from './app';
import {config} from 'dotenv';
import './database';
config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('APP INCIADA');
})