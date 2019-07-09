import mongoose, { Document, Schema } from "mongoose";
import { IArticle } from "./article.model";
import { IUser } from "./user.model";

export interface IComment extends Document {
  _id: string;
  articleId: IArticle["_id"];
  bodyUrl: string;
  parentId: IComment["_id"];
  title: string;
  writerId: IUser["_id"];
}

const CommentSchema: Schema = new Schema({
  articleId: { type: Schema.Types.ObjectId, required: true},
  bodyUrl: { type: String, required: true },
  parentId: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  writerId: { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<IComment>("User", CommentSchema);
