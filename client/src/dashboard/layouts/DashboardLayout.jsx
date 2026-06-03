// src/restaurant/layouts/DashboardLayout.jsx

import { useState } from "react";

import {
    FaBars,
    FaTimes,
    FaHome,
    FaUtensils,
    FaClipboardList,
    FaMoneyBillWave,
    FaCog,
    FaUserCircle,
    FaSignOutAlt,
} from "react-icons/fa";

import {
    NavLink,
    Outlet,
    useNavigate,
} from "react-router-dom";

/* ======================================================
   SIDEBAR MENU
====================================================== */

const menuItems = [
    {
        title: "Dashboard",
        path: "/restaurant",
        icon: <FaHome />,
    },

    {
        title: "Add Food",
        path: "/restaurant/add-food",
        icon: <FaUtensils />,
    },

    {
        title: "Manage Foods",
        path: "/restaurant/manage-foods",
        icon: <FaUtensils />,
    },

    {
        title: "Orders",
        path: "/restaurant/orders",
        icon: <FaClipboardList />,
    },

    {
        title: "Earnings",
        path: "/restaurant/earnings",
        icon: <FaMoneyBillWave />,
    },

    {
        title: "Profile",
        path: "/restaurant/profile",
        icon: <FaUserCircle />,
    },

    {
        title: "Settings",
        path: "/restaurant/settings",
        icon: <FaCog />,
    },
];

/* ======================================================
   DASHBOARD LAYOUT
====================================================== */

const DashboardLayout = () => {

    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] =
        useState(false);

    /* ======================================================
       LOGOUT
    ====================================================== */

    const logoutHandler = () => {

        localStorage.removeItem(
            "restaurantToken"
        );

        navigate("/restaurant/login");
    };

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
                    bg-gray-950 text-white flex flex-col
                    transition-all duration-300

                    ${sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }

                    lg:translate-x-0
                `}
            >

                {/* LOGO */}

                <div className="px-7 py-8 border-b border-gray-800">

                    <div className="flex items-center gap-4">

                        <div
                            className="
                                w-14 h-14 rounded-2xl bg-orange-500
                                flex items-center justify-center
                                text-3xl font-bold shadow-lg
                            "
                        >
                            🍔
                        </div>

                        <div>

                            <h1 className="text-2xl font-extrabold">
                                Foodie
                            </h1>

                            <p className="text-orange-400 text-sm mt-1">
                                Dashboard
                            </p>
                        </div>
                    </div>
                </div>

                {/* MENU */}

                <div className="flex-1 overflow-y-auto px-5 py-6">

                    <p
                        className="
                            text-gray-500 text-xs uppercase
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
                                            : "text-gray-300 hover:bg-gray-900 hover:text-white"
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

                <div className="p-5 border-t border-gray-800">

                    <div className="bg-gray-900 rounded-3xl p-4">

                        <div className="flex items-center gap-4">

                            <img
                                src="https://i.pravatar.cc/100?img=12"
                                alt="profile"
                                className="
                                    w-14 h-14 rounded-2xl
                                    object-cover border-2 border-orange-500
                                "
                            />

                            <div className="flex-1">

                                <h3 className="font-bold">
                                    Chandra
                                </h3>

                                <p className="text-sm text-gray-400 mt-1">
                                    Restaurant Owner
                                </p>
                            </div>
                        </div>

                        {/* LOGOUT */}

                        <button
                            onClick={logoutHandler}
                            className="
                                mt-5 w-full flex items-center
                                justify-center gap-3
                                bg-orange-500 hover:bg-orange-600
                                transition-all py-3 rounded-2xl
                                font-semibold cursor-pointer
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
                                Dashboard
                            </h1>

                            <p className="text-sm text-gray-500 mt-1">
                                Welcome back 👋
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="flex items-center gap-4">

                        <img
                            src="https://i.pravatar.cc/100?img=12"
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

export default DashboardLayout;