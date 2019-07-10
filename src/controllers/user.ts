import User, { IUser, IUserForClient } from '../models/user.model';
import { removeNullFields } from '../util/fieldset';
import UserPrivilege from '../util/userprivilege';

interface ICreateUserInput {
  age: IUser['age'];
  email: IUser['email'];
  password: IUser['password'];
}

async function CreateUser({
  age,
  email,
  password,
}: ICreateUserInput): Promise<IUser> {
  try {
    const data: IUser = await User.create({
      age,
      email,
      password,
      privilege: UserPrivilege.user,
      signUpDate: new Date(),
    });
    return data;
  } catch (error) {
    throw error;
  }
}

async function GetUserByObjectId({
  _id,
}): Promise<IUserForClient[]> {
  try {
    const user: IUserForClient[] = await User.find({ _id });
    return user;
  } catch (error) {
    throw error;
  }
}

async function DeleteUserByObjectId({
  _id,
}): Promise<{}> {
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
  email,
  password,
  privilege,
}): Promise<IUser> {
  try {
    const result: IUser = await User.update({ _id }, removeNullFields({age, email, password, privilege}));
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
