
import mongoose from "mongoose";
const {Schema, model} = mongoose;

const urlLink = new Schema({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
}, {timestamps: true});

const urlModel = model("Url", urlLink);

export default urlModel;