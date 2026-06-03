// src/publicApp/pages/RestaurantDetails.jsx

import {
    FaStar,
    FaClock,
    FaMapMarkerAlt,
    FaShoppingCart,
} from "react-icons/fa";

const foods = [
    {
        id: 1,
        name: "Chicken Burger",
        price: 199,
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        rating: 4.8,
    },

    {
        id: 2,
        name: "Cheese Pizza",
        price: 349,
        image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        rating: 4.7,
    },

    {
        id: 3,
        name: "Pasta Alfredo",
        price: 279,
        image:
            "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
        rating: 4.6,
    },

    {
        id: 4,
        name: "French Fries",
        price: 149,
        image:
            "https://images.unsplash.com/photo-1576107232684-1279f390859f",
        rating: 4.5,
    },
];

const RestaurantDetails = () => {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* ======================================================
               HERO SECTION
            ====================================================== */}

            <div className="relative h-[350px]">

                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                    alt="restaurant"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <div
                    className="
            absolute bottom-0 left-0
            w-full px-6 lg:px-20 py-10
            text-white
          "
                >

                    <div className="max-w-6xl mx-auto">

                        <h1 className="text-4xl lg:text-5xl font-extrabold">
                            Burger House
                        </h1>

                        <p className="mt-4 text-lg text-gray-200 max-w-2xl">
                            Delicious burgers, pizzas, fries
                            and fast delivery at your
                            doorstep.
                        </p>

                        {/* INFO */}

                        <div className="flex flex-wrap gap-6 mt-6">

                            <div className="flex items-center gap-2">

                                <FaStar className="text-yellow-400" />

                                <span className="font-semibold">
                                    4.8 Rating
                                </span>
                            </div>

                            <div className="flex items-center gap-2">

                                <FaClock className="text-orange-400" />

                                <span>
                                    30-40 min
                                </span>
                            </div>

                            <div className="flex items-center gap-2">

                                <FaMapMarkerAlt className="text-red-400" />

                                <span>
                                    Prayagraj, India
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ======================================================
               MENU SECTION
            ====================================================== */}

            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14">

                {/* TITLE */}

                <div className="flex items-center justify-between mb-10">

                    <div>

                        <h2 className="text-3xl font-bold text-gray-900">
                            Restaurant Menu
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Explore delicious dishes
                        </p>
                    </div>

                    <button
                        className="
              hidden md:flex
              items-center gap-3
              bg-orange-500 hover:bg-orange-600
              text-white px-6 py-3
              rounded-2xl font-semibold
              transition-all
            "
                    >

                        <FaShoppingCart />

                        View Cart
                    </button>
                </div>

                {/* FOOD GRID */}

                <div
                    className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
                >

                    {foods.map((food) => (
                        <div
                            key={food.id}
                            className="
                bg-white rounded-3xl
                overflow-hidden shadow-sm
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
                    w-full h-56 object-cover
                    group-hover:scale-110
                    transition-all duration-500
                  "
                                />

                                <div
                                    className="
                    absolute top-4 right-4
                    bg-white px-3 py-1
                    rounded-full shadow
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
                    text-xl font-bold text-gray-900
                  "
                                >
                                    {food.name}
                                </h3>

                                <p className="text-gray-500 mt-2 text-sm">
                                    Freshly prepared with
                                    premium ingredients.
                                </p>

                                {/* PRICE */}

                                <div
                                    className="
                    flex items-center
                    justify-between mt-6
                  "
                                >

                                    <h4
                                        className="
                      text-2xl font-extrabold
                      text-orange-500
                    "
                                    >
                                        ₹{food.price}
                                    </h4>

                                    <button
                                        className="
                      bg-orange-500 hover:bg-orange-600
                      text-white px-5 py-2
                      rounded-xl font-semibold
                      transition-all
                    "
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;