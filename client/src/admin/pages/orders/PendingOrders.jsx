// // /client/src/admin/pages/orders/PendingOrder.jsx



// import { useState } from "react";

// import OrdersTable from "../../components/tables/OrdersTable";

// import {
//     FaClock,
//     FaSearch,
//     FaFilter,
//     FaCheckCircle,
//     FaTruck,
// } from "react-icons/fa";

// const PendingOrders = () => {
//     const [search, setSearch] = useState("");

//     return (
//         <div className="space-y-8">
//             {/* HEADER */}

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
//                         Pending Orders
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Monitor and manage pending customer orders
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
//             shadow-lg
//             shadow-orange-200
//             transition-all
//           "
//                 >
//                     Refresh Orders
//                 </button>
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
//                 {/* TOTAL PENDING */}

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
//                         <FaClock />
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

//                 {/* ACCEPTED */}

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
//               bg-blue-100
//               text-blue-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaCheckCircle />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         210
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Accepted Orders
//                     </p>
//                 </div>

//                 {/* PREPARING */}

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
//               bg-purple-100
//               text-purple-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         🍔
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         95
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Preparing Orders
//                     </p>
//                 </div>

//                 {/* OUT FOR DELIVERY */}

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
//                         <FaTruck />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         115
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Out for Delivery
//                     </p>
//                 </div>
//             </div>

//             {/* FILTER BAR */}

//             <div
//                 className="
//           bg-white
//           rounded-[30px]
//           border
//           border-gray-100
//           shadow-sm
//           p-5
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
//                         placeholder="Search pending orders..."
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
//                         <option>All Restaurants</option>
//                         <option>Pizza Hub</option>
//                         <option>Burger King</option>
//                         <option>Food Point</option>
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
//                         <option>All Status</option>
//                         <option>Pending</option>
//                         <option>Preparing</option>
//                         <option>Out for Delivery</option>
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

//                         Apply Filter
//                     </button>
//                 </div>
//             </div>

//             {/* TABLE */}

//             <OrdersTable />
//         </div>
//     );
// };

// export default PendingOrders;


// /client/src/admin/pages/orders/PendingOrder.jsx

import { useEffect, useMemo, useState } from "react";

import axios from "axios";

import OrdersTable from "../../components/tables/OrdersTable";

import {
    FaClock,
    FaSearch,
    FaFilter,
    FaCheckCircle,
    FaTruck,
} from "react-icons/fa";

const API_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const PendingOrders = () => {
    const [search, setSearch] = useState("");

    const [restaurant, setRestaurant] =
        useState("All Restaurants");

    const [status, setStatus] =
        useState("All Status");

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] = useState(true);

    const [restaurants, setRestaurants] = useState([]);

    const [stats, setStats] = useState({
        pending: 0,
        accepted: 0,
        preparing: 0,
        outForDelivery: 0,
    });

    // FETCH PENDING ORDERS

    const fetchPendingOrders = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const { data } = await axios.get(
                `${API_URL}/api/admin/orders/pending`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const ordersData = data.orders || [];

            setOrders(ordersData);

            // RESTAURANTS

            const uniqueRestaurants = [
                ...new Set(
                    ordersData.map(
                        (item) =>
                            item.restaurant?.name
                    )
                ),
            ];

            setRestaurants(uniqueRestaurants);

            // STATS

            setStats({
                pending: ordersData.filter(
                    (item) =>
                        item.orderStatus === "Pending"
                ).length,

                accepted: ordersData.filter(
                    (item) =>
                        item.orderStatus === "Accepted"
                ).length,

                preparing: ordersData.filter(
                    (item) =>
                        item.orderStatus === "Preparing"
                ).length,

                outForDelivery: ordersData.filter(
                    (item) =>
                        item.orderStatus ===
                        "Out for Delivery"
                ).length,
            });
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to fetch pending orders"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPendingOrders();
    }, []);

    // FILTER ORDERS

    const filteredOrders = useMemo(() => {
        let filtered = [...orders];

        // SEARCH

        if (search) {
            filtered = filtered.filter(
                (item) =>
                    item._id
                        ?.toLowerCase()
                        .includes(
                            search.toLowerCase()
                        ) ||
                    item.customer?.name
                        ?.toLowerCase()
                        .includes(
                            search.toLowerCase()
                        ) ||
                    item.restaurant?.name
                        ?.toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );
        }

        // RESTAURANT FILTER

        if (restaurant !== "All Restaurants") {
            filtered = filtered.filter(
                (item) =>
                    item.restaurant?.name ===
                    restaurant
            );
        }

        // STATUS FILTER

        if (status !== "All Status") {
            filtered = filtered.filter(
                (item) =>
                    item.orderStatus === status
            );
        }

        return filtered;
    }, [orders, search, restaurant, status]);

    return (
        <div className="space-y-8">
            {/* HEADER */}

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
                        Pending Orders
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Monitor and manage pending customer
                        orders
                    </p>
                </div>

                {/* RIGHT */}

                <button
                    onClick={fetchPendingOrders}
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
                    "
                >
                    Refresh Orders
                </button>
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
                {/* TOTAL PENDING */}

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
                        <FaClock />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.pending}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Pending Orders
                    </p>
                </div>

                {/* ACCEPTED */}

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
                            bg-blue-100
                            text-blue-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        <FaCheckCircle />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.accepted}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Accepted Orders
                    </p>
                </div>

                {/* PREPARING */}

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
                            bg-purple-100
                            text-purple-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        🍔
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.preparing}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Preparing Orders
                    </p>
                </div>

                {/* OUT FOR DELIVERY */}

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
                        <FaTruck />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.outForDelivery}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Out for Delivery
                    </p>
                </div>
            </div>

            {/* FILTER BAR */}

            <div
                className="
                    bg-white
                    rounded-[30px]
                    border
                    border-gray-100
                    shadow-sm
                    p-5
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
                        placeholder="Search pending orders..."
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
                        value={restaurant}
                        onChange={(e) =>
                            setRestaurant(
                                e.target.value
                            )
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
                        <option>
                            All Restaurants
                        </option>

                        {restaurants.map(
                            (item, index) => (
                                <option
                                    key={index}
                                    value={item}
                                >
                                    {item}
                                </option>
                            )
                        )}
                    </select>

                    <select
                        value={status}
                        onChange={(e) =>
                            setStatus(
                                e.target.value
                            )
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
                        <option>
                            All Status
                        </option>

                        <option value="Pending">
                            Pending
                        </option>

                        <option value="Accepted">
                            Accepted
                        </option>

                        <option value="Preparing">
                            Preparing
                        </option>

                        <option value="Out for Delivery">
                            Out for Delivery
                        </option>
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

                        Apply Filter
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
                    Loading pending orders...
                </div>
            ) : (
                <OrdersTable
                    orders={filteredOrders}
                    fetchOrders={
                        fetchPendingOrders
                    }
                />
            )}
        </div>
    );
};

export default PendingOrders;