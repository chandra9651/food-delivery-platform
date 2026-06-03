// src/routes/adminRoutes.js

const express = require("express");

const {
    adminLogin,
    getDashboardStats,

    getAllUsers,
    getUserById,
    blockUser,

    getAllRestaurants,
    getRestaurantById,
    approveRestaurant,

    getAllOrders,
    getOrderById,
    updateOrderStatus,

    getAllFoods,
    deleteFood,
} = require("../controllers/adminController");

const {
    protect,
    adminProtect,
} = require("../middleware/authMiddleware");

const router = express.Router();

/* ======================================================
   AUTH
====================================================== */

// Admin Login
router.post("/login", adminLogin);

/* ======================================================
   DASHBOARD
====================================================== */

// Dashboard Stats
router.get(
    "/dashboard-stats",
    protect,
    adminProtect,
    getDashboardStats
);

/* ======================================================
   USERS
====================================================== */

// Get All Users
router.get(
    "/users",
    protect,
    adminProtect,
    getAllUsers
);

// Get Single User
router.get(
    "/users/:id",
    protect,
    adminProtect,
    getUserById
);

// Block / Unblock User
router.put(
    "/users/:id/block",
    protect,
    adminProtect,
    blockUser
);

/* ======================================================
   RESTAURANTS
====================================================== */

// Get All Restaurants
router.get(
    "/restaurants",
    protect,
    adminProtect,
    getAllRestaurants
);

// Get Single Restaurant
router.get(
    "/restaurants/:id",
    protect,
    adminProtect,
    getRestaurantById
);

// Approve Restaurant
router.put(
    "/restaurants/:id/approve",
    protect,
    adminProtect,
    approveRestaurant
);

/* ======================================================
   ORDERS
====================================================== */

// Get All Orders
router.get(
    "/orders",
    protect,
    adminProtect,
    getAllOrders
);

// Get Single Order
router.get(
    "/orders/:id",
    protect,
    adminProtect,
    getOrderById
);

// Update Order Status
router.put(
    "/orders/:id/status",
    protect,
    adminProtect,
    updateOrderStatus
);

/* ======================================================
   FOODS
====================================================== */

// Get All Foods
router.get(
    "/foods",
    protect,
    adminProtect,
    getAllFoods
);

// Delete Food
router.delete(
    "/foods/:id",
    protect,
    adminProtect,
    deleteFood
);

module.exports = router;