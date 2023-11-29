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

// GET
export const getBookingList = async (req, res, next) => {

    try {

        const user = await Booking.find({ email: req.params.email })
        res.status(200).json(user);

    } catch (err) {
        next(err);
    }
}