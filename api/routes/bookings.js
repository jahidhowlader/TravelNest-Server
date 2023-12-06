import express from "express";
import { createBooking, getAllBooking, getBookingList, getSingleBookingList } from "../controllers/booking.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/booking", createBooking);

// GET
router.get("/booking/:id", getSingleBookingList);

// GET
router.get("/bookingList/:email", verifyUser,  getBookingList);

//GET ALL
router.get("/bookings", verifyAdmin, getAllBooking);

export default router;