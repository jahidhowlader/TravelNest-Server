import express from "express";
import { createBooking } from "../controllers/booking.js";
// import { } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/booking", createBooking);

// GET
router.get("/booking/:id", );

//GET ALL
router.get("/bookings", );

export default router;