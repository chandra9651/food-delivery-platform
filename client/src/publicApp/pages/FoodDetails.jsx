// src/publicApp/pages/FoodDetails.jsx

import {
    FaStar,
    FaClock,
    FaFire,
    FaShoppingCart,
    FaHeart,
    FaPlus,
    FaMinus,
} from "react-icons/fa";

import { useState } from "react";

const FoodDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10">

            <div className="max-w-7xl mx-auto px-4 lg:px-8">

                {/* ======================================================
                   MAIN SECTION
                ====================================================== */}

                <div
                    className="
            grid grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
          "
                >

                    {/* ======================================================
                       FOOD IMAGE
                    ====================================================== */}

                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                            alt="food"
                            className="
                w-full
                h-[500px]
                object-cover
                rounded-3xl
                shadow-xl
              "
                        />

                        {/* BADGE */}

                        <div
                            className="
                absolute top-6 left-6
                bg-orange-500 text-white
                px-4 py-2 rounded-full
                font-semibold shadow-lg
              "
                        >
                            Bestseller
                        </div>
                    </div>

                    {/* ======================================================
                       FOOD CONTENT
                    ====================================================== */}

                    <div>

                        {/* CATEGORY */}

                        <p
                            className="
                text-orange-500
                font-semibold
                uppercase tracking-wider
              "
                        >
                            Burger
                        </p>

                        {/* TITLE */}

                        <h1
                            className="
                text-4xl lg:text-5xl
                font-extrabold
                text-gray-900
                mt-3
              "
                        >
                            Chicken Cheese Burger
                        </h1>

                        {/* RATINGS */}

                        <div
                            className="
                flex flex-wrap items-center
                gap-6 mt-6
              "
                        >

                            <div className="flex items-center gap-2">

                                <FaStar className="text-yellow-400" />

                                <span className="font-semibold text-gray-700">
                                    4.8 Rating
                                </span>
                            </div>

                            <div className="flex items-center gap-2">

                                <FaClock className="text-orange-500" />

                                <span className="text-gray-700">
                                    25-30 min
                                </span>
                            </div>

                            <div className="flex items-center gap-2">

                                <FaFire className="text-red-500" />

                                <span className="text-gray-700">
                                    450 Calories
                                </span>
                            </div>
                        </div>

                        {/* DESCRIPTION */}

                        <p
                            className="
                text-gray-600
                leading-relaxed
                mt-8
                text-lg
              "
                        >
                            Enjoy a delicious chicken burger
                            made with crispy chicken,
                            premium cheese, fresh lettuce,
                            tomatoes and our signature sauce.
                            Perfect for burger lovers.
                        </p>

                        {/* PRICE */}

                        <div className="mt-8">

                            <h2
                                className="
                  text-5xl
                  font-extrabold
                  text-orange-500
                "
                            >
                                ₹249
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Inclusive of all taxes
                            </p>
                        </div>

                        {/* QUANTITY */}

                        <div className="mt-10">

                            <h3 className="font-bold text-gray-900 mb-4">
                                Quantity
                            </h3>

                            <div
                                className="
                  flex items-center
                  gap-5
                "
                            >

                                <button
                                    onClick={decreaseQty}
                                    className="
                    w-12 h-12
                    rounded-2xl
                    bg-white
                    shadow-md
                    flex items-center justify-center
                    hover:bg-orange-500
                    hover:text-white
                    transition-all
                  "
                                >
                                    <FaMinus />
                                </button>

                                <span
                                    className="
                    text-2xl font-bold
                    w-10 text-center
                  "
                                >
                                    {quantity}
                                </span>

                                <button
                                    onClick={increaseQty}
                                    className="
                    w-12 h-12
                    rounded-2xl
                    bg-orange-500
                    text-white
                    shadow-md
                    flex items-center justify-center
                    hover:bg-orange-600
                    transition-all
                  "
                                >
                                    <FaPlus />
                                </button>
                            </div>
                        </div>

                        {/* BUTTONS */}

                        <div
                            className="
                flex flex-wrap gap-5
                mt-12
              "
                        >

                            {/* ADD TO CART */}

                            <button
                                className="
                  flex items-center gap-3
                  bg-orange-500 hover:bg-orange-600
                  text-white
                  px-8 py-4
                  rounded-2xl
                  font-semibold
                  shadow-lg
                  transition-all
                "
                            >

                                <FaShoppingCart />

                                Add to Cart
                            </button>

                            {/* WISHLIST */}

                            <button
                                className="
                  flex items-center gap-3
                  bg-white hover:bg-gray-100
                  border border-gray-200
                  text-gray-700
                  px-8 py-4
                  rounded-2xl
                  font-semibold
                  transition-all
                "
                            >

                                <FaHeart className="text-red-500" />

                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>

                {/* ======================================================
                   EXTRA SECTION
                ====================================================== */}

                <div className="mt-24">

                    <h2
                        className="
              text-3xl font-bold
              text-gray-900
              mb-8
            "
                    >
                        Ingredients
                    </h2>

                    <div
                        className="
              flex flex-wrap gap-4
            "
                    >

                        {[
                            "Chicken Patty",
                            "Cheese",
                            "Lettuce",
                            "Tomato",
                            "Burger Bun",
                            "Special Sauce",
                        ].map((item, index) => (
                            <span
                                key={index}
                                className="
                  bg-white
                  px-6 py-3
                  rounded-full
                  shadow-sm
                  border border-gray-100
                  text-gray-700
                  font-medium
                "
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;