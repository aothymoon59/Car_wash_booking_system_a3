import httpStatus from 'http-status';
import { AuthServices } from './auth.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const signUpUser = catchAsync(async (req, res) => {
  const result = await AuthServices.signUpUserIntoDB(req.body);
  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User registered successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User logged in successfully',
    data: result,
  });
});

export const AuthControllers = {
  signUpUser,
  loginUser,
};
