import { Schema, model, models } from 'mongoose';
import bcrypt from "bcryptjs"


const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})

userSchema.pre('save', async function (next) {
    // if (!this.isModified('password')) {
    //     next();
    // }

    this.password = await bcrypt.hash(this.password, 10);
})

const User = models.User || model("User", userSchema);
export default User;