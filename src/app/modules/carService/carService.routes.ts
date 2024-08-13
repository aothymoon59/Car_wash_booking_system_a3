import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
// import { userValidations } from './auth.validation';
// import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { carServiceValidations } from './carService.validation';
import { CarServiceControllers } from './carService.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('admin'),
  validateRequest(carServiceValidations.createCarServiceValidationSchema),
  CarServiceControllers.createCarService,
);

router.get('/:id', CarServiceControllers.getSingleCarService);

router.get('/', CarServiceControllers.getAllCarServices);

export const CarServiceRoutes = router;
