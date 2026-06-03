// // /client/src/admin/pages/restaurants/RestaurantDetails.jsx

// import {
//     FaArrowLeft,
//     FaMapMarkerAlt,
//     FaPhoneAlt,
//     FaEnvelope,
//     FaClock,
//     FaStar,
//     FaUtensils,
//     FaShoppingBag,
//     FaDollarSign,
//     FaCheckCircle,
//     FaEdit,
//     FaBan,
// } from "react-icons/fa";

// import StatusBadge from "../../components/ui/StatusBadge";

// const RestaurantDetails = () => {
//     /* DUMMY DATA */

//     const restaurant = {
//         id: "#RST-1025",
//         name: "Pizza Hub",
//         owner: "Rahul Sharma",
//         email: "pizzahub@gmail.com",
//         phone: "+91 9876543210",
//         address: "Mumbai, India",
//         category: "Pizza & Fast Food",
//         status: "Active",
//         openingTime: "10:00 AM",
//         closingTime: "11:00 PM",
//         rating: 4.8,
//         totalOrders: 12450,
//         totalRevenue: "$185K",
//         foods: 85,

//         banner:
//             "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",

//         logo:
//             "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",

//         topFoods: [
//             {
//                 id: 1,
//                 name: "Cheese Pizza",
//                 price: "$20",
//                 orders: 2450,
//                 image:
//                     "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
//             },

//             {
//                 id: 2,
//                 name: "Chicken Burger",
//                 price: "$15",
//                 orders: 1850,
//                 image:
//                     "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
//             },

//             {
//                 id: 3,
//                 name: "Pasta Combo",
//                 price: "$18",
//                 orders: 980,
//                 image:
//                     "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
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
//                             Restaurant Details
//                         </h1>

//                         <p className="text-gray-500 mt-2">
//                             Manage restaurant information & analytics
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

//                         Edit Restaurant
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

//                         Block Restaurant
//                     </button>
//                 </div>
//             </div>

//             {/* BANNER */}

//             <div
//                 className="
//           relative
//           rounded-[40px]
//           overflow-hidden
//           h-[320px]
//           shadow-lg
//         "
//             >
//                 <img
//                     src={restaurant.banner}
//                     alt={restaurant.name}
//                     className="
//             w-full
//             h-full
//             object-cover
//           "
//                 />

//                 {/* OVERLAY */}

//                 <div
//                     className="
//             absolute
//             inset-0
//             bg-gradient-to-t
//             from-black/80
//             via-black/30
//             to-transparent
//           "
//                 />

//                 {/* CONTENT */}

//                 <div
//                     className="
//             absolute
//             bottom-8
//             left-8
//             right-8
//             flex
//             flex-col
//             lg:flex-row
//             lg:items-end
//             lg:justify-between
//             gap-6
//           "
//                 >
//                     {/* LEFT */}

//                     <div className="flex items-center gap-5">

//                         <img
//                             src={restaurant.logo}
//                             alt={restaurant.name}
//                             className="
//                 w-28
//                 h-28
//                 rounded-3xl
//                 border-4
//                 border-white
//                 object-cover
//                 shadow-xl
//               "
//                         />

//                         <div>

//                             <h2
//                                 className="
//                   text-4xl
//                   font-extrabold
//                   text-white
//                 "
//                             >
//                                 {restaurant.name}
//                             </h2>

//                             <p
//                                 className="
//                   text-gray-200
//                   mt-2
//                   text-lg
//                 "
//                             >
//                                 {restaurant.category}
//                             </p>

//                             <div className="mt-4">
//                                 <StatusBadge status={restaurant.status} />
//                             </div>
//                         </div>
//                     </div>

//                     {/* RATING */}

//                     <div
//                         className="
//               bg-white/20
//               backdrop-blur-lg
//               border
//               border-white/20
//               rounded-3xl
//               px-6
//               py-5
//               text-white
//             "
//                     >
//                         <div className="flex items-center gap-3">

//                             <FaStar className="text-yellow-400 text-2xl" />

//                             <h3
//                                 className="
//                   text-3xl
//                   font-extrabold
//                 "
//                             >
//                                 {restaurant.rating}
//                             </h3>
//                         </div>

//                         <p className="mt-2 text-gray-200">
//                             Restaurant Rating
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* INFO SECTION */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           xl:grid-cols-3
//           gap-6
//         "
//             >
//                 {/* LEFT */}

//                 <div className="xl:col-span-2 space-y-6">
//                     {/* BASIC INFO */}

//                     <div
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//             "
//                     >
//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//                 mb-8
//               "
//                         >
//                             Restaurant Information
//                         </h2>

//                         <div
//                             className="
//                 grid
//                 grid-cols-1
//                 md:grid-cols-2
//                 gap-6
//               "
//                         >
//                             {/* OWNER */}

//                             <div className="bg-gray-50 rounded-3xl p-5">

//                                 <h3
//                                     className="
//                     text-lg
//                     font-bold
//                     text-gray-900
//                   "
//                                 >
//                                     Owner Name
//                                 </h3>

//                                 <p className="text-gray-600 mt-3">
//                                     {restaurant.owner}
//                                 </p>
//                             </div>

//                             {/* EMAIL */}

//                             <div className="bg-gray-50 rounded-3xl p-5">

//                                 <div className="flex items-center gap-3">

//                                     <FaEnvelope className="text-orange-500" />

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

//                                 <p className="text-gray-600 mt-3">
//                                     {restaurant.email}
//                                 </p>
//                             </div>

//                             {/* PHONE */}

//                             <div className="bg-gray-50 rounded-3xl p-5">

//                                 <div className="flex items-center gap-3">

//                                     <FaPhoneAlt className="text-orange-500" />

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

//                                 <p className="text-gray-600 mt-3">
//                                     {restaurant.phone}
//                                 </p>
//                             </div>

//                             {/* ADDRESS */}

//                             <div className="bg-gray-50 rounded-3xl p-5">

//                                 <div className="flex items-center gap-3">

//                                     <FaMapMarkerAlt className="text-orange-500" />

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

//                                 <p className="text-gray-600 mt-3">
//                                     {restaurant.address}
//                                 </p>
//                             </div>

//                             {/* TIMING */}

//                             <div className="bg-gray-50 rounded-3xl p-5">

//                                 <div className="flex items-center gap-3">

//                                     <FaClock className="text-orange-500" />

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                     "
//                                     >
//                                         Working Hours
//                                     </h3>
//                                 </div>

//                                 <p className="text-gray-600 mt-3">
//                                     {restaurant.openingTime} -{" "}
//                                     {restaurant.closingTime}
//                                 </p>
//                             </div>

//                             {/* CATEGORY */}

//                             <div className="bg-gray-50 rounded-3xl p-5">

//                                 <div className="flex items-center gap-3">

//                                     <FaUtensils className="text-orange-500" />

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                     "
//                                     >
//                                         Category
//                                     </h3>
//                                 </div>

//                                 <p className="text-gray-600 mt-3">
//                                     {restaurant.category}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* TOP FOODS */}

//                     <div
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//             "
//                     >
//                         <div
//                             className="
//                 flex
//                 items-center
//                 justify-between
//                 mb-8
//               "
//                         >
//                             <div>

//                                 <h2
//                                     className="
//                     text-2xl
//                     font-extrabold
//                     text-gray-900
//                   "
//                                 >
//                                     Top Selling Foods
//                                 </h2>

//                                 <p className="text-gray-500 mt-2">
//                                     Most ordered menu items
//                                 </p>
//                             </div>

//                             <button
//                                 className="
//                   bg-orange-100
//                   hover:bg-orange-500
//                   hover:text-white
//                   text-orange-500
//                   px-5
//                   py-3
//                   rounded-2xl
//                   font-semibold
//                   transition-all
//                 "
//                             >
//                                 View All
//                             </button>
//                         </div>

//                         <div className="space-y-5">
//                             {restaurant.topFoods.map((food) => (
//                                 <div
//                                     key={food.id}
//                                     className="
//                     bg-gray-50
//                     rounded-3xl
//                     p-5
//                     flex
//                     flex-col
//                     md:flex-row
//                     md:items-center
//                     md:justify-between
//                     gap-5
//                   "
//                                 >
//                                     {/* LEFT */}

//                                     <div className="flex items-center gap-4">

//                                         <img
//                                             src={food.image}
//                                             alt={food.name}
//                                             className="
//                         w-24
//                         h-24
//                         rounded-2xl
//                         object-cover
//                       "
//                                         />

//                                         <div>

//                                             <h3
//                                                 className="
//                           text-xl
//                           font-bold
//                           text-gray-900
//                         "
//                                             >
//                                                 {food.name}
//                                             </h3>

//                                             <p className="text-gray-500 mt-2">
//                                                 {food.orders} Orders
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* PRICE */}

//                                     <h2
//                                         className="
//                       text-2xl
//                       font-extrabold
//                       text-orange-500
//                     "
//                                     >
//                                         {food.price}
//                                     </h2>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT */}

//                 <div className="space-y-6">
//                     {/* STATS */}

//                     <div
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//             "
//                     >
//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//                 mb-8
//               "
//                         >
//                             Restaurant Stats
//                         </h2>

//                         <div className="space-y-5">
//                             {/* ORDERS */}

//                             <div
//                                 className="
//                   bg-orange-50
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
//                 "
//                             >
//                                 <div>

//                                     <p className="text-gray-600">
//                                         Total Orders
//                                     </p>

//                                     <h3
//                                         className="
//                       text-3xl
//                       font-extrabold
//                       text-gray-900
//                       mt-2
//                     "
//                                     >
//                                         {restaurant.totalOrders}
//                                     </h3>
//                                 </div>

//                                 <div
//                                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-orange-500
//                     text-white
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
//                   "
//                                 >
//                                     <FaShoppingBag />
//                                 </div>
//                             </div>

//                             {/* REVENUE */}

//                             <div
//                                 className="
//                   bg-green-50
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
//                 "
//                             >
//                                 <div>

//                                     <p className="text-gray-600">
//                                         Total Revenue
//                                     </p>

//                                     <h3
//                                         className="
//                       text-3xl
//                       font-extrabold
//                       text-gray-900
//                       mt-2
//                     "
//                                     >
//                                         {restaurant.totalRevenue}
//                                     </h3>
//                                 </div>

//                                 <div
//                                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-green-500
//                     text-white
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
//                   "
//                                 >
//                                     <FaDollarSign />
//                                 </div>
//                             </div>

//                             {/* FOODS */}

//                             <div
//                                 className="
//                   bg-purple-50
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
//                 "
//                             >
//                                 <div>

//                                     <p className="text-gray-600">
//                                         Total Foods
//                                     </p>

//                                     <h3
//                                         className="
//                       text-3xl
//                       font-extrabold
//                       text-gray-900
//                       mt-2
//                     "
//                                     >
//                                         {restaurant.foods}
//                                     </h3>
//                                 </div>

//                                 <div
//                                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-purple-500
//                     text-white
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
//                   "
//                                 >
//                                     <FaUtensils />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* VERIFICATION */}

//                     <div
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//             "
//                     >
//                         <div className="text-center">

//                             <div
//                                 className="
//                   w-24
//                   h-24
//                   rounded-full
//                   bg-green-100
//                   text-green-500
//                   flex
//                   items-center
//                   justify-center
//                   text-4xl
//                   mx-auto
//                 "
//                             >
//                                 <FaCheckCircle />
//                             </div>

//                             <h2
//                                 className="
//                   text-2xl
//                   font-extrabold
//                   text-gray-900
//                   mt-6
//                 "
//                             >
//                                 Verified Restaurant
//                             </h2>

//                             <p className="text-gray-500 mt-3 leading-relaxed">
//                                 This restaurant has been verified
//                                 and approved by admin.
//                             </p>

//                             <button
//                                 className="
//                   mt-6
//                   w-full
//                   bg-orange-500
//                   hover:bg-orange-600
//                   text-white
//                   py-4
//                   rounded-2xl
//                   font-bold
//                   transition-all
//                 "
//                             >
//                                 Manage Verification
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RestaurantDetails;







// /client/src/admin/pages/restaurants/RestaurantDetails.jsx

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import toast from "react-hot-toast";

import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaStar,
    FaUtensils,
    FaShoppingBag,
    FaDollarSign,
    FaCheckCircle,
    FaEdit,
    FaBan,
} from "react-icons/fa";

import StatusBadge from "../../components/ui/StatusBadge";

const RestaurantDetails = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const [restaurant, setRestaurant] = useState(null);

    const fetchRestaurant = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/admin/restaurants/${id}`,
                {
                    withCredentials: true,
                }
            );

            if (data.success) {
                setRestaurant(data.restaurant);
            }
        } catch (error) {
            console.log(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to fetch restaurant"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRestaurant();
    }, [id]);

    const handleBlockRestaurant = async () => {
        try {
            const confirmBlock = window.confirm(
                `Are you sure you want to ${restaurant?.status === "Blocked"
                    ? "unblock"
                    : "block"
                } this restaurant?`
            );

            if (!confirmBlock) return;

            const { data } = await axios.put(
                `${import.meta.env.VITE_API_URL}/api/admin/restaurants/block/${restaurant._id}`,
                {},
                {
                    withCredentials: true,
                }
            );

            if (data.success) {
                toast.success(data.message);

                fetchRestaurant();
            }
        } catch (error) {
            console.log(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to update restaurant"
            );
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!restaurant) {
        return (
            <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
                <h2 className="text-3xl font-bold text-gray-800">
                    Restaurant Not Found
                </h2>

                <button
                    onClick={() => navigate(-1)}
                    className="
            mt-6
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
          "
                >
                    Go Back
                </button>
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
                            Restaurant Details
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage restaurant information & analytics
                        </p>
                    </div>
                </div>

                {/* ACTIONS */}

                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() =>
                            navigate(
                                `/admin/restaurants/edit/${restaurant._id}`
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

                        Edit Restaurant
                    </button>

                    <button
                        onClick={handleBlockRestaurant}
                        className={`
              text-white
              px-6
              py-4
              rounded-2xl
              font-bold
              flex
              items-center
              gap-3
              shadow-lg
              transition-all

              ${restaurant?.status === "Blocked"
                                ? "bg-green-500 hover:bg-green-600 shadow-green-200"
                                : "bg-red-500 hover:bg-red-600 shadow-red-200"
                            }
            `}
                    >
                        <FaBan />

                        {restaurant?.status === "Blocked"
                            ? "Unblock Restaurant"
                            : "Block Restaurant"}
                    </button>
                </div>
            </div>

            {/* BANNER */}

            <div
                className="
          relative
          rounded-[40px]
          overflow-hidden
          h-[320px]
          shadow-lg
        "
            >
                <img
                    src={
                        restaurant?.banner ||
                        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                    }
                    alt={restaurant?.name}
                    className="
            w-full
            h-full
            object-cover
          "
                />

                {/* OVERLAY */}

                <div
                    className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/30
            to-transparent
          "
                />

                {/* CONTENT */}

                <div
                    className="
            absolute
            bottom-8
            left-8
            right-8
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
          "
                >
                    {/* LEFT */}

                    <div className="flex items-center gap-5">
                        <img
                            src={
                                restaurant?.logo ||
                                "https://via.placeholder.com/150"
                            }
                            alt={restaurant?.name}
                            className="
                w-28
                h-28
                rounded-3xl
                border-4
                border-white
                object-cover
                shadow-xl
              "
                        />

                        <div>
                            <h2
                                className="
                  text-4xl
                  font-extrabold
                  text-white
                "
                            >
                                {restaurant?.name}
                            </h2>

                            <p
                                className="
                  text-gray-200
                  mt-2
                  text-lg
                "
                            >
                                {restaurant?.category}
                            </p>

                            <div className="mt-4">
                                <StatusBadge
                                    status={restaurant?.status}
                                />
                            </div>
                        </div>
                    </div>

                    {/* RATING */}

                    <div
                        className="
              bg-white/20
              backdrop-blur-lg
              border
              border-white/20
              rounded-3xl
              px-6
              py-5
              text-white
            "
                    >
                        <div className="flex items-center gap-3">
                            <FaStar className="text-yellow-400 text-2xl" />

                            <h3
                                className="
                  text-3xl
                  font-extrabold
                "
                            >
                                {restaurant?.rating || 0}
                            </h3>
                        </div>

                        <p className="mt-2 text-gray-200">
                            Restaurant Rating
                        </p>
                    </div>
                </div>
            </div>

            {/* INFO SECTION */}

            <div
                className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        "
            >
                {/* LEFT */}

                <div className="xl:col-span-2 space-y-6">
                    {/* BASIC INFO */}

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
                        <h2
                            className="
                text-2xl
                font-extrabold
                text-gray-900
                mb-8
              "
                        >
                            Restaurant Information
                        </h2>

                        <div
                            className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
                        >
                            {/* OWNER */}

                            <div className="bg-gray-50 rounded-3xl p-5">
                                <h3
                                    className="
                    text-lg
                    font-bold
                    text-gray-900
                  "
                                >
                                    Owner Name
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    {restaurant?.owner?.name ||
                                        restaurant?.ownerName ||
                                        "N/A"}
                                </p>
                            </div>

                            {/* EMAIL */}

                            <div className="bg-gray-50 rounded-3xl p-5">
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-orange-500" />

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

                                <p className="text-gray-600 mt-3">
                                    {restaurant?.email}
                                </p>
                            </div>

                            {/* PHONE */}

                            <div className="bg-gray-50 rounded-3xl p-5">
                                <div className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-orange-500" />

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

                                <p className="text-gray-600 mt-3">
                                    {restaurant?.phone}
                                </p>
                            </div>

                            {/* ADDRESS */}

                            <div className="bg-gray-50 rounded-3xl p-5">
                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-orange-500" />

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

                                <p className="text-gray-600 mt-3">
                                    {restaurant?.address}
                                </p>
                            </div>

                            {/* TIMING */}

                            <div className="bg-gray-50 rounded-3xl p-5">
                                <div className="flex items-center gap-3">
                                    <FaClock className="text-orange-500" />

                                    <h3
                                        className="
                      text-lg
                      font-bold
                      text-gray-900
                    "
                                    >
                                        Working Hours
                                    </h3>
                                </div>

                                <p className="text-gray-600 mt-3">
                                    {restaurant?.openingTime || "10:00 AM"} -{" "}
                                    {restaurant?.closingTime || "11:00 PM"}
                                </p>
                            </div>

                            {/* CATEGORY */}

                            <div className="bg-gray-50 rounded-3xl p-5">
                                <div className="flex items-center gap-3">
                                    <FaUtensils className="text-orange-500" />

                                    <h3
                                        className="
                      text-lg
                      font-bold
                      text-gray-900
                    "
                                    >
                                        Category
                                    </h3>
                                </div>

                                <p className="text-gray-600 mt-3">
                                    {restaurant?.category}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* TOP FOODS */}

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
                                    Top Selling Foods
                                </h2>

                                <p className="text-gray-500 mt-2">
                                    Most ordered menu items
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            {restaurant?.topFoods?.length > 0 ? (
                                restaurant.topFoods.map((food) => (
                                    <div
                                        key={food._id}
                                        className="
                      bg-gray-50
                      rounded-3xl
                      p-5
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      md:justify-between
                      gap-5
                    "
                                    >
                                        {/* LEFT */}

                                        <div className="flex items-center gap-4">
                                            <img
                                                src={food.image}
                                                alt={food.name}
                                                className="
                          w-24
                          h-24
                          rounded-2xl
                          object-cover
                        "
                                            />

                                            <div>
                                                <h3
                                                    className="
                            text-xl
                            font-bold
                            text-gray-900
                          "
                                                >
                                                    {food.name}
                                                </h3>

                                                <p className="text-gray-500 mt-2">
                                                    {food.orders || 0} Orders
                                                </p>
                                            </div>
                                        </div>

                                        {/* PRICE */}

                                        <h2
                                            className="
                        text-2xl
                        font-extrabold
                        text-orange-500
                      "
                                        >
                                            ${food.price}
                                        </h2>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10 text-gray-500">
                                    No foods found
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}

                <div className="space-y-6">
                    {/* STATS */}

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
                        <h2
                            className="
                text-2xl
                font-extrabold
                text-gray-900
                mb-8
              "
                        >
                            Restaurant Stats
                        </h2>

                        <div className="space-y-5">
                            {/* ORDERS */}

                            <div
                                className="
                  bg-orange-50
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  justify-between
                "
                            >
                                <div>
                                    <p className="text-gray-600">
                                        Total Orders
                                    </p>

                                    <h3
                                        className="
                      text-3xl
                      font-extrabold
                      text-gray-900
                      mt-2
                    "
                                    >
                                        {restaurant?.totalOrders || 0}
                                    </h3>
                                </div>

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
                    text-2xl
                  "
                                >
                                    <FaShoppingBag />
                                </div>
                            </div>

                            {/* REVENUE */}

                            <div
                                className="
                  bg-green-50
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  justify-between
                "
                            >
                                <div>
                                    <p className="text-gray-600">
                                        Total Revenue
                                    </p>

                                    <h3
                                        className="
                      text-3xl
                      font-extrabold
                      text-gray-900
                      mt-2
                    "
                                    >
                                        ${restaurant?.totalRevenue || 0}
                                    </h3>
                                </div>

                                <div
                                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-green-500
                    text-white
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                                >
                                    <FaDollarSign />
                                </div>
                            </div>

                            {/* FOODS */}

                            <div
                                className="
                  bg-purple-50
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  justify-between
                "
                            >
                                <div>
                                    <p className="text-gray-600">
                                        Total Foods
                                    </p>

                                    <h3
                                        className="
                      text-3xl
                      font-extrabold
                      text-gray-900
                      mt-2
                    "
                                    >
                                        {restaurant?.foods ||
                                            restaurant?.foodCount ||
                                            0}
                                    </h3>
                                </div>

                                <div
                                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-purple-500
                    text-white
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                                >
                                    <FaUtensils />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VERIFICATION */}

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
                        <div className="text-center">
                            <div
                                className={`
                  w-24
                  h-24
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-4xl
                  mx-auto

                  ${restaurant?.isVerified
                                        ? "bg-green-100 text-green-500"
                                        : "bg-yellow-100 text-yellow-500"
                                    }
                `}
                            >
                                <FaCheckCircle />
                            </div>

                            <h2
                                className="
                  text-2xl
                  font-extrabold
                  text-gray-900
                  mt-6
                "
                            >
                                {restaurant?.isVerified
                                    ? "Verified Restaurant"
                                    : "Pending Verification"}
                            </h2>

                            <p className="text-gray-500 mt-3 leading-relaxed">
                                {restaurant?.isVerified
                                    ? "This restaurant has been verified and approved by admin."
                                    : "This restaurant verification is pending admin approval."}
                            </p>

                            <button
                                className="
                  mt-6
                  w-full
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  py-4
                  rounded-2xl
                  font-bold
                  transition-all
                "
                            >
                                Manage Verification
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;