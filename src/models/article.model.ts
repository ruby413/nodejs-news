import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user.model";

export interface IArticle extends Document {
  _id: string;
  bodyUrl: number;
  title: string;
  writerId: IUser["_id"];
}

const ArticleSchema: Schema = new Schema({
  bodyUrl: { type: String, required: true },
  title: { type: String, required: true },
  writerId: { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<IArticle>("User", ArticleSchema);
