import { TCarService } from './carService.interface';
import { CarService } from './carService.model';

const createCarServiceIntoDB = async (payload: TCarService) => {
  const result = await CarService.create(payload);
  return result;
};

export const CarServiceServices = {
  createCarServiceIntoDB,
};
