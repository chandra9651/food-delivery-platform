const express = require("express");
const {
    registerUser,
    loginUser,
} = require("../controllers/authController");

const upload = require("../middleware/uploadMiddleware");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);


router.post("/login", loginUser);

// router.get("/profile", protect, getProfile);

// router.put("/profile", protect, upload.single("profileImage"), updateProfile);


module.exports = router;