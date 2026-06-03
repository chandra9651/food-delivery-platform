// src/controllers/adminController.js

const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Restaurant = require("../models/Restaurant");
const Order = require("../models/Order");
const Food = require("../models/Food");

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
   AUTH
====================================================== */

// @desc    Admin Login
// @route   POST /api/admin/login
// @access  Public

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (
            email !== process.env.ADMIN_EMAIL ||
            password !== process.env.ADMIN_PASSWORD
        ) {
            return res.status(401).json({
                success: false,
                message: "Invalid admin credentials",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Admin login successful",
            token: generateToken("admin"),
            admin: {
                email,
                role: "admin",
            },
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

/* ======================================================
   DASHBOARD
====================================================== */

// @desc    Get Dashboard Stats
// @route   GET /api/admin/dashboard-stats
// @access  Private Admin

const getDashboardStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();

        const activeUsers = await User.countDocuments({
            isBlocked: false,
        });

        const blockedUsers = await User.countDocuments({
            isBlocked: true,
        });

        const totalRestaurants =
            await Restaurant.countDocuments();

        const approvedRestaurants =
            await Restaurant.countDocuments({
                isApproved: true,
            });

        const totalOrders =
            await Order.countDocuments();

        const totalFoods =
            await Food.countDocuments();

        const totalRevenueData =
            await Order.aggregate([
                {
                    $match: {
                        paymentStatus: "Paid",
                    },
                },
                {
                    $group: {
                        _id: null,
                        total: {
                            $sum: "$totalAmount",
                        },
                    },
                },
            ]);

        const totalRevenue =
            totalRevenueData[0]?.total || 0;

        res.status(200).json({
            success: true,

            stats: {
                totalUsers,
                activeUsers,
                blockedUsers,

                totalRestaurants,
                approvedRestaurants,

                totalOrders,
                totalFoods,

                totalRevenue,
            },
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch dashboard stats",
        });
    }
};

/* ======================================================
   USERS
====================================================== */

// @desc    Get All Users
// @route   GET /api/admin/users
// @access  Private Admin

const getAllUsers = async (req, res) => {
    try {
        const {
            search = "",
            status = "",
            sort = "newest",
        } = req.query;

        let query = {};

        /* SEARCH */

        if (search) {
            query.$or = [
                {
                    name: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    email: {
                        $regex: search,
                        $options: "i",
                    },
                },
            ];
        }

        /* STATUS */

        if (status === "Active") {
            query.isBlocked = false;
        }

        if (status === "Blocked") {
            query.isBlocked = true;
        }

        /* SORT */

        let sortOption = {
            createdAt: -1,
        };

        if (sort === "oldest") {
            sortOption = {
                createdAt: 1,
            };
        }

        const users = await User.find(query)
            .select("-password")
            .sort(sortOption);

        /* STATS */

        const totalUsers =
            await User.countDocuments();

        const activeUsers =
            await User.countDocuments({
                isBlocked: false,
            });

        const blockedUsers =
            await User.countDocuments({
                isBlocked: true,
            });

        const startOfMonth = new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            1
        );

        const newUsers =
            await User.countDocuments({
                createdAt: {
                    $gte: startOfMonth,
                },
            });

        res.status(200).json({
            success: true,

            users,

            totalUsers,
            activeUsers,
            blockedUsers,
            newUsers,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch users",
        });
    }
};

// @desc    Get Single User
// @route   GET /api/admin/users/:id
// @access  Private Admin

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(
            req.params.id
        ).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const orders = await Order.find({
            user: user._id,
        })
            .populate(
                "restaurant",
                "restaurantName"
            )
            .sort({
                createdAt: -1,
            })
            .limit(5);

        const totalSpentData =
            await Order.aggregate([
                {
                    $match: {
                        user: user._id,
                        paymentStatus: "Paid",
                    },
                },
                {
                    $group: {
                        _id: null,
                        total: {
                            $sum: "$totalAmount",
                        },
                    },
                },
            ]);

        const totalSpent =
            totalSpentData[0]?.total || 0;

        res.status(200).json({
            success: true,

            user,

            stats: {
                totalOrders: orders.length,
                totalSpent,
            },

            recentOrders: orders,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch user",
        });
    }
};

// @desc    Block / Unblock User
// @route   PUT /api/admin/users/:id/block
// @access  Private Admin

const blockUser = async (req, res) => {
    try {
        const user = await User.findById(
            req.params.id
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        user.isBlocked = !user.isBlocked;

        await user.save();

        res.status(200).json({
            success: true,
            message: user.isBlocked
                ? "User blocked successfully"
                : "User unblocked successfully",

            user,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to update user",
        });
    }
};

/* ======================================================
   RESTAURANTS
====================================================== */

// @desc    Get All Restaurants
// @route   GET /api/admin/restaurants
// @access  Private Admin

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants =
            await Restaurant.find()
                .populate(
                    "owner",
                    "name email"
                )
                .sort({
                    createdAt: -1,
                });

        res.status(200).json({
            success: true,
            restaurants,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message:
                "Failed to fetch restaurants",
        });
    }
};

// @desc    Get Restaurant By ID
// @route   GET /api/admin/restaurants/:id
// @access  Private Admin

const getRestaurantById = async (req, res) => {
    try {
        const restaurant =
            await Restaurant.findById(
                req.params.id
            ).populate(
                "owner",
                "name email phone"
            );

        if (!restaurant) {
            return res.status(404).json({
                success: false,
                message:
                    "Restaurant not found",
            });
        }

        res.status(200).json({
            success: true,
            restaurant,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message:
                "Failed to fetch restaurant",
        });
    }
};

// @desc    Approve Restaurant
// @route   PUT /api/admin/restaurants/:id/approve
// @access  Private Admin

const approveRestaurant = async (
    req,
    res
) => {
    try {
        const restaurant =
            await Restaurant.findById(
                req.params.id
            );

        if (!restaurant) {
            return res.status(404).json({
                success: false,
                message:
                    "Restaurant not found",
            });
        }

        restaurant.isApproved =
            !restaurant.isApproved;

        await restaurant.save();

        res.status(200).json({
            success: true,
            message: restaurant.isApproved
                ? "Restaurant approved"
                : "Restaurant approval removed",

            restaurant,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message:
                "Failed to update restaurant",
        });
    }
};

/* ======================================================
   ORDERS
====================================================== */

// @desc    Get All Orders
// @route   GET /api/admin/orders
// @access  Private Admin

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("user", "name email")
            .populate(
                "restaurant",
                "restaurantName"
            )
            .sort({
                createdAt: -1,
            });

        res.status(200).json({
            success: true,
            orders,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
        });
    }
};

// @desc    Get Order By ID
// @route   GET /api/admin/orders/:id
// @access  Private Admin

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(
            req.params.id
        )
            .populate("user", "name email")
            .populate(
                "restaurant",
                "restaurantName"
            );

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch order",
        });
    }
};

// @desc    Update Order Status
// @route   PUT /api/admin/orders/:id/status
// @access  Private Admin

const updateOrderStatus = async (
    req,
    res
) => {
    try {
        const { status } = req.body;

        const order = await Order.findById(
            req.params.id
        );

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        order.orderStatus = status;

        await order.save();

        res.status(200).json({
            success: true,
            message:
                "Order status updated successfully",

            order,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message:
                "Failed to update order status",
        });
    }
};

/* ======================================================
   FOODS
====================================================== */

// @desc    Get All Foods
// @route   GET /api/admin/foods
// @access  Private Admin

const getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find()
            .populate(
                "restaurant",
                "restaurantName"
            )
            .sort({
                createdAt: -1,
            });

        res.status(200).json({
            success: true,
            foods,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch foods",
        });
    }
};

// @desc    Delete Food
// @route   DELETE /api/admin/foods/:id
// @access  Private Admin

const deleteFood = async (req, res) => {
    try {
        const food = await Food.findById(
            req.params.id
        );

        if (!food) {
            return res.status(404).json({
                success: false,
                message: "Food not found",
            });
        }

        await food.deleteOne();

        res.status(200).json({
            success: true,
            message: "Food deleted successfully",
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to delete food",
        });
    }
};

module.exports = {
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
};