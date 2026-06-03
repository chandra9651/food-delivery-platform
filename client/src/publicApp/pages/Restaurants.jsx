import { motion } from "framer-motion";
import { FaSearch, FaStar, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import API from "../../api/axios";

const categories = [
    "All",
    "Pizza",
    "Burger",
    "Indian",
    "Chinese",
    "Desserts",
];

const Foods = () => {

    const [topFood, setTopFood] = useState([]);

    useEffect(() => {
        const fetchTopFood = async () => {
            try {
                const { data } = await API.get("/foods/topfood");
                data.map((food) => {
                    food.image = `${import.meta.env.VITE_SERVER_URL}${food.image}`;
                })
                console.log("topfood");
                console.log(data);
                setTopFood(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTopFood();
    }, []);

    console.log('t');

    console.log(topFood);


    return (
        <div className="bg-slate-50">

            {/* HERO */}

            <section className="relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"></div>

                <div className="relative max-w-7xl mx-auto px-4 py-28 text-center text-white">

                    <p className="uppercase tracking-[5px] font-semibold text-orange-100">
                        Discover foods
                    </p>

                    <h1 className="text-5xl lg:text-7xl font-extrabold mt-6">
                        Find Your Favorite Food
                    </h1>

                    <p className="max-w-3xl mx-auto mt-8 text-lg text-orange-100 leading-8">
                        Explore top-rated foods and enjoy delicious meals delivered quickly.
                    </p>

                    {/* SEARCH */}

                    <div className="max-w-2xl mx-auto bg-white rounded-2xl p-3 flex items-center mt-12 shadow-2xl">

                        <FaSearch className="text-gray-400 text-xl ml-3" />

                        <input
                            type="text"
                            placeholder="Search foods or dishes..."
                            className="flex-1 px-4 py-3 outline-none text-gray-700"
                        />

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* FILTERS */}

            <section className="max-w-7xl mx-auto px-4 py-16">

                <div className="flex flex-wrap gap-4 justify-center">

                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`px-8 py-4 rounded-full font-semibold transition-all ${index === 0
                                ? "bg-orange-500 text-white shadow-lg"
                                : "bg-white text-gray-700 hover:bg-orange-500 hover:text-white shadow-md"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* foodS GRID */}

            <section className="max-w-7xl mx-auto px-4 pb-24">

                <div className="flex justify-between items-center mb-14">

                    <div>

                        <p className="text-orange-500 font-bold uppercase tracking-[4px]">
                            Popular foods
                        </p>

                        <h2 className="text-5xl font-extrabold mt-4">
                            Top Picks For You
                        </h2>
                    </div>

                    <button className="hidden md:block text-orange-500 font-bold">
                        View All
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">


                    {topFood.map((food) => (
                        <motion.div
                            whileHover={{ y: -8 }}
                            key={food.id}
                            className="bg-white rounded-[35px] overflow-hidden shadow-md hover:shadow-2xl transition-all"
                        >

                            {/* IMAGE */}

                            <div className="relative overflow-hidden h-72">

                                <img
                                    src={food.image}
                                    alt={food.name}
                                    className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                                />

                                {/* OVERLAY */}

                                <div className="absolute inset-0 bg-black/10"></div>

                                {/* DELIVERY TIME */}

                                <div className="absolute top-5 right-5 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">

                                    <FaClock className="text-orange-500" />

                                    <span className="font-semibold text-sm">
                                        {food.time}
                                    </span>
                                </div>
                            </div>

                            {/* CONTENT */}

                            <div className="p-8">

                                <div className="flex justify-between items-start">

                                    <div>

                                        <h3 className="text-3xl font-extrabold">
                                            {food.name}
                                        </h3>

                                        <p className="text-gray-500 mt-3 text-lg">
                                            {food.category}
                                        </p>
                                    </div>

                                    {/* RATING */}

                                    <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full flex items-center gap-2 font-bold">

                                        <FaStar />

                                        {food.rating}
                                    </div>
                                </div>

                                {/* PRICE */}

                                <p className="text-gray-600 mt-6 text-lg">
                                    {food.price}
                                </p>

                                {/* BUTTONS */}

                                <div className="flex gap-4 mt-8">

                                    <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition-all">
                                        Order Now
                                    </button>

                                    <Link
                                        to={`/restaurants/${food.restaurantId}`}
                                        className="flex-1 border-2 border-orange-500 text-orange-500 py-4 rounded-2xl font-bold hover:bg-orange-500 hover:text-white transition-all text-center block"
                                    >
                                        View Menu
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PROMOTION */}

            <section className="max-w-7xl mx-auto px-4 pb-24">

                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-[50px] p-12 lg:p-20 grid lg:grid-cols-2 gap-16 items-center overflow-hidden">

                    {/* CONTENT */}

                    <div className="text-white">

                        <p className="uppercase tracking-[5px] font-semibold text-orange-100">
                            Exclusive Offer
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-extrabold mt-6 leading-tight">
                            Get 50% OFF On Your First Order
                        </h2>

                        <p className="mt-8 text-lg text-orange-100 leading-8">
                            Discover premium foods and enjoy delicious food with huge discounts.
                        </p>

                        <button className="mt-10 bg-white text-orange-500 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all">
                            Claim Offer
                        </button>
                    </div>

                    {/* IMAGE */}

                    <div className="flex justify-center">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
                            alt="food"
                            className="w-[350px]"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Foods;