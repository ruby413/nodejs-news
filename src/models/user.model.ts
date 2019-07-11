import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  _id             : Schema.Types.ObjectId;
  age             : number;
  email           : string;
  password        : string;
  privilege       : number;
  profileImageUrl : string;
  signUpDate      : Date;
  status          : number;
  bannedExpires   : Date; 
}

export interface IUserForClient extends Document {
  _id             : IUser['_id'];
  age             : IUser['age'];
  email           : IUser['email'];
  privilege       : IUser['privilege'];
  profileImageUrl : IUser['profileImageUrl'];
}

const UserScheme: Schema = new Schema({
  age             : { type: Number, required: true},
  email           : { type: String, required: true, unique: true },
  password        : { type: String, required: true },
  privilege       : { type: Number, required: true },
  profileImageUrl : { type: String },
  signUpDate      : { type: Date, required: true },
  status          : { type: Number, required: true },
  bannedExpires   : { type: Date },
});

export default mongoose.model<IUser>('User', UserScheme);
