// // /client/src/admin/pages/payments/Transactions.jsx


// import {
//     FaMoneyCheckAlt,
//     FaCheckCircle,
//     FaClock,
//     FaTimesCircle,
//     FaWallet,
//     FaDownload,
//     FaCalendarAlt,
//     FaSearch,
//     FaEye,
//     FaCreditCard,
//     FaUniversity,
//     FaPaypal,
//     FaArrowUp,
//     FaArrowDown,
// } from "react-icons/fa";

// const Transactions = () => {
//     /* DUMMY DATA */

//     const stats = [
//         {
//             title: "Total Transactions",
//             value: "24.5K",
//             growth: "+18%",
//             icon: <FaMoneyCheckAlt />,
//             bg: "bg-orange-100",
//             text: "text-orange-500",
//             trend: "up",
//         },

//         {
//             title: "Successful Payments",
//             value: "21.8K",
//             growth: "+12%",
//             icon: <FaCheckCircle />,
//             bg: "bg-green-100",
//             text: "text-green-500",
//             trend: "up",
//         },

//         {
//             title: "Pending Payments",
//             value: "1.2K",
//             growth: "-4%",
//             icon: <FaClock />,
//             bg: "bg-yellow-100",
//             text: "text-yellow-500",
//             trend: "down",
//         },

//         {
//             title: "Failed Payments",
//             value: "580",
//             growth: "+2%",
//             icon: <FaTimesCircle />,
//             bg: "bg-red-100",
//             text: "text-red-500",
//             trend: "up",
//         },
//     ];

//     const transactions = [
//         {
//             id: "#TXN-1001",
//             customer: "Rahul Sharma",
//             amount: "$120",
//             method: "Card",
//             restaurant: "Pizza Hub",
//             date: "12 May 2026",
//             status: "Completed",
//         },

//         {
//             id: "#TXN-1002",
//             customer: "Priya Verma",
//             amount: "$45",
//             method: "UPI",
//             restaurant: "Burger Point",
//             date: "11 May 2026",
//             status: "Pending",
//         },

//         {
//             id: "#TXN-1003",
//             customer: "Aman Gupta",
//             amount: "$260",
//             method: "PayPal",
//             restaurant: "Chinese Bowl",
//             date: "10 May 2026",
//             status: "Failed",
//         },

//         {
//             id: "#TXN-1004",
//             customer: "Neha Singh",
//             amount: "$85",
//             method: "Bank",
//             restaurant: "Food Corner",
//             date: "09 May 2026",
//             status: "Completed",
//         },

//         {
//             id: "#TXN-1005",
//             customer: "Karan Kumar",
//             amount: "$65",
//             method: "Card",
//             restaurant: "Biryani House",
//             date: "08 May 2026",
//             status: "Completed",
//         },
//     ];

//     const getPaymentIcon = (method) => {
//         switch (method) {
//             case "Card":
//                 return <FaCreditCard />;

//             case "Bank":
//                 return <FaUniversity />;

//             case "PayPal":
//                 return <FaPaypal />;

//             default:
//                 return <FaWallet />;
//         }
//     };

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
//                         Transactions
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Manage and monitor all payment transactions
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

//                         Export Data
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
//                 {stats.map((item, index) => (
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

//             {/* TRANSACTION TABLE */}

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
//                             Recent Transactions
//                         </h2>

//                         <p className="text-gray-500 mt-1">
//                             Latest payment activity on platform
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
//                             placeholder="Search transactions..."
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
//                                     Transaction ID
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
//                                     Amount
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
//                                     Payment Method
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
//                             {transactions.map((item, index) => (
//                                 <tr
//                                     key={index}
//                                     className="
//                     border-b
//                     border-gray-100
//                     hover:bg-gray-50
//                     transition-all
//                   "
//                                 >
//                                     {/* ID */}

//                                     <td className="px-6 py-5">
//                                         <span className="font-bold text-gray-900">
//                                             {item.id}
//                                         </span>
//                                     </td>

//                                     {/* CUSTOMER */}

//                                     <td className="px-6 py-5">
//                                         <span className="font-semibold text-gray-700">
//                                             {item.customer}
//                                         </span>
//                                     </td>

//                                     {/* RESTAURANT */}

//                                     <td className="px-6 py-5">
//                                         <span className="font-semibold text-gray-700">
//                                             {item.restaurant}
//                                         </span>
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

//                                     {/* PAYMENT METHOD */}

//                                     <td className="px-6 py-5">
//                                         <div className="flex items-center gap-3">
//                                             <div
//                                                 className="
//                           w-11
//                           h-11
//                           rounded-xl
//                           bg-orange-100
//                           text-orange-500
//                           flex
//                           items-center
//                           justify-center
//                         "
//                                             >
//                                                 {getPaymentIcon(item.method)}
//                                             </div>

//                                             <span className="font-semibold text-gray-700">
//                                                 {item.method}
//                                             </span>
//                                         </div>
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

//                         ${item.status === "Completed"
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

// export default Transactions;



// /client/src/admin/pages/payments/Transactions.jsx

import { useEffect, useState } from "react";
import axios from "axios";

import {
    FaMoneyCheckAlt,
    FaCheckCircle,
    FaClock,
    FaTimesCircle,
    FaWallet,
    FaDownload,
    FaCalendarAlt,
    FaSearch,
    FaEye,
    FaCreditCard,
    FaUniversity,
    FaPaypal,
    FaArrowUp,
    FaArrowDown,
    FaSpinner,
} from "react-icons/fa";

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [stats, setStats] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    // FETCH TRANSACTIONS

    const fetchTransactions = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                "http://localhost:5000/api/admin/transactions"
            );

            if (data.success) {
                setTransactions(data.transactions);

                setStats([
                    {
                        title: "Total Transactions",
                        value: data.stats.totalTransactions,
                        growth: "+18%",
                        icon: <FaMoneyCheckAlt />,
                        bg: "bg-orange-100",
                        text: "text-orange-500",
                        trend: "up",
                    },

                    {
                        title: "Successful Payments",
                        value: data.stats.successfulPayments,
                        growth: "+12%",
                        icon: <FaCheckCircle />,
                        bg: "bg-green-100",
                        text: "text-green-500",
                        trend: "up",
                    },

                    {
                        title: "Pending Payments",
                        value: data.stats.pendingPayments,
                        growth: "-4%",
                        icon: <FaClock />,
                        bg: "bg-yellow-100",
                        text: "text-yellow-500",
                        trend: "down",
                    },

                    {
                        title: "Failed Payments",
                        value: data.stats.failedPayments,
                        growth: "+2%",
                        icon: <FaTimesCircle />,
                        bg: "bg-red-100",
                        text: "text-red-500",
                        trend: "up",
                    },
                ]);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    // SEARCH FILTER

    const filteredTransactions = transactions.filter((item) =>
        item.customer?.toLowerCase().includes(search.toLowerCase()) ||
        item.restaurant?.toLowerCase().includes(search.toLowerCase()) ||
        item._id?.toLowerCase().includes(search.toLowerCase())
    );

    // PAYMENT ICON

    const getPaymentIcon = (method) => {
        switch (method) {
            case "Card":
                return <FaCreditCard />;

            case "Bank":
                return <FaUniversity />;

            case "PayPal":
                return <FaPaypal />;

            default:
                return <FaWallet />;
        }
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
                        Transactions
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage and monitor all payment transactions
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

                        Export Data
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

            {/* TRANSACTION TABLE */}

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
                            Recent Transactions
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Latest payment activity on platform
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
                            placeholder="Search transactions..."
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

                {/* LOADING */}

                {loading ? (
                    <div className="py-20 flex justify-center">
                        <FaSpinner className="animate-spin text-4xl text-orange-500" />
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1200px]">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                        Transaction ID
                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                        Customer
                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                        Restaurant
                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                        Amount
                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-gray-600">
                                        Payment Method
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
                                {filteredTransactions.length > 0 ? (
                                    filteredTransactions.map((item) => (
                                        <tr
                                            key={item._id}
                                            className="
                                                border-b
                                                border-gray-100
                                                hover:bg-gray-50
                                                transition-all
                                            "
                                        >
                                            {/* ID */}

                                            <td className="px-6 py-5">
                                                <span className="font-bold text-gray-900">
                                                    #{item._id.slice(-6)}
                                                </span>
                                            </td>

                                            {/* CUSTOMER */}

                                            <td className="px-6 py-5">
                                                <span className="font-semibold text-gray-700">
                                                    {item.customer}
                                                </span>
                                            </td>

                                            {/* RESTAURANT */}

                                            <td className="px-6 py-5">
                                                <span className="font-semibold text-gray-700">
                                                    {item.restaurant}
                                                </span>
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

                                            {/* PAYMENT METHOD */}

                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="
                                                            w-11
                                                            h-11
                                                            rounded-xl
                                                            bg-orange-100
                                                            text-orange-500
                                                            flex
                                                            items-center
                                                            justify-center
                                                        "
                                                    >
                                                        {getPaymentIcon(
                                                            item.method
                                                        )}
                                                    </div>

                                                    <span className="font-semibold text-gray-700">
                                                        {item.method}
                                                    </span>
                                                </div>
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
                                                            "Completed"
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
                                            No transactions found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Transactions;