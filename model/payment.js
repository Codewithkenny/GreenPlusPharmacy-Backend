const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  amount: Number,
  email: String,
  reference: String,
  status: String, // Payment status (e.g., 'success', 'failed')
  // Add other fields as needed
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
