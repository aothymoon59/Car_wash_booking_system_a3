import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { BookingServiceServices } from './serviceBooking.service';

const createBooking = catchAsync(async (req, res) => {
  const { _id: customer } = req.user;

  const validatedData = {
    ...req.body,
    customer,
    service: req.body.serviceId,
    slot: req.body.slotId,
  };

  const result =
    await BookingServiceServices.createBookingIntoDB(validatedData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking successful',
    data: result,
  });
});

export const BookingServiceControllers = {
  createBooking,
};
