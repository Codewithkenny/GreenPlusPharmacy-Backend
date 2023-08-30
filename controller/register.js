const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const User = require("../model/user");
const express = require("express");
const router = express.Router();

// Validation middleware for registration
const validateRegistration = [
  body("firstName")
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage("First name must be between 3 and 30 characters"),
  body("lastName")
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage("Last name must be between 3 and 30 characters"),
  body("email").trim().isEmail().withMessage("Invalid email address"),
  body("phoneNumber")
    .trim()
    .isLength({ min: 10, max: 11 })
    .withMessage("Phone number must be 11 digits"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

router.post("/", validateRegistration, async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
