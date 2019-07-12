import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

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

const UserSchema: Schema = new Schema({
  age             : { type: Number, required: true},
  email           : { type: String, required: true, unique: true },
  password        : { type: String, required: true },
  privilege       : { type: Number, required: true },
  profileImageUrl : { type: String },
  signUpDate      : { type: Date, required: true },
  status          : { type: Number, required: true },
  bannedExpires   : { type: Date },
});

const comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
    cb(err, isMatch);
  });
};

UserSchema.methods.comparePassword = comparePassword;


export default mongoose.model<IUser>('User', UserSchema);
