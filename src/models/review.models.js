import mongoose from "mongoose";

//Schema
const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "tour",
    },
    userName: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);

//Model
const Review = mongoose.model("review", reviewSchema);

export default Review;
