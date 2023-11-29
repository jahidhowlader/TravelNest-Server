import express from "express";
import {
  getRoom,
  getRooms,
  updateRoomAvailability,
} from "../controllers/room.js";

const router = express.Router();

//UPDATE
router.put("/room/availability/:id", updateRoomAvailability);

//GET
router.get("/room/:id", getRoom);

//GET ALL
router.get("/rooms", getRooms);

export default router;