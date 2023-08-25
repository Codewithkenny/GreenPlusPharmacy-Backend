const mongoose = require("mongoose");

const featuredProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  imageUrl: {
    type: String, 
    required: true,
  },
});

const featuredProduct = mongoose.model("FeaturedProduct",featuredProductsSchema); 

module.exports = featuredProduct; 
