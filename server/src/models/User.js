const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            require: true,
            minlength: 6
        },
        phone: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: ""
        },
        role: {
            type: String,
            enum: ["customer", "restaurant", "delivery", "admin"],
            default: "customer",
        },
        profileImage: {
            type: String,
            default: "",
        },
        wishlist: [
            {
                type:
                    mongoose.Schema.Types.ObjectId,
                ref: "Food",
            },
        ],
        cart: [
            {
                food: {
                    type:
                        mongoose.Schema.Types.ObjectId,
                    ref: "Food",
                    required: true,
                },

                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ]
    },
    {
        timestamps: true,
    }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
