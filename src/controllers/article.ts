// import Article, { IArticle } from "../models/article.model";
// import { removeNullFields } from "../util/fieldset";

// interface ICreateArticleInput {
//   bodyUrl: IArticle["bodyUrl"];
//   title: IArticle["title"];
//   writerId: IArticle["writerId"];
// }

// async function CreateArticle({
//   age,
//   id,
//   password,
// }: ICreateArticleInput): Promise<IArticle> {
//   try {
//     const data: IArticle = await Article.create({
//       age,
//       id,
//       password,
//     });
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// async function GetUserByObjectId({
//   _id,
// }: IGetUserInput): Promise<IUserForClient[]> {
//   try {
//     const user: IUserForClient[] = await User.find({ _id });
//     return user;
//   } catch (error) {
//     throw error;
//   }
// }

// async function DeleteUserByObjectId({
//   _id,
// }: IGetUserInput): Promise<{}> {
//   try {
//     const result: {} = await User.deleteOne({ _id });
//     return result;
//   } catch (error) {
//     throw error;
//   }
// }

// async function PutUserByObjectId({
//   _id,
//   age,
//   id,
//   password,
// }): Promise<IUser> {
//   try {
//     const result: IUser = await User.update({ _id }, removeNullFields({age, id, password}));
//     return result;
//   } catch (error) {
//     throw error;
//   }
// }

// export default {
//   CreateUser,
//   DeleteUserByObjectId,
//   GetUserByObjectId,
//   PutUserByObjectId,
// };
