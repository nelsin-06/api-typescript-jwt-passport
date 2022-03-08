import { config } from 'dotenv';
import userModel from '../models/user.model';
config();

export default {
    jsonwebtoken: '12345screeet',
    DB: {
        URIMONGO: process.env.MONGO_URI|| 'mongodb://localhost/typescript' as string
    }
};