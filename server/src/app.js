// app.js 

const express = require('express');
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");

const foodRoutes = require("./routes/foodRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const adminRoutes = require("./routes/adminRoutes");

const app = express();


// app.use(cors());


app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.send("API is running...");
})

// Routes

app.get("/api/test", (req, res) => {

    res.status(200).json({
        success: true,
        message:
            "Frontend and Backend Connected Successfully 525",
    });
});


function test(req, res, next) {
    console.log("Testing...");
    return res.send("ok");
    // next();
}


app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "../uploads")
    )
);


app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/restaurants", restaurantRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/foods", foodRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/upload", uploadRoutes);

app.use("/api/payments", paymentRoutes);


module.exports = app;