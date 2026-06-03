// src/admin/pages/analytics/SalesReports.jsx

import { useEffect, useState } from "react";

import axios from "axios";

import {
    FaDollarSign,
    FaChartLine,
    FaArrowUp,
    FaArrowDown,
    FaShoppingCart,
    FaStore,
    FaDownload,
    FaCalendarAlt,
    FaFileInvoiceDollar,
    FaMoneyBillWave,
} from "react-icons/fa";

const SalesReports = () => {
    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState([]);

    const [salesData, setSalesData] = useState([]);

    const [reports, setReports] = useState([]);

    const [summary, setSummary] = useState([]);

    /* FETCH SALES REPORTS */

    const fetchSalesReports = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem("adminToken");

            const { data } = await axios.get(
                "http://localhost:5000/api/admin/analytics/sales-reports",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (data.success) {
                setStats(data.stats);

                setSalesData(data.salesData);

                setReports(data.reports);

                setSummary(data.summary);
            }
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to fetch sales reports"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSalesReports();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[70vh]">
                <h1 className="text-3xl font-bold text-orange-500">
                    Loading Sales Reports...
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
                        Sales Reports
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Analyze platform sales and restaurant performance
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

                        Export Reports
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
                                {item.title === "Total Sales" && (
                                    <FaDollarSign />
                                )}

                                {item.title === "Total Orders" && (
                                    <FaShoppingCart />
                                )}

                                {item.title ===
                                    "Restaurant Earnings" && (
                                        <FaStore />
                                    )}

                                {item.title === "Refund Amount" && (
                                    <FaMoneyBillWave />
                                )}
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
                                        : "bg-red-100 text-red-500"}
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
                {/* SALES CHART */}

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
                                    Sales Overview
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Monthly sales performance
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
                        {salesData.map((item, index) => (
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
                                    ₹{item.sales / 1000}K
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
                                        height: `${item.sales / 140}px`,
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
                        Sales Summary
                    </h2>

                    {summary.map((item, index) => (
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

            {/* REPORTS TABLE */}

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
                            Restaurant Sales Reports
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Revenue generated by restaurants
                        </p>
                    </div>
                </div>

                {/* TABLE */}

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1100px]">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Report ID
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Restaurant
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Orders
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Revenue
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Commission
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
                            {reports.map((item, index) => (
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
                                                <FaFileInvoiceDollar />
                                            </div>

                                            <span className="font-bold text-gray-900">
                                                {item.id}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-5">
                                        <span className="font-semibold text-gray-700">
                                            {item.restaurant}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">
                                        <span className="font-bold text-gray-900">
                                            {item.orders}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">
                                        <span className="text-lg font-extrabold text-orange-500">
                                            ₹{item.revenue}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">
                                        <span className="font-bold text-green-600">
                                            ₹{item.commission}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5">
                                        <span className="text-gray-600">
                                            {item.date}
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

                        ${item.status === "Completed"
                                                    ? "bg-green-100 text-green-600"
                                                    : item.status === "Pending"
                                                        ? "bg-yellow-100 text-yellow-600"
                                                        : "bg-red-100 text-red-600"}
                      `}
                                        >
                                            {item.status}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {reports.length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                            No Sales Reports Found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SalesReports;