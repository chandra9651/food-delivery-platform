import { motion } from "framer-motion";

const offers = [
    {
        title: "50% OFF",
        subtitle: "On First Order",
        code: "WELCOME50",
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200",
        color: "from-orange-500 to-red-500",
    },

    {
        title: "Free Delivery",
        subtitle: "Above ₹499",
        code: "FREEDEL",
        image:
            "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1200",
        color: "from-green-500 to-emerald-600",
    },

    {
        title: "Buy 1 Get 1",
        subtitle: "On Burgers",
        code: "BOGO",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
        color: "from-purple-500 to-pink-500",
    },
];

const coupons = [
    {
        code: "MEGA50",
        discount: "Flat 50% OFF",
    },

    {
        code: "FOODIE30",
        discount: "30% OFF upto ₹150",
    },

    {
        code: "SUPER20",
        discount: "20% Cashback",
    },

    {
        code: "FREEDEL",
        discount: "Free Delivery",
    },
];

const Offers = () => {
    return (
        <div className="bg-slate-50">

            {/* HERO SECTION */}

            <section className="relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"></div>

                <div className="relative max-w-7xl mx-auto px-4 py-28 text-center text-white">

                    <p className="uppercase tracking-[5px] font-semibold text-orange-100">
                        Special Discounts
                    </p>

                    <h1 className="text-5xl lg:text-7xl font-extrabold mt-6 leading-tight">
                        Best Food Offers
                    </h1>

                    <p className="max-w-3xl mx-auto mt-8 text-lg text-orange-100 leading-8">
                        Enjoy exciting discounts, cashback offers and free delivery
                        on your favorite meals.
                    </p>

                    <button className="mt-10 bg-white text-orange-500 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all">
                        Explore Deals
                    </button>
                </div>
            </section>

            {/* FEATURED OFFERS */}

            <section className="max-w-7xl mx-auto px-4 py-24">

                <div className="flex justify-between items-center mb-14">

                    <div>

                        <p className="text-orange-500 font-bold uppercase tracking-[4px]">
                            Featured Deals
                        </p>

                        <h2 className="text-5xl font-extrabold mt-4">
                            Hot Offers For You
                        </h2>
                    </div>

                    <button className="hidden md:block text-orange-500 font-bold">
                        View All
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">

                    {offers.map((offer, index) => (
                        <motion.div
                            whileHover={{ y: -8 }}
                            key={index}
                            className="rounded-[40px] overflow-hidden shadow-xl bg-white"
                        >

                            {/* IMAGE */}

                            <div className="relative h-80 overflow-hidden">

                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                                />

                                <div className={`absolute inset-0 bg-gradient-to-t ${offer.color} opacity-80`}></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">

                                    <h2 className="text-5xl font-extrabold">
                                        {offer.title}
                                    </h2>

                                    <p className="mt-3 text-xl">
                                        {offer.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* CONTENT */}

                            <div className="p-8">

                                <div className="flex justify-between items-center">

                                    <div>

                                        <p className="text-gray-500">
                                            Use Coupon
                                        </p>

                                        <h3 className="text-2xl font-bold mt-2">
                                            {offer.code}
                                        </h3>
                                    </div>

                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* COUPONS SECTION */}

            <section className="bg-white py-24">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center">

                        <p className="text-orange-500 font-bold uppercase tracking-[4px]">
                            Coupon Codes
                        </p>

                        <h2 className="text-5xl font-extrabold mt-5">
                            Save More With Coupons
                        </h2>

                        <p className="text-gray-500 mt-6 text-lg">
                            Apply promo codes and enjoy extra discounts
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                        {coupons.map((coupon, index) => (
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                key={index}
                                className="bg-slate-50 rounded-[35px] p-10 shadow-md hover:shadow-2xl transition-all text-center border border-dashed border-orange-300"
                            >

                                <h3 className="text-3xl font-extrabold text-orange-500">
                                    {coupon.code}
                                </h3>

                                <p className="mt-5 text-gray-600 text-lg">
                                    {coupon.discount}
                                </p>

                                <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                                    Copy Code
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DELIVERY OFFER */}

            <section className="max-w-7xl mx-auto px-4 py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <img
                            src="https://images.unsplash.com/photo-1695654390723-479197a8c4a3?w=500&auto=format&fit=crop&q=60"
                            alt="delivery"
                            className="rounded-[40px] shadow-2xl"
                        />
                    </motion.div>

                    {/* CONTENT */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <p className="text-orange-500 font-bold uppercase tracking-[4px]">
                            Limited Time
                        </p>

                        <h2 className="text-5xl font-extrabold mt-5 leading-tight">
                            Free Delivery On All Orders
                        </h2>

                        <p className="text-gray-600 mt-8 text-lg leading-8">
                            Enjoy free delivery on orders above ₹499 from selected restaurants.
                        </p>

                        <div className="flex gap-6 mt-10">

                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all">
                                Order Now
                            </button>

                            <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-2xl font-bold hover:bg-orange-500 hover:text-white transition-all">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* NEWSLETTER */}

            <section className="max-w-7xl mx-auto px-4 pb-24">

                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-[50px] p-12 lg:p-20 text-center text-white">

                    <h2 className="text-5xl lg:text-6xl font-extrabold">
                        Never Miss Any Offer
                    </h2>

                    <p className="mt-8 text-lg text-orange-100 max-w-3xl mx-auto leading-8">
                        Subscribe to our newsletter and get exclusive discounts and updates.
                    </p>

                    <div className="max-w-2xl mx-auto bg-white rounded-2xl p-3 flex items-center mt-10">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 outline-none px-4 text-gray-700"
                        />

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Offers;