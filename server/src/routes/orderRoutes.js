const express = require("express");

const {
    placeOrder,
    getMyOrders,
    getRestaurantOrders,
    updateOrderStatus,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Customer
router.post("/", protect, placeOrder);

router.get("/my-orders", protect, getMyOrders);

// Restaurant Owner
router.get(
    "/restaurant-orders",
    protect,
    getRestaurantOrders
);

router.put("/:id/status", protect, updateOrderStatus);

module.exports = router;