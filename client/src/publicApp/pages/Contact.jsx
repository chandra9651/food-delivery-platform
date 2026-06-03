import { motion } from "framer-motion";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

const contactInfo = [
    {
        icon: <FaMapMarkerAlt />,
        title: "Our Location",
        value: "Prayagraj, Uttar Pradesh, India",
    },

    {
        icon: <FaPhoneAlt />,
        title: "Phone Number",
        value: "+91 9876543210",
    },

    {
        icon: <FaEnvelope />,
        title: "Email Address",
        value: "support@foodie.com",
    },

    {
        icon: <FaClock />,
        title: "Working Hours",
        value: "09:00 AM - 11:00 PM",
    },
];

const Contact = () => {
    return (
        <div className="bg-slate-50">

            {/* HERO SECTION */}

            <section className="relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"></div>

                <div className="relative max-w-7xl mx-auto px-4 py-28 text-center text-white">

                    <p className="uppercase tracking-[5px] font-semibold text-orange-100">
                        Contact Us
                    </p>

                    <h1 className="text-5xl lg:text-7xl font-extrabold mt-6">
                        We’d Love To Hear From You
                    </h1>

                    <p className="max-w-3xl mx-auto mt-8 text-lg text-orange-100 leading-8">
                        Have questions, feedback or business inquiries?
                        Our team is always ready to help you.
                    </p>
                </div>
            </section>

            {/* CONTACT SECTION */}

            <section className="max-w-7xl mx-auto px-4 py-24">

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* LEFT SIDE */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <p className="text-orange-500 font-bold uppercase tracking-[4px]">
                            Get In Touch
                        </p>

                        <h2 className="text-5xl font-extrabold mt-5 leading-tight">
                            Let’s Start A Conversation
                        </h2>

                        <p className="text-gray-600 mt-8 text-lg leading-8">
                            Fill out the form and our team will get back to you
                            as soon as possible.
                        </p>

                        {/* CONTACT CARDS */}

                        <div className="space-y-6 mt-14">

                            {contactInfo.map((item, index) => (
                                <motion.div
                                    whileHover={{ x: 8 }}
                                    key={index}
                                    className="bg-white rounded-[30px] p-6 shadow-md hover:shadow-2xl transition-all flex items-center gap-6"
                                >

                                    <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 text-2xl">
                                        {item.icon}
                                    </div>

                                    <div>

                                        <h3 className="text-2xl font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-500 mt-2">
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* SOCIALS */}

                        <div className="mt-14">

                            <h3 className="text-2xl font-bold">
                                Follow Us
                            </h3>

                            <div className="flex gap-5 mt-6">

                                <button className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center text-xl">
                                    <FaFacebookF />
                                </button>

                                <button className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center text-xl">
                                    <FaInstagram />
                                </button>

                                <button className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center text-xl">
                                    <FaTwitter />
                                </button>

                                <button className="w-14 h-14 rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center text-xl">
                                    <FaLinkedinIn />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-[40px] shadow-xl p-10 lg:p-14"
                    >

                        <h2 className="text-4xl font-extrabold">
                            Send Message
                        </h2>

                        <p className="text-gray-500 mt-4">
                            We’ll respond within 24 hours.
                        </p>

                        {/* FORM */}

                        <form className="space-y-8 mt-10">

                            {/* NAME */}

                            <div>

                                <label className="block text-lg font-semibold mb-3">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-200 rounded-2xl px-6 py-5 outline-none focus:border-orange-500 transition-all"
                                />
                            </div>

                            {/* EMAIL */}

                            <div>

                                <label className="block text-lg font-semibold mb-3">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-200 rounded-2xl px-6 py-5 outline-none focus:border-orange-500 transition-all"
                                />
                            </div>

                            {/* SUBJECT */}

                            <div>

                                <label className="block text-lg font-semibold mb-3">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    className="w-full border border-gray-200 rounded-2xl px-6 py-5 outline-none focus:border-orange-500 transition-all"
                                />
                            </div>

                            {/* MESSAGE */}

                            <div>

                                <label className="block text-lg font-semibold mb-3">
                                    Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Write your message..."
                                    className="w-full border border-gray-200 rounded-2xl px-6 py-5 outline-none focus:border-orange-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* BUTTON */}

                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl text-lg font-bold transition-all hover:scale-[1.02]">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* MAP SECTION */}

            <section className="max-w-7xl mx-auto px-4 pb-24">

                <div className="bg-white rounded-[40px] overflow-hidden shadow-xl">

                    <div className="p-10 text-center">

                        <p className="text-orange-500 font-bold uppercase tracking-[4px]">
                            Find Us
                        </p>

                        <h2 className="text-5xl font-extrabold mt-5">
                            Visit Our Office
                        </h2>

                        <p className="text-gray-500 mt-6 text-lg">
                            We are available for support and partnership opportunities.
                        </p>
                    </div>

                    {/* GOOGLE MAP */}

                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28898.294617622547!2d81.8252262!3d25.4358011"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;