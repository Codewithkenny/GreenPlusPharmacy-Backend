const express = require("express");
const { body } = require("express-validator");
const  loginUser  = require("../controller/loginUser"); // Import the loginUser controller function
const router = express.Router();

// Validation middleware for login
const validateLogin = [
  body("email").trim().isEmail().withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password is required"),
];

// Login route
router.post("/", validateLogin, loginUser);

module.exports = router;
