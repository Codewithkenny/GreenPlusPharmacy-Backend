const express = require("express");
const router = express.Router();
const FeaturedProduct = require("../model/featuredProducts");

router.get("/featured-products", async (req, res) => {
  try {
    const featuredProduct = await FeaturedProduct.find();
    res.json(featuredProduct);
  } catch (error) {
    console.error("Error fetching featured products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
