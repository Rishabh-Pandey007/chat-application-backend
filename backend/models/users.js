import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
      },
      emailId: {
        type: String,
        required: true,
        unique: true,
        max: 50,
      },
      password: {
        type: String,
        required: true,
      },
      isAvatarImageSet: {
        type: Boolean,
        default: false,
      },
      avatarImage: {
        type: String,
        default: null,
      },
      gender:{
        type:String,
        enum: ["male","female","others"],
        required:true
      }
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;