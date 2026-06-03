// src/publicApp/pages/Search.jsx

import { useState } from "react";

import {
    FaSearch,
    FaStar,
    FaClock,
    FaShoppingCart,
} from "react-icons/fa";

const foodsData = [
    {
        id: 1,
        name: "Chicken Burger",
        restaurant: "Burger House",
        price: 249,
        rating: 4.8,
        time: "25 min",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },

    {
        id: 2,
        name: "Cheese Pizza",
        restaurant: "Pizza Corner",
        price: 399,
        rating: 4.7,
        time: "30 min",
        image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },

    {
        id: 3,
        name: "Pasta Alfredo",
        restaurant: "Italian Hub",
        price: 299,
        rating: 4.6,
        time: "20 min",
        image:
            "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    },

    {
        id: 4,
        name: "French Fries",
        restaurant: "Snack Point",
        price: 149,
        rating: 4.5,
        time: "15 min",
        image:
            "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    },
];

const Search = () => {
    const [search, setSearch] = useState("");

    const filteredFoods = foodsData.filter((food) =>
        food.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 py-10">

            <div className="max-w-7xl mx-auto px-4 lg:px-8">

                {/* ======================================================
                   SEARCH HEADER
                ====================================================== */}

                <div className="text-center mb-12">

                    <h1
                        className="
              text-4xl lg:text-5xl
              font-extrabold
              text-gray-900
            "
                    >
                        Search Your Favorite Food
                    </h1>

                    <p
                        className="
              text-gray-500
              mt-4
              text-lg
            "
                    >
                        Discover delicious foods and restaurants
                    </p>
                </div>

                {/* ======================================================
                   SEARCH BAR
                ====================================================== */}

                <div className="max-w-3xl mx-auto mb-16">

                    <div
                        className="
              bg-white
              rounded-3xl
              shadow-lg
              flex items-center
              px-6 py-5
            "
                    >

                        <FaSearch className="text-orange-500 text-2xl" />

                        <input
                            type="text"
                            placeholder="Search burgers, pizza, pasta..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="
                flex-1
                px-5
                text-lg
                outline-none
                bg-transparent
              "
                        />
                    </div>
                </div>

                {/* ======================================================
                   RESULTS
                ====================================================== */}

                <div className="mb-8">

                    <h2
                        className="
              text-2xl font-bold
              text-gray-900
            "
                    >
                        Search Results
                    </h2>

                    <p className="text-gray-500 mt-2">
                        {filteredFoods.length} items found
                    </p>
                </div>

                {/* ======================================================
                   FOOD GRID
                ====================================================== */}

                {filteredFoods.length > 0 ? (
                    <div
                        className="
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-8
            "
                    >

                        {filteredFoods.map((food) => (
                            <div
                                key={food.id}
                                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  transition-all duration-300
                  group
                "
                            >

                                {/* IMAGE */}

                                <div className="relative overflow-hidden">

                                    <img
                                        src={food.image}
                                        alt={food.name}
                                        className="
                      w-full
                      h-56
                      object-cover
                      group-hover:scale-110
                      transition-all duration-500
                    "
                                    />

                                    <div
                                        className="
                      absolute top-4 right-4
                      bg-white
                      px-3 py-1
                      rounded-full
                      shadow
                      flex items-center gap-1
                    "
                                    >

                                        <FaStar className="text-yellow-400 text-sm" />

                                        <span className="text-sm font-semibold">
                                            {food.rating}
                                        </span>
                                    </div>
                                </div>

                                {/* CONTENT */}

                                <div className="p-5">

                                    <h3
                                        className="
                      text-xl font-bold
                      text-gray-900
                    "
                                    >
                                        {food.name}
                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        {food.restaurant}
                                    </p>

                                    {/* INFO */}

                                    <div
                                        className="
                      flex items-center
                      justify-between
                      mt-5
                    "
                                    >

                                        <div className="flex items-center gap-2 text-gray-500">

                                            <FaClock />

                                            <span>
                                                {food.time}
                                            </span>
                                        </div>

                                        <h4
                                            className="
                        text-2xl
                        font-extrabold
                        text-orange-500
                      "
                                        >
                                            ₹{food.price}
                                        </h4>
                                    </div>

                                    {/* BUTTON */}

                                    <button
                                        className="
                      mt-6
                      w-full
                      bg-orange-500
                      hover:bg-orange-600
                      text-white
                      py-3
                      rounded-2xl
                      font-semibold
                      flex items-center
                      justify-center
                      gap-3
                      transition-all
                    "
                                    >

                                        <FaShoppingCart />

                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        className="
              bg-white
              rounded-3xl
              shadow-sm
              py-20
              text-center
            "
                    >

                        <h3
                            className="
                text-3xl
                font-bold
                text-gray-800
              "
                        >
                            No Food Found
                        </h3>

                        <p
                            className="
                text-gray-500
                mt-4
                text-lg
              "
                        >
                            Try searching with another keyword
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;