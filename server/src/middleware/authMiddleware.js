// Now Protect Private Routes

const jwt = require("jsonwebtoken");

const User = require("../models/User");




const protect = async (req, res, next) => {
    try {
        let token;

        // Check token

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];

            // Verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find User
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } else {
            return res.status(401).json({
                message: "Not authorized, no token",
            })
        }
    } catch (error) {
        return res.status(401).json({
            message: "Token failed",
        });
    }
}

const adminProtect = async (req, res, next) => {
    next();
};

module.exports = {
    protect,
    adminProtect,
};