const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { User } = require("../model/user");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Validation middleware for login
const validateLogin = [
  body("email").trim().isEmail().withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password is required"),
];

router.post("/", validateLogin, async (req, res) => {
  // Use validationResult to check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Your existing route handler logic
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password for email:", email);

      return res.status(401).json({ message: "Invalid credentials" });
    }
    console.log("Login successful for email:", email);
    // Generate an authentication token
    const token = jwt.sign({ userId: user._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    // Set an HttpOnly cookie with the token
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000, // 1 hour
      secure: process.env.NODE_ENV === "production", // Set 'secure' flag in production
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
