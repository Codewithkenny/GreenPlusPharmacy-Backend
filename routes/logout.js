const express = require("express");
const router = express.Router();

// Define the logout route
router.get("/logout", (req, res) => {
  // Clear the token cookie
  res.clearCookie("token");

  // Redirect to the home page or another appropriate route
  res.redirect("/");
});

module.exports = router;
