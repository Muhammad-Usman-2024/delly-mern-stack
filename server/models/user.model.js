import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },
    discount: {
      type: String,
    },
    location: {
      type: String,
    },
    moreLocations: {
      type: [String],
      default: [],
    },
    avatar: {
      type: String,
    },
    userName: {
      type: String,
      trim: true,
    },
    buttonText: {
      type: String,
      default: "Order Now",
    },
    stars: { type: Number, min: 0, max: 5 },
    favorite: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Deal = mongoose.model("Deal", dealSchema);

export default Deal;
