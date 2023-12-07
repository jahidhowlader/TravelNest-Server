import Booking from "../models/Booking.js";


// CREATE 
export const createBooking = async (req, res, next) => {

    const newBooking = new Booking(req.body);
    // console.log(newBooking);

    try {
        const savedBooking = await newBooking.save();
        res.status(200).json(savedBooking);

    } catch (err) {
        next(err);
    }
};


// GET ALL BOOKING LIST AS A USER
export const getBookingList = async (req, res, next) => {


    try {

        const bookingList = await Booking.find({ email: req.params.email })
        res.status(200).json(bookingList);

    } catch (err) {
        next(err);
    }
}

// GET ALL BOOKING LIST
export const getAllBooking = async (req, res, next) => {

    try {

        const bookings = await Booking.find()
        res.status(200).json(bookings);

    } catch (err) {
        next(err);
    }
}
