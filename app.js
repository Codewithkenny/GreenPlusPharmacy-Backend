const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const logout = require("./routes/logout");
const orders = require("./routes/orders");
const productsRoute = require("./routes/products");
const Products = require("./model/products");
const featuredProductsRoute = require("./routes/featuredProducts");
const productDetailsRoute = require("./routes/productDetails");
const paymentRoute = require("./routes/payment");



const port = process.env.PORT || 5000;

require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

if (!secretKey) {
  throw new Error("SECRET_KEY environment variable is not set.");
}


// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());



mongoose
  .connect("mongodb://127.0.0.1:27017/pharm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, 
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
  });










app.get("/", (req, res) => {
  res.send("Welcome to our online store!");
});


app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/logout", logout);
app.use("/api/orders", orders);
app.use("/api/products", productsRoute);
app.use("/api", featuredProductsRoute);
app.use("/api/products/product-details", productDetailsRoute);
app.use("/api/payment", paymentRoute);






// Define your product creation route
app.post('/admin/add-products',async (req, res) => {
  // Extract the product data from the request body
  const { name, price, description, quantity } = req.body;
console.log(Products);
  // Perform any necessary validation or sanitization of the input data
  if (!name || !price || !description  || !quantity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Save the product data to the database or perform any other necessary operations
  try {
    // Example: Assuming you have a database model/schema named 'Product'
    const newProduct = new Products({
      name,
      price,
      description,
      quantity
    });

    // Save the new product to the database
    await newProduct.save();

    // Send a response indicating the successful creation of the product
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.log('An error occurred while creating the product');
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Pharm app listening on port ${port}`);
});
