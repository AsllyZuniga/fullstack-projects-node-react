import mongoose, { Schema } from "mongoose";

interface IUser{
  name: String
  email: String
  password: String
}

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
const User = mongoose.model<IUser>('User', userSchema)
export default User