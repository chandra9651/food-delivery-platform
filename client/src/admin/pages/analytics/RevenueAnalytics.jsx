// src/admin/pages/analytics/RevenueAnalytics.jsx

import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import {
    FaDollarSign,
    FaArrowUp,
    FaArrowDown,
    FaShoppingBag,
    FaStore,
    FaUsers,
    FaChartLine,
    FaDownload,
    FaCalendarAlt,
} from "react-icons/fa";

const RevenueAnalytics = () => {

    const [loading, setLoading] = useState(true);

    const [transactions, setTransactions] = useState([]);

    const [monthlyRevenue, setMonthlyRevenue] = useState([]);

    const [stats, setStats] = useState({
        totalRevenue: 0,
        totalOrders: 0,
        activeRestaurants: 0,
        activeCustomers: 0,
        platformEarnings: 0,
        restaurantRevenue: 0,
        deliveryCharges: 0,
        refundAmount: 0,
    });

    /* ======================================================
       FETCH REVENUE ANALYTICS
    ====================================================== */

    const fetchRevenueAnalytics = async () => {

        try {

            setLoading(true);

            const adminToken =
                localStorage.getItem("adminToken");

            const { data } = await axios.get(
                "http://localhost:5000/api/admin/revenue-analytics",
                {
                    headers: {
                        Authorization: `Bearer ${adminToken}`,
                    },
                }
            );

            setTransactions(data.transactions || []);

            setMonthlyRevenue(data.monthlyRevenue || []);

            setStats(data.stats || {});

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to fetch revenue analytics"
            );

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRevenueAnalytics();
    }, []);

    /* ======================================================
       LOADING
    ====================================================== */

    if (loading) {

        return (
            <div className="flex justify-center items-center h-[70vh]">
                <h1 className="text-3xl font-bold text-orange-500">
                    Loading Revenue Analytics...
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
                        Revenue Analytics
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Monitor platform revenue, sales and growth insights
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

                        Export Report
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

                {/* TOTAL REVENUE */}

                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-6
                        border
                        border-gray-100
                        shadow-sm
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
                            className="
                                w-16
                                h-16
                                rounded-3xl
                                bg-orange-100
                                text-orange-500
                                flex
                                items-center
                                justify-center
                                text-3xl
                            "
                        >
                            <FaDollarSign />
                        </div>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                bg-green-100
                                text-green-600
                                px-3
                                py-2
                                rounded-full
                                text-sm
                                font-bold
                            "
                        >
                            <FaArrowUp />

                            18%
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
                        ₹{stats.totalRevenue}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Revenue
                    </p>
                </div>

                {/* TOTAL ORDERS */}

                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-6
                        border
                        border-gray-100
                        shadow-sm
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
                            className="
                                w-16
                                h-16
                                rounded-3xl
                                bg-blue-100
                                text-blue-500
                                flex
                                items-center
                                justify-center
                                text-3xl
                            "
                        >
                            <FaShoppingBag />
                        </div>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                bg-green-100
                                text-green-600
                                px-3
                                py-2
                                rounded-full
                                text-sm
                                font-bold
                            "
                        >
                            <FaArrowUp />

                            12%
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
                        {stats.totalOrders}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Orders
                    </p>
                </div>

                {/* RESTAURANTS */}

                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-6
                        border
                        border-gray-100
                        shadow-sm
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
                            className="
                                w-16
                                h-16
                                rounded-3xl
                                bg-red-100
                                text-red-500
                                flex
                                items-center
                                justify-center
                                text-3xl
                            "
                        >
                            <FaStore />
                        </div>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                bg-green-100
                                text-green-600
                                px-3
                                py-2
                                rounded-full
                                text-sm
                                font-bold
                            "
                        >
                            <FaArrowUp />

                            8%
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
                        {stats.activeRestaurants}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Active Restaurants
                    </p>
                </div>

                {/* CUSTOMERS */}

                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-6
                        border
                        border-gray-100
                        shadow-sm
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
                            className="
                                w-16
                                h-16
                                rounded-3xl
                                bg-purple-100
                                text-purple-500
                                flex
                                items-center
                                justify-center
                                text-3xl
                            "
                        >
                            <FaUsers />
                        </div>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                bg-red-100
                                text-red-500
                                px-3
                                py-2
                                rounded-full
                                text-sm
                                font-bold
                            "
                        >
                            <FaArrowDown />

                            2%
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
                        {stats.activeCustomers}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Active Customers
                    </p>
                </div>
            </div>

            {/* CHART + SUMMARY */}

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
                                    Revenue Growth
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Monthly revenue overview
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BAR CHART */}

                    <div
                        className="
                            flex
                            items-end
                            justify-between
                            gap-4
                            h-[320px]
                        "
                    >

                        {monthlyRevenue.map((item, index) => (

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
                                    ₹{item.amount}
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
                                        height: `${item.amount / 200}px`,
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
                        Revenue Summary
                    </h2>

                    {[
                        {
                            title: "Platform Earnings",
                            value: `₹${stats.platformEarnings}`,
                            color: "bg-orange-500",
                        },

                        {
                            title: "Restaurant Revenue",
                            value: `₹${stats.restaurantRevenue}`,
                            color: "bg-blue-500",
                        },

                        {
                            title: "Delivery Charges",
                            value: `₹${stats.deliveryCharges}`,
                            color: "bg-green-500",
                        },

                        {
                            title: "Refund Amount",
                            value: `₹${stats.refundAmount}`,
                            color: "bg-red-500",
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

            {/* TRANSACTIONS TABLE */}

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
                            Recent Transactions
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Latest revenue transactions
                        </p>
                    </div>
                </div>

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[1000px]">

                        <thead className="bg-gray-50">

                            <tr>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Transaction
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

                            {transactions.map((item, index) => (

                                <tr
                                    key={index}
                                    className="
                                        border-b
                                        border-gray-100
                                        hover:bg-gray-50
                                        transition-all
                                    "
                                >

                                    <td className="px-6 py-5">

                                        <h3 className="font-bold text-gray-900">
                                            #{item._id?.slice(-6)}
                                        </h3>
                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="font-semibold text-gray-700">
                                            {item.user?.name || "Customer"}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="font-semibold text-gray-700">
                                            {item.restaurant?.restaurantName ||
                                                "Restaurant"}
                                        </span>
                                    </td>

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

                                    <td className="px-6 py-5">

                                        <span className="text-gray-600">

                                            {new Date(
                                                item.createdAt
                                            ).toLocaleDateString()}
                                        </span>
                                    </td>

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

export default RevenueAnalytics;