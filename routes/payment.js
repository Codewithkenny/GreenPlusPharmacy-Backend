const express = require("express");
const router = express.Router();
const axios = require("axios");

const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;



// Create a route for initiating a payment
router.post("/api/create-payment", async (req, res) => {
  try {
    const { amount, email, reference } = req.body;

    // Make a request to Paystack to create a payment
   const response = await axios.post(
     "https://api.paystack.co/transaction/initialize",
     {
       email,
       amount: amount * 100, // Amount in kobo
       reference,
     },
     {
       headers: {
         Authorization: `Bearer ${paystackSecretKey}`,
         "Content-Type": "application/json",
       },
     }
   );

    // Handle the Paystack response (e.g., send the payment link to the client)
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Payment failed" });
  }
});

// Create routes for handling Paystack webhooks and callbacks
// ...

module.exports = router;
