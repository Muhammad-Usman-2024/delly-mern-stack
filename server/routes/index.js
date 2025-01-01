import express from "express";
import {
  toggleFavorite,
  updateStars,
  getAllDeals,
} from "../controller/userController.js";

const router = express.Router();

//routes
router.get("/deals/fetch-cards-data", getAllDeals);
router.patch("/deals/:id/favorite", toggleFavorite);
router.patch("/deals/:id/stars", updateStars);
export default router;
