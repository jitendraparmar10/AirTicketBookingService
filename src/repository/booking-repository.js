const { StatusCodes } = require('http-status-codes')
const { Booking } = require('../models/index');
const { AppError, ValidationError } = require('../utils/errors/index');


class Bookingrepository{
    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot create Booking',
                'There was some issue creating the  booking ,please try againg later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

}

module.exports = Bookingrepository;