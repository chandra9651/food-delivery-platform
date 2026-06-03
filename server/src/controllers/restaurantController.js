
const Restaurant = require("../models/Restaurant");
const Food = require("../models/Food");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

/* ======================================================
   GENERATE TOKEN
====================================================== */

const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        {
            expiresIn: "30d",
        }
    );
};

/* ======================================================
   REGISTER RESTAURANT
====================================================== */

const registerRestaurant = async (req, res) => {
    try {
        const {
            name,
            ownerName,
            email,
            phone,
            password,
            address,
            cuisine,
        } = req.body;

        /* VALIDATION */

        if (
            !name ||
            !ownerName ||
            !email ||
            !phone ||
            !password ||
            !address
        ) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        /* CHECK EMAIL */

        const restaurantExists =
            await Restaurant.findOne({ email });

        if (restaurantExists) {
            return res.status(400).json({
                message:
                    "Restaurant already exists",
            });
        }

        /* HASH PASSWORD */

        const salt = await bcrypt.genSalt(10);

        const hashedPassword =
            await bcrypt.hash(password, salt);

        /* CREATE RESTAURANT */

        const restaurant =
            await Restaurant.create({
                name,
                ownerName,
                email,
                phone,
                password: hashedPassword,
                address,
                cuisine,
            });

        /* RESPONSE */

        res.status(201).json({
            _id: restaurant._id,
            name: restaurant.name,
            email: restaurant.email,
            role: restaurant.role,
            token: generateToken(
                restaurant._id
            ),
            message:
                "Restaurant registered successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

/* ======================================================
   LOGIN RESTAURANT
====================================================== */

const loginRestaurant = async (req, res) => {
    try {
        const { email, password } = req.body;

        /* CHECK EMAIL */

        const restaurant =
            await Restaurant.findOne({ email });

        if (!restaurant) {
            return res.status(401).json({
                message: "Invalid email",
            });
        }

        /* CHECK PASSWORD */

        const isMatch =
            await bcrypt.compare(
                password,
                restaurant.password
            );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password",
            });
        }

        /* RESPONSE */

        res.status(200).json({
            _id: restaurant._id,
            name: restaurant.name,
            email: restaurant.email,
            role: restaurant.role,
            token: generateToken(
                restaurant._id
            ),
            message:
                "Login successful",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};



/* ======================================================
   GET RESTAURANTS Profile
====================================================== */


const restaurantProfile = async (req, res) => {
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

            const restaurant =
                await Restaurant.findById(
                    decoded.id
                ).select("-password");

            if (!restaurant) {
                return res.status(404).json({
                    message: "Restaurant not found",
                });
            }

            return res.status(200).json(
                restaurant
            );
        }

        return res.status(401).json({
            message: "No token provided",
        });

    } catch (error) {
        return res.status(401).json({
            message:
                "Restaurant Profile Authentication Failed",
        });
    }
};


const restaurantUpdateProfile = async (req, res) => {
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

            const restaurant =
                await Restaurant.findById(
                    decoded.id
                );

            if (!restaurant) {
                return res.status(404).json({
                    message: "Restaurant not found",
                });
            }

            restaurant.name =
                req.body.restaurantName ||
                restaurant.name;

            restaurant.ownerName =
                req.body.ownerName ||
                restaurant.ownerName;

            restaurant.email =
                req.body.email ||
                restaurant.email;

            restaurant.phone =
                req.body.phone ||
                restaurant.phone;

            restaurant.address =
                req.body.address ||
                restaurant.address;

            if (req.file) {
                restaurant.image =
                    `/uploads/${req.file.filename}`;
                console.log(req.file);
            }

            const updatedRestaurant =
                await restaurant.save();

            return res.status(200).json({
                message:
                    "Profile updated successfully",
                restaurant:
                    updatedRestaurant,
            });
        }

        return res.status(401).json({
            message: "No token provided",
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message,
        });
    }
};



const restaurantSettings = async (req, res) => {

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

            const restaurant =
                await Restaurant.findById(
                    decoded.id
                );

            if (!restaurant) {
                return res.status(404).json({
                    message: "Restaurant not found",
                });
            }
            return res.status(200).json(restaurant);

        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}


const restaurantUpdateSettings = async (req, res) => {
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

            const restaurant =
                await Restaurant.findById(
                    decoded.id
                );

            if (!restaurant) {
                return res.status(404).json({
                    message: "Restaurant not found",
                });
            }

            restaurant.name =
                req.body.name ||
                restaurant.name;

            restaurant.address =
                req.body.address ||
                restaurant.address;

            restaurant.phone =
                req.body.phone ||
                restaurant.phone;

            const updatedRestaurant =
                await restaurant.save();

            return res.status(200).json({
                message:
                    "Settings updated successfully",
                restaurant: {
                    _id: updatedRestaurant._id,
                    name: updatedRestaurant.name,
                    address:
                        updatedRestaurant.address,
                    phone:
                        updatedRestaurant.phone,
                },
            });
        }

        return res.status(401).json({
            message: "No token provided",
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message,
        });
    }
};

/* ======================================================
   GET ALL RESTAURANTS
====================================================== */

const getRestaurants = async (req, res) => {
    try {
        const restaurants =
            await Restaurant.find().select(
                "-password"
            );

        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

/* ======================================================
   GET Popular RESTAURANTS
====================================================== */
const popularRestaurant = async (req, res) => {

    try {
        const restaurants = await Restaurant.find().select(
            "_id name image deliveryTime"
        );

        return res.status(200).json(restaurants);

    } catch (error) {
        return res.status(400).json(error);
    }
}


/* ======================================================
   GET All RESTAURANTS Details of restaurant
====================================================== */

const getRestaurantsDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found",
            });
        }
        const foods = await Food.find({
            restaurant: id,
        })
            .select("name price image restaurant")
            .populate("restaurant", "name deliveryTime address");

        return res.status(200).json(foods);

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}


module.exports = {
    registerRestaurant,
    loginRestaurant,
    restaurantProfile,
    restaurantUpdateProfile,
    restaurantSettings,
    restaurantUpdateSettings,
    popularRestaurant,
    getRestaurantsDetails,
    getRestaurants,
};