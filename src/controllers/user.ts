import User, { IUser, IUserForClient } from '../models/user.model';
import { addHours } from '../util/datehelper';
import { UserPrivilege, UserStatus } from '../types/enums';
import { removeNullFields } from '../util/fieldset';

interface ICreateUserInput {
  age      : IUser['age'];
  email    : IUser['email'];
  password : IUser['password'];
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
      privilege: UserPrivilege.USER,
      signUpDate: new Date(),
      status: UserStatus.NORMAL,
});
    return data;
  } catch (error) {
    throw error;
  }
}

async function GetUserByObjectId({
  _id,
}): Promise<IUserForClient> {
  try {
    const user: IUserForClient = await User.findById({ _id });
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
  profileImageUrl,
}): Promise<IUser> {
  try {
    const result = await User.updateOne({ _id }, removeNullFields({age, email, password, privilege, profileImageUrl}));
    return result;
  } catch (error) {
    throw error;
  }
}

async function banUser({
  _id,
  isTemporarily,
  hours,
}) {
  try {
    const modifyFieldSet = isTemporarily ? {
      status: UserStatus.BANNED_TEMPORARILY,
      bannedExpires: addHours(hours),
    } : {
      status: UserStatus.BANNED_FOREVER,
    };
    const result = await User.updateOne(
      { _id },
      modifyFieldSet,
    );

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
  banUser,
};
