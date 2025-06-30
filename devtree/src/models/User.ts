import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
      email:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
      password:{
        type: String,
        require: true,
        trim: true
    }
}) 
const User = mongoose.model('User', userSchema)
export default User