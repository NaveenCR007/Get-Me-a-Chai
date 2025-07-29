import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String },
    coverpic: { type: String }
})

// if the model already exist, then use it otherwise create new one
export const User = mongoose.models.User || mongoose.model("User", userSchema);
