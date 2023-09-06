const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  imageUrl: {
    type: Object,
    required: true,
  },
});

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;
