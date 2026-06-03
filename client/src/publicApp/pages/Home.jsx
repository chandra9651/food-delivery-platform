import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import API from "../../api/axios";


const categories = [
    {
        name: "Pizza",
        image:
            "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
    },
    {
        name: "Burger",
        image:
            "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
        name: "Indian",
        image:
            "https://cdn-icons-png.flaticon.com/512/3480/3480823.png",
    },
    {
        name: "Chinese",
        image:
            "https://cdn-icons-png.flaticon.com/512/2515/2515183.png",
    },
];

// const restaurants = [
//     {
//         name: "Domino's Pizza",
//         image:
//             "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200",
//         rating: "4.5",
//         time: "20-30 min",
//     },

//     {
//         name: "Burger King",
//         image:
//             "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
//         rating: "4.3",
//         time: "15-20 min",
//     },

//     {
//         name: "Biryani House",
//         image:
//             "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1200",
//         rating: "4.7",
//         time: "25-35 min",
//     },
// ];

const Home = () => {


    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {

        const fetchPopularRestaurants = async () => {

            try {

                const { data } = await API.get(
                    "/restaurants/popular"
                );
                data.map((item) => {
                    item.image = `${import.meta.env.VITE_SERVER_URL}${item.image}`;
                    item.rating = 4.2;
                    item.time = item.deliveryTime
                })
                setRestaurants(data);

            } catch (error) {

                console.log(error);
            }
        };

        fetchPopularRestaurants();

    }, []);

    console.log(restaurants);

    return (
        <div className="max-w-7xl mx-auto px-4">

            {/* HERO */}
            <section className="grid lg:grid-cols-2 gap-16 items-center py-16">

                {/* LEFT */}
                <div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">

                        Delicious food,

                        <span className="block text-orange-500 mt-2">
                            delivered fast
                        </span>
                    </h1>

                    <p className="text-gray-500 text-lg mt-6 leading-8 max-w-xl">
                        Order from your favorite restaurants and enjoy
                        fast delivery at your doorstep.
                    </p>

                    {/* SEARCH */}
                    <div className="bg-white mt-10 rounded-2xl shadow-lg p-3 flex items-center gap-3 max-w-xl">

                        <input
                            type="text"
                            placeholder="Enter your delivery location"
                            className="flex-1 outline-none px-4 text-gray-700"
                        />

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all">
                            Find Food
                        </button>
                    </div>

                    {/* FEATURES */}
                    <div className="flex flex-wrap gap-10 mt-12">

                        <div>
                            <h3 className="font-bold text-lg">
                                Fast Delivery
                            </h3>

                            <p className="text-gray-500 mt-1">
                                On time delivery
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg">
                                Best Quality
                            </h3>

                            <p className="text-gray-500 mt-1">
                                Fresh & tasty food
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg">
                                Safe Payment
                            </h3>

                            <p className="text-gray-500 mt-1">
                                100% secure
                            </p>
                        </div>
                    </div>
                </div>




                {/* RIGHT IMAGE */}
                <div className="relative">

                    {/* ORANGE BACKGROUND */}
                    <div className="absolute inset-0 bg-orange-500 rounded-[50px] rotate-6"></div>

                    <img
                        src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200"
                        alt="food"
                        className="relative z-10 rounded-[50px] h-[500px] w-full object-cover shadow-2xl"
                    />

                    {/* OFFER CARD */}
                    <div className="absolute bottom-8 -left-8 z-20 bg-white rounded-2xl shadow-xl p-5">

                        <h3 className="text-3xl font-bold">
                            25% OFF
                        </h3>

                        <p className="text-gray-500 mt-1">
                            On your first order
                        </p>

                        <button className="text-orange-500 font-bold mt-3">
                            ORDER NOW
                        </button>
                    </div>
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="mt-10">

                <div className="flex justify-between items-center mb-8">

                    <h2 className="text-4xl font-bold">
                        Browse by category
                    </h2>

                    <button className="text-orange-500 font-semibold">
                        View all
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {categories.map((item, index) => (
                        <motion.div
                            whileHover={{ y: -5 }}
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all flex flex-col items-center"
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-contain"
                            />

                            <h3 className="mt-4 text-lg font-semibold">
                                {item.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* RESTAURANTS */}
            <section className="mt-20 pb-20">

                <div className="flex justify-between items-center mb-8">

                    <h2 className="text-4xl font-bold">
                        Popular Restaurants
                    </h2>

                    <Link to="/restaurants">
                        <button className="text-orange-500 font-semibold cursor-pointer">
                            View all
                        </button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {restaurants.map((item, index) => (
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
                        >

                            <div className="relative">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-64 w-80 object-cover"
                                />

                                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-semibold shadow">
                                    {item.time}
                                </div>
                            </div>

                            <div className="p-6">

                                <div className="flex justify-between items-center">

                                    <h3 className="text-2xl font-bold">
                                        {item.name}
                                    </h3>

                                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">
                                        ★ {item.rating}
                                    </span>
                                </div>

                                <p className="text-gray-500 mt-3">
                                    Pizza • Fast Food • Drinks
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;