import mongoose = require("mongoose");

type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
};

const UserSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
});

export const UserModel = mongoose.model<User>("User", UserSchema, "User");

