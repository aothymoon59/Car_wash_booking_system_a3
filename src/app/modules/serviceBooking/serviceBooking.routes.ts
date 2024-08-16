import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { serviceBookingValidations } from './serviceBooking.validation';
import { BookingServiceControllers } from './serviceBooking.controller';

const router = express.Router();

router.post(
  '/bookings',
  auth('user'),
  validateRequest(
    serviceBookingValidations.createServiceBookingValidationSchema,
  ),
  BookingServiceControllers.createBooking,
);

export const ServiceBookingsRoutes = router;
