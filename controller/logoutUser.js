const express = require("express");
const router = express.Router();

// Logout route handler
const logout = (req, res) => {
  try {
    // Clear the token stored in localStorage
    res.clearCookie("token"); // Clear the token cookie
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { logout };
