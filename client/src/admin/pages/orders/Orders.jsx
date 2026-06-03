// // /client/src/admin/pages/orders/Order.jsx


// import { useState } from "react";

// import OrdersTable from "../../components/tables/OrdersTable";

// import {
//     FaSearch,
//     FaFilter,
//     FaDownload,
//     FaShoppingBag,
// } from "react-icons/fa";

// const Orders = () => {
//     const [search, setSearch] = useState("");

//     return (
//         <div className="space-y-8">
//             {/* PAGE HEADER */}

//             <div
//                 className="
//           flex
//           flex-col
//           lg:flex-row
//           lg:items-center
//           lg:justify-between
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
//                         Orders Management
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Manage and track all customer orders
//                     </p>
//                 </div>

//                 {/* RIGHT */}

//                 <button
//                     className="
//             bg-orange-500
//             hover:bg-orange-600
//             text-white
//             px-6
//             py-4
//             rounded-2xl
//             font-bold
//             flex
//             items-center
//             justify-center
//             gap-3
//             shadow-lg
//             shadow-orange-200
//             transition-all
//           "
//                 >
//                     <FaDownload />

//                     Export Orders
//                 </button>
//             </div>

//             {/* TOP STATS */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           xl:grid-cols-4
//           gap-6
//         "
//             >
//                 {/* TOTAL */}

//                 <div
//                     className="
//             bg-white
//             rounded-[30px]
//             p-6
//             border
//             border-gray-100
//             shadow-sm
//           "
//                 >
//                     <div
//                         className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-orange-100
//               text-orange-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaShoppingBag />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         25.4K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Total Orders
//                     </p>
//                 </div>

//                 {/* PENDING */}

//                 <div
//                     className="
//             bg-white
//             rounded-[30px]
//             p-6
//             border
//             border-gray-100
//             shadow-sm
//           "
//                 >
//                     <div
//                         className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-yellow-100
//               text-yellow-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         ⏳
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         420
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Pending Orders
//                     </p>
//                 </div>

//                 {/* DELIVERED */}

//                 <div
//                     className="
//             bg-white
//             rounded-[30px]
//             p-6
//             border
//             border-gray-100
//             shadow-sm
//           "
//                 >
//                     <div
//                         className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-green-100
//               text-green-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         ✅
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         23.8K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Delivered Orders
//                     </p>
//                 </div>

//                 {/* CANCELLED */}

//                 <div
//                     className="
//             bg-white
//             rounded-[30px]
//             p-6
//             border
//             border-gray-100
//             shadow-sm
//           "
//                 >
//                     <div
//                         className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-red-100
//               text-red-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         ❌
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         1.2K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Cancelled Orders
//                     </p>
//                 </div>
//             </div>

//             {/* FILTER BAR */}

//             <div
//                 className="
//           bg-white
//           rounded-[30px]
//           p-5
//           border
//           border-gray-100
//           shadow-sm
//           flex
//           flex-col
//           xl:flex-row
//           xl:items-center
//           xl:justify-between
//           gap-5
//         "
//             >
//                 {/* SEARCH */}

//                 <div
//                     className="
//             relative
//             w-full
//             xl:max-w-md
//           "
//                 >
//                     <FaSearch
//                         className="
//               absolute
//               top-1/2
//               left-4
//               -translate-y-1/2
//               text-gray-400
//             "
//                     />

//                     <input
//                         type="text"
//                         placeholder="Search orders..."
//                         value={search}
//                         onChange={(e) =>
//                             setSearch(e.target.value)
//                         }
//                         className="
//               w-full
//               bg-gray-100
//               rounded-2xl
//               py-4
//               pl-12
//               pr-4
//               outline-none
//               focus:ring-2
//               focus:ring-orange-300
//             "
//                     />
//                 </div>

//                 {/* FILTERS */}

//                 <div
//                     className="
//             flex
//             flex-col
//             sm:flex-row
//             gap-4
//             w-full
//             xl:w-auto
//           "
//                 >
//                     <select
//                         className="
//               bg-gray-100
//               px-5
//               py-4
//               rounded-2xl
//               outline-none
//               font-medium
//             "
//                     >
//                         <option>All Status</option>
//                         <option>Pending</option>
//                         <option>Processing</option>
//                         <option>Delivered</option>
//                         <option>Cancelled</option>
//                     </select>

//                     <select
//                         className="
//               bg-gray-100
//               px-5
//               py-4
//               rounded-2xl
//               outline-none
//               font-medium
//             "
//                     >
//                         <option>Today</option>
//                         <option>This Week</option>
//                         <option>This Month</option>
//                     </select>

//                     <button
//                         className="
//               bg-gray-900
//               hover:bg-black
//               text-white
//               px-6
//               py-4
//               rounded-2xl
//               font-semibold
//               flex
//               items-center
//               justify-center
//               gap-3
//               transition-all
//             "
//                     >
//                         <FaFilter />

//                         Filter
//                     </button>
//                 </div>
//             </div>

//             {/* TABLE */}

//             <OrdersTable />
//         </div>
//     );
// };

// export default Orders;



// /client/src/admin/pages/orders/Order.jsx

import { useEffect, useMemo, useState } from "react";

import axios from "axios";

import OrdersTable from "../../components/tables/OrdersTable";

import {
    FaSearch,
    FaFilter,
    FaDownload,
    FaShoppingBag,
} from "react-icons/fa";

const API_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const Orders = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [dateFilter, setDateFilter] = useState("Today");

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState({
        totalOrders: 0,
        pendingOrders: 0,
        deliveredOrders: 0,
        cancelledOrders: 0,
    });

    // FETCH ORDERS

    const fetchOrders = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const { data } = await axios.get(
                `${API_URL}/api/admin/orders`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setOrders(data.orders || []);

            setStats({
                totalOrders: data.totalOrders || 0,
                pendingOrders: data.pendingOrders || 0,
                deliveredOrders: data.deliveredOrders || 0,
                cancelledOrders: data.cancelledOrders || 0,
            });
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to fetch orders"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    // FILTER ORDERS

    const filteredOrders = useMemo(() => {
        let filtered = [...orders];

        // SEARCH

        if (search) {
            filtered = filtered.filter(
                (order) =>
                    order._id
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||
                    order.customer?.name
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||
                    order.restaurant?.name
                        ?.toLowerCase()
                        .includes(search.toLowerCase())
            );
        }

        // STATUS

        if (status !== "All") {
            filtered = filtered.filter(
                (order) =>
                    order.orderStatus?.toLowerCase() ===
                    status.toLowerCase()
            );
        }

        // DATE FILTER

        const today = new Date();

        if (dateFilter === "Today") {
            filtered = filtered.filter((order) => {
                const orderDate = new Date(order.createdAt);

                return (
                    orderDate.toDateString() ===
                    today.toDateString()
                );
            });
        }

        if (dateFilter === "This Week") {
            const weekAgo = new Date();

            weekAgo.setDate(today.getDate() - 7);

            filtered = filtered.filter(
                (order) =>
                    new Date(order.createdAt) >= weekAgo
            );
        }

        if (dateFilter === "This Month") {
            filtered = filtered.filter((order) => {
                const orderDate = new Date(order.createdAt);

                return (
                    orderDate.getMonth() ===
                    today.getMonth() &&
                    orderDate.getFullYear() ===
                    today.getFullYear()
                );
            });
        }

        return filtered;
    }, [orders, search, status, dateFilter]);

    // EXPORT CSV

    const handleExport = () => {
        if (!filteredOrders.length) {
            return alert("No orders available");
        }

        const csvData = filteredOrders.map((order) => ({
            OrderID: order._id,
            Customer: order.customer?.name || "N/A",
            Restaurant: order.restaurant?.name || "N/A",
            Total: order.totalAmount || 0,
            Status: order.orderStatus || "Pending",
            Payment: order.paymentStatus || "Pending",
            Date: new Date(
                order.createdAt
            ).toLocaleDateString(),
        }));

        const csvRows = [];

        const headers = Object.keys(csvData[0]);

        csvRows.push(headers.join(","));

        for (const row of csvData) {
            const values = headers.map(
                (header) => `"${row[header]}"`
            );

            csvRows.push(values.join(","));
        }

        const blob = new Blob([csvRows.join("\n")], {
            type: "text/csv",
        });

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;

        a.download = "orders.csv";

        a.click();

        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}

            <div
                className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
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
                        Orders Management
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage and track all customer orders
                    </p>
                </div>

                {/* RIGHT */}

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
                        flex
                        items-center
                        justify-center
                        gap-3
                        shadow-lg
                        shadow-orange-200
                        transition-all
                    "
                >
                    <FaDownload />

                    Export Orders
                </button>
            </div>

            {/* TOP STATS */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                "
            >
                {/* TOTAL */}

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
                            w-14
                            h-14
                            rounded-2xl
                            bg-orange-100
                            text-orange-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        <FaShoppingBag />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.totalOrders}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Orders
                    </p>
                </div>

                {/* PENDING */}

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
                            w-14
                            h-14
                            rounded-2xl
                            bg-yellow-100
                            text-yellow-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        ⏳
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.pendingOrders}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Pending Orders
                    </p>
                </div>

                {/* DELIVERED */}

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
                            w-14
                            h-14
                            rounded-2xl
                            bg-green-100
                            text-green-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        ✅
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.deliveredOrders}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Delivered Orders
                    </p>
                </div>

                {/* CANCELLED */}

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
                            w-14
                            h-14
                            rounded-2xl
                            bg-red-100
                            text-red-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        ❌
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.cancelledOrders}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Cancelled Orders
                    </p>
                </div>
            </div>

            {/* FILTER BAR */}

            <div
                className="
                    bg-white
                    rounded-[30px]
                    p-5
                    border
                    border-gray-100
                    shadow-sm
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                    gap-5
                "
            >
                {/* SEARCH */}

                <div
                    className="
                        relative
                        w-full
                        xl:max-w-md
                    "
                >
                    <FaSearch
                        className="
                            absolute
                            top-1/2
                            left-4
                            -translate-y-1/2
                            text-gray-400
                        "
                    />

                    <input
                        type="text"
                        placeholder="Search orders..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="
                            w-full
                            bg-gray-100
                            rounded-2xl
                            py-4
                            pl-12
                            pr-4
                            outline-none
                            focus:ring-2
                            focus:ring-orange-300
                        "
                    />
                </div>

                {/* FILTERS */}

                <div
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-4
                        w-full
                        xl:w-auto
                    "
                >
                    <select
                        value={status}
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                        className="
                            bg-gray-100
                            px-5
                            py-4
                            rounded-2xl
                            outline-none
                            font-medium
                        "
                    >
                        <option value="All">
                            All Status
                        </option>

                        <option value="Pending">
                            Pending
                        </option>

                        <option value="Processing">
                            Processing
                        </option>

                        <option value="Delivered">
                            Delivered
                        </option>

                        <option value="Cancelled">
                            Cancelled
                        </option>
                    </select>

                    <select
                        value={dateFilter}
                        onChange={(e) =>
                            setDateFilter(e.target.value)
                        }
                        className="
                            bg-gray-100
                            px-5
                            py-4
                            rounded-2xl
                            outline-none
                            font-medium
                        "
                    >
                        <option>Today</option>

                        <option>This Week</option>

                        <option>This Month</option>
                    </select>

                    <button
                        className="
                            bg-gray-900
                            hover:bg-black
                            text-white
                            px-6
                            py-4
                            rounded-2xl
                            font-semibold
                            flex
                            items-center
                            justify-center
                            gap-3
                            transition-all
                        "
                    >
                        <FaFilter />

                        Filter
                    </button>
                </div>
            </div>

            {/* TABLE */}

            {loading ? (
                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-10
                        text-center
                        text-gray-500
                        font-semibold
                    "
                >
                    Loading orders...
                </div>
            ) : (
                <OrdersTable
                    orders={filteredOrders}
                    fetchOrders={fetchOrders}
                />
            )}
        </div>
    );
};

export default Orders;