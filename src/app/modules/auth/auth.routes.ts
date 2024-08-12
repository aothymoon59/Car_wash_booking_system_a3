import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
import { userValidations } from './auth.validation';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(userValidations.userSignUpValidationSchema),
  AuthControllers.signUpUser,
);

export const AuthRoutes = router;
