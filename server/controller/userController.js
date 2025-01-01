import Deal from "../models/user.model.js";

const addDummyDeals = async () => {
  try {
    const existingDeals = await Deal.countDocuments();
    if (existingDeals > 0) {
      console.log("Deals already exist. Skipping dummy data insertion.");
      return;
    }
    const deals = [
      {
        title: "Summer Fiesta Deal",
        image: "/images/card1.jpg",
        discount: "25% Off",
        location: "Santa Monica",
        moreLocations: ["Malibu", "Beverly Hills"],
        avatar: "/images/avatar-01.png",
        userName: "Alice Johnson",
        buttonText: "Buy Now",
        stars: 4.2,
        favorite: true,
      },
      {
        title: "Tech Savvy Offer",
        image: "/images/card2.jpg",
        discount: "35% Off",
        location: "Manhattan",
        moreLocations: ["Bronx", "Staten Island"],
        avatar: "/images/avatar-02.png",
        userName: "Michael Lee",
        buttonText: "Get It Now",
        stars: 4,
        favorite: false,
      },
      {
        title: "Dining Delight",
        image: "/images/card3.jpg",
        discount: "20% Off",
        location: "Millennium Park",
        moreLocations: ["Oak Park", "Schaumburg"],
        avatar: "/images/avatar-03.png",
        userName: "Sophia Martinez",
        buttonText: "Reserve Table",
        stars: 4.7,
        favorite: true,
      },
      {
        title: "Home Essentials Sale",
        image: "/images/card4.jpg",
        discount: "60% Off",
        location: "Katy",
        moreLocations: ["The Woodlands", "Sugar Land"],
        avatar: "/images/avatar-04.png",
        userName: "Ethan Davis",
        buttonText: "Shop Now",
        stars: 4.8,
        favorite: true,
      },
      {
        title: "Beachwear Bonanza",
        image: "/images/card5.jpg",
        discount: "15% Off",
        location: "South Beach",
        moreLocations: ["Key West", "Palm Beach"],
        avatar: "/images/avatar-05.png",
        userName: "Olivia Taylor",
        buttonText: "Explore Deals",
        stars: 3.9,
        favorite: false,
      },
      {
        title: "Travel Paradise",
        image: "/images/card6.jpg",
        discount: "30% Off",
        location: "Downtown Seattle",
        moreLocations: ["Bellevue", "Redmond"],
        avatar: "/images/avatar-06.webp",
        userName: "Liam Wilson",
        buttonText: "Book Now",
        stars: 4.5,
        favorite: false,
      },
    ];
    
    await Deal.insertMany(deals);
    console.log("Dummy deals added successfully!");
  } catch (error) {
    console.error("Error adding dummy deals:", error.message);
  }
};
addDummyDeals();

export const toggleFavorite = async (req, res) => {
  const { id } = req.params;

  try {
    const deal = await Deal.findById(id);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    deal.favorite = !deal.favorite;
    await deal.save();

    res.status(200).json({ message: "Favorite updated successfully", deal });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateStars = async (req, res) => {
  const { id } = req.params;
  const { starIndex } = req.body;

  try {
    if (!starIndex || starIndex < 1 || starIndex > 5) {
      return res
        .status(400)
        .json({ message: "Star index must be between 1 and 5" });
    }

    const deal = await Deal.findById(id);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    if (typeof deal.stars !== "number") {
      deal.stars = 0;
    }

    if (deal.stars >= starIndex) {
      deal.stars = starIndex - 1;
    } else {
      deal.stars = starIndex;
    }

    await deal.save();

    res.status(200).json({
      message: "Stars updated successfully",
      deal,
    });
  } catch (error) {
    console.error("Error updating stars:", error.message);
    res.status(500).json({ error: "An error occurred while updating stars" });
  }
};
export const getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
