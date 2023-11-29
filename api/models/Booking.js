import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
        roomNumbers: {
            type: String,
            required: true
        },
        roomId: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        country: {
            type: String
        },
        zipcode: {
            type: String
        },
        bookingDate: {
            type: [Date],
            required: true
        },
        
    },
    { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);