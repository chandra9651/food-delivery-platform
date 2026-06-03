const express = require("express");
const router = express.Router();

const { getProfile,
    updateProfile
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

router.get("/profile", protect, getProfile);

router.put("/profile", protect, upload.single("profileImage"), updateProfile);

module.exports = router;

