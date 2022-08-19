import mongoose from "mongoose";

import bcrypt from "bcrypt";

export interface I_UserDocument extends mongoose.Document {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  contact_no: Number;
  country: string;
  age: string;
  office: string;
  experience: number;
  profession: string;
}

const UserSchema: mongoose.Schema<I_UserDocument> = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: {
      validator: function (email: any) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "Please enter a valid email",
    },
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: { type: String },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  contact_no: {
    type: Number,
    required: true,
    min: [13, "Must be at least 6, got {VALUE}"],
  },
  country: { type: String, required: true },
  age: { type: String, required: true },
  office: { type: String, required: true },
  experience: { type: Number, required: true },
  profession: { type: String, required: true },
});

const saltRounds = 8;

UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
  next();
});

const UserModel = mongoose.model<I_UserDocument>("User", UserSchema);

export default UserModel;
