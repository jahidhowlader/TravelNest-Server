import express from "express";
import { createBooking, getAllBooking, getBookingList } from "../controllers/booking.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/booking", createBooking);


// GET
router.get("/bookingList/:email", verifyUser,  getBookingList);

//GET ALL
router.get("/bookings", verifyAdmin, getAllBooking);

export default router;