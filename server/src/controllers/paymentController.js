const crypto = require("crypto");

const razorpay = require("../utils/razorpay");

const Order = require("../models/Order");

// CREATE PAYMENT Order

const createPaymentOrder = async (req, res) => {

    try {
        const { orderId } = req.body;
        // Find Order
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            })
        }
        // Razorpay option

        const options = {
            amount: order.toalAmount * 100, // paisa
            currency: "INR",
            receipt: order._id.toString(),
        };

        // Create payment Oder

        const paymentOder = await razorpay.order.create(options);
        res.status(200).json({
            success: true,
            paymentOder,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}


// Verify Payment

const verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            orderId,
        } = req.body;

        // Generate Signature

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto.createHmac(
            "sha256",
            process.env.RAZORPAY_KEY_SECRET
        ).update(body.toString())
            .digest("hex");

        // Verify Signature

        const isAuthentic = expectedSignature === razorpay_signature;

        if (!isAuthentic) {
            return res.status(400).json({
                message: "Payment Verification failed",
            })
        }
        // Update order payment status

        const order = await Order.findById(orderId);
        order.paymentStatus = "Paid";
        await order.save();
        res.status(200).json({
            success: true,
            message: "Payment Successful",

        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

module.exports = {
    createPaymentOrder,
    verifyPayment
}