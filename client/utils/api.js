import axios from "axios";
import API_URL from "../config/index";

export const fetchDeals = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/deals/fetch-cards-data`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching deals: " + error.message);
  }
};

export const toggleFavorite = async (id) => {
  try {
    const response = await axios.patch(`${API_URL}/api/deals/${id}/favorite`);
    return response.data;
  } catch (error) {
    throw new Error("Error updating favorite: " + error.message);
  }
};

export const updateStars = async (id, starIndex) => {
  try {
    const response = await axios.patch(`${API_URL}/api/deals/${id}/stars`, {
      starIndex,
    });
    return response.data.deal.stars;
  } catch (error) {
    throw new Error("Error updating stars: " + error.message);
  }
};
