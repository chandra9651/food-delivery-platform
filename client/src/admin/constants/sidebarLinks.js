// constants/sidebarLinks.js

import {
    FaTachometerAlt,
    FaShoppingBag,
    FaUsers,
    FaStore,
    FaHamburger,
    FaMotorcycle,
    FaChartLine,
    FaMoneyBillWave,
    FaTags,
    FaBell,
    FaCog,
    FaUserShield,
} from "react-icons/fa";

/* ======================================================
   SIDEBAR LINKS
====================================================== */

const sidebarLinks = [
    /* ======================================================
       DASHBOARD
    ====================================================== */

    {
        title: "Dashboard",

        path: "/admin",

        icon: FaTachometerAlt,
    },

    /* ======================================================
       ORDERS
    ====================================================== */

    {
        title: "Orders",

        icon: FaShoppingBag,

        children: [
            {
                title: "All Orders",

                path: "/admin/orders",
            },

            {
                title: "Pending Orders",

                path: "/admin/pending-orders",
            },
        ],
    },

    /* ======================================================
       USERS
    ====================================================== */

    {
        title: "Users",

        icon: FaUsers,

        children: [
            {
                title: "All Users",

                path: "/admin/users",
            },

            {
                title: "Blocked Users",

                path: "/admin/blocked-users",
            },
        ],
    },

    /* ======================================================
       RESTAURANTS
    ====================================================== */

    {
        title: "Restaurants",

        icon: FaStore,

        children: [
            {
                title: "All Restaurants",

                path: "/admin/restaurants",
            },

            {
                title: "Pending Restaurants",

                path:
                    "/admin/pending-restaurants",
            },

            {
                title: "Restaurant Requests",

                path:
                    "/admin/restaurant-requests",
            },
        ],
    },

    /* ======================================================
       FOODS
    ====================================================== */

    {
        title: "Foods",

        icon: FaHamburger,

        children: [
            {
                title: "All Foods",

                path: "/admin/foods",
            },

            {
                title: "Categories",

                path: "/admin/categories",
            },

            {
                title: "Food Reviews",

                path: "/admin/food-reviews",
            },
        ],
    },

    /* ======================================================
       DELIVERY
    ====================================================== */

    {
        title: "Delivery",

        icon: FaMotorcycle,

        children: [
            {
                title: "Delivery Partners",

                path:
                    "/admin/delivery-partners",
            },

            {
                title: "Active Deliveries",

                path:
                    "/admin/active-deliveries",
            },

            {
                title: "Delivery Reports",

                path:
                    "/admin/delivery-reports",
            },
        ],
    },

    /* ======================================================
       ANALYTICS
    ====================================================== */

    {
        title: "Analytics",

        icon: FaChartLine,

        children: [
            {
                title: "Revenue Analytics",

                path:
                    "/admin/revenue-analytics",
            },

            {
                title: "Orders Analytics",

                path:
                    "/admin/orders-analytics",
            },

            {
                title: "Sales Reports",

                path:
                    "/admin/sales-reports",
            },

            {
                title: "Customer Analytics",

                path:
                    "/admin/customer-analytics",
            },
        ],
    },

    /* ======================================================
       PAYMENTS
    ====================================================== */

    {
        title: "Payments",

        icon: FaMoneyBillWave,

        children: [
            {
                title: "Transactions",

                path: "/admin/transactions",
            },

            {
                title: "Refunds",

                path: "/admin/refunds",
            },

            {
                title: "Payment Settings",

                path:
                    "/admin/payment-settings",
            },

            {
                title: "Payment Gateway",

                path:
                    "/admin/payment-gateway",
            },
        ],
    },

    /* ======================================================
       MARKETING
    ====================================================== */

    {
        title: "Marketing",

        icon: FaTags,

        children: [
            {
                title: "Coupons",

                path: "/admin/coupons",
            },

            {
                title: "Create Coupon",

                path:
                    "/admin/create-coupon",
            },
        ],
    },

    /* ======================================================
       NOTIFICATIONS
    ====================================================== */

    {
        title: "Notifications",

        icon: FaBell,

        children: [
            {
                title: "All Notifications",

                path:
                    "/admin/notifications",
            },

            {
                title: "Send Notification",

                path:
                    "/admin/send-notification",
            },
        ],
    },

    /* ======================================================
       SETTINGS
    ====================================================== */

    {
        title: "Settings",

        icon: FaCog,

        children: [
            {
                title: "General Settings",

                path:
                    "/admin/general-settings",
            },

            {
                title: "Delivery Settings",

                path:
                    "/admin/delivery-settings",
            },
        ],
    },

    /* ======================================================
       PROFILE
    ====================================================== */

    {
        title: "Admin Profile",

        path: "/admin/admin-profile",

        icon: FaUserShield,
    },
];

export default sidebarLinks;