const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: ""
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    }
}, { timestamps: true });

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;