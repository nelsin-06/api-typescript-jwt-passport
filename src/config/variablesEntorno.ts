import { config } from 'dotenv';
import userModel from '../models/user.model';
config();

export = {
    jsonwebtoken: '12345' as string,
    DB: {
        URIMONGO: process.env.MONGO_URI|| 'mongodb://localhost/typescript' as string
    }
};