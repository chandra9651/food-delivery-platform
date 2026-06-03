// // /client/src/admin/pages/payments/Refunds.jsx

// import {
//     FaUndoAlt,
//     FaCheckCircle,
//     FaClock,
//     FaTimesCircle,
//     FaMoneyBillWave,
//     FaArrowUp,
//     FaArrowDown,
//     FaDownload,
//     FaCalendarAlt,
//     FaSearch,
//     FaEye,
//     FaUserCircle,
//     FaStore,
// } from "react-icons/fa";

// const Refunds = () => {
//     /* DUMMY DATA */

//     const refundStats = [
//         {
//             title: "Total Refunds",
//             value: "1.2K",
//             growth: "+8%",
//             icon: <FaUndoAlt />,
//             bg: "bg-orange-100",
//             text: "text-orange-500",
//             trend: "up",
//         },

//         {
//             title: "Approved Refunds",
//             value: "920",
//             growth: "+12%",
//             icon: <FaCheckCircle />,
//             bg: "bg-green-100",
//             text: "text-green-500",
//             trend: "up",
//         },

//         {
//             title: "Pending Refunds",
//             value: "180",
//             growth: "-4%",
//             icon: <FaClock />,
//             bg: "bg-yellow-100",
//             text: "text-yellow-500",
//             trend: "down",
//         },

//         {
//             title: "Rejected Refunds",
//             value: "100",
//             growth: "+2%",
//             icon: <FaTimesCircle />,
//             bg: "bg-red-100",
//             text: "text-red-500",
//             trend: "up",
//         },
//     ];

//     const refunds = [
//         {
//             id: "#REF-1001",
//             customer: "Rahul Sharma",
//             restaurant: "Pizza Hub",
//             amount: "$45",
//             reason: "Order Cancelled",
//             date: "12 May 2026",
//             status: "Approved",
//         },

//         {
//             id: "#REF-1002",
//             customer: "Priya Verma",
//             restaurant: "Burger Point",
//             amount: "$28",
//             reason: "Late Delivery",
//             date: "11 May 2026",
//             status: "Pending",
//         },

//         {
//             id: "#REF-1003",
//             customer: "Aman Gupta",
//             restaurant: "Chinese Bowl",
//             amount: "$65",
//             reason: "Wrong Item",
//             date: "10 May 2026",
//             status: "Rejected",
//         },

//         {
//             id: "#REF-1004",
//             customer: "Neha Singh",
//             restaurant: "Food Corner",
//             amount: "$18",
//             reason: "Food Quality",
//             date: "09 May 2026",
//             status: "Approved",
//         },

//         {
//             id: "#REF-1005",
//             customer: "Karan Kumar",
//             restaurant: "Biryani House",
//             amount: "$32",
//             reason: "Missing Item",
//             date: "08 May 2026",
//             status: "Pending",
//         },
//     ];

//     return (
//         <div className="space-y-8">
//             {/* PAGE HEADER */}

//             <div
//                 className="
//           flex
//           flex-col
//           xl:flex-row
//           xl:items-center
//           xl:justify-between
//           gap-5
//         "
//             >
//                 {/* LEFT */}

//                 <div>
//                     <h1
//                         className="
//               text-3xl
//               md:text-4xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         Refund Management
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Track and manage customer refund requests
//                     </p>
//                 </div>

//                 {/* RIGHT */}

//                 <div className="flex flex-wrap gap-4">
//                     <button
//                         className="
//               bg-white
//               border
//               border-gray-200
//               hover:bg-gray-100
//               px-6
//               py-4
//               rounded-2xl
//               font-semibold
//               flex
//               items-center
//               gap-3
//               transition-all
//             "
//                     >
//                         <FaCalendarAlt />

//                         Last 30 Days
//                     </button>

//                     <button
//                         className="
//               bg-orange-500
//               hover:bg-orange-600
//               text-white
//               px-6
//               py-4
//               rounded-2xl
//               font-bold
//               shadow-lg
//               shadow-orange-200
//               transition-all
//               flex
//               items-center
//               gap-3
//             "
//                     >
//                         <FaDownload />

//                         Export Refunds
//                     </button>
//                 </div>
//             </div>

//             {/* STATS */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           xl:grid-cols-4
//           gap-6
//         "
//             >
//                 {refundStats.map((item, index) => (
//                     <div
//                         key={index}
//                         className="
//               bg-white
//               rounded-[30px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//             "
//                     >
//                         {/* TOP */}

//                         <div
//                             className="
//                 flex
//                 items-center
//                 justify-between
//               "
//                         >
//                             <div
//                                 className={`
//                   w-16
//                   h-16
//                   rounded-3xl
//                   flex
//                   items-center
//                   justify-center
//                   text-3xl
//                   ${item.bg}
//                   ${item.text}
//                 `}
//                             >
//                                 {item.icon}
//                             </div>

//                             <div
//                                 className={`
//                   flex
//                   items-center
//                   gap-2
//                   px-3
//                   py-2
//                   rounded-full
//                   text-sm
//                   font-bold

//                   ${item.trend === "up"
//                                         ? "bg-green-100 text-green-600"

//                                         : "bg-red-100 text-red-500"
//                                     }
//                 `}
//                             >
//                                 {item.trend === "up" ? (
//                                     <FaArrowUp />
//                                 ) : (
//                                     <FaArrowDown />
//                                 )}

//                                 {item.growth}
//                             </div>
//                         </div>

//                         {/* CONTENT */}

//                         <h2
//                             className="
//                 text-4xl
//                 font-extrabold
//                 text-gray-900
//                 mt-8
//               "
//                         >
//                             {item.value}
//                         </h2>

//                         <p className="text-gray-500 mt-2">
//                             {item.title}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {/* REFUNDS TABLE */}

//             <div
//                 className="
//           bg-white
//           rounded-[32px]
//           border
//           border-gray-100
//           shadow-sm
//           overflow-hidden
//         "
//             >
//                 {/* HEADER */}

//                 <div
//                     className="
//             flex
//             flex-col
//             lg:flex-row
//             lg:items-center
//             lg:justify-between
//             gap-5
//             px-6
//             py-5
//             border-b
//             border-gray-100
//           "
//                 >
//                     {/* LEFT */}

//                     <div>
//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//               "
//                         >
//                             Refund Requests
//                         </h2>

//                         <p className="text-gray-500 mt-1">
//                             Recent refund and return requests
//                         </p>
//                     </div>

//                     {/* SEARCH */}

//                     <div
//                         className="
//               flex
//               items-center
//               gap-3
//               bg-gray-100
//               px-5
//               py-4
//               rounded-2xl
//               w-full
//               lg:w-[320px]
//             "
//                     >
//                         <FaSearch className="text-gray-400" />

//                         <input
//                             type="text"
//                             placeholder="Search refunds..."
//                             className="
//                 bg-transparent
//                 outline-none
//                 w-full
//                 text-gray-700
//               "
//                         />
//                     </div>
//                 </div>

//                 {/* TABLE */}

//                 <div className="overflow-x-auto">
//                     <table className="w-full min-w-[1200px]">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Refund ID
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Customer
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Restaurant
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Refund Amount
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Reason
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Date
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Status
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-center
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Action
//                                 </th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {refunds.map((item, index) => (
//                                 <tr
//                                     key={index}
//                                     className="
//                     border-b
//                     border-gray-100
//                     hover:bg-gray-50
//                     transition-all
//                   "
//                                 >
//                                     {/* REFUND ID */}

//                                     <td className="px-6 py-5">
//                                         <div className="flex items-center gap-3">
//                                             <div
//                                                 className="
//                           w-12
//                           h-12
//                           rounded-2xl
//                           bg-orange-100
//                           text-orange-500
//                           flex
//                           items-center
//                           justify-center
//                         "
//                                             >
//                                                 <FaMoneyBillWave />
//                                             </div>

//                                             <span className="font-bold text-gray-900">
//                                                 {item.id}
//                                             </span>
//                                         </div>
//                                     </td>

//                                     {/* CUSTOMER */}

//                                     <td className="px-6 py-5">
//                                         <div className="flex items-center gap-3">
//                                             <FaUserCircle className="text-orange-500 text-xl" />

//                                             <span className="font-semibold text-gray-700">
//                                                 {item.customer}
//                                             </span>
//                                         </div>
//                                     </td>

//                                     {/* RESTAURANT */}

//                                     <td className="px-6 py-5">
//                                         <div className="flex items-center gap-3">
//                                             <FaStore className="text-red-500" />

//                                             <span className="font-semibold text-gray-700">
//                                                 {item.restaurant}
//                                             </span>
//                                         </div>
//                                     </td>

//                                     {/* AMOUNT */}

//                                     <td className="px-6 py-5">
//                                         <span
//                                             className="
//                         text-lg
//                         font-extrabold
//                         text-orange-500
//                       "
//                                         >
//                                             {item.amount}
//                                         </span>
//                                     </td>

//                                     {/* REASON */}

//                                     <td className="px-6 py-5">
//                                         <span className="font-medium text-gray-700">
//                                             {item.reason}
//                                         </span>
//                                     </td>

//                                     {/* DATE */}

//                                     <td className="px-6 py-5">
//                                         <span className="text-gray-600">
//                                             {item.date}
//                                         </span>
//                                     </td>

//                                     {/* STATUS */}

//                                     <td className="px-6 py-5">
//                                         <div
//                                             className={`
//                         inline-flex
//                         items-center
//                         px-4
//                         py-2
//                         rounded-full
//                         text-sm
//                         font-bold

//                         ${item.status === "Approved"
//                                                     ? "bg-green-100 text-green-600"

//                                                     : item.status === "Pending"
//                                                         ? "bg-yellow-100 text-yellow-600"

//                                                         : "bg-red-100 text-red-600"
//                                                 }
//                       `}
//                                         >
//                                             {item.status}
//                                         </div>
//                                     </td>

//                                     {/* ACTION */}

//                                     <td className="px-6 py-5 text-center">
//                                         <button
//                                             className="
//                         w-11
//                         h-11
//                         rounded-xl
//                         bg-orange-100
//                         text-orange-500
//                         hover:bg-orange-500
//                         hover:text-white
//                         transition-all
//                         inline-flex
//                         items-center
//                         justify-center
//                       "
//                                         >
//                                             <FaEye />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Refunds;





// /client/src/admin/pages/payments/Refunds.jsx

import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import {
    FaUndoAlt,
    FaCheckCircle,
    FaClock,
    FaTimesCircle,
    FaMoneyBillWave,
    FaArrowUp,
    FaArrowDown,
    FaDownload,
    FaCalendarAlt,
    FaSearch,
    FaEye,
    FaUserCircle,
    FaStore,
} from "react-icons/fa";

const Refunds = () => {
    const [refunds, setRefunds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000";

    /* FETCH REFUNDS */

    const fetchRefunds = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `${API_URL}/api/admin/refunds`,
                {
                    withCredentials: true,
                }
            );

            setRefunds(data.refunds || []);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRefunds();
    }, []);

    /* FILTERED REFUNDS */

    const filteredRefunds = useMemo(() => {
        return refunds.filter((item) => {
            const searchText = search.toLowerCase();

            return (
                item._id?.toLowerCase().includes(searchText) ||
                item.customer?.name
                    ?.toLowerCase()
                    .includes(searchText) ||
                item.restaurant?.name
                    ?.toLowerCase()
                    .includes(searchText) ||
                item.reason?.toLowerCase().includes(searchText)
            );
        });
    }, [refunds, search]);

    /* STATS */

    const refundStats = useMemo(() => {
        const total = refunds.length;

        const approved = refunds.filter(
            (item) => item.status === "Approved"
        ).length;

        const pending = refunds.filter(
            (item) => item.status === "Pending"
        ).length;

        const rejected = refunds.filter(
            (item) => item.status === "Rejected"
        ).length;

        return [
            {
                title: "Total Refunds",
                value: total,
                growth: "+8%",
                icon: <FaUndoAlt />,
                bg: "bg-orange-100",
                text: "text-orange-500",
                trend: "up",
            },

            {
                title: "Approved Refunds",
                value: approved,
                growth: "+12%",
                icon: <FaCheckCircle />,
                bg: "bg-green-100",
                text: "text-green-500",
                trend: "up",
            },

            {
                title: "Pending Refunds",
                value: pending,
                growth: "-4%",
                icon: <FaClock />,
                bg: "bg-yellow-100",
                text: "text-yellow-500",
                trend: "down",
            },

            {
                title: "Rejected Refunds",
                value: rejected,
                growth: "+2%",
                icon: <FaTimesCircle />,
                bg: "bg-red-100",
                text: "text-red-500",
                trend: "up",
            },
        ];
    }, [refunds]);

    /* EXPORT CSV */

    const handleExport = () => {
        const headers = [
            "Refund ID",
            "Customer",
            "Restaurant",
            "Amount",
            "Reason",
            "Date",
            "Status",
        ];

        const rows = filteredRefunds.map((item) => [
            item._id,
            item.customer?.name,
            item.restaurant?.name,
            item.amount,
            item.reason,
            new Date(item.createdAt).toLocaleDateString(),
            item.status,
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map((row) => row.join(",")),
        ].join("\n");

        const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;",
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.setAttribute("download", "refunds.csv");

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };

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
                        Refund Management
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Track and manage customer refund requests
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
                        onClick={handleExport}
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

                        Export Refunds
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
                {refundStats.map((item, index) => (
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

            {/* REFUNDS TABLE */}

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
                            Refund Requests
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Recent refund and return requests
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
                            placeholder="Search refunds..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
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
                    <table className="w-full min-w-[1200px]">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                    Refund ID
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                    Customer
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                    Restaurant
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                    Refund Amount
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                    Reason
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                    Date
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                    Status
                                </th>

                                <th className="px-6 py-5 text-center text-sm font-bold text-gray-600">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="text-center py-10 text-gray-500"
                                    >
                                        Loading refunds...
                                    </td>
                                </tr>
                            ) : filteredRefunds.length > 0 ? (
                                filteredRefunds.map((item) => (
                                    <tr
                                        key={item._id}
                                        className="
                                            border-b
                                            border-gray-100
                                            hover:bg-gray-50
                                            transition-all
                                        "
                                    >
                                        {/* REFUND ID */}

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
                                                    <FaMoneyBillWave />
                                                </div>

                                                <span className="font-bold text-gray-900">
                                                    #{item._id?.slice(-6)}
                                                </span>
                                            </div>
                                        </td>

                                        {/* CUSTOMER */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <FaUserCircle className="text-orange-500 text-xl" />

                                                <span className="font-semibold text-gray-700">
                                                    {item.customer?.name}
                                                </span>
                                            </div>
                                        </td>

                                        {/* RESTAURANT */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <FaStore className="text-red-500" />

                                                <span className="font-semibold text-gray-700">
                                                    {item.restaurant?.name}
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
                                                ${item.amount}
                                            </span>
                                        </td>

                                        {/* REASON */}

                                        <td className="px-6 py-5">
                                            <span className="font-medium text-gray-700">
                                                {item.reason}
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

                                                    ${item.status ===
                                                        "Approved"
                                                        ? "bg-green-100 text-green-600"
                                                        : item.status ===
                                                            "Pending"
                                                            ? "bg-yellow-100 text-yellow-600"
                                                            : "bg-red-100 text-red-600"
                                                    }
                                                `}
                                            >
                                                {item.status}
                                            </div>
                                        </td>

                                        {/* ACTION */}

                                        <td className="px-6 py-5 text-center">
                                            <button
                                                className="
                                                    w-11
                                                    h-11
                                                    rounded-xl
                                                    bg-orange-100
                                                    text-orange-500
                                                    hover:bg-orange-500
                                                    hover:text-white
                                                    transition-all
                                                    inline-flex
                                                    items-center
                                                    justify-center
                                                "
                                            >
                                                <FaEye />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="text-center py-10 text-gray-500"
                                    >
                                        No refunds found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Refunds;