const express = require("express");
const { body } = require("express-validator");
const  registerUser = require("../controller/registerUser"); // Import the registerUser controller function
const router = express.Router();

// Validation middleware for registration
const validateRegistration = [
  body("name")
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage("Name must be between 3 and 30 characters"),
  body("email").trim().isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

// Register route
router.post("/", validateRegistration, registerUser);

module.exports = router;
