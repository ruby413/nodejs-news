import User, { IUser, IUserForClient } from "../models/user.model";
import { removeNullFields } from "../util/fieldset";

interface ICreateUserInput {
  age: IUser["age"];
  id: IUser["id"];
  password: IUser["password"];
}

interface IGetUserInput {
  _id: IUser["_id"];
}

async function CreateUser({
  age,
  id,
  password,
}: ICreateUserInput): Promise<IUser> {
  try {
    const data: IUser = await User.create({
      age,
      id,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

async function GetUserByObjectId({
  _id,
}: IGetUserInput): Promise<IUserForClient[]> {
  try {
    const user: IUserForClient[] = await User.find({ _id });
    return user;
  } catch (error) {
    throw error;
  }
}

async function DeleteUserByObjectId({
  _id,
}: IGetUserInput): Promise<{}> {
  try {
    const result: {} = await User.deleteOne({ _id });
    return result;
  } catch (error) {
    throw error;
  }
}

async function PutUserByObjectId({
  _id,
  age,
  id,
  password,
}): Promise<IUser> {
  try {
    const result: IUser = await User.update({ _id }, removeNullFields({age, id, password}));
    return result;
  } catch (error) {
    throw error;
  }
}

export default {
  CreateUser,
  DeleteUserByObjectId,
  GetUserByObjectId,
  PutUserByObjectId,
};
