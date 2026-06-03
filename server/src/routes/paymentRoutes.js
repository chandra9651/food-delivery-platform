const express = require("express");

const {
    createPaymentOrder,
    verifyPayment,
} = require("../controllers/paymentController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create payment order
router.post(
    "/create-order",
    protect,
    createPaymentOrder
);

// Verify payment
router.post(
    "/verify",
    protect,
    verifyPayment
);

module.exports = router;