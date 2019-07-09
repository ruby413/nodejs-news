import mongoose, { Document, Schema } from "mongoose";
import { IArticle } from "./article.model";
import { IUser } from "./user.model";

export interface IArticleLike extends Document {
  _id: string;
  articleId: IArticle["_id"];
  userId: IUser["_id"];
}

const articleLikeSchema: Schema = new Schema({
  articleId: { type: Schema.Types.ObjectId, required: true},
  userId: { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<IArticleLike>("User", articleLikeSchema);
