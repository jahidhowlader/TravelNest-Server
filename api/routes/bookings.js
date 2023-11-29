import express from "express";
import { createBooking, getBookingList } from "../controllers/booking.js";
// import { } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/booking", createBooking);

// GET
router.get("/booking/:email", getBookingList);

//GET ALL
// router.get("/bookings", );

export default router;