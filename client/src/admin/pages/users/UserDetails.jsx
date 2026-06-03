// // /client/src/admin/pages/users/UserDetails.jsx

// import {
//     FaArrowLeft,
//     FaEnvelope,
//     FaPhoneAlt,
//     FaMapMarkerAlt,
//     FaCalendarAlt,
//     FaShoppingBag,
//     FaDollarSign,
//     FaUserCheck,
//     FaEdit,
//     FaBan,
// } from "react-icons/fa";

// import StatusBadge from "../../components/ui/StatusBadge";

// const UserDetails = () => {
//     /* DUMMY USER */

//     const user = {
//         id: "#USR-1025",
//         name: "Chandra Prakash",
//         email: "chandra@gmail.com",
//         phone: "+91 9876543210",
//         address: "New Delhi, India",
//         status: "Active",
//         joined: "12 Jan 2025",
//         totalOrders: 128,
//         totalSpent: "$2,450",
//         avatar:
//             "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",

//         recentOrders: [
//             {
//                 id: "#ORD-1021",
//                 restaurant: "Pizza Hub",
//                 amount: "$48",
//                 status: "Delivered",
//             },

//             {
//                 id: "#ORD-1022",
//                 restaurant: "Burger Town",
//                 amount: "$25",
//                 status: "Pending",
//             },

//             {
//                 id: "#ORD-1023",
//                 restaurant: "Food Express",
//                 amount: "$80",
//                 status: "Delivered",
//             },
//         ],
//     };

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

//                 <div className="flex items-center gap-4">

//                     <button
//                         className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-white
//               border
//               border-gray-100
//               shadow-sm
//               flex
//               items-center
//               justify-center
//               text-gray-700
//               hover:bg-orange-500
//               hover:text-white
//               transition-all
//             "
//                     >
//                         <FaArrowLeft />
//                     </button>

//                     <div>

//                         <h1
//                             className="
//                 text-3xl
//                 md:text-4xl
//                 font-extrabold
//                 text-gray-900
//               "
//                         >
//                             User Details
//                         </h1>

//                         <p className="text-gray-500 mt-2">
//                             Manage user information & activity
//                         </p>
//                     </div>
//                 </div>

//                 {/* ACTIONS */}

//                 <div className="flex flex-wrap gap-4">

//                     <button
//                         className="
//               bg-orange-500
//               hover:bg-orange-600
//               text-white
//               px-6
//               py-4
//               rounded-2xl
//               font-bold
//               flex
//               items-center
//               gap-3
//               shadow-lg
//               shadow-orange-200
//               transition-all
//             "
//                     >
//                         <FaEdit />

//                         Edit User
//                     </button>

//                     <button
//                         className="
//               bg-red-500
//               hover:bg-red-600
//               text-white
//               px-6
//               py-4
//               rounded-2xl
//               font-bold
//               flex
//               items-center
//               gap-3
//               shadow-lg
//               shadow-red-200
//               transition-all
//             "
//                     >
//                         <FaBan />

//                         Block User
//                     </button>
//                 </div>
//             </div>

//             {/* USER PROFILE */}

//             <div
//                 className="
//           bg-white
//           rounded-[32px]
//           border
//           border-gray-100
//           shadow-sm
//           p-6
//           lg:p-8
//         "
//             >
//                 <div
//                     className="
//             flex
//             flex-col
//             lg:flex-row
//             gap-8
//           "
//                 >
//                     {/* LEFT */}

//                     <div
//                         className="
//               flex
//               flex-col
//               items-center
//               text-center
//               lg:w-[320px]
//             "
//                     >
//                         <img
//                             src={user.avatar}
//                             alt={user.name}
//                             className="
//                 w-40
//                 h-40
//                 rounded-full
//                 object-cover
//                 border-4
//                 border-orange-100
//               "
//                         />

//                         <h2
//                             className="
//                 text-3xl
//                 font-extrabold
//                 text-gray-900
//                 mt-5
//               "
//                         >
//                             {user.name}
//                         </h2>

//                         <p className="text-gray-500 mt-2">
//                             Customer Account
//                         </p>

//                         <div className="mt-5">
//                             <StatusBadge status={user.status} />
//                         </div>
//                     </div>

//                     {/* RIGHT */}

//                     <div className="flex-1">
//                         <div
//                             className="
//                 grid
//                 grid-cols-1
//                 md:grid-cols-2
//                 gap-6
//               "
//                         >
//                             {/* EMAIL */}

//                             <div
//                                 className="
//                   bg-gray-50
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-3">

//                                     <FaEnvelope className="text-orange-500 text-xl" />

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                     "
//                                     >
//                                         Email
//                                     </h3>
//                                 </div>

//                                 <p className="text-gray-600 mt-4">
//                                     {user.email}
//                                 </p>
//                             </div>

//                             {/* PHONE */}

//                             <div
//                                 className="
//                   bg-gray-50
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-3">

//                                     <FaPhoneAlt className="text-orange-500 text-xl" />

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                     "
//                                     >
//                                         Phone
//                                     </h3>
//                                 </div>

//                                 <p className="text-gray-600 mt-4">
//                                     {user.phone}
//                                 </p>
//                             </div>

//                             {/* ADDRESS */}

//                             <div
//                                 className="
//                   bg-gray-50
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-3">

//                                     <FaMapMarkerAlt className="text-orange-500 text-xl" />

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                     "
//                                     >
//                                         Address
//                                     </h3>
//                                 </div>

//                                 <p className="text-gray-600 mt-4">
//                                     {user.address}
//                                 </p>
//                             </div>

//                             {/* JOINED */}

//                             <div
//                                 className="
//                   bg-gray-50
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-3">

//                                     <FaCalendarAlt className="text-orange-500 text-xl" />

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                     "
//                                     >
//                                         Joined Date
//                                     </h3>
//                                 </div>

//                                 <p className="text-gray-600 mt-4">
//                                     {user.joined}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* STATS */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           md:grid-cols-3
//           gap-6
//         "
//             >
//                 {/* ORDERS */}

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
//                         {user.totalOrders}
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Total Orders
//                     </p>
//                 </div>

//                 {/* SPENT */}

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
//                         <FaDollarSign />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         {user.totalSpent}
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Total Spent
//                     </p>
//                 </div>

//                 {/* VERIFIED */}

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
//                         <FaUserCheck />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         Verified
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Account Status
//                     </p>
//                 </div>
//             </div>

//             {/* RECENT ORDERS */}

//             <div
//                 className="
//           bg-white
//           rounded-[32px]
//           border
//           border-gray-100
//           shadow-sm
//           p-6
//         "
//             >
//                 <div
//                     className="
//             flex
//             items-center
//             justify-between
//             mb-8
//           "
//                 >
//                     <div>

//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//               "
//                         >
//                             Recent Orders
//                         </h2>

//                         <p className="text-gray-500 mt-2">
//                             Latest customer orders
//                         </p>
//                     </div>

//                     <button
//                         className="
//               bg-orange-100
//               hover:bg-orange-500
//               hover:text-white
//               text-orange-500
//               px-5
//               py-3
//               rounded-2xl
//               font-semibold
//               transition-all
//             "
//                     >
//                         View All
//                     </button>
//                 </div>

//                 {/* ORDER LIST */}

//                 <div className="space-y-5">
//                     {user.recentOrders.map((order) => (
//                         <div
//                             key={order.id}
//                             className="
//                 bg-gray-50
//                 rounded-3xl
//                 p-5
//                 flex
//                 flex-col
//                 lg:flex-row
//                 lg:items-center
//                 lg:justify-between
//                 gap-5
//               "
//                         >
//                             {/* LEFT */}

//                             <div>

//                                 <h3
//                                     className="
//                     text-xl
//                     font-bold
//                     text-gray-900
//                   "
//                                 >
//                                     {order.id}
//                                 </h3>

//                                 <p className="text-gray-500 mt-2">
//                                     {order.restaurant}
//                                 </p>
//                             </div>

//                             {/* RIGHT */}

//                             <div
//                                 className="
//                   flex
//                   flex-col
//                   sm:flex-row
//                   sm:items-center
//                   gap-4
//                 "
//                             >
//                                 <h2
//                                     className="
//                     text-2xl
//                     font-extrabold
//                     text-orange-500
//                   "
//                                 >
//                                     {order.amount}
//                                 </h2>

//                                 <StatusBadge status={order.status} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserDetails;



// /client/src/admin/pages/users/UserDetails.jsx

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import API from "../../../api/axios";

import StatusBadge from "../../components/ui/StatusBadge";

import {
    FaArrowLeft,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaShoppingBag,
    FaDollarSign,
    FaUserCheck,
    FaEdit,
    FaBan,
    FaSpinner,
} from "react-icons/fa";

const UserDetails = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const [blockLoading, setBlockLoading] = useState(false);

    const [user, setUser] = useState(null);

    // FETCH USER DETAILS

    const fetchUserDetails = async () => {

        try {

            setLoading(true);

            const { data } = await API.get(
                `/admin/users/${id}`
            );

            setUser(data?.user);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);
        }
    };

    // BLOCK USER

    const handleBlockUser = async () => {

        try {

            setBlockLoading(true);

            const { data } = await API.put(
                `/admin/users/block/${id}`
            );

            setUser((prev) => ({
                ...prev,
                status: data?.user?.status || "Blocked",
            }));

        } catch (error) {

            console.log(error);

        } finally {

            setBlockLoading(false);
        }
    };

    useEffect(() => {

        fetchUserDetails();

    }, [id]);

    // LOADING

    if (loading) {

        return (

            <div
                className="
                    flex
                    items-center
                    justify-center
                    min-h-[500px]
                "
            >

                <div className="text-center">

                    <div
                        className="
                            w-16
                            h-16
                            border-4
                            border-orange-200
                            border-t-orange-500
                            rounded-full
                            animate-spin
                            mx-auto
                        "
                    />

                    <p className="mt-5 text-gray-500">
                        Loading user details...
                    </p>

                </div>

            </div>
        );
    }

    // NO USER

    if (!user) {

        return (

            <div
                className="
                    bg-white
                    rounded-[32px]
                    border
                    border-gray-100
                    shadow-sm
                    p-10
                    text-center
                "
            >

                <h2
                    className="
                        text-3xl
                        font-extrabold
                        text-gray-900
                    "
                >
                    User Not Found
                </h2>

                <p className="text-gray-500 mt-3">
                    This user does not exist
                </p>

            </div>
        );
    }

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

                <div className="flex items-center gap-4">

                    <button
                        onClick={() => navigate(-1)}
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-white
                            border
                            border-gray-100
                            shadow-sm
                            flex
                            items-center
                            justify-center
                            text-gray-700
                            hover:bg-orange-500
                            hover:text-white
                            transition-all
                        "
                    >
                        <FaArrowLeft />
                    </button>

                    <div>

                        <h1
                            className="
                                text-3xl
                                md:text-4xl
                                font-extrabold
                                text-gray-900
                            "
                        >
                            User Details
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage user information & activity
                        </p>

                    </div>

                </div>

                {/* ACTIONS */}

                <div className="flex flex-wrap gap-4">

                    <button
                        onClick={() =>
                            navigate(
                                `/admin/users/edit/${user._id}`
                            )
                        }
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
                            gap-3
                            shadow-lg
                            shadow-orange-200
                            transition-all
                        "
                    >

                        <FaEdit />

                        Edit User

                    </button>

                    <button
                        onClick={handleBlockUser}
                        disabled={blockLoading}
                        className="
                            bg-red-500
                            hover:bg-red-600
                            disabled:opacity-70
                            text-white
                            px-6
                            py-4
                            rounded-2xl
                            font-bold
                            flex
                            items-center
                            gap-3
                            shadow-lg
                            shadow-red-200
                            transition-all
                        "
                    >

                        {blockLoading ? (
                            <FaSpinner className="animate-spin" />
                        ) : (
                            <FaBan />
                        )}

                        {user?.status === "Blocked"
                            ? "Blocked"
                            : "Block User"}

                    </button>

                </div>

            </div>

            {/* USER PROFILE */}

            <div
                className="
                    bg-white
                    rounded-[32px]
                    border
                    border-gray-100
                    shadow-sm
                    p-6
                    lg:p-8
                "
            >

                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        gap-8
                    "
                >

                    {/* LEFT */}

                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            text-center
                            lg:w-[320px]
                        "
                    >

                        <img
                            src={
                                user?.avatar ||
                                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            }
                            alt={user?.name}
                            className="
                                w-40
                                h-40
                                rounded-full
                                object-cover
                                border-4
                                border-orange-100
                            "
                        />

                        <h2
                            className="
                                text-3xl
                                font-extrabold
                                text-gray-900
                                mt-5
                            "
                        >
                            {user?.name}
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Customer Account
                        </p>

                        <div className="mt-5">
                            <StatusBadge
                                status={user?.status}
                            />
                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="flex-1">

                        <div
                            className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-6
                            "
                        >

                            {/* EMAIL */}

                            <div
                                className="
                                    bg-gray-50
                                    rounded-3xl
                                    p-5
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <FaEnvelope className="text-orange-500 text-xl" />

                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            text-gray-900
                                        "
                                    >
                                        Email
                                    </h3>

                                </div>

                                <p className="text-gray-600 mt-4">
                                    {user?.email || "N/A"}
                                </p>

                            </div>

                            {/* PHONE */}

                            <div
                                className="
                                    bg-gray-50
                                    rounded-3xl
                                    p-5
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <FaPhoneAlt className="text-orange-500 text-xl" />

                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            text-gray-900
                                        "
                                    >
                                        Phone
                                    </h3>

                                </div>

                                <p className="text-gray-600 mt-4">
                                    {user?.phone || "N/A"}
                                </p>

                            </div>

                            {/* ADDRESS */}

                            <div
                                className="
                                    bg-gray-50
                                    rounded-3xl
                                    p-5
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <FaMapMarkerAlt className="text-orange-500 text-xl" />

                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            text-gray-900
                                        "
                                    >
                                        Address
                                    </h3>

                                </div>

                                <p className="text-gray-600 mt-4">
                                    {user?.address || "N/A"}
                                </p>

                            </div>

                            {/* JOINED */}

                            <div
                                className="
                                    bg-gray-50
                                    rounded-3xl
                                    p-5
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <FaCalendarAlt className="text-orange-500 text-xl" />

                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            text-gray-900
                                        "
                                    >
                                        Joined Date
                                    </h3>

                                </div>

                                <p className="text-gray-600 mt-4">

                                    {new Date(
                                        user?.createdAt
                                    ).toLocaleDateString()}

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* STATS */}

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-6
                "
            >

                {/* ORDERS */}

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
                        {user?.totalOrders || 0}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Orders
                    </p>

                </div>

                {/* SPENT */}

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
                        <FaDollarSign />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        ₹{user?.totalSpent || 0}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Spent
                    </p>

                </div>

                {/* VERIFIED */}

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
                        <FaUserCheck />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {user?.isVerified
                            ? "Verified"
                            : "Not Verified"}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Account Status
                    </p>

                </div>

            </div>

            {/* RECENT ORDERS */}

            <div
                className="
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
                        mb-8
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
                            Recent Orders
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Latest customer orders
                        </p>

                    </div>

                    <button
                        onClick={() =>
                            navigate(
                                `/admin/orders?user=${user._id}`
                            )
                        }
                        className="
                            bg-orange-100
                            hover:bg-orange-500
                            hover:text-white
                            text-orange-500
                            px-5
                            py-3
                            rounded-2xl
                            font-semibold
                            transition-all
                        "
                    >
                        View All
                    </button>

                </div>

                {/* ORDERS */}

                <div className="space-y-5">

                    {user?.recentOrders?.length > 0 ? (

                        user.recentOrders.map((order) => (

                            <div
                                key={order._id}
                                className="
                                    bg-gray-50
                                    rounded-3xl
                                    p-5
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

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                            text-gray-900
                                        "
                                    >
                                        #{order.orderId || order._id}
                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        {order.restaurantName ||
                                            "Restaurant"}
                                    </p>

                                </div>

                                {/* RIGHT */}

                                <div
                                    className="
                                        flex
                                        flex-col
                                        sm:flex-row
                                        sm:items-center
                                        gap-4
                                    "
                                >

                                    <h2
                                        className="
                                            text-2xl
                                            font-extrabold
                                            text-orange-500
                                        "
                                    >
                                        ₹{order.totalAmount}
                                    </h2>

                                    <StatusBadge
                                        status={order.status}
                                    />

                                </div>

                            </div>

                        ))

                    ) : (

                        <div
                            className="
                                bg-gray-50
                                rounded-3xl
                                p-10
                                text-center
                            "
                        >

                            <p className="text-gray-500">
                                No recent orders found
                            </p>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default UserDetails;