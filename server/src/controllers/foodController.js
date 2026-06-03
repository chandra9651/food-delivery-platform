// src/controllers/foodController.js

const Food = require("../models/Food");

/* ======================================================
   CREATE FOOD
====================================================== */

const createFood = async (req, res) => {
    try {

        const {
            name,
            description,
            price,
            category,
        } = req.body;

        // Validation

        if (!name || !price) {
            return res.status(400).json({
                message: "Name and price are required",
            });
        }

        // Create Food

        const food = await Food.create({
            name,
            description,
            price,
            category,

            restaurant: req.restaurant._id,

            image: req.file
                ? `/uploads/${req.file.filename}`
                : "",
        });

        res.status(201).json({
            message: "Food created successfully",
            food,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};

/* ======================================================
   GET ALL FOODS
====================================================== */

const getFoods = async (req, res) => {
    try {

        const foods = await Food.find()
            .populate(
                "restaurant",
                "name address"
            );

        res.status(200).json(foods);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};

/* ======================================================
   GET FOODS BY RESTAURANT
====================================================== */

const getFoodsByRestaurant = async (
    req,
    res
) => {
    try {
        const foods = await Food.find({
            // restaurant:
            //     req.params.restaurantId,
            restaurant: req.restaurant._id.toString()

        });

        res.status(200).json(foods);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};

/* ======================================================
   UPDATE FOOD
====================================================== */

const updateFood = async (req, res) => {
    try {

        const food = await Food.findById(
            req.params.id
        ).populate("restaurant");

        if (!food) {
            return res.status(404).json({
                message: "Food not found",
            });
        }

        // Check ownership

        if (
            food.restaurant._id.toString() !==
            req.restaurant._id.toString()
        ) {
            return res.status(403).json({
                message: "Not authorized",
            });
        }

        const updatedFood =
            await Food.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                }
            );

        res.status(200).json({
            message:
                "Food updated successfully",
            food: updatedFood,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};

/* ======================================================
   DELETE FOOD
====================================================== */

const deleteFood = async (req, res) => {
    try {

        const food = await Food.findById(
            req.params.id
        ).populate("restaurant");

        if (!food) {
            return res.status(404).json({
                message: "Food not found",
            });
        }

        // Check ownership

        if (
            food.restaurant._id.toString() !==
            req.restaurant._id.toString()
        ) {
            return res.status(403).json({
                message: "Not authorized",
            });
        }

        await food.deleteOne();

        res.status(200).json({
            message:
                "Food deleted successfully",
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};


/* ======================================================
   GET top food of RESTAURANTS
====================================================== */

const topfood = async (req, res) => {
    try {
        const foods = await Food.find()
            .select("name description price image category")
            .populate("restaurant", "name deliveryTime");

        const formattedData = foods.map((food) => ({
            id: food._id,
            name: food.name,
            image: food.image,
            category: food.category,
            rating: "4.8",
            price: `₹${food.price} for one`,
            restaurantId: food.restaurant._id,
            time: food.restaurant.deliveryTime + "-" + `${food.restaurant.deliveryTime + 5}`,
        }));
        return res.status(200).json(formattedData);
    } catch (error) {
        res.status(400).json(error);
    }
}

/* ======================================================
   EXPORTS
====================================================== */

module.exports = {
    createFood,
    getFoods,
    getFoodsByRestaurant,
    updateFood,
    deleteFood,
    topfood
};