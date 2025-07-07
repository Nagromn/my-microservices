import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.plugin(uniqueValidator, { message: "Erreur : {PATH} existe déjà." });

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
