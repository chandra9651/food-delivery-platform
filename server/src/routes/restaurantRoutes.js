const express = require("express");

const {
    registerRestaurant,
    loginRestaurant,
    restaurantProfile,
    restaurantUpdateProfile,
    restaurantSettings,
    restaurantUpdateSettings,
    popularRestaurant,
    getRestaurantsDetails,
    getRestaurants,
} = require("../controllers/restaurantController");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

/* ======================================================
   ROUTES
====================================================== */

function test(req, res) {
    return res.send("fine");

}


router.post("/register", registerRestaurant);

router.post("/login", loginRestaurant);

router.get("/profile", restaurantProfile);

router.put("/update-profile", upload.single("image"), restaurantUpdateProfile);

router.get("/settings", restaurantSettings);
router.put("/:id", restaurantUpdateSettings);
router.get("/:id", getRestaurantsDetails);
router.get("/popular", popularRestaurant);
router.get("/", getRestaurants);



module.exports = router;