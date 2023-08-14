import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  location: { type: String, required: false },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
