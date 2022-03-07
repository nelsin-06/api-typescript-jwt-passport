import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
export interface UIuser extends Document {
    email: string
    password: string
    comparePassword: () => Promise<boolean>
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
    }
})

userSchema.pre<UIuser>('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password)
}

export default model<UIuser>('user', userSchema);