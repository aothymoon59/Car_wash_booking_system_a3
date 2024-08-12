import bcrypt from 'bcrypt';
/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../../config';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';

const signUpUserIntoDB = async (payload: TUser) => {
  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(config.bcrypt_salt_rounds),
  );

  payload.password = hashedPassword;

  const result = await User.create(payload);

  return result;
};

export const AuthServices = {
  signUpUserIntoDB,
};
