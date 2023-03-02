import express from "express";
import { createReview } from "../controllers/review.controllers.js";
import { verifyUser } from "../middlewares/verifyToken.js";
const router = express.Router();

router.post("/:tourId", verifyUser, createReview);

export default router;
