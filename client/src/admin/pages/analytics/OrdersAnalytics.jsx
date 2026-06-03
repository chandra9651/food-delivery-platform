// src/admin/pages/analytics/OrdersAnalytics.jsx

import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import {
    FaShoppingBag,
    FaCheckCircle,
    FaClock,
    FaTimesCircle,
    FaChartLine,
    FaArrowUp,
    FaArrowDown,
    FaStore,
    FaUser,
    FaMotorcycle,
    FaCalendarAlt,
    FaDownload,
} from "react-icons/fa";

const OrdersAnalytics = () => {

    const [loading, setLoading] = useState(true);

    const [orders, setOrders] = useState([]);

    const [stats, setStats] = useState({
        totalOrders: 0,
        completedOrders: 0,
        pendingOrders: 0,
        cancelledOrders: 0,
    });

    const [monthlyOrders, setMonthlyOrders] = useState([]);

    /* ======================================================
       FETCH ORDERS ANALYTICS
    ====================================================== */

    const fetchOrdersAnalytics = async () => {

        try {

            setLoading(true);

            const adminToken =
                localStorage.getItem("adminToken");

            const { data } = await axios.get(
                "http://localhost:5000/api/admin/orders-analytics",
                {
                    headers: {
                        Authorization: `Bearer ${adminToken}`,
                    },
                }
            );

            setOrders(data.orders || []);

            setStats(data.stats || {});

            setMonthlyOrders(data.monthlyOrders || []);

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to fetch analytics"
            );

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrdersAnalytics();
    }, []);

    /* ======================================================
       STATS DATA
    ====================================================== */

    const orderStats = [
        {
            title: "Total Orders",
            value: stats.totalOrders || 0,
            growth: "+14%",
            icon: <FaShoppingBag />,
            bg: "bg-orange-100",
            text: "text-orange-500",
            trend: "up",
        },

        {
            title: "Completed Orders",
            value: stats.completedOrders || 0,
            growth: "+10%",
            icon: <FaCheckCircle />,
            bg: "bg-green-100",
            text: "text-green-500",
            trend: "up",
        },

        {
            title: "Pending Orders",
            value: stats.pendingOrders || 0,
            growth: "-3%",
            icon: <FaClock />,
            bg: "bg-yellow-100",
            text: "text-yellow-500",
            trend: "down",
        },

        {
            title: "Cancelled Orders",
            value: stats.cancelledOrders || 0,
            growth: "+2%",
            icon: <FaTimesCircle />,
            bg: "bg-red-100",
            text: "text-red-500",
            trend: "up",
        },
    ];

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[70vh]">
                <h1 className="text-3xl font-bold text-orange-500">
                    Loading Analytics...
                </h1>
            </div>
        );
    }

    return (
        <div className="space-y-8">

            {/* PAGE HEADER */}

            <div
                className="
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                    gap-5
                "
            >

                <div>

                    <h1
                        className="
                            text-3xl
                            md:text-4xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        Orders Analytics
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Track order performance and customer purchasing trends
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">

                    <button
                        className="
                            bg-white
                            border
                            border-gray-200
                            hover:bg-gray-100
                            px-6
                            py-4
                            rounded-2xl
                            font-semibold
                            flex
                            items-center
                            gap-3
                            transition-all
                        "
                    >
                        <FaCalendarAlt />

                        Last 30 Days
                    </button>

                    <button
                        className="
                            bg-orange-500
                            hover:bg-orange-600
                            text-white
                            px-6
                            py-4
                            rounded-2xl
                            font-bold
                            shadow-lg
                            shadow-orange-200
                            transition-all
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <FaDownload />

                        Export Analytics
                    </button>
                </div>
            </div>

            {/* STATS */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                "
            >

                {orderStats.map((item, index) => (

                    <div
                        key={index}
                        className="
                            bg-white
                            rounded-[30px]
                            border
                            border-gray-100
                            shadow-sm
                            p-6
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                            "
                        >

                            <div
                                className={`
                                    w-16
                                    h-16
                                    rounded-3xl
                                    flex
                                    items-center
                                    justify-center
                                    text-3xl
                                    ${item.bg}
                                    ${item.text}
                                `}
                            >
                                {item.icon}
                            </div>

                            <div
                                className={`
                                    flex
                                    items-center
                                    gap-2
                                    px-3
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-bold

                                    ${item.trend === "up"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-500"
                                    }
                                `}
                            >

                                {item.trend === "up"
                                    ? <FaArrowUp />
                                    : <FaArrowDown />
                                }

                                {item.growth}
                            </div>
                        </div>

                        <h2
                            className="
                                text-4xl
                                font-extrabold
                                text-gray-900
                                mt-8
                            "
                        >
                            {item.value}
                        </h2>

                        <p className="text-gray-500 mt-2">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* CHART SECTION */}

            <div
                className="
                    grid
                    grid-cols-1
                    xl:grid-cols-3
                    gap-6
                "
            >

                {/* CHART */}

                <div
                    className="
                        xl:col-span-2
                        bg-white
                        rounded-[32px]
                        border
                        border-gray-100
                        shadow-sm
                        p-6
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            mb-10
                        "
                    >

                        <div className="flex items-center gap-3">

                            <FaChartLine className="text-orange-500 text-2xl" />

                            <div>

                                <h2
                                    className="
                                        text-2xl
                                        font-extrabold
                                        text-gray-900
                                    "
                                >
                                    Orders Growth
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Monthly order analytics
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="
                            flex
                            items-end
                            justify-between
                            gap-4
                            h-[320px]
                        "
                    >

                        {monthlyOrders.map((item, index) => (

                            <div
                                key={index}
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    flex-1
                                "
                            >

                                <p
                                    className="
                                        text-sm
                                        font-bold
                                        text-gray-700
                                        mb-3
                                    "
                                >
                                    {item.orders}
                                </p>

                                <div
                                    className="
                                        w-full
                                        bg-orange-500
                                        rounded-t-3xl
                                        hover:opacity-80
                                        transition-all
                                    "
                                    style={{
                                        height: `${item.orders / 2}px`,
                                    }}
                                />

                                <p
                                    className="
                                        text-gray-500
                                        font-semibold
                                        mt-4
                                    "
                                >
                                    {item.month}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SUMMARY */}

                <div
                    className="
                        bg-white
                        rounded-[32px]
                        border
                        border-gray-100
                        shadow-sm
                        p-6
                        space-y-6
                    "
                >

                    <h2
                        className="
                            text-2xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        Order Summary
                    </h2>

                    {[
                        {
                            title: "Delivered Orders",
                            value: stats.completedOrders || 0,
                            color: "bg-green-500",
                        },

                        {
                            title: "Pending Orders",
                            value: stats.pendingOrders || 0,
                            color: "bg-yellow-500",
                        },

                        {
                            title: "Cancelled Orders",
                            value: stats.cancelledOrders || 0,
                            color: "bg-red-500",
                        },

                        {
                            title: "Total Orders",
                            value: stats.totalOrders || 0,
                            color: "bg-blue-500",
                        },
                    ].map((item, index) => (

                        <div
                            key={index}
                            className="
                                flex
                                items-center
                                justify-between
                                bg-gray-50
                                rounded-2xl
                                p-5
                            "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className={`
                                        w-4
                                        h-14
                                        rounded-full
                                        ${item.color}
                                    `}
                                />

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        {item.title}
                                    </p>

                                    <h3
                                        className="
                                            text-xl
                                            font-extrabold
                                            text-gray-900
                                            mt-1
                                        "
                                    >
                                        {item.value}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RECENT ORDERS */}

            <div
                className="
                    bg-white
                    rounded-[32px]
                    border
                    border-gray-100
                    shadow-sm
                    overflow-hidden
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-6
                        py-5
                        border-b
                        border-gray-100
                    "
                >

                    <div>

                        <h2
                            className="
                                text-2xl
                                font-extrabold
                                text-gray-900
                            "
                        >
                            Recent Orders
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Latest order activity across the platform
                        </p>
                    </div>
                </div>

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[1100px]">

                        <thead className="bg-gray-50">

                            <tr>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Order
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Customer
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Restaurant
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Amount
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Date
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {orders.map((item, index) => (

                                <tr
                                    key={index}
                                    className="
                                        border-b
                                        border-gray-100
                                        hover:bg-gray-50
                                        transition-all
                                    "
                                >

                                    {/* ORDER */}

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-3">

                                            <div
                                                className="
                                                    w-12
                                                    h-12
                                                    rounded-2xl
                                                    bg-orange-100
                                                    text-orange-500
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                            >
                                                <FaShoppingBag />
                                            </div>

                                            <span className="font-bold text-gray-900">
                                                #{item._id?.slice(-6)}
                                            </span>
                                        </div>
                                    </td>

                                    {/* CUSTOMER */}

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-3">

                                            <FaUser className="text-gray-400" />

                                            <span className="font-semibold text-gray-700">
                                                {item.user?.name || "Customer"}
                                            </span>
                                        </div>
                                    </td>

                                    {/* RESTAURANT */}

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-3">

                                            <FaStore className="text-red-500" />

                                            <span className="font-semibold text-gray-700">
                                                {item.restaurant?.restaurantName ||
                                                    "Restaurant"}
                                            </span>
                                        </div>
                                    </td>

                                    {/* AMOUNT */}

                                    <td className="px-6 py-5">

                                        <span
                                            className="
                                                text-lg
                                                font-extrabold
                                                text-orange-500
                                            "
                                        >
                                            ₹{item.totalAmount}
                                        </span>
                                    </td>

                                    {/* DATE */}

                                    <td className="px-6 py-5">

                                        <span className="text-gray-600">

                                            {new Date(
                                                item.createdAt
                                            ).toLocaleDateString()}
                                        </span>
                                    </td>

                                    {/* STATUS */}

                                    <td className="px-6 py-5">

                                        <div
                                            className={`
                                                inline-flex
                                                items-center
                                                px-4
                                                py-2
                                                rounded-full
                                                text-sm
                                                font-bold

                                                ${item.status === "Delivered"
                                                    ? "bg-green-100 text-green-600"

                                                    : item.status === "Pending"
                                                        ? "bg-yellow-100 text-yellow-600"

                                                        : "bg-red-100 text-red-600"
                                                }
                                            `}
                                        >
                                            {item.status}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrdersAnalytics;