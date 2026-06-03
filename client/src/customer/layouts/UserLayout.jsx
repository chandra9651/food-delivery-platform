// src/user/layouts/UserLayout.jsx

import { useEffect, useState } from "react";

import {
    FaBars,
    FaTimes,
    FaUserCircle,
    FaHeart,
    FaClipboardList,
    FaMapMarkerAlt,
    FaCog,
    FaSignOutAlt,
    FaHome,
} from "react-icons/fa";

import {
    NavLink,
    Outlet,
} from "react-router-dom";

import {
    getProfile,
} from "../../services/authService";

/* ======================================================
   SIDEBAR MENU
====================================================== */

const menuItems = [
    {
        title: "Home",
        path: "/",
        icon: <FaHome />,
    },

    {
        title: "Profile",
        path: "/user/profile",
        icon: <FaUserCircle />,
    },

    {
        title: "My Orders",
        path: "/user/orders",
        icon: <FaClipboardList />,
    },
    {
        title: "Cart",
        path: "/user/cart",
        icon: <FaClipboardList />,
    },

    {
        title: "Wishlist",
        path: "/user/wishlist",
        icon: <FaHeart />,
    },

    {
        title: "Addresses",
        path: "/user/addresses",
        icon: <FaMapMarkerAlt />,
    },

    {
        title: "Settings",
        path: "/user/settings",
        icon: <FaCog />,
    },
];

const UserLayout = () => {

    const [sidebarOpen, setSidebarOpen] =
        useState(false);

    /* ======================================================
       LOGOUT
    ====================================================== */

    const logoutHandler = () => {

        localStorage.removeItem("userToken");

        window.location.href = "user/login";
    };

    /* ======================================================
         Profile IMAGE
      ====================================================== */
    const [preview, setPreview] =
        useState(
            "https://i.pravatar.cc/100?img=12"
        );


    const [formData, setFormData] = useState({
        profileImage: "https://i.pravatar.cc/100?img=12"
    });

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const data =
                    await getProfile();

                setPreview(
                    data.profileImage
                        ? `${import.meta.env.VITE_SERVER_URL}${data.profileImage}`
                        : "https://i.pravatar.cc/100?img=12"
                );

            } catch (error) {

                console.log(error);
            }
        };

        fetchProfile();

    }, []);

    return (
        <div className="min-h-screen bg-gray-100">

            {/* ======================================================
               MOBILE OVERLAY
            ====================================================== */}

            <div
                onClick={() =>
                    setSidebarOpen(false)
                }
                className={`
          fixed inset-0 bg-black/50 z-40 lg:hidden transition-all duration-300

          ${sidebarOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
        `}
            ></div>

            {/* ======================================================
               SIDEBAR
            ====================================================== */}

            <aside
                className={`
          fixed top-0 left-0 z-50 h-screen w-[290px]
          bg-white border-r border-gray-200
          flex flex-col transition-all duration-300

          ${sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }

          lg:translate-x-0
        `}
            >

                {/* LOGO */}

                <div className="px-7 py-8 border-b border-gray-200">

                    <div className="flex items-center gap-4">

                        <div
                            className="
                w-14 h-14 rounded-2xl
                bg-orange-500
                flex items-center justify-center
                text-white text-3xl
                shadow-lg
              "
                        >
                            🍔
                        </div>

                        <div>

                            <h1 className="text-2xl font-extrabold text-gray-900">
                                Foodie
                            </h1>

                            <p className="text-orange-500 text-sm font-semibold mt-1">
                                User Panel
                            </p>
                        </div>
                    </div>
                </div>

                {/* MENU */}

                <div className="flex-1 overflow-y-auto px-5 py-6">

                    <p
                        className="
              text-gray-400 text-xs uppercase
              mb-5 px-4 tracking-widest
            "
                    >
                        Main Menu
                    </p>

                    <nav className="flex flex-col gap-2">

                        {menuItems.map(
                            (item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    onClick={() =>
                                        setSidebarOpen(
                                            false
                                        )
                                    }
                                    className={({
                                        isActive,
                                    }) =>
                                        `
                    flex items-center gap-4
                    px-5 py-4 rounded-2xl
                    transition-all duration-300
                    font-medium
                    
                    ${isActive
                                            ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                                            : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                                        }
                  `
                                    }
                                >

                                    <span className="text-xl">
                                        {item.icon}
                                    </span>

                                    <span className="text-[15px] tracking-wide">
                                        {item.title}
                                    </span>
                                </NavLink>
                            )
                        )}
                    </nav>
                </div>

                {/* PROFILE */}

                <div className="p-5 border-t border-gray-200">

                    <div className="bg-orange-50 rounded-3xl p-4">

                        <div className="flex items-center gap-4">

                            <img
                                src={preview}
                                alt="user"
                                className="
                  w-14 h-14 rounded-2xl
                  object-cover border-2 border-orange-500 
                "
                            />

                            <div className="flex-1">

                                <h3 className="font-bold text-gray-900">
                                    Chandra
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    Premium User
                                </p>
                            </div>
                        </div>

                        {/* LOGOUT */}

                        <button
                            onClick={
                                logoutHandler
                            }
                            className="
                mt-5 w-full flex items-center
                justify-center gap-3
                bg-orange-500 hover:bg-orange-600
                transition-all py-3 rounded-2xl
                font-semibold text-white
              "
                        >

                            <FaSignOutAlt />

                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* ======================================================
               MAIN CONTENT
            ====================================================== */}

            <div className="lg:ml-[290px]">

                {/* HEADER */}

                <header
                    className="
            sticky top-0 z-30
            bg-white border-b border-gray-200
            px-5 lg:px-10 py-5
            flex items-center justify-between
          "
                >

                    {/* LEFT */}

                    <div className="flex items-center gap-4">

                        {/* MOBILE BUTTON */}

                        <button
                            onClick={() =>
                                setSidebarOpen(
                                    !sidebarOpen
                                )
                            }
                            className="
                lg:hidden
                w-11 h-11 rounded-xl
                bg-orange-500 text-white
                flex items-center justify-center
              "
                        >

                            {sidebarOpen ? (
                                <FaTimes />
                            ) : (
                                <FaBars />
                            )}
                        </button>

                        <div>

                            <h1 className="text-2xl font-bold text-gray-900">
                                My Account
                            </h1>

                            <p className="text-sm text-gray-500 mt-1">
                                Welcome back 👋
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="flex items-center gap-4">

                        <img
                            src={preview}
                            alt="profile"
                            className="
                w-12 h-12 rounded-2xl
                object-cover border-2 border-orange-500
              "
                        />
                    </div>
                </header>

                {/* PAGE CONTENT */}

                <main className="p-5 lg:p-8">

                    <Outlet />

                </main>
            </div>
        </div>
    );
};

export default UserLayout;