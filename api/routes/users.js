import express from "express";
import {
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// GET
router.get("/:id", getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;