// // /client/src/admin/pages/analytics/DeliveryPartners.jsx

// import { useState } from "react";

// import {
//     FaMotorcycle,
//     FaUserCheck,
//     FaClock,
//     FaMoneyBillWave,
//     FaSearch,
//     FaFilter,
//     FaEye,
//     FaEdit,
//     FaTrash,
//     FaPhoneAlt,
//     FaMapMarkerAlt,
//     FaStar,
//     FaPlus,
// } from "react-icons/fa";

// const DeliveryPartners = () => {
//     const [search, setSearch] = useState("");

//     /* DUMMY DATA */

//     const partners = [
//         {
//             id: "#DP-1001",
//             name: "Rahul Sharma",
//             phone: "+91 9876543210",
//             location: "Delhi, India",
//             deliveries: 1250,
//             earnings: "$4,500",
//             rating: 4.8,
//             status: "Active",
//             image:
//                 "https://randomuser.me/api/portraits/men/32.jpg",
//         },

//         {
//             id: "#DP-1002",
//             name: "Aman Gupta",
//             phone: "+91 9876543211",
//             location: "Mumbai, India",
//             deliveries: 980,
//             earnings: "$3,200",
//             rating: 4.5,
//             status: "Offline",
//             image:
//                 "https://randomuser.me/api/portraits/men/52.jpg",
//         },

//         {
//             id: "#DP-1003",
//             name: "Priya Verma",
//             phone: "+91 9876543212",
//             location: "Lucknow, India",
//             deliveries: 1450,
//             earnings: "$5,100",
//             rating: 4.9,
//             status: "Active",
//             image:
//                 "https://randomuser.me/api/portraits/women/44.jpg",
//         },
//     ];

//     return (
//         <div className="space-y-8">
//             {/* HEADER */}

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
//                         Delivery Partners
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Manage all delivery partners and riders
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
//             flex
//             items-center
//             justify-center
//             gap-3
//           "
//                 >
//                     <FaPlus />

//                     Add Partner
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
//                         <FaMotorcycle />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         2,450
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Total Partners
//                     </p>
//                 </div>

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
//               bg-green-100
//               text-green-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaUserCheck />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         1,980
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Active Riders
//                     </p>
//                 </div>

//                 {/* DELIVERIES */}

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
//                         <FaClock />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         18K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Deliveries Today
//                     </p>
//                 </div>

//                 {/* EARNINGS */}

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
//                         <FaMoneyBillWave />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         $85K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Monthly Payout
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
//                         placeholder="Search delivery partner..."
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

//                 {/* FILTER */}

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
//                         <option>Active</option>
//                         <option>Offline</option>
//                         <option>Blocked</option>
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

//             {/* PARTNER CARDS */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           lg:grid-cols-2
//           xl:grid-cols-3
//           gap-6
//         "
//             >
//                 {partners.map((partner) => (
//                     <div
//                         key={partner.id}
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
//                 items-start
//                 justify-between
//                 gap-4
//               "
//                         >
//                             {/* PROFILE */}

//                             <div className="flex items-center gap-4">
//                                 <img
//                                     src={partner.image}
//                                     alt={partner.name}
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
//                       text-xl
//                       font-extrabold
//                       text-gray-900
//                     "
//                                     >
//                                         {partner.name}
//                                     </h2>

//                                     <p className="text-gray-500 mt-1">
//                                         {partner.id}
//                                     </p>

//                                     <div
//                                         className="
//                       flex
//                       items-center
//                       gap-2
//                       mt-3
//                     "
//                                     >
//                                         <FaStar className="text-yellow-400" />

//                                         <span className="font-semibold text-gray-700">
//                                             {partner.rating}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* STATUS */}

//                             <div
//                                 className={`
//                   px-4
//                   py-2
//                   rounded-full
//                   text-sm
//                   font-bold

//                   ${partner.status === "Active"
//                                         ? "bg-green-100 text-green-600"
//                                         : "bg-gray-200 text-gray-700"
//                                     }
//                 `}
//                             >
//                                 {partner.status}
//                             </div>
//                         </div>

//                         {/* INFO */}

//                         <div className="mt-8 space-y-5">
//                             {/* PHONE */}

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   gap-4
//                 "
//                             >
//                                 <div
//                                     className="
//                     w-12
//                     h-12
//                     rounded-2xl
//                     bg-orange-100
//                     text-orange-500
//                     flex
//                     items-center
//                     justify-center
//                   "
//                                 >
//                                     <FaPhoneAlt />
//                                 </div>

//                                 <div>
//                                     <p className="text-sm text-gray-500">
//                                         Phone
//                                     </p>

//                                     <h3 className="font-bold text-gray-900">
//                                         {partner.phone}
//                                     </h3>
//                                 </div>
//                             </div>

//                             {/* LOCATION */}

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   gap-4
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
//                                     <FaMapMarkerAlt />
//                                 </div>

//                                 <div>
//                                     <p className="text-sm text-gray-500">
//                                         Location
//                                     </p>

//                                     <h3 className="font-bold text-gray-900">
//                                         {partner.location}
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* STATS */}

//                         <div
//                             className="
//                 grid
//                 grid-cols-2
//                 gap-4
//                 mt-8
//               "
//                         >
//                             {/* DELIVERIES */}

//                             <div
//                                 className="
//                   bg-gray-50
//                   rounded-2xl
//                   p-4
//                 "
//                             >
//                                 <p className="text-gray-500 text-sm">
//                                     Deliveries
//                                 </p>

//                                 <h3
//                                     className="
//                     text-2xl
//                     font-extrabold
//                     text-gray-900
//                     mt-2
//                   "
//                                 >
//                                     {partner.deliveries}
//                                 </h3>
//                             </div>

//                             {/* EARNINGS */}

//                             <div
//                                 className="
//                   bg-gray-50
//                   rounded-2xl
//                   p-4
//                 "
//                             >
//                                 <p className="text-gray-500 text-sm">
//                                     Earnings
//                                 </p>

//                                 <h3
//                                     className="
//                     text-2xl
//                     font-extrabold
//                     text-gray-900
//                     mt-2
//                   "
//                                 >
//                                     {partner.earnings}
//                                 </h3>
//                             </div>
//                         </div>

//                         {/* ACTIONS */}

//                         <div
//                             className="
//                 grid
//                 grid-cols-3
//                 gap-3
//                 mt-8
//               "
//                         >
//                             {/* VIEW */}

//                             <button
//                                 className="
//                   bg-gray-100
//                   hover:bg-gray-900
//                   hover:text-white
//                   text-gray-700
//                   py-4
//                   rounded-2xl
//                   flex
//                   items-center
//                   justify-center
//                   transition-all
//                 "
//                             >
//                                 <FaEye />
//                             </button>

//                             {/* EDIT */}

//                             <button
//                                 className="
//                   bg-orange-100
//                   hover:bg-orange-500
//                   hover:text-white
//                   text-orange-500
//                   py-4
//                   rounded-2xl
//                   flex
//                   items-center
//                   justify-center
//                   transition-all
//                 "
//                             >
//                                 <FaEdit />
//                             </button>

//                             {/* DELETE */}

//                             <button
//                                 className="
//                   bg-red-100
//                   hover:bg-red-500
//                   hover:text-white
//                   text-red-500
//                   py-4
//                   rounded-2xl
//                   flex
//                   items-center
//                   justify-center
//                   transition-all
//                 "
//                             >
//                                 <FaTrash />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DeliveryPartners;








// /client/src/admin/pages/analytics/DeliveryPartners.jsx

import { useEffect, useMemo, useState } from "react";

import axios from "axios";

import {
    FaMotorcycle,
    FaUserCheck,
    FaClock,
    FaMoneyBillWave,
    FaSearch,
    FaFilter,
    FaEye,
    FaEdit,
    FaTrash,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaStar,
    FaPlus,
} from "react-icons/fa";

const DeliveryPartners = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All Status");

    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState({
        totalPartners: 0,
        activePartners: 0,
        deliveriesToday: 0,
        monthlyPayout: 0,
    });

    const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000";

    // FETCH DELIVERY PARTNERS

    const fetchPartners = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `${API_URL}/api/admin/delivery-partners`,
                {
                    withCredentials: true,
                }
            );

            if (data?.success) {
                setPartners(data.partners || []);

                setStats({
                    totalPartners: data.totalPartners || 0,
                    activePartners: data.activePartners || 0,
                    deliveriesToday: data.deliveriesToday || 0,
                    monthlyPayout: data.monthlyPayout || 0,
                });
            }
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to fetch delivery partners"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPartners();
    }, []);

    // DELETE PARTNER

    const deletePartnerHandler = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this delivery partner?"
        );

        if (!confirmDelete) return;

        try {
            const { data } = await axios.delete(
                `${API_URL}/api/admin/delivery-partners/${id}`,
                {
                    withCredentials: true,
                }
            );

            if (data?.success) {
                setPartners((prev) =>
                    prev.filter((partner) => partner._id !== id)
                );

                alert("Delivery partner deleted successfully");
            }
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Delete failed"
            );
        }
    };

    // FILTERED PARTNERS

    const filteredPartners = useMemo(() => {
        return partners.filter((partner) => {
            const matchesSearch =
                partner?.name
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                partner?.phone
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                partner?.location
                    ?.toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                status === "All Status"
                    ? true
                    : partner?.status === status;

            return matchesSearch && matchesStatus;
        });
    }, [partners, search, status]);

    return (
        <div className="space-y-8">
            {/* HEADER */}

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
                        Delivery Partners
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage all delivery partners and riders
                    </p>
                </div>

                {/* RIGHT */}

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
                        justify-center
                        gap-3
                    "
                >
                    <FaPlus />

                    Add Partner
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
                        <FaMotorcycle />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.totalPartners}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Partners
                    </p>
                </div>

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
                            bg-green-100
                            text-green-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        <FaUserCheck />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.activePartners}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Active Riders
                    </p>
                </div>

                {/* DELIVERIES */}

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
                        <FaClock />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.deliveriesToday}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Deliveries Today
                    </p>
                </div>

                {/* EARNINGS */}

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
                        <FaMoneyBillWave />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        ${stats.monthlyPayout}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Monthly Payout
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
                        placeholder="Search delivery partner..."
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

                {/* FILTER */}

                <div
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-4
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
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Offline</option>
                        <option>Blocked</option>
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
                        font-bold
                        text-gray-500
                    "
                >
                    Loading delivery partners...
                </div>
            ) : filteredPartners.length === 0 ? (
                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-10
                        text-center
                        font-bold
                        text-gray-500
                    "
                >
                    No delivery partners found
                </div>
            ) : (
                /* PARTNER CARDS */

                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        xl:grid-cols-3
                        gap-6
                    "
                >
                    {filteredPartners.map((partner) => (
                        <div
                            key={partner._id}
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
                                    items-start
                                    justify-between
                                    gap-4
                                "
                            >
                                {/* PROFILE */}

                                <div className="flex items-center gap-4">
                                    <img
                                        src={
                                            partner?.image ||
                                            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                        }
                                        alt={partner?.name}
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
                                                text-xl
                                                font-extrabold
                                                text-gray-900
                                            "
                                        >
                                            {partner?.name}
                                        </h2>

                                        <p className="text-gray-500 mt-1">
                                            {partner?._id}
                                        </p>

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                mt-3
                                            "
                                        >
                                            <FaStar className="text-yellow-400" />

                                            <span className="font-semibold text-gray-700">
                                                {partner?.rating || 0}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* STATUS */}

                                <div
                                    className={`
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                        font-bold

                                        ${partner?.status === "Active"
                                            ? "bg-green-100 text-green-600"
                                            : partner?.status === "Blocked"
                                                ? "bg-red-100 text-red-600"
                                                : "bg-gray-200 text-gray-700"
                                        }
                                    `}
                                >
                                    {partner?.status}
                                </div>
                            </div>

                            {/* INFO */}

                            <div className="mt-8 space-y-5">
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
                                            bg-orange-100
                                            text-orange-500
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <FaPhoneAlt />
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Phone
                                        </p>

                                        <h3 className="font-bold text-gray-900">
                                            {partner?.phone}
                                        </h3>
                                    </div>
                                </div>

                                {/* LOCATION */}

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
                                            bg-blue-100
                                            text-blue-500
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <FaMapMarkerAlt />
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Location
                                        </p>

                                        <h3 className="font-bold text-gray-900">
                                            {partner?.location}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* STATS */}

                            <div
                                className="
                                    grid
                                    grid-cols-2
                                    gap-4
                                    mt-8
                                "
                            >
                                {/* DELIVERIES */}

                                <div
                                    className="
                                        bg-gray-50
                                        rounded-2xl
                                        p-4
                                    "
                                >
                                    <p className="text-gray-500 text-sm">
                                        Deliveries
                                    </p>

                                    <h3
                                        className="
                                            text-2xl
                                            font-extrabold
                                            text-gray-900
                                            mt-2
                                        "
                                    >
                                        {partner?.deliveries || 0}
                                    </h3>
                                </div>

                                {/* EARNINGS */}

                                <div
                                    className="
                                        bg-gray-50
                                        rounded-2xl
                                        p-4
                                    "
                                >
                                    <p className="text-gray-500 text-sm">
                                        Earnings
                                    </p>

                                    <h3
                                        className="
                                            text-2xl
                                            font-extrabold
                                            text-gray-900
                                            mt-2
                                        "
                                    >
                                        ${partner?.earnings || 0}
                                    </h3>
                                </div>
                            </div>

                            {/* ACTIONS */}

                            <div
                                className="
                                    grid
                                    grid-cols-3
                                    gap-3
                                    mt-8
                                "
                            >
                                {/* VIEW */}

                                <button
                                    className="
                                        bg-gray-100
                                        hover:bg-gray-900
                                        hover:text-white
                                        text-gray-700
                                        py-4
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        transition-all
                                    "
                                >
                                    <FaEye />
                                </button>

                                {/* EDIT */}

                                <button
                                    className="
                                        bg-orange-100
                                        hover:bg-orange-500
                                        hover:text-white
                                        text-orange-500
                                        py-4
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        transition-all
                                    "
                                >
                                    <FaEdit />
                                </button>

                                {/* DELETE */}

                                <button
                                    onClick={() =>
                                        deletePartnerHandler(
                                            partner?._id
                                        )
                                    }
                                    className="
                                        bg-red-100
                                        hover:bg-red-500
                                        hover:text-white
                                        text-red-500
                                        py-4
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        transition-all
                                    "
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DeliveryPartners;