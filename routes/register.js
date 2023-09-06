const express = require("express");
const  register = require("../controller/register"); // Import the registerUser controller function
const router = express.Router();



// Register route
router.post("/", register);

module.exports = router;
