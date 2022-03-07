import mongoose from 'mongoose';
import dataDB from './config/variablesEntorno'

mongoose.connect(dataDB.DB.URIMONGO)

const eventos = mongoose.connection

eventos.once('open', () => {
    console.log('BASE DE DATOS CONECTADA')
})

eventos.on('error', err => {
    console.log('BASE DE DATOS ERROR>>>>>>>>>>>>>>>>>>>>', err)
})