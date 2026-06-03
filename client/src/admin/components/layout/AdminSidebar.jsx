// import {
//     FaHome,
//     FaClipboardList,
//     FaUtensils,
//     FaUsers,
//     FaStore,
//     FaChartPie,
//     FaMoneyBillWave,
//     FaTags,
//     FaBell,
//     FaCog,
//     FaSignOutAlt,
// } from "react-icons/fa";

// import { NavLink } from "react-router-dom";

// const menuItems = [
//     {
//         title: "Dashboard",
//         path: "/admin",
//         icon: <FaHome />,
//     },

//     {
//         title: "Orders",
//         path: "/admin/orders",
//         icon: <FaClipboardList />,
//     },
//     {
//         title: "pending-orders",
//         path: "/admin/pending-orders",
//         icon: <FaClipboardList />
//     },

//     {
//         title: "Foods",
//         path: "/admin/foods",
//         icon: <FaUtensils />,
//     },

//     {
//         title: "Restaurants",
//         path: "/admin/restaurants",
//         icon: <FaStore />,
//     },

//     {
//         title: "Users",
//         path: "/admin/users",
//         icon: <FaUsers />,
//     },

//     {
//         title: "Analytics",
//         path: "/admin/analytics",
//         icon: <FaChartPie />,
//     },

//     {
//         title: "Payments",
//         path: "/admin/payments",
//         icon: <FaMoneyBillWave />,
//     },
//     {
//         title: "Payments Settings",
//         path: "/admin/payment-settings",
//         icon: <FaMoneyBillWave />
//     },
//     {
//         title: "Payments GateWay",
//         path: "/admin/payment-gateway",
//         icon: <FaMoneyBillWave />
//     },

//     {
//         title: "Coupons",
//         path: "/admin/coupons",
//         icon: <FaTags />,
//     },

//     {
//         title: "Notifications",
//         path: "/admin/notifications",
//         icon: <FaBell />,
//     },

//     {
//         title: "Settings",
//         path: "/admin/settings",
//         icon: <FaCog />,
//     },
// ];

// const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
//     return (
//         <>
//             {/* MOBILE OVERLAY */}

//             <div
//                 onClick={() => setSidebarOpen(false)}
//                 className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-all duration-300 ${sidebarOpen
//                     ? "opacity-100 visible"
//                     : "opacity-0 invisible"
//                     }`}
//             ></div>

//             {/* SIDEBAR */}

//             <aside
//                 className={`fixed top-0 left-0 z-50 h-screen w-[290px] bg-gray-950 text-white flex flex-col transition-all duration-300

//           ${sidebarOpen
//                         ? "translate-x-0"
//                         : "-translate-x-full"
//                     }

//           lg:translate-x-0
//         `}
//             >
//                 {/* LOGO */}

//                 <div className="px-7 py-8 border-b border-gray-800">

//                     <div className="flex items-center gap-4">

//                         <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl font-bold shadow-lg">
//                             F
//                         </div>

//                         <div>
//                             <h1 className="text-2xl font-extrabold tracking-wide">
//                                 Foodie
//                             </h1>

//                             <p className="text-orange-400 text-sm mt-1">
//                                 Admin Panel
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* MENU */}

//                 <div className="flex-1 overflow-y-auto px-5 py-6">

//                     <p className="text-gray-500 text-xs uppercase mb-5 px-4 tracking-widest">
//                         Main Menu
//                     </p>

//                     <nav className="flex flex-col gap-2">

//                         {menuItems.map((item, index) => (
//                             <NavLink
//                                 key={index}
//                                 to={item.path}
//                                 onClick={() => setSidebarOpen(false)}
//                                 className={({ isActive }) =>
//                                     `group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-medium

//                   ${isActive
//                                         ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
//                                         : "text-gray-300 hover:bg-gray-900 hover:text-white"
//                                     }
//                   `
//                                 }
//                             >
//                                 <span className="text-xl">
//                                     {item.icon}
//                                 </span>

//                                 <span className="text-[15px] tracking-wide">
//                                     {item.title}
//                                 </span>
//                             </NavLink>
//                         ))}
//                     </nav>
//                 </div>

//                 {/* ADMIN PROFILE */}

//                 <div className="p-5 border-t border-gray-800">

//                     <div className="bg-gray-900 rounded-3xl p-4">

//                         <div className="flex items-center gap-4">

//                             <img
//                                 src="https://i.pravatar.cc/100?img=12"
//                                 alt="admin"
//                                 className="w-14 h-14 rounded-2xl object-cover"
//                             />

//                             <div className="flex-1">

//                                 <h3 className="font-bold text-white">
//                                     Chandra
//                                 </h3>

//                                 <p className="text-sm text-gray-400 mt-1">
//                                     Super Admin
//                                 </p>
//                             </div>
//                         </div>

//                         {/* LOGOUT */}

//                         <button
//                             className="
//                 mt-5
//                 w-full
//                 flex
//                 items-center
//                 justify-center
//                 gap-3
//                 bg-orange-500
//                 hover:bg-orange-600
//                 transition-all
//                 py-3
//                 rounded-2xl
//                 font-semibold
//               "
//                         >
//                             <FaSignOutAlt />

//                             Logout
//                         </button>
//                     </div>
//                 </div>
//             </aside>
//         </>
//     );
// };

// export default AdminSidebar;









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
    FaSignOutAlt,
    FaMotorcycle,
    FaStar,
    FaUserShield,
    FaChartLine,
    FaCreditCard,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menuItems = [
    /* DASHBOARD */

    {
        title: "Dashboard",
        path: "/admin",
        icon: <FaHome />,
    },

    /* ORDERS */

    {
        title: "Orders",
        path: "/admin/orders",
        icon: <FaClipboardList />,
    },

    {
        title: "Pending Orders",
        path: "/admin/pending-orders",
        icon: <FaClipboardList />,
    },

    /* FOODS */

    {
        title: "Foods",
        path: "/admin/foods",
        icon: <FaUtensils />,
    },

    {
        title: "Categories",
        path: "/admin/categories",
        icon: <FaUtensils />,
    },

    {
        title: "Food Reviews",
        path: "/admin/food-reviews",
        icon: <FaStar />,
    },

    /* RESTAURANTS */

    {
        title: "Restaurants",
        path: "/admin/restaurants",
        icon: <FaStore />,
    },

    {
        title: "Pending Restaurants",
        path: "/admin/pending-restaurants",
        icon: <FaStore />,
    },

    {
        title: "Restaurant Requests",
        path: "/admin/restaurant-requests",
        icon: <FaStore />,
    },

    /* USERS */

    {
        title: "Users",
        path: "/admin/users",
        icon: <FaUsers />,
    },

    {
        title: "Blocked Users",
        path: "/admin/blocked-users",
        icon: <FaUsers />,
    },

    /* DELIVERY */

    {
        title: "Delivery Partners",
        path: "/admin/delivery-partners",
        icon: <FaMotorcycle />,
    },

    {
        title: "Active Deliveries",
        path: "/admin/active-deliveries",
        icon: <FaMotorcycle />,
    },

    {
        title: "Delivery Reports",
        path: "/admin/delivery-reports",
        icon: <FaMotorcycle />,
    },

    /* ANALYTICS */

    {
        title: "Revenue Analytics",
        path: "/admin/revenue-analytics",
        icon: <FaChartPie />,
    },

    {
        title: "Orders Analytics",
        path: "/admin/orders-analytics",
        icon: <FaChartLine />,
    },

    {
        title: "Sales Reports",
        path: "/admin/sales-reports",
        icon: <FaChartLine />,
    },

    {
        title: "Customer Analytics",
        path: "/admin/customer-analytics",
        icon: <FaChartLine />,
    },

    /* PAYMENTS */

    {
        title: "Transactions",
        path: "/admin/transactions",
        icon: <FaMoneyBillWave />,
    },

    {
        title: "Refunds",
        path: "/admin/refunds",
        icon: <FaCreditCard />,
    },

    {
        title: "Payment Settings",
        path: "/admin/payment-settings",
        icon: <FaMoneyBillWave />,
    },

    {
        title: "Payment Gateway",
        path: "/admin/payment-gateway",
        icon: <FaMoneyBillWave />,
    },

    /* COUPONS */

    {
        title: "Coupons",
        path: "/admin/coupons",
        icon: <FaTags />,
    },

    {
        title: "Create Coupon",
        path: "/admin/create-coupon",
        icon: <FaTags />,
    },

    /* NOTIFICATIONS */

    {
        title: "Notifications",
        path: "/admin/notifications",
        icon: <FaBell />,
    },

    {
        title: "Send Notification",
        path: "/admin/send-notification",
        icon: <FaBell />,
    },

    /* SETTINGS */

    {
        title: "General Settings",
        path: "/admin/general-settings",
        icon: <FaCog />,
    },

    {
        title: "Delivery Settings",
        path: "/admin/delivery-settings",
        icon: <FaCog />,
    },

    /* ADMIN PROFILE */

    {
        title: "Admin Profile",
        path: "/admin/admin-profile",
        icon: <FaUserShield />,
    },
];

const AdminSidebar = ({
    sidebarOpen,
    setSidebarOpen,
}) => {
    return (
        <>
            {/* MOBILE OVERLAY */}

            <div
                onClick={() =>
                    setSidebarOpen(false)
                }
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-all duration-300 ${sidebarOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
            ></div>

            {/* SIDEBAR */}

            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-[290px] bg-gray-950 text-white flex flex-col transition-all duration-300
          
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
                        <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl font-bold shadow-lg">
                            F
                        </div>

                        <div>
                            <h1 className="text-2xl font-extrabold tracking-wide">
                                Foodie
                            </h1>

                            <p className="text-orange-400 text-sm mt-1">
                                Admin Panel
                            </p>
                        </div>
                    </div>
                </div>

                {/* MENU */}

                <div className="flex-1 overflow-y-auto px-5 py-6">
                    <p className="text-gray-500 text-xs uppercase mb-5 px-4 tracking-widest">
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
                                        `group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-medium
                  
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

                {/* ADMIN PROFILE */}

                <div className="p-5 border-t border-gray-800">
                    <div className="bg-gray-900 rounded-3xl p-4">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://i.pravatar.cc/100?img=12"
                                alt="admin"
                                className="w-14 h-14 rounded-2xl object-cover"
                            />

                            <div className="flex-1">
                                <h3 className="font-bold text-white">
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
                flex
                items-center
                justify-center
                gap-3
                bg-orange-500
                hover:bg-orange-600
                transition-all
                py-3
                rounded-2xl
                font-semibold
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

export default AdminSidebar;