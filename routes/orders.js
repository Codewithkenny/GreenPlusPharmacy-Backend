const { Order } = require("../model/order");
// const { auth, isUser, isAdmin } = require("../middleware/auth");

const router = require("express").Router();



// CREATE/Checkout
router.post("/",  async (req, res) => {
  const { cartItems, products, subtotal, total, shipping, delivery_status, payment_status } = req.body;

  // Extract the user ID from the authenticated user
  // const userId = req.user._id;

  const newOrder = new Order({
    // userId,
    cartItems,
    products,
    subtotal,
    total,
    shipping,
    delivery_status,
    payment_status
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(200).send(savedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
});


//UPDATE
router.put("/:id",  async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).send("Order has been deleted...");
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET USER ORDERS
router.get("/find/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET ALL ORDERS

router.get("/",  async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});



module.exports = router;
