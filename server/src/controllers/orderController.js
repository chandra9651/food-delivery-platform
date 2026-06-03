const Order = require("../models/Order");

const Food = require("../models/Food");

const Restaurant = require("../models/Restaurant");

// PLACE ORDER
const placeOrder = async (req, res) => {
    try {
        const {
            restaurantId,
            items,
            deliveryAddress,
            paymentMethod,
        } = req.body;

        // Validation
        if (!restaurantId || !items || items.length === 0) {
            return res.status(400).json({
                message: "Order items are required",
            });
        }

        // Check restaurant exists
        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found",
            });
        }

        let totalAmount = 0;

        const orderItems = [];

        // Calculate total
        for (const item of items) {
            const food = await Food.findById(item.foodId);

            if (!food) {
                return res.status(404).json({
                    message: "Food item not found",
                });
            }

            const itemTotal = food.price * item.quantity;

            totalAmount += itemTotal;

            orderItems.push({
                food: food._id,
                quantity: item.quantity,
                price: food.price,
            });
        }

        // Create order
        const order = await Order.create({
            customer: req.user._id,
            restaurant: restaurantId,
            items: orderItems,
            totalAmount,
            deliveryAddress,
            paymentMethod,
        });

        // SEND REAL-TIME EVENT TO RESTAURANT

        const io = req.app.get("io");

        io.to(restaurantId.toString()).emit(
            "newOrder",
            {
                message: "New order received",
                order,
            }
        );

        res.status(201).json({
            message: "Order placed successfully",
            order,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET CUSTOMER ORDERS
const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            customer: req.user._id,
        })
            .populate("restaurant", "name address")
            .populate("items.food", "name price");

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET RESTAURANT ORDERS
const getRestaurantOrders = async (req, res) => {
    try {
        // Find restaurants owned by logged-in user
        const restaurants = await Restaurant.find({
            owner: req.user._id,
        });

        const restaurantIds = restaurants.map(
            (restaurant) => restaurant._id
        );

        const orders = await Order.find({
            restaurant: { $in: restaurantIds },
        })
            .populate("customer", "name email")
            .populate("items.food", "name price");

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// UPDATE ORDER STATUS
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const order = await Order.findById(req.params.id)
            .populate("restaurant");

        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            });
        }

        // Authorization check
        if (
            order.restaurant.owner.toString() !==
            req.user._id.toString()
        ) {
            return res.status(403).json({
                message: "Not authorized",
            });
        }

        order.orderStatus = status;

        await order.save();
        // SEND STATUS UPDATE TO CUSTOMER

        const io = req.app.get("io");

        io.to(order.customer.toString()).emit(
            "orderStatusUpdated",
            {
                message: "Order status updated",
                status: order.orderStatus,
                orderId: order._id,
            }
        );

        res.status(200).json({
            message: "Order status updated",
            order,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    placeOrder,
    getMyOrders,
    getRestaurantOrders,
    updateOrderStatus,
};