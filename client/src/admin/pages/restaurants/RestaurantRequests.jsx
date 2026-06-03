// // /client/src/admin/pages/restaurants/RestaurantRequests.jsx

// import {
//     FaStore,
//     FaEnvelope,
//     FaPhoneAlt,
//     FaMapMarkerAlt,
//     FaCheck,
//     FaTimes,
//     FaEye,
//     FaClock,
//     FaSearch,
//     FaFilter,
// } from "react-icons/fa";

// import { useState } from "react";

// const RestaurantRequests = () => {
//     const [search, setSearch] = useState("");

//     /* DUMMY DATA */

//     const requests = [
//         {
//             id: "#REQ-1001",
//             restaurant: "Pizza Kingdom",
//             owner: "Rahul Sharma",
//             email: "pizza@gmail.com",
//             phone: "+91 9876543210",
//             address: "Delhi, India",
//             category: "Pizza",
//             status: "Pending",
//             image:
//                 "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
//         },

//         {
//             id: "#REQ-1002",
//             restaurant: "Burger Point",
//             owner: "Aman Gupta",
//             email: "burger@gmail.com",
//             phone: "+91 9876543211",
//             address: "Mumbai, India",
//             category: "Fast Food",
//             status: "Pending",
//             image:
//                 "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
//         },

//         {
//             id: "#REQ-1003",
//             restaurant: "Chinese Bowl",
//             owner: "Rohit Kumar",
//             email: "chinese@gmail.com",
//             phone: "+91 9876543212",
//             address: "Lucknow, India",
//             category: "Chinese",
//             status: "Pending",
//             image:
//                 "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
//         },
//     ];

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
//                         Restaurant Requests
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Approve or reject restaurant registration requests
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
//                     <FaClock />

//                     145 Pending Requests
//                 </div>
//             </div>

//             {/* SEARCH & FILTER */}

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
//                         placeholder="Search requests..."
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
//                         <option>All Categories</option>
//                         <option>Pizza</option>
//                         <option>Fast Food</option>
//                         <option>Chinese</option>
//                         <option>Indian</option>
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

//             {/* REQUESTS */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           xl:grid-cols-2
//           gap-6
//         "
//             >
//                 {requests.map((item) => (
//                     <div
//                         key={item.id}
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               overflow-hidden
//               transition-all
//               hover:shadow-xl
//             "
//                     >
//                         {/* IMAGE */}

//                         <div className="relative h-60">

//                             <img
//                                 src={item.image}
//                                 alt={item.restaurant}
//                                 className="
//                   w-full
//                   h-full
//                   object-cover
//                 "
//                             />

//                             {/* STATUS */}

//                             <div
//                                 className="
//                   absolute
//                   top-5
//                   right-5
//                   bg-yellow-400
//                   text-black
//                   px-4
//                   py-2
//                   rounded-full
//                   text-sm
//                   font-bold
//                 "
//                             >
//                                 {item.status}
//                             </div>
//                         </div>

//                         {/* CONTENT */}

//                         <div className="p-6">
//                             {/* TOP */}

//                             <div
//                                 className="
//                   flex
//                   items-start
//                   justify-between
//                   gap-4
//                 "
//                             >
//                                 <div>

//                                     <h2
//                                         className="
//                       text-2xl
//                       font-extrabold
//                       text-gray-900
//                     "
//                                     >
//                                         {item.restaurant}
//                                     </h2>

//                                     <p className="text-orange-500 mt-2 font-medium">
//                                         {item.category}
//                                     </p>
//                                 </div>

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
//                     text-2xl
//                     flex-shrink-0
//                   "
//                                 >
//                                     <FaStore />
//                                 </div>
//                             </div>

//                             {/* INFO */}

//                             <div className="mt-8 space-y-5">
//                                 {/* OWNER */}

//                                 <div
//                                     className="
//                     flex
//                     items-center
//                     gap-4
//                   "
//                                 >
//                                     <div
//                                         className="
//                       w-12
//                       h-12
//                       rounded-2xl
//                       bg-gray-100
//                       flex
//                       items-center
//                       justify-center
//                       text-gray-600
//                     "
//                                     >
//                                         👨
//                                     </div>

//                                     <div>

//                                         <p className="text-sm text-gray-500">
//                                             Owner
//                                         </p>

//                                         <h3
//                                             className="
//                         font-bold
//                         text-gray-900
//                       "
//                                         >
//                                             {item.owner}
//                                         </h3>
//                                     </div>
//                                 </div>

//                                 {/* EMAIL */}

//                                 <div
//                                     className="
//                     flex
//                     items-center
//                     gap-4
//                   "
//                                 >
//                                     <div
//                                         className="
//                       w-12
//                       h-12
//                       rounded-2xl
//                       bg-gray-100
//                       flex
//                       items-center
//                       justify-center
//                       text-orange-500
//                     "
//                                     >
//                                         <FaEnvelope />
//                                     </div>

//                                     <div>

//                                         <p className="text-sm text-gray-500">
//                                             Email
//                                         </p>

//                                         <h3
//                                             className="
//                         font-medium
//                         text-gray-900
//                       "
//                                         >
//                                             {item.email}
//                                         </h3>
//                                     </div>
//                                 </div>

//                                 {/* PHONE */}

//                                 <div
//                                     className="
//                     flex
//                     items-center
//                     gap-4
//                   "
//                                 >
//                                     <div
//                                         className="
//                       w-12
//                       h-12
//                       rounded-2xl
//                       bg-gray-100
//                       flex
//                       items-center
//                       justify-center
//                       text-orange-500
//                     "
//                                     >
//                                         <FaPhoneAlt />
//                                     </div>

//                                     <div>

//                                         <p className="text-sm text-gray-500">
//                                             Phone
//                                         </p>

//                                         <h3
//                                             className="
//                         font-medium
//                         text-gray-900
//                       "
//                                         >
//                                             {item.phone}
//                                         </h3>
//                                     </div>
//                                 </div>

//                                 {/* ADDRESS */}

//                                 <div
//                                     className="
//                     flex
//                     items-center
//                     gap-4
//                   "
//                                 >
//                                     <div
//                                         className="
//                       w-12
//                       h-12
//                       rounded-2xl
//                       bg-gray-100
//                       flex
//                       items-center
//                       justify-center
//                       text-orange-500
//                     "
//                                     >
//                                         <FaMapMarkerAlt />
//                                     </div>

//                                     <div>

//                                         <p className="text-sm text-gray-500">
//                                             Address
//                                         </p>

//                                         <h3
//                                             className="
//                         font-medium
//                         text-gray-900
//                       "
//                                         >
//                                             {item.address}
//                                         </h3>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* ACTIONS */}

//                             <div
//                                 className="
//                   grid
//                   grid-cols-1
//                   sm:grid-cols-3
//                   gap-4
//                   mt-8
//                 "
//                             >
//                                 {/* VIEW */}

//                                 <button
//                                     className="
//                     bg-gray-100
//                     hover:bg-gray-900
//                     hover:text-white
//                     text-gray-700
//                     py-4
//                     rounded-2xl
//                     font-semibold
//                     flex
//                     items-center
//                     justify-center
//                     gap-3
//                     transition-all
//                   "
//                                 >
//                                     <FaEye />

//                                     View
//                                 </button>

//                                 {/* APPROVE */}

//                                 <button
//                                     className="
//                     bg-green-500
//                     hover:bg-green-600
//                     text-white
//                     py-4
//                     rounded-2xl
//                     font-semibold
//                     flex
//                     items-center
//                     justify-center
//                     gap-3
//                     transition-all
//                   "
//                                 >
//                                     <FaCheck />

//                                     Approve
//                                 </button>

//                                 {/* REJECT */}

//                                 <button
//                                     className="
//                     bg-red-500
//                     hover:bg-red-600
//                     text-white
//                     py-4
//                     rounded-2xl
//                     font-semibold
//                     flex
//                     items-center
//                     justify-center
//                     gap-3
//                     transition-all
//                   "
//                                 >
//                                     <FaTimes />

//                                     Reject
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RestaurantRequests;











// /client/src/admin/pages/restaurants/RestaurantRequests.jsx

import { useEffect, useState } from "react";

import axios from "axios";

import {
    FaStore,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaCheck,
    FaTimes,
    FaEye,
    FaClock,
    FaSearch,
    FaFilter,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const RestaurantRequests = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [requests, setRequests] = useState([]);

    // BACKEND URL

    const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000";

    // GET ALL PENDING RESTAURANTS

    const fetchRestaurantRequests = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `${API_URL}/api/admin/restaurants/requests`,
                {
                    params: {
                        search,
                        category,
                    },

                    withCredentials: true,
                }
            );

            setRequests(data.restaurants || []);
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to load requests"
            );
        } finally {
            setLoading(false);
        }
    };

    // APPROVE RESTAURANT

    const approveRestaurant = async (id) => {
        try {
            const confirmApprove = window.confirm(
                "Approve this restaurant?"
            );

            if (!confirmApprove) return;

            const { data } = await axios.put(
                `${API_URL}/api/admin/restaurants/${id}/approve`,
                {},
                {
                    withCredentials: true,
                }
            );

            alert(data.message);

            fetchRestaurantRequests();
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to approve restaurant"
            );
        }
    };

    // REJECT RESTAURANT

    const rejectRestaurant = async (id) => {
        try {
            const confirmReject = window.confirm(
                "Reject this restaurant?"
            );

            if (!confirmReject) return;

            const { data } = await axios.put(
                `${API_URL}/api/admin/restaurants/${id}/reject`,
                {},
                {
                    withCredentials: true,
                }
            );

            alert(data.message);

            fetchRestaurantRequests();
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to reject restaurant"
            );
        }
    };

    useEffect(() => {
        fetchRestaurantRequests();
    }, [search, category]);

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
                        Restaurant Requests
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Approve or reject restaurant registration requests
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
                    <FaClock />

                    {requests.length} Pending Requests
                </div>
            </div>

            {/* SEARCH & FILTER */}

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
                        placeholder="Search requests..."
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
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
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
                        <option value="">
                            All Categories
                        </option>

                        <option value="Pizza">
                            Pizza
                        </option>

                        <option value="Fast Food">
                            Fast Food
                        </option>

                        <option value="Chinese">
                            Chinese
                        </option>

                        <option value="Indian">
                            Indian
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

                        Filter
                    </button>
                </div>
            </div>

            {/* LOADING */}

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
                    Loading restaurant requests...
                </div>
            ) : requests.length === 0 ? (
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
                    No restaurant requests found
                </div>
            ) : (
                /* REQUESTS */

                <div
                    className="
                        grid
                        grid-cols-1
                        xl:grid-cols-2
                        gap-6
                    "
                >
                    {requests.map((item) => (
                        <div
                            key={item._id}
                            className="
                                bg-white
                                rounded-[32px]
                                border
                                border-gray-100
                                shadow-sm
                                overflow-hidden
                                transition-all
                                hover:shadow-xl
                            "
                        >
                            {/* IMAGE */}

                            <div className="relative h-60">
                                <img
                                    src={
                                        item?.banner ||
                                        item?.image ||
                                        "https://via.placeholder.com/500x300"
                                    }
                                    alt={item.name}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                    "
                                />

                                {/* STATUS */}

                                <div
                                    className="
                                        absolute
                                        top-5
                                        right-5
                                        bg-yellow-400
                                        text-black
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                        font-bold
                                    "
                                >
                                    Pending
                                </div>
                            </div>

                            {/* CONTENT */}

                            <div className="p-6">
                                {/* TOP */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
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
                                            {item.name}
                                        </h2>

                                        <p className="text-orange-500 mt-2 font-medium">
                                            {item.category}
                                        </p>
                                    </div>

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
                                            flex-shrink-0
                                        "
                                    >
                                        <FaStore />
                                    </div>
                                </div>

                                {/* INFO */}

                                <div className="mt-8 space-y-5">
                                    {/* OWNER */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-2xl
                                                bg-gray-100
                                                flex
                                                items-center
                                                justify-center
                                                text-gray-600
                                            "
                                        >
                                            👨
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Owner
                                            </p>

                                            <h3
                                                className="
                                                    font-bold
                                                    text-gray-900
                                                "
                                            >
                                                {item?.owner?.name ||
                                                    "N/A"}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* EMAIL */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-2xl
                                                bg-gray-100
                                                flex
                                                items-center
                                                justify-center
                                                text-orange-500
                                            "
                                        >
                                            <FaEnvelope />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Email
                                            </p>

                                            <h3
                                                className="
                                                    font-medium
                                                    text-gray-900
                                                "
                                            >
                                                {item?.owner?.email ||
                                                    item?.email}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* PHONE */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-2xl
                                                bg-gray-100
                                                flex
                                                items-center
                                                justify-center
                                                text-orange-500
                                            "
                                        >
                                            <FaPhoneAlt />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Phone
                                            </p>

                                            <h3
                                                className="
                                                    font-medium
                                                    text-gray-900
                                                "
                                            >
                                                {item.phone}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* ADDRESS */}

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-2xl
                                                bg-gray-100
                                                flex
                                                items-center
                                                justify-center
                                                text-orange-500
                                            "
                                        >
                                            <FaMapMarkerAlt />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Address
                                            </p>

                                            <h3
                                                className="
                                                    font-medium
                                                    text-gray-900
                                                "
                                            >
                                                {item.address}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* ACTIONS */}

                                <div
                                    className="
                                        grid
                                        grid-cols-1
                                        sm:grid-cols-3
                                        gap-4
                                        mt-8
                                    "
                                >
                                    {/* VIEW */}

                                    <Link
                                        to={`/admin/restaurants/${item._id}`}
                                        className="
                                            bg-gray-100
                                            hover:bg-gray-900
                                            hover:text-white
                                            text-gray-700
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
                                        <FaEye />

                                        View
                                    </Link>

                                    {/* APPROVE */}

                                    <button
                                        onClick={() =>
                                            approveRestaurant(
                                                item._id
                                            )
                                        }
                                        className="
                                            bg-green-500
                                            hover:bg-green-600
                                            text-white
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
                                        <FaCheck />

                                        Approve
                                    </button>

                                    {/* REJECT */}

                                    <button
                                        onClick={() =>
                                            rejectRestaurant(
                                                item._id
                                            )
                                        }
                                        className="
                                            bg-red-500
                                            hover:bg-red-600
                                            text-white
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
                                        <FaTimes />

                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RestaurantRequests;