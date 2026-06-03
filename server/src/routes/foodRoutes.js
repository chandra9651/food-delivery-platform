// src/routes/foodRoutes.js

const express = require("express");

const {
    createFood,
    getFoods,
    getFoodsByRestaurant,
    updateFood,
    deleteFood,
    topfood,
} = require("../controllers/foodController");

// const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const { restaurantProtect, } = require("../middleware/restaurantMiddleware");

const router = express.Router();


// Public Routes
router.get("/", getFoods);

router.get(
    // "/restaurant/:restaurantId",
    "/restaurant/",
    restaurantProtect,
    getFoodsByRestaurant
);


// Protected Routes
router.post(
    "/",
    restaurantProtect,
    upload.single("image"),
    createFood
);

router.put(
    "/:id",
    restaurantProtect,
    upload.single("image"),
    updateFood
);

router.delete(
    "/:id",
    restaurantProtect,
    deleteFood
);

router.get("/topfood", topfood);

module.exports = router;