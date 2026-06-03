const Restaurant = require("../models/Restaurant");
const jwt = require("jsonwebtoken");

const restaurantProtect = async (
    req,
    res,
    next
) => {
    try {
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token =
                req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            req.restaurant =
                await Restaurant.findById(decoded.id).select("-password");

            console.log("test");
            console.log('token - ', token);
            console.log(decoded.id)
            console.log(req.restaurant);

            return next();
        }

        return res.status(401).json({
            message: "Not authorized",
        });

    } catch (error) {
        return res.status(401).json({
            message: "Restaurant Token failed",
        });
    }
};

module.exports = {
    restaurantProtect
};
