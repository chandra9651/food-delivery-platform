import { useState } from "react";

import {
    FaTicketAlt,
    FaPlus,
    FaEdit,
    FaTrash,
    FaSearch,
    FaPercent,
    FaCalendarAlt,
    FaCheckCircle,
    FaTimesCircle,
    FaDownload,
    FaTag,
    FaUsers,
    FaShoppingCart,
} from "react-icons/fa";

const Coupons = () => {
    const [search, setSearch] = useState("");

    /* DUMMY DATA */

    const stats = [
        {
            title: "Total Coupons",
            value: "120",
            icon: <FaTicketAlt />,
            bg: "bg-orange-100",
            text: "text-orange-500",
        },

        {
            title: "Active Coupons",
            value: "86",
            icon: <FaCheckCircle />,
            bg: "bg-green-100",
            text: "text-green-500",
        },

        {
            title: "Expired Coupons",
            value: "22",
            icon: <FaTimesCircle />,
            bg: "bg-red-100",
            text: "text-red-500",
        },

        {
            title: "Coupon Usage",
            value: "18.4K",
            icon: <FaShoppingCart />,
            bg: "bg-blue-100",
            text: "text-blue-500",
        },
    ];

    const coupons = [
        {
            id: "#CPN-1001",
            code: "WELCOME50",
            discount: "50%",
            users: "2.4K",
            expiry: "30 May 2026",
            status: "Active",
        },

        {
            id: "#CPN-1002",
            code: "FOOD20",
            discount: "20%",
            users: "1.8K",
            expiry: "18 Jun 2026",
            status: "Active",
        },

        {
            id: "#CPN-1003",
            code: "PIZZA10",
            discount: "10%",
            users: "920",
            expiry: "10 Apr 2026",
            status: "Expired",
        },

        {
            id: "#CPN-1004",
            code: "SUPER30",
            discount: "30%",
            users: "3.2K",
            expiry: "08 Jul 2026",
            status: "Active",
        },

        {
            id: "#CPN-1005",
            code: "FREEDEL",
            discount: "Free Delivery",
            users: "5.5K",
            expiry: "25 Aug 2026",
            status: "Inactive",
        },
    ];

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
                        Coupons Management
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Create and manage promotional coupon codes
                    </p>
                </div>

                {/* BUTTONS */}

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
                        <FaDownload />

                        Export
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
                        <FaPlus />

                        Create Coupon
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
                                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                  text-gray-500
                "
                            >
                                <FaTag />
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

            {/* COUPON TABLE */}

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
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
            px-6
            py-5
            border-b
            border-gray-100
          "
                >
                    {/* LEFT */}

                    <div>
                        <h2
                            className="
                text-2xl
                font-extrabold
                text-gray-900
              "
                        >
                            All Coupons
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Manage active and expired coupon offers
                        </p>
                    </div>

                    {/* SEARCH */}

                    <div
                        className="
              flex
              items-center
              gap-3
              bg-gray-100
              px-5
              py-4
              rounded-2xl
              w-full
              lg:w-[320px]
            "
                    >
                        <FaSearch className="text-gray-400" />

                        <input
                            type="text"
                            placeholder="Search coupon..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="
                bg-transparent
                outline-none
                w-full
                text-gray-700
              "
                        />
                    </div>
                </div>

                {/* TABLE */}

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1100px]">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    className="
                    px-6
                    py-5
                    text-left
                    text-sm
                    font-bold
                    text-gray-600
                  "
                                >
                                    Coupon
                                </th>

                                <th
                                    className="
                    px-6
                    py-5
                    text-left
                    text-sm
                    font-bold
                    text-gray-600
                  "
                                >
                                    Discount
                                </th>

                                <th
                                    className="
                    px-6
                    py-5
                    text-left
                    text-sm
                    font-bold
                    text-gray-600
                  "
                                >
                                    Usage
                                </th>

                                <th
                                    className="
                    px-6
                    py-5
                    text-left
                    text-sm
                    font-bold
                    text-gray-600
                  "
                                >
                                    Expiry Date
                                </th>

                                <th
                                    className="
                    px-6
                    py-5
                    text-left
                    text-sm
                    font-bold
                    text-gray-600
                  "
                                >
                                    Status
                                </th>

                                <th
                                    className="
                    px-6
                    py-5
                    text-center
                    text-sm
                    font-bold
                    text-gray-600
                  "
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {coupons
                                .filter((item) =>
                                    item.code
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                )
                                .map((item, index) => (
                                    <tr
                                        key={index}
                                        className="
                      border-b
                      border-gray-100
                      hover:bg-gray-50
                      transition-all
                    "
                                    >
                                        {/* COUPON */}

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
                            text-2xl
                          "
                                                >
                                                    <FaTicketAlt />
                                                </div>

                                                <div>
                                                    <h3
                                                        className="
                              font-bold
                              text-gray-900
                            "
                                                    >
                                                        {item.code}
                                                    </h3>

                                                    <p
                                                        className="
                              text-gray-500
                              text-sm
                              mt-1
                            "
                                                    >
                                                        {item.id}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* DISCOUNT */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="
                            w-10
                            h-10
                            rounded-xl
                            bg-green-100
                            text-green-500
                            flex
                            items-center
                            justify-center
                          "
                                                >
                                                    <FaPercent />
                                                </div>

                                                <span
                                                    className="
                            font-bold
                            text-green-600
                          "
                                                >
                                                    {item.discount}
                                                </span>
                                            </div>
                                        </td>

                                        {/* USAGE */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <FaUsers className="text-blue-500" />

                                                <span className="font-semibold text-gray-700">
                                                    {item.users}
                                                </span>
                                            </div>
                                        </td>

                                        {/* EXPIRY */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <FaCalendarAlt className="text-orange-500" />

                                                <span className="text-gray-700 font-medium">
                                                    {item.expiry}
                                                </span>
                                            </div>
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

                          ${item.status === "Active"
                                                        ? "bg-green-100 text-green-600"

                                                        : item.status === "Expired"
                                                            ? "bg-red-100 text-red-600"

                                                            : "bg-yellow-100 text-yellow-700"
                                                    }
                        `}
                                            >
                                                {item.status}
                                            </div>
                                        </td>

                                        {/* ACTIONS */}

                                        <td className="px-6 py-5">
                                            <div
                                                className="
                          flex
                          items-center
                          justify-center
                          gap-3
                        "
                                            >
                                                {/* EDIT */}

                                                <button
                                                    className="
                            w-11
                            h-11
                            rounded-xl
                            bg-blue-100
                            text-blue-500
                            hover:bg-blue-500
                            hover:text-white
                            transition-all
                            flex
                            items-center
                            justify-center
                          "
                                                >
                                                    <FaEdit />
                                                </button>

                                                {/* DELETE */}

                                                <button
                                                    className="
                            w-11
                            h-11
                            rounded-xl
                            bg-red-100
                            text-red-500
                            hover:bg-red-500
                            hover:text-white
                            transition-all
                            flex
                            items-center
                            justify-center
                          "
                                                >
                                                    <FaTrash />
                                                </button>
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

export default Coupons;