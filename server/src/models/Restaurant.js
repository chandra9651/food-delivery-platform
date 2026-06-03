// // /src/models

// const mongoose = require("mongoose");

// const restaurantSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: true,
//         trim: true
//     },
//     description: {
//         type: String,
//         default: ""
//     },
//     image: {
//         type: String,
//         default: ""
//     },
//     address: {
//         type: String,
//         require: true
//     },
//     phone: {
//         type: String,
//         require: true
//     },
//     cuisine: {
//         type: String,
//         default: ""
//     },
//     deliveryTime: {
//         type: Number,
//         default: 30
//     },
//     rating: {
//         type: Number,
//         default: 0
//     },
//     owner: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true
//     },
//     isOpen: {
//         type: Boolean,
//         default: true
//     }


// }, { timestamps: true });


// const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// module.exports = Restaurant;


const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        ownerName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        phone: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            default: "",
        },

        deliveryTime: {
            type: Number,
            default: 30,
        },
        cuisine: {
            type: String,
            default: ""
        },
        role: {
            type: String,
            default: "restaurant",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Restaurant",
    restaurantSchema
);
