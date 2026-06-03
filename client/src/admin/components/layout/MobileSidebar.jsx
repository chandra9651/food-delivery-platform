import {
    FaHome,
    FaClipboardList,
    FaUtensils,
    FaUsers,
    FaStore,
    FaChartPie,
    FaMoneyBillWave,
    FaTags,
    FaBell,
    FaCog,
    FaTimes,
    FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menuItems = [
    {
        title: "Dashboard",
        path: "/admin",
        icon: <FaHome />,
    },

    {
        title: "Orders",
        path: "/admin/orders",
        icon: <FaClipboardList />,
    },

    {
        title: "Foods",
        path: "/admin/foods",
        icon: <FaUtensils />,
    },

    {
        title: "Restaurants",
        path: "/admin/restaurants",
        icon: <FaStore />,
    },

    {
        title: "Users",
        path: "/admin/users",
        icon: <FaUsers />,
    },

    {
        title: "Analytics",
        path: "/admin/analytics",
        icon: <FaChartPie />,
    },

    {
        title: "Payments",
        path: "/admin/payments",
        icon: <FaMoneyBillWave />,
    },

    {
        title: "Coupons",
        path: "/admin/coupons",
        icon: <FaTags />,
    },

    {
        title: "Notifications",
        path: "/admin/notifications",
        icon: <FaBell />,
    },

    {
        title: "Settings",
        path: "/admin/settings",
        icon: <FaCog />,
    },
];

const MobileSidebar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <>
            {/* OVERLAY */}

            <div
                onClick={() => setSidebarOpen(false)}
                className={`
          fixed
          inset-0
          bg-black/50
          z-40
          transition-all
          duration-300
          lg:hidden

          ${sidebarOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
        `}
            ></div>

            {/* SIDEBAR */}

            <aside
                className={`
          fixed
          top-0
          left-0
          z-50
          w-[290px]
          h-screen
          bg-gray-950
          text-white
          flex
          flex-col
          transition-all
          duration-300
          lg:hidden

          ${sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
        `}
            >
                {/* HEADER */}

                <div
                    className="
            px-6
            py-6
            border-b
            border-gray-800
            flex
            items-center
            justify-between
          "
                >
                    {/* LOGO */}

                    <div className="flex items-center gap-4">

                        <div
                            className="
                w-14
                h-14
                rounded-2xl
                bg-orange-500
                flex
                items-center
                justify-center
                text-3xl
                font-bold
              "
                        >
                            F
                        </div>

                        <div>

                            <h1 className="text-2xl font-extrabold">
                                Foodie
                            </h1>

                            <p className="text-orange-400 text-sm mt-1">
                                Admin Panel
                            </p>
                        </div>
                    </div>

                    {/* CLOSE BUTTON */}

                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="
              w-10
              h-10
              rounded-xl
              bg-gray-900
              hover:bg-orange-500
              transition-all
              flex
              items-center
              justify-center
              text-lg
            "
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* MENU */}

                <div className="flex-1 overflow-y-auto px-5 py-6">

                    <p
                        className="
              text-gray-500
              text-xs
              uppercase
              tracking-widest
              px-4
              mb-5
            "
                    >
                        Main Menu
                    </p>

                    <nav className="flex flex-col gap-2">

                        {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                    `
                  flex
                  items-center
                  gap-4
                  px-5
                  py-4
                  rounded-2xl
                  font-medium
                  transition-all
                  duration-300

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

                                <span className="text-[15px]">
                                    {item.title}
                                </span>
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* FOOTER */}

                <div className="p-5 border-t border-gray-800">

                    <div className="bg-gray-900 rounded-3xl p-4">

                        {/* PROFILE */}

                        <div className="flex items-center gap-4">

                            <img
                                src="https://i.pravatar.cc/100?img=12"
                                alt="admin"
                                className="
                  w-14
                  h-14
                  rounded-2xl
                  object-cover
                "
                            />

                            <div>

                                <h3 className="font-bold">
                                    Chandra
                                </h3>

                                <p className="text-sm text-gray-400 mt-1">
                                    Super Admin
                                </p>
                            </div>
                        </div>

                        {/* LOGOUT */}

                        <button
                            className="
                mt-5
                w-full
                bg-orange-500
                hover:bg-orange-600
                transition-all
                py-3
                rounded-2xl
                font-semibold
                flex
                items-center
                justify-center
                gap-3
              "
                        >
                            <FaSignOutAlt />

                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default MobileSidebar;