const dotenv = require("dotenv").config();

const http = require("http");

const { Server } = require("socket.io");

const app = require("./app");

const connectDB = require("./config/db");

/* ======================================================
   DATABASE
====================================================== */

connectDB();

// Create HTTP server
const server = http.createServer(app);

// Socket.io setup
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

// Store io globally
app.set("io", io);

// Socket connection
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Join customer room
    socket.on("joinCustomerRoom", (userId) => {
        socket.join(userId);

        console.log(`Customer joined room: ${userId}`);
    });

    // Join restaurant room
    socket.on("joinRestaurantRoom", (restaurantId) => {
        socket.join(restaurantId);

        console.log(
            `Restaurant joined room: ${restaurantId}`
        );
    });

    // Disconnect
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});