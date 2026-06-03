// // /client/src/admin/pages/analytics/ActiveDeliveries.jsx


// import { useState } from "react";

// import {
//     FaMotorcycle,
//     FaMapMarkerAlt,
//     FaPhoneAlt,
//     FaSearch,
//     FaFilter,
//     FaClock,
//     FaBoxOpen,
//     FaCheckCircle,
//     FaUser,
//     FaStore,
//     FaRoute,
// } from "react-icons/fa";

// const ActiveDeliveries = () => {
//     const [search, setSearch] = useState("");

//     /* DUMMY DATA */

//     const deliveries = [
//         {
//             id: "#ORD-1001",
//             customer: "Rahul Sharma",
//             rider: "Aman Gupta",
//             restaurant: "Pizza Hub",
//             amount: "$25",
//             status: "On The Way",
//             address: "Hazratganj, Lucknow",
//             time: "15 Min Left",
//             phone: "+91 9876543210",
//             image:
//                 "https://randomuser.me/api/portraits/men/32.jpg",
//         },

//         {
//             id: "#ORD-1002",
//             customer: "Priya Verma",
//             rider: "Rohit Kumar",
//             restaurant: "Burger Point",
//             amount: "$18",
//             status: "Picked Up",
//             address: "Aliganj, Lucknow",
//             time: "22 Min Left",
//             phone: "+91 9876543211",
//             image:
//                 "https://randomuser.me/api/portraits/women/44.jpg",
//         },

//         {
//             id: "#ORD-1003",
//             customer: "Karan Singh",
//             rider: "Vikas Sharma",
//             restaurant: "Chinese Bowl",
//             amount: "$32",
//             status: "Preparing",
//             address: "Gomti Nagar, Lucknow",
//             time: "30 Min Left",
//             phone: "+91 9876543212",
//             image:
//                 "https://randomuser.me/api/portraits/men/52.jpg",
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
//                         Active Deliveries
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Track all ongoing food deliveries in real-time
//                     </p>
//                 </div>

//                 {/* RIGHT */}

//                 <div
//                     className="
//             bg-orange-100
//             text-orange-600
//             px-6
//             py-4
//             rounded-2xl
//             font-bold
//             flex
//             items-center
//             gap-3
//             w-fit
//           "
//                 >
//                     <FaMotorcycle />

//                     248 Active Deliveries
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
//                 {/* ACTIVE */}

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
//                         <FaMotorcycle />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         248
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Active Deliveries
//                     </p>
//                 </div>

//                 {/* PICKED UP */}

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
//                         <FaBoxOpen />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         102
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Picked Orders
//                     </p>
//                 </div>

//                 {/* ON THE WAY */}

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
//                         <FaRoute />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         88
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         On The Way
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
//                         <FaCheckCircle />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         5.8K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Delivered Today
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
//                         placeholder="Search deliveries..."
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
//                         <option>Preparing</option>
//                         <option>Picked Up</option>
//                         <option>On The Way</option>
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

//             {/* DELIVERY CARDS */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           xl:grid-cols-2
//           gap-6
//         "
//             >
//                 {deliveries.map((item) => (
//                     <div
//                         key={item.id}
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//               hover:shadow-xl
//               transition-all
//             "
//                     >
//                         {/* TOP */}

//                         <div
//                             className="
//                 flex
//                 flex-col
//                 lg:flex-row
//                 lg:items-start
//                 lg:justify-between
//                 gap-5
//               "
//                         >
//                             {/* CUSTOMER */}

//                             <div className="flex items-center gap-4">
//                                 <img
//                                     src={item.image}
//                                     alt={item.customer}
//                                     className="
//                     w-20
//                     h-20
//                     rounded-3xl
//                     object-cover
//                   "
//                                 />

//                                 <div>
//                                     <h2
//                                         className="
//                       text-2xl
//                       font-extrabold
//                       text-gray-900
//                     "
//                                     >
//                                         {item.customer}
//                                     </h2>

//                                     <p className="text-gray-500 mt-1">
//                                         Order ID: {item.id}
//                                     </p>

//                                     <div
//                                         className="
//                       flex
//                       items-center
//                       gap-2
//                       mt-3
//                     "
//                                     >
//                                         <FaPhoneAlt className="text-orange-500" />

//                                         <span className="font-medium text-gray-700">
//                                             {item.phone}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* STATUS */}

//                             <div
//                                 className={`
//                   px-5
//                   py-3
//                   rounded-full
//                   text-sm
//                   font-bold
//                   w-fit

//                   ${item.status === "Preparing"
//                                         ? "bg-yellow-100 text-yellow-600"

//                                         : item.status === "Picked Up"
//                                             ? "bg-blue-100 text-blue-600"

//                                             : "bg-green-100 text-green-600"
//                                     }
//                 `}
//                             >
//                                 {item.status}
//                             </div>
//                         </div>

//                         {/* INFO */}

//                         <div
//                             className="
//                 grid
//                 grid-cols-1
//                 sm:grid-cols-2
//                 gap-5
//                 mt-8
//               "
//                         >
//                             {/* RIDER */}

//                             <div
//                                 className="
//                   bg-gray-50
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   gap-4
//                 "
//                             >
//                                 <div
//                                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-orange-100
//                     text-orange-500
//                     flex
//                     items-center
//                     justify-center
//                     text-xl
//                   "
//                                 >
//                                     <FaUser />
//                                 </div>

//                                 <div>
//                                     <p className="text-gray-500 text-sm">
//                                         Delivery Partner
//                                     </p>

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                       mt-1
//                     "
//                                     >
//                                         {item.rider}
//                                     </h3>
//                                 </div>
//                             </div>

//                             {/* RESTAURANT */}

//                             <div
//                                 className="
//                   bg-gray-50
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   gap-4
//                 "
//                             >
//                                 <div
//                                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-red-100
//                     text-red-500
//                     flex
//                     items-center
//                     justify-center
//                     text-xl
//                   "
//                                 >
//                                     <FaStore />
//                                 </div>

//                                 <div>
//                                     <p className="text-gray-500 text-sm">
//                                         Restaurant
//                                     </p>

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                       mt-1
//                     "
//                                     >
//                                         {item.restaurant}
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* ADDRESS */}

//                         <div
//                             className="
//                 mt-6
//                 bg-orange-50
//                 rounded-3xl
//                 p-5
//                 flex
//                 items-start
//                 gap-4
//               "
//                         >
//                             <div
//                                 className="
//                   w-14
//                   h-14
//                   rounded-2xl
//                   bg-orange-500
//                   text-white
//                   flex
//                   items-center
//                   justify-center
//                   text-xl
//                   flex-shrink-0
//                 "
//                             >
//                                 <FaMapMarkerAlt />
//                             </div>

//                             <div>
//                                 <p className="text-gray-500 text-sm">
//                                     Delivery Address
//                                 </p>

//                                 <h3
//                                     className="
//                     text-lg
//                     font-bold
//                     text-gray-900
//                     mt-1
//                   "
//                                 >
//                                     {item.address}
//                                 </h3>
//                             </div>
//                         </div>

//                         {/* FOOTER */}

//                         <div
//                             className="
//                 flex
//                 flex-col
//                 sm:flex-row
//                 sm:items-center
//                 sm:justify-between
//                 gap-5
//                 mt-8
//               "
//                         >
//                             {/* TIME */}

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   gap-3
//                 "
//                             >
//                                 <div
//                                     className="
//                     w-12
//                     h-12
//                     rounded-2xl
//                     bg-blue-100
//                     text-blue-500
//                     flex
//                     items-center
//                     justify-center
//                   "
//                                 >
//                                     <FaClock />
//                                 </div>

//                                 <div>
//                                     <p className="text-gray-500 text-sm">
//                                         Estimated Time
//                                     </p>

//                                     <h3 className="font-bold text-gray-900">
//                                         {item.time}
//                                     </h3>
//                                 </div>
//                             </div>

//                             {/* AMOUNT */}

//                             <div className="text-right">
//                                 <p className="text-gray-500 text-sm">
//                                     Order Amount
//                                 </p>

//                                 <h2
//                                     className="
//                     text-3xl
//                     font-extrabold
//                     text-orange-500
//                     mt-1
//                   "
//                                 >
//                                     {item.amount}
//                                 </h2>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ActiveDeliveries;







// /client/src/admin/pages/analytics/ActiveDeliveries.jsx

import { useEffect, useState } from "react";
import axios from "axios";

import {
    FaMotorcycle,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaSearch,
    FaFilter,
    FaClock,
    FaBoxOpen,
    FaCheckCircle,
    FaUser,
    FaStore,
    FaRoute,
} from "react-icons/fa";

const ActiveDeliveries = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");

    const [deliveries, setDeliveries] = useState([]);
    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState({
        activeDeliveries: 0,
        pickedOrders: 0,
        onTheWay: 0,
        deliveredToday: 0,
    });

    // ===============================
    // FETCH ACTIVE DELIVERIES
    // ===============================

    const fetchDeliveries = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const { data } = await axios.get(
                "http://localhost:5000/api/admin/analytics/active-deliveries",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (data?.success) {
                setDeliveries(data.deliveries);

                setStats({
                    activeDeliveries:
                        data.stats?.activeDeliveries || 0,

                    pickedOrders:
                        data.stats?.pickedOrders || 0,

                    onTheWay:
                        data.stats?.onTheWay || 0,

                    deliveredToday:
                        data.stats?.deliveredToday || 0,
                });
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDeliveries();
    }, []);

    // ===============================
    // FILTER DELIVERIES
    // ===============================

    const filteredDeliveries = deliveries.filter((item) => {
        const matchesSearch =
            item.customer
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
            item.rider
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
            item.restaurant
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
            item.id
                ?.toLowerCase()
                .includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "All Status"
                ? true
                : item.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

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
                        Active Deliveries
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Track all ongoing food deliveries in
                        real-time
                    </p>
                </div>

                {/* RIGHT */}

                <div
                    className="
                    bg-orange-100
                    text-orange-600
                    px-6
                    py-4
                    rounded-2xl
                    font-bold
                    flex
                    items-center
                    gap-3
                    w-fit
                "
                >
                    <FaMotorcycle />

                    {stats.activeDeliveries} Active Deliveries
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
                {/* ACTIVE */}

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
                        <FaMotorcycle />
                    </div>

                    <h2
                        className="
                        text-3xl
                        font-extrabold
                        text-gray-900
                    "
                    >
                        {stats.activeDeliveries}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Active Deliveries
                    </p>
                </div>

                {/* PICKED UP */}

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
                        <FaBoxOpen />
                    </div>

                    <h2
                        className="
                        text-3xl
                        font-extrabold
                        text-gray-900
                    "
                    >
                        {stats.pickedOrders}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Picked Orders
                    </p>
                </div>

                {/* ON THE WAY */}

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
                        <FaRoute />
                    </div>

                    <h2
                        className="
                        text-3xl
                        font-extrabold
                        text-gray-900
                    "
                    >
                        {stats.onTheWay}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        On The Way
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
                        <FaCheckCircle />
                    </div>

                    <h2
                        className="
                        text-3xl
                        font-extrabold
                        text-gray-900
                    "
                    >
                        {stats.deliveredToday}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Delivered Today
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
                        placeholder="Search deliveries..."
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
                "
                >
                    <select
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(e.target.value)
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
                        <option>All Status</option>
                        <option>Preparing</option>
                        <option>Picked Up</option>
                        <option>On The Way</option>
                        <option>Delivered</option>
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

            {/* LOADING */}

            {loading ? (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold text-gray-700">
                        Loading Deliveries...
                    </h2>
                </div>
            ) : (
                <>
                    {/* DELIVERY CARDS */}

                    <div
                        className="
                        grid
                        grid-cols-1
                        xl:grid-cols-2
                        gap-6
                    "
                    >
                        {filteredDeliveries.map((item) => (
                            <div
                                key={item._id}
                                className="
                                bg-white
                                rounded-[32px]
                                border
                                border-gray-100
                                shadow-sm
                                p-6
                                hover:shadow-xl
                                transition-all
                            "
                            >
                                {/* TOP */}

                                <div
                                    className="
                                    flex
                                    flex-col
                                    lg:flex-row
                                    lg:items-start
                                    lg:justify-between
                                    gap-5
                                "
                                >
                                    {/* CUSTOMER */}

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={
                                                item.customerImage ||
                                                "https://via.placeholder.com/150"
                                            }
                                            alt={item.customer}
                                            className="
                                            w-20
                                            h-20
                                            rounded-3xl
                                            object-cover
                                        "
                                        />

                                        <div>
                                            <h2
                                                className="
                                                text-2xl
                                                font-extrabold
                                                text-gray-900
                                            "
                                            >
                                                {item.customer}
                                            </h2>

                                            <p className="text-gray-500 mt-1">
                                                Order ID:{" "}
                                                {item.id}
                                            </p>

                                            <div
                                                className="
                                                flex
                                                items-center
                                                gap-2
                                                mt-3
                                            "
                                            >
                                                <FaPhoneAlt className="text-orange-500" />

                                                <span className="font-medium text-gray-700">
                                                    {
                                                        item.phone
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* STATUS */}

                                    <div
                                        className={`
                                        px-5
                                        py-3
                                        rounded-full
                                        text-sm
                                        font-bold
                                        w-fit

                                        ${item.status ===
                                                "Preparing"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : item.status ===
                                                    "Picked Up"
                                                    ? "bg-blue-100 text-blue-600"
                                                    : item.status ===
                                                        "On The Way"
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-gray-100 text-gray-700"
                                            }
                                    `}
                                    >
                                        {item.status}
                                    </div>
                                </div>

                                {/* INFO */}

                                <div
                                    className="
                                    grid
                                    grid-cols-1
                                    sm:grid-cols-2
                                    gap-5
                                    mt-8
                                "
                                >
                                    {/* RIDER */}

                                    <div
                                        className="
                                        bg-gray-50
                                        rounded-3xl
                                        p-5
                                        flex
                                        items-center
                                        gap-4
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
                                            text-xl
                                        "
                                        >
                                            <FaUser />
                                        </div>

                                        <div>
                                            <p className="text-gray-500 text-sm">
                                                Delivery
                                                Partner
                                            </p>

                                            <h3
                                                className="
                                                text-lg
                                                font-bold
                                                text-gray-900
                                                mt-1
                                            "
                                            >
                                                {item.rider}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* RESTAURANT */}

                                    <div
                                        className="
                                        bg-gray-50
                                        rounded-3xl
                                        p-5
                                        flex
                                        items-center
                                        gap-4
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
                                            text-xl
                                        "
                                        >
                                            <FaStore />
                                        </div>

                                        <div>
                                            <p className="text-gray-500 text-sm">
                                                Restaurant
                                            </p>

                                            <h3
                                                className="
                                                text-lg
                                                font-bold
                                                text-gray-900
                                                mt-1
                                            "
                                            >
                                                {
                                                    item.restaurant
                                                }
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* ADDRESS */}

                                <div
                                    className="
                                    mt-6
                                    bg-orange-50
                                    rounded-3xl
                                    p-5
                                    flex
                                    items-start
                                    gap-4
                                "
                                >
                                    <div
                                        className="
                                        w-14
                                        h-14
                                        rounded-2xl
                                        bg-orange-500
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        text-xl
                                        flex-shrink-0
                                    "
                                    >
                                        <FaMapMarkerAlt />
                                    </div>

                                    <div>
                                        <p className="text-gray-500 text-sm">
                                            Delivery
                                            Address
                                        </p>

                                        <h3
                                            className="
                                            text-lg
                                            font-bold
                                            text-gray-900
                                            mt-1
                                        "
                                        >
                                            {
                                                item.address
                                            }
                                        </h3>
                                    </div>
                                </div>

                                {/* FOOTER */}

                                <div
                                    className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    gap-5
                                    mt-8
                                "
                                >
                                    {/* TIME */}

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                    >
                                        <div
                                            className="
                                            w-12
                                            h-12
                                            rounded-2xl
                                            bg-blue-100
                                            text-blue-500
                                            flex
                                            items-center
                                            justify-center
                                        "
                                        >
                                            <FaClock />
                                        </div>

                                        <div>
                                            <p className="text-gray-500 text-sm">
                                                Estimated
                                                Time
                                            </p>

                                            <h3 className="font-bold text-gray-900">
                                                {item.time}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* AMOUNT */}

                                    <div className="text-right">
                                        <p className="text-gray-500 text-sm">
                                            Order Amount
                                        </p>

                                        <h2
                                            className="
                                            text-3xl
                                            font-extrabold
                                            text-orange-500
                                            mt-1
                                        "
                                        >
                                            ₹
                                            {item.amount}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* EMPTY */}

                    {filteredDeliveries.length === 0 && (
                        <div className="bg-white rounded-3xl p-20 text-center border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-700">
                                No Deliveries Found
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Try changing search or filter
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ActiveDeliveries;