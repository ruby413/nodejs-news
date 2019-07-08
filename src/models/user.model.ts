import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  id: string;
  password: string;
  age: number;
  _id: string;
}

export interface IUserForClient extends Document {
  id: string;
  age: number;
  _id: string;
}

const UserScheme: Schema = new Schema({
  age: { type: Number, required: true},
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<IUser>("User", UserScheme);
