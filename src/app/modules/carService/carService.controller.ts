import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { CarServiceServices } from './carService.service';

const createCarService = catchAsync(async (req, res) => {
  const result = await CarServiceServices.createCarServiceIntoDB(req.body);
  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service created successfully',
    data: result,
  });
});

export const CarServiceControllers = {
  createCarService,
};
