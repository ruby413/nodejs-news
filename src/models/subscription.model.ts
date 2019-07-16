import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './user.model';

export interface ISubscription extends Document {
  _id      : string;
  followId : IUser['_id'];
  userId   : IUser['_id'];
}

const subscriptionSchema: Schema = new Schema({
  followId : { type: Schema.Types.ObjectId, required: true},
  userId   : { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<ISubscription>('User', subscriptionSchema);
