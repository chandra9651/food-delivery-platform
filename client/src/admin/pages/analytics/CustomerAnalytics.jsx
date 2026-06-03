// src/admin/pages/analytics/CustomerAnalytics.jsx

import { useEffect, useState } from "react";

import {
    FaUsers,
    FaUserPlus,
    FaShoppingCart,
    FaMoneyBillWave,
    FaArrowUp,
    FaArrowDown,
    FaChartLine,
    FaDownload,
    FaCalendarAlt,
    FaUserCircle,
    FaStar,
    FaMapMarkerAlt,
} from "react-icons/fa";

import toast from "react-hot-toast";

import API from "../../../api/axios";

const CustomerAnalytics = () => {

    const [loading, setLoading] =
        useState(true);

    const [customers, setCustomers] =
        useState([]);

    const [stats, setStats] =
        useState([]);

    const [growthData, setGrowthData] =
        useState([]);

    /* ======================================================
       GET CUSTOMER ANALYTICS
    ====================================================== */

    const fetchCustomerAnalytics = async () => {

        try {

            setLoading(true);

            const adminToken =
                localStorage.getItem("adminToken");

            const { data } = await API.get(
                "/admin/customer-analytics",
                {
                    headers: {
                        Authorization: `Bearer ${adminToken}`,
                    },
                }
            );

            /* ======================================================
               SET DATA
            ====================================================== */

            setCustomers(
                data.customers || []
            );

            setStats([
                {
                    title: "Total Customers",
                    value:
                        data.totalCustomers || 0,
                    growth: "+15%",
                    icon: <FaUsers />,
                    bg: "bg-orange-100",
                    text: "text-orange-500",
                    trend: "up",
                },

                {
                    title: "New Customers",
                    value:
                        data.newCustomers || 0,
                    growth: "+9%",
                    icon: <FaUserPlus />,
                    bg: "bg-green-100",
                    text: "text-green-500",
                    trend: "up",
                },

                {
                    title: "Total Orders",
                    value:
                        data.totalOrders || 0,
                    growth: "+12%",
                    icon: <FaShoppingCart />,
                    bg: "bg-blue-100",
                    text: "text-blue-500",
                    trend: "up",
                },

                {
                    title: "Customer Spending",
                    value: `₹${data.totalSpending || 0}`,
                    growth: "-3%",
                    icon: <FaMoneyBillWave />,
                    bg: "bg-purple-100",
                    text: "text-purple-500",
                    trend: "down",
                },
            ]);

            setGrowthData(
                data.growthData || []
            );

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load analytics"
            );

        } finally {

            setLoading(false);
        }
    };

    /* ======================================================
       USE EFFECT
    ====================================================== */

    useEffect(() => {

        fetchCustomerAnalytics();

    }, []);

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
                {/* LEFT */}

                <div>

                    <h1
                        className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-gray-900
            "
                    >
                        Customer Analytics
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Analyze customer activity,
                        growth and engagement
                    </p>
                </div>

                {/* RIGHT */}

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

            {/* LOADING */}

            {loading ? (

                <div className="bg-white rounded-3xl p-20 text-center shadow-sm">

                    <h2 className="text-2xl font-bold text-gray-700">
                        Loading analytics...
                    </h2>
                </div>

            ) : (
                <>
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
                        {stats.map((item, index) => (
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
                                {/* TOP */}

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

                                        {item.trend === "up" ? (
                                            <FaArrowUp />
                                        ) : (
                                            <FaArrowDown />
                                        )}

                                        {item.growth}
                                    </div>
                                </div>

                                {/* CONTENT */}

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

                    {/* CHART + SUMMARY */}

                    <div
                        className="
              grid
              grid-cols-1
              xl:grid-cols-3
              gap-6
            "
                    >
                        {/* CUSTOMER GROWTH */}

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
                            {/* HEADER */}

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
                                            Customer Growth
                                        </h2>

                                        <p className="text-gray-500 mt-1">
                                            Monthly customer
                                            increase
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
                                {growthData.map(
                                    (item, index) => (
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
                                                {item.users}
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
                                                    height: `${item.users / 5}px`,
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
                                    )
                                )}
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
                                Customer Summary
                            </h2>

                            <div
                                className="
                  flex
                  items-center
                  justify-between
                  bg-gray-50
                  rounded-2xl
                  p-5
                "
                            >

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Active Customers
                                    </p>

                                    <h3
                                        className="
                      text-2xl
                      font-extrabold
                      text-gray-900
                      mt-1
                    "
                                    >
                                        {
                                            customers.filter(
                                                (item) =>
                                                    item.status !==
                                                    "Blocked"
                                            ).length
                                        }
                                    </h3>
                                </div>
                            </div>

                            <div
                                className="
                  flex
                  items-center
                  justify-between
                  bg-gray-50
                  rounded-2xl
                  p-5
                "
                            >

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Blocked Customers
                                    </p>

                                    <h3
                                        className="
                      text-2xl
                      font-extrabold
                      text-gray-900
                      mt-1
                    "
                                    >
                                        {
                                            customers.filter(
                                                (item) =>
                                                    item.status ===
                                                    "Blocked"
                                            ).length
                                        }
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CUSTOMER TABLE */}

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
                        {/* HEADER */}

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
                                    Top Customers
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Highest spending and
                                    most active customers
                                </p>
                            </div>
                        </div>

                        {/* TABLE */}

                        <div className="overflow-x-auto">

                            <table className="w-full min-w-[1100px]">

                                <thead className="bg-gray-50">

                                    <tr>

                                        <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                            Customer
                                        </th>

                                        <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                            City
                                        </th>

                                        <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                            Orders
                                        </th>

                                        <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                            Spending
                                        </th>

                                        <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                            Rating
                                        </th>

                                        <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                            Joined
                                        </th>

                                        <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {customers.map(
                                        (item, index) => (
                                            <tr
                                                key={index}
                                                className="
                          border-b
                          border-gray-100
                          hover:bg-gray-50
                          transition-all
                        "
                                            >
                                                {/* CUSTOMER */}

                                                <td className="px-6 py-5">

                                                    <div className="flex items-center gap-4">

                                                        <div
                                                            className="
                              w-14
                              h-14
                              rounded-2xl
                              bg-orange-100
                              text-orange-500
                              flex
                              items-center
                              justify-center
                              text-xl
                            "
                                                        >
                                                            <FaUserCircle />
                                                        </div>

                                                        <div>

                                                            <h3 className="font-bold text-gray-900">
                                                                {
                                                                    item.name
                                                                }
                                                            </h3>

                                                            <p className="text-gray-500 text-sm mt-1">
                                                                {
                                                                    item.email
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* CITY */}

                                                <td className="px-6 py-5">

                                                    <div className="flex items-center gap-3">

                                                        <FaMapMarkerAlt className="text-blue-500" />

                                                        <span className="font-semibold text-gray-700">
                                                            {item.city ||
                                                                "N/A"}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* ORDERS */}

                                                <td className="px-6 py-5">

                                                    <span className="font-bold text-gray-900">
                                                        {item.orders ||
                                                            0}
                                                    </span>
                                                </td>

                                                {/* SPENT */}

                                                <td className="px-6 py-5">

                                                    <span
                                                        className="
                              text-lg
                              font-extrabold
                              text-orange-500
                            "
                                                    >
                                                        ₹
                                                        {item.spent ||
                                                            0}
                                                    </span>
                                                </td>

                                                {/* RATING */}

                                                <td className="px-6 py-5">

                                                    <div className="flex items-center gap-2">

                                                        <FaStar className="text-yellow-400" />

                                                        <span className="font-bold text-gray-900">
                                                            {item.rating ||
                                                                "5.0"}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* JOINED */}

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

                              ${item.status ===
                                                                "Blocked"
                                                                ? "bg-red-100 text-red-600"

                                                                : "bg-green-100 text-green-600"
                                                            }
                            `}
                                                    >
                                                        {item.status ||
                                                            "Active"}
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CustomerAnalytics;