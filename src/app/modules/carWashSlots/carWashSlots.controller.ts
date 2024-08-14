import { Request, Response } from 'express';
import { carWashSlots } from './carWashSlots.service';
import sendResponse from '../../utils/sendResponse';

const createSlotsController = async (req: Request, res: Response) => {
  const result = await carWashSlots.createSlotsIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Slots created successfully',
    data: result,
  });
};

export default createSlotsController;
