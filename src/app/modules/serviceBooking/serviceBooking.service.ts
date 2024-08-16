import { CarWashSlots } from '../carWashSlots/carWashSlots.model';
import { TBooking } from './serviceBooking.interface';
import { ServiceBooking } from './serviceBooking.model';

const createBookingIntoDB = async (payload: TBooking) => {
  // Find the slot and ensure it's available
  const slot = await CarWashSlots.findOne({
    _id: payload.slot,
    isBooked: 'available',
  }).exec();
  if (!slot) {
    throw new Error('Slot not found or already booked');
  }

  // Mark the slot as booked before creating the booking
  slot.isBooked = 'booked';
  await slot.save();

  // Create the booking
  const result = (
    await (
      await (
        await ServiceBooking.create(payload)
      ).populate({
        path: 'service',
        select: '_id name description price duration isDeleted',
      })
    ).populate({
      path: 'slot',
      select: '_id service date startTime endTime isBooked',
    })
  ).populate({
    path: 'customer',
    select: '_id name email phone address',
  });
  return result;
};

const getAllBookingsFromDB = async () => {
  const result = await ServiceBooking.find()
    .populate({
      path: 'service',
      select: '_id name description price duration isDeleted',
    })
    .populate({
      path: 'slot',
      select: '_id service date startTime endTime isBooked',
    })
    .populate({
      path: 'customer',
      select: '_id name email phone address',
    });
  return result;
};

export const BookingServiceServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
