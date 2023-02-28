import express from "express";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/booking.controllers.js";
import { verifyAdmin, verifyUser } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);

export default router;
