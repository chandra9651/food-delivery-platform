import { useEffect, useState } from "react";
import {
    getProfile,
} from "../../../services/authService"

import {
    FaShoppingCart,
    FaMapMarkerAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);


    const [profileImage, setProfileImage] = useState('https://i.pravatar.cc/150?img=12');
    const [address, setAddress] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                console.log("before");
                const data = await getProfile();
                setProfileImage(`${import.meta.env.VITE_SERVER_URL}${data.profileImage}`);
                setAddress(data.address);
                console.log("profileImage")
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProfile();
    }, []);


    // reusable active style
    const navClass = ({ isActive }) =>
        isActive
            ? "text-orange-500 font-semibold"
            : "text-gray-700 hover:text-orange-500 transition-all font-medium";

    const mobileNavClass = ({ isActive }) =>
        isActive
            ? "font-semibold text-orange-500"
            : "text-gray-700";

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex items-center justify-between h-20">

                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-14">

                        {/* LOGO */}
                        <NavLink to="/" className="flex items-center gap-3">

                            <div className="bg-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                                🍔
                            </div>

                            <div>
                                <h1 className="text-2xl font-extrabold text-gray-900">
                                    Foodie
                                </h1>
                                <p className="text-orange-500 text-sm font-semibold -mt-1">
                                    Express
                                </p>
                            </div>
                        </NavLink>

                        {/* DESKTOP MENU */}
                        <div className="hidden lg:flex items-center gap-10">

                            <NavLink to="/" className={navClass}>
                                Home
                            </NavLink>

                            <NavLink to="/restaurants" className={navClass}>
                                Restaurants
                            </NavLink>

                            <NavLink to="/offers" className={navClass}>
                                Offers
                            </NavLink>

                            <NavLink to="/about" className={navClass}>
                                About
                            </NavLink>

                            <NavLink to="/contact" className={navClass}>
                                Contact
                            </NavLink>

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-6">

                        {/* LOCATION */}
                        <div className="hidden md:flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full">

                            <FaMapMarkerAlt className="text-orange-500" />

                            <span className="text-sm font-semibold text-gray-700">
                                {address || "Your Address"}
                            </span>
                        </div>

                        {/* CART */}
                        <NavLink to="/user/cart" className="relative">

                            <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">

                                <FaShoppingCart className="text-lg" />
                            </div>

                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                2
                            </span>
                        </NavLink>
                        <NavLink to="/user" className="relative">
                            {/* PROFILE */}
                            <img
                                src={profileImage}
                                alt="profile"
                                className="w-11 h-11 rounded-full object-cover border-2 border-orange-500 cursor-pointer"
                            />
                        </NavLink>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="lg:hidden text-2xl"
                        >
                            {mobileMenu ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileMenu && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">

                    <div className="flex flex-col px-6 py-6 gap-6">

                        <NavLink
                            to="/"
                            className={mobileNavClass}
                            onClick={() => setMobileMenu(false)}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/restaurants"
                            className={mobileNavClass}
                            onClick={() => setMobileMenu(false)}
                        >
                            Restaurants
                        </NavLink>

                        <NavLink
                            to="/offers"
                            className={mobileNavClass}
                            onClick={() => setMobileMenu(false)}
                        >
                            Offers
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={mobileNavClass}
                            onClick={() => setMobileMenu(false)}
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={mobileNavClass}
                            onClick={() => setMobileMenu(false)}
                        >
                            Contact
                        </NavLink>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
