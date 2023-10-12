import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { isPasswordMatched } from './auth.utils';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { number: phoneNumber, password } = payload;

  //check user exists
  const checkUserExist = await prisma.user.findFirst({
    where: {
      number: phoneNumber,
    },
  });

  if (!checkUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exists');
  }
  //match password
  if (
    checkUserExist.password &&
    !isPasswordMatched(password, checkUserExist?.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const { name, number, role } = checkUserExist;
  // create access token(shortlife), refresh token(longlife)
  //access token

  const accessToken = jwtHelpers.createToken(
    { name, number, role },
    config.jwt.secret as Secret,
    { expiresIn: config.jwt.expires_in }
  );

  //refresh token
  const refreshToken = jwtHelpers.createToken(
    { name, number, role },
    config.jwt.refresh_secret as Secret,
    { expiresIn: config.jwt.refresh_expires_in }
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  //verify token
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
    //in verifiedToken, we get user id, role, timestamps
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid refresh token');
  }
  const { number } = verifiedToken;
  //checking deleted user using refresh token
  //check user exists
  const checkUserExist = await prisma.user.findFirst({
    where: {
      number,
    },
  });

  if (!checkUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exists');
  }

  //generate new token
  const accessToken = jwtHelpers.createToken(
    {
      name: checkUserExist?.name,
      number: checkUserExist?.number,
      role: checkUserExist?.role,
    },
    config.jwt.secret as Secret,
    { expiresIn: config.jwt.expires_in }
  );

  return {
    accessToken,
  };
};

export const AuthService = {
  loginUser,
  refreshToken,
};
