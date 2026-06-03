import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Rahul Sharma",
        role: "Founder & CEO",
        image: "https://i.pravatar.cc/300?img=12",
    },

    {
        name: "Priya Singh",
        role: "UI/UX Designer",
        image: "https://i.pravatar.cc/300?img=32",
    },

    {
        name: "Aman Verma",
        role: "Marketing Head",
        image: "https://i.pravatar.cc/300?img=15",
    },
];

const stats = [
    {
        number: "10K+",
        title: "Happy Customers",
    },

    {
        number: "500+",
        title: "Restaurants",
    },

    {
        number: "30+",
        title: "Cities",
    },

    {
        number: "4.9★",
        title: "Customer Rating",
    },
];

const About = () => {
    return (
        <div className="bg-slate-50">

            {/* HERO SECTION */}

            <section className="relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"></div>

                <div className="relative max-w-7xl mx-auto px-4 py-28 grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}

                    <div className="text-white">

                        <p className="uppercase tracking-[5px] font-semibold text-orange-100">
                            About Foodie
                        </p>

                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-6">
                            Delivering Happiness Through Food
                        </h1>

                        <p className="mt-8 text-lg leading-8 text-orange-100 max-w-2xl">
                            Foodie is a modern food delivery platform built
                            to connect people with their favorite restaurants
                            quickly and conveniently.
                        </p>

                        <button className="mt-10 bg-white text-orange-500 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">
                            Explore Restaurants
                        </button>
                    </div>

                    {/* RIGHT */}

                    <div className="relative">

                        <div className="absolute inset-0 bg-white/20 rounded-[50px] rotate-6"></div>

                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200"
                            alt="food"
                            className="relative rounded-[50px] shadow-2xl h-[500px] object-cover w-full"
                        />
                    </div>
                </div>
            </section>

            {/* STORY SECTION */}

            <section className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-20 items-center">

                {/* IMAGE */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <img
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200"
                        alt="restaurant"
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
                        Our Story
                    </p>

                    <h2 className="text-5xl font-extrabold mt-5 leading-tight">
                        We Make Food Ordering Simple & Fast
                    </h2>

                    <p className="text-gray-600 mt-8 leading-8 text-lg">
                        Our mission is to provide a seamless food delivery
                        experience with fast delivery, quality meals, and
                        customer satisfaction.
                    </p>

                    <p className="text-gray-600 mt-6 leading-8 text-lg">
                        We partner with top restaurants and use modern
                        technology to ensure every order reaches customers
                        fresh and on time.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-12">

                        <div className="bg-white p-6 rounded-3xl shadow-md">

                            <h3 className="text-4xl font-extrabold text-orange-500">
                                10K+
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Orders Delivered
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-md">

                            <h3 className="text-4xl font-extrabold text-orange-500">
                                500+
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Partner Restaurants
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* STATS */}

            <section className="bg-white py-20">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                        {stats.map((item, index) => (
                            <motion.div
                                whileHover={{ y: -8 }}
                                key={index}
                                className="bg-slate-50 rounded-3xl p-10 text-center shadow-md hover:shadow-2xl transition-all"
                            >

                                <h2 className="text-5xl font-extrabold text-orange-500">
                                    {item.number}
                                </h2>

                                <p className="mt-4 text-gray-600 font-medium">
                                    {item.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}

            <section className="max-w-7xl mx-auto px-4 py-24">

                <div className="text-center">

                    <p className="text-orange-500 font-bold uppercase tracking-[4px]">
                        Why Choose Us
                    </p>

                    <h2 className="text-5xl font-extrabold mt-5">
                        Best Food Delivery Experience
                    </h2>

                    <p className="text-gray-500 mt-6 text-lg">
                        We provide fast, reliable and premium food delivery service.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 mt-20">

                    <div className="bg-white rounded-[35px] p-10 shadow-md hover:shadow-2xl transition-all">

                        <div className="text-6xl">
                            🚀
                        </div>

                        <h3 className="text-3xl font-bold mt-8">
                            Fast Delivery
                        </h3>

                        <p className="text-gray-500 mt-5 leading-8">
                            Get your favorite meals delivered quickly and safely.
                        </p>
                    </div>

                    <div className="bg-white rounded-[35px] p-10 shadow-md hover:shadow-2xl transition-all">

                        <div className="text-6xl">
                            🍔
                        </div>

                        <h3 className="text-3xl font-bold mt-8">
                            Fresh Food
                        </h3>

                        <p className="text-gray-500 mt-5 leading-8">
                            Enjoy high-quality meals prepared with fresh ingredients.
                        </p>
                    </div>

                    <div className="bg-white rounded-[35px] p-10 shadow-md hover:shadow-2xl transition-all">

                        <div className="text-6xl">
                            💳
                        </div>

                        <h3 className="text-3xl font-bold mt-8">
                            Secure Payment
                        </h3>

                        <p className="text-gray-500 mt-5 leading-8">
                            Multiple payment options with safe transactions.
                        </p>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}

            <section className="bg-white py-24">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center">

                        <p className="text-orange-500 font-bold uppercase tracking-[4px]">
                            Our Team
                        </p>

                        <h2 className="text-5xl font-extrabold mt-5">
                            Meet Our Experts
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 mt-20">

                        {teamMembers.map((member, index) => (
                            <motion.div
                                whileHover={{ y: -8 }}
                                key={index}
                                className="bg-slate-50 rounded-[35px] overflow-hidden shadow-md hover:shadow-2xl transition-all"
                            >

                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-cover"
                                />

                                <div className="p-8 text-center">

                                    <h3 className="text-2xl font-bold">
                                        {member.name}
                                    </h3>

                                    <p className="text-orange-500 mt-2 font-medium">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}

            <section className="max-w-7xl mx-auto px-4 py-24">

                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-[50px] p-12 lg:p-20 text-center text-white">

                    <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                        Ready To Order Delicious Food?
                    </h2>

                    <p className="mt-8 text-lg text-orange-100 max-w-3xl mx-auto leading-8">
                        Explore hundreds of restaurants and enjoy premium food delivery service today.
                    </p>

                    <button className="mt-10 bg-white text-orange-500 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all">
                        Order Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;