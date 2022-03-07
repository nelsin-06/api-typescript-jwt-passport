import { model, Schema, Document } from 'mongoose';

export interface UIuser extends Document {
    email: string,
    password: string,
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required:true,
        trim: true, 
    },
    password:{
        type: String,
        require: true,
    }
})

userSchema.pre('save', function(){
    
})

export default model<UIuser>('user', userSchema);