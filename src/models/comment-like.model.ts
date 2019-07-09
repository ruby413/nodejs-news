import mongoose, { Document, Schema } from "mongoose";
import { IComment } from './comment.model';
import { IUser } from './user.model';

export interface ICommentLike extends Document {
  _id: string;
  commentId: IComment["_id"];
  userId: IUser["_id"];
}

const commentLikeSchema: Schema = new Schema({
  followId: { type: Schema.Types.ObjectId, required: true},
  userId: { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<ICommentLike>("User", commentLikeSchema);
