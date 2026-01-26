
import mongoose from "mongoose";

const userLink = new mongoose.Schema({
    userName: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
},{timestamps:true})

export default mongoose.model("User", userLink)

