// /client/src/admin/pages/foods/FoodDetails.jsx


// import {
//     FaArrowLeft,
//     FaUtensils,
//     FaDollarSign,
//     FaShoppingBag,
//     FaFire,
//     FaStar,
//     FaClock,
//     FaCheckCircle,
//     FaEdit,
//     FaTrash,
//     FaStore,
// } from "react-icons/fa";

// import StatusBadge from "../../components/ui/StatusBadge";

// const FoodDetails = () => {
//     /* DUMMY DATA */

//     const food = {
//         id: "#FD-1025",
//         name: "Cheese Burst Pizza",
//         category: "Pizza",
//         restaurant: "Pizza Hub",
//         price: "$18",
//         status: "Available",
//         rating: 4.8,
//         prepTime: "20 Min",
//         orders: 2450,
//         revenue: "$48K",
//         calories: "450 Cal",

//         description:
//             "Loaded with extra cheese, fresh vegetables and premium toppings with delicious Italian flavor.",

//         image:
//             "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",

//         ingredients: [
//             "Mozzarella Cheese",
//             "Tomato Sauce",
//             "Capsicum",
//             "Olives",
//             "Onion",
//             "Italian Herbs",
//         ],

//         gallery: [
//             "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",

//             "https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=1200&auto=format&fit=crop",

//             "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
//         ],
//     };

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
//                             Food Details
//                         </h1>

//                         <p className="text-gray-500 mt-2">
//                             Manage food item details & analytics
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

//                         Edit Food
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
//                         <FaTrash />

//                         Delete Food
//                     </button>
//                 </div>
//             </div>

//             {/* MAIN SECTION */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           xl:grid-cols-3
//           gap-8
//         "
//             >
//                 {/* LEFT SIDE */}

//                 <div className="xl:col-span-2 space-y-8">
//                     {/* FOOD IMAGE */}

//                     <div
//                         className="
//               bg-white
//               rounded-[35px]
//               overflow-hidden
//               border
//               border-gray-100
//               shadow-sm
//             "
//                     >
//                         <div className="relative h-[420px]">

//                             <img
//                                 src={food.image}
//                                 alt={food.name}
//                                 className="
//                   w-full
//                   h-full
//                   object-cover
//                 "
//                             />

//                             {/* OVERLAY */}

//                             <div
//                                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-black/70
//                   via-black/20
//                   to-transparent
//                 "
//                             />

//                             {/* CONTENT */}

//                             <div
//                                 className="
//                   absolute
//                   bottom-8
//                   left-8
//                   right-8
//                   flex
//                   flex-col
//                   lg:flex-row
//                   lg:items-end
//                   lg:justify-between
//                   gap-5
//                 "
//                             >
//                                 {/* LEFT */}

//                                 <div>

//                                     <p
//                                         className="
//                       inline-flex
//                       bg-orange-500
//                       text-white
//                       px-4
//                       py-2
//                       rounded-full
//                       font-semibold
//                       mb-4
//                     "
//                                     >
//                                         {food.category}
//                                     </p>

//                                     <h2
//                                         className="
//                       text-4xl
//                       font-extrabold
//                       text-white
//                     "
//                                     >
//                                         {food.name}
//                                     </h2>

//                                     <div className="mt-5">
//                                         <StatusBadge status={food.status} />
//                                     </div>
//                                 </div>

//                                 {/* PRICE */}

//                                 <div
//                                     className="
//                     bg-white/20
//                     backdrop-blur-lg
//                     border
//                     border-white/20
//                     rounded-3xl
//                     px-6
//                     py-5
//                     text-white
//                   "
//                                 >
//                                     <p className="text-gray-200">
//                                         Price
//                                     </p>

//                                     <h3
//                                         className="
//                       text-4xl
//                       font-extrabold
//                       mt-2
//                     "
//                                     >
//                                         {food.price}
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* DESCRIPTION */}

//                     <div
//                         className="
//               bg-white
//               rounded-[35px]
//               border
//               border-gray-100
//               shadow-sm
//               p-8
//             "
//                     >
//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//                 mb-5
//               "
//                         >
//                             Food Description
//                         </h2>

//                         <p
//                             className="
//                 text-gray-600
//                 leading-relaxed
//                 text-lg
//               "
//                         >
//                             {food.description}
//                         </p>
//                     </div>

//                     {/* INGREDIENTS */}

//                     <div
//                         className="
//               bg-white
//               rounded-[35px]
//               border
//               border-gray-100
//               shadow-sm
//               p-8
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
//                             Ingredients
//                         </h2>

//                         <div
//                             className="
//                 flex
//                 flex-wrap
//                 gap-4
//               "
//                         >
//                             {food.ingredients.map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className="
//                     bg-orange-50
//                     text-orange-600
//                     px-5
//                     py-3
//                     rounded-2xl
//                     font-semibold
//                   "
//                                 >
//                                     {item}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* GALLERY */}

//                     <div
//                         className="
//               bg-white
//               rounded-[35px]
//               border
//               border-gray-100
//               shadow-sm
//               p-8
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
//                             Food Gallery
//                         </h2>

//                         <div
//                             className="
//                 grid
//                 grid-cols-1
//                 sm:grid-cols-2
//                 lg:grid-cols-3
//                 gap-5
//               "
//                         >
//                             {food.gallery.map((img, index) => (
//                                 <div
//                                     key={index}
//                                     className="
//                     rounded-3xl
//                     overflow-hidden
//                     h-60
//                   "
//                                 >
//                                     <img
//                                         src={img}
//                                         alt="food"
//                                         className="
//                       w-full
//                       h-full
//                       object-cover
//                       hover:scale-110
//                       transition-all
//                       duration-500
//                     "
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT SIDE */}

//                 <div className="space-y-6">
//                     {/* FOOD INFO */}

//                     <div
//                         className="
//               bg-white
//               rounded-[35px]
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
//                             Food Information
//                         </h2>

//                         <div className="space-y-5">
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
//                     bg-orange-100
//                     text-orange-500
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
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
//                                         {food.restaurant}
//                                     </h3>
//                                 </div>
//                             </div>

//                             {/* PREP TIME */}

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
//                     bg-blue-100
//                     text-blue-500
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
//                   "
//                                 >
//                                     <FaClock />
//                                 </div>

//                                 <div>

//                                     <p className="text-gray-500 text-sm">
//                                         Preparation Time
//                                     </p>

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                       mt-1
//                     "
//                                     >
//                                         {food.prepTime}
//                                     </h3>
//                                 </div>
//                             </div>

//                             {/* RATING */}

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
//                     bg-yellow-100
//                     text-yellow-500
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
//                   "
//                                 >
//                                     <FaStar />
//                                 </div>

//                                 <div>

//                                     <p className="text-gray-500 text-sm">
//                                         Rating
//                                     </p>

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                       mt-1
//                     "
//                                     >
//                                         {food.rating} / 5
//                                     </h3>
//                                 </div>
//                             </div>

//                             {/* CALORIES */}

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
//                     text-2xl
//                   "
//                                 >
//                                     <FaFire />
//                                 </div>

//                                 <div>

//                                     <p className="text-gray-500 text-sm">
//                                         Calories
//                                     </p>

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                       mt-1
//                     "
//                                     >
//                                         {food.calories}
//                                     </h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* STATS */}

//                     <div
//                         className="
//               bg-white
//               rounded-[35px]
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
//                             Food Analytics
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
//                                         {food.orders}
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
//                                         {food.revenue}
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

//                             {/* STATUS */}

//                             <div
//                                 className="
//                   bg-blue-50
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
//                 "
//                             >
//                                 <div>

//                                     <p className="text-gray-600">
//                                         Availability
//                                     </p>

//                                     <h3
//                                         className="
//                       text-2xl
//                       font-extrabold
//                       text-gray-900
//                       mt-2
//                     "
//                                     >
//                                         Available
//                                     </h3>
//                                 </div>

//                                 <div
//                                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-blue-500
//                     text-white
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
//                   "
//                                 >
//                                     <FaCheckCircle />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* QUICK ACTION */}

//                     <div
//                         className="
//               bg-gradient-to-br
//               from-orange-500
//               to-orange-600
//               rounded-[35px]
//               p-8
//               text-white
//               shadow-lg
//             "
//                     >
//                         <div
//                             className="
//                 w-20
//                 h-20
//                 rounded-3xl
//                 bg-white/20
//                 flex
//                 items-center
//                 justify-center
//                 text-4xl
//               "
//                         >
//                             <FaUtensils />
//                         </div>

//                         <h2
//                             className="
//                 text-3xl
//                 font-extrabold
//                 mt-6
//               "
//                         >
//                             Popular Food Item
//                         </h2>

//                         <p className="mt-4 text-orange-100 leading-relaxed">
//                             This food item is currently trending
//                             and receiving high customer orders.
//                         </p>

//                         <button
//                             className="
//                 mt-6
//                 w-full
//                 bg-white
//                 text-orange-600
//                 hover:bg-orange-100
//                 py-4
//                 rounded-2xl
//                 font-bold
//                 transition-all
//               "
//                         >
//                             Promote Food
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FoodDetails;



// /client/src/admin/pages/foods/FoodDetails.jsx

import { useEffect, useState } from "react";

import {
    FaArrowLeft,
    FaUtensils,
    FaDollarSign,
    FaShoppingBag,
    FaFire,
    FaStar,
    FaClock,
    FaCheckCircle,
    FaEdit,
    FaTrash,
    FaStore,
    FaSpinner,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import StatusBadge from "../../components/ui/StatusBadge";

const FoodDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [food, setFood] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000";

    // FETCH FOOD DETAILS

    const fetchFoodDetails = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `${API_URL}/api/foods/${id}`,
                {
                    withCredentials: true,
                }
            );

            setFood(data.food);
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to fetch food details"
            );
        } finally {
            setLoading(false);
        }
    };

    // DELETE FOOD

    const deleteFoodHandler = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this food item?"
        );

        if (!confirmDelete) return;

        try {
            const { data } = await axios.delete(
                `${API_URL}/api/foods/${id}`,
                {
                    withCredentials: true,
                }
            );

            toast.success(data.message);

            navigate("/admin/foods");
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to delete food"
            );
        }
    };

    useEffect(() => {
        fetchFoodDetails();
    }, [id]);

    // LOADING

    if (loading) {
        return (
            <div
                className="
          flex
          items-center
          justify-center
          h-[70vh]
        "
            >
                <div className="text-center">
                    <FaSpinner
                        className="
              animate-spin
              text-5xl
              text-orange-500
              mx-auto
            "
                    />

                    <p className="mt-5 text-lg text-gray-600">
                        Loading food details...
                    </p>
                </div>
            </div>
        );
    }

    // NO FOOD FOUND

    if (!food) {
        return (
            <div
                className="
          bg-white
          rounded-[30px]
          p-10
          text-center
          shadow-sm
          border
          border-gray-100
        "
            >
                <h2
                    className="
            text-3xl
            font-extrabold
            text-gray-900
          "
                >
                    Food Not Found
                </h2>

                <p className="text-gray-500 mt-3">
                    This food item does not exist.
                </p>

                <button
                    onClick={() => navigate("/admin/foods")}
                    className="
            mt-6
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-6
            py-4
            rounded-2xl
            font-bold
            transition-all
          "
                >
                    Back To Foods
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
          xl:flex-row
          xl:items-center
          xl:justify-between
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
                            Food Details
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage food item details & analytics
                        </p>
                    </div>
                </div>

                {/* ACTIONS */}

                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() =>
                            navigate(`/admin/foods/edit/${food._id}`)
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

                        Edit Food
                    </button>

                    <button
                        onClick={deleteFoodHandler}
                        className="
              bg-red-500
              hover:bg-red-600
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
                        <FaTrash />

                        Delete Food
                    </button>
                </div>
            </div>

            {/* MAIN SECTION */}

            <div
                className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-8
        "
            >
                {/* LEFT SIDE */}

                <div className="xl:col-span-2 space-y-8">
                    {/* FOOD IMAGE */}

                    <div
                        className="
              bg-white
              rounded-[35px]
              overflow-hidden
              border
              border-gray-100
              shadow-sm
            "
                    >
                        <div className="relative h-[420px]">
                            <img
                                src={
                                    food.image ||
                                    "https://via.placeholder.com/1200x800"
                                }
                                alt={food.name}
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
                  from-black/70
                  via-black/20
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
                  gap-5
                "
                            >
                                {/* LEFT */}

                                <div>
                                    <p
                                        className="
                      inline-flex
                      bg-orange-500
                      text-white
                      px-4
                      py-2
                      rounded-full
                      font-semibold
                      mb-4
                    "
                                    >
                                        {food.category?.name ||
                                            food.category}
                                    </p>

                                    <h2
                                        className="
                      text-4xl
                      font-extrabold
                      text-white
                    "
                                    >
                                        {food.name}
                                    </h2>

                                    <div className="mt-5">
                                        <StatusBadge
                                            status={
                                                food.status ||
                                                "Available"
                                            }
                                        />
                                    </div>
                                </div>

                                {/* PRICE */}

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
                                    <p className="text-gray-200">
                                        Price
                                    </p>

                                    <h3
                                        className="
                      text-4xl
                      font-extrabold
                      mt-2
                    "
                                    >
                                        ₹{food.price}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}

                    <div
                        className="
              bg-white
              rounded-[35px]
              border
              border-gray-100
              shadow-sm
              p-8
            "
                    >
                        <h2
                            className="
                text-2xl
                font-extrabold
                text-gray-900
                mb-5
              "
                        >
                            Food Description
                        </h2>

                        <p
                            className="
                text-gray-600
                leading-relaxed
                text-lg
              "
                        >
                            {food.description ||
                                "No description available"}
                        </p>
                    </div>

                    {/* INGREDIENTS */}

                    <div
                        className="
              bg-white
              rounded-[35px]
              border
              border-gray-100
              shadow-sm
              p-8
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
                            Ingredients
                        </h2>

                        <div
                            className="
                flex
                flex-wrap
                gap-4
              "
                        >
                            {food.ingredients &&
                                food.ingredients.length > 0 ? (
                                food.ingredients.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className="
                        bg-orange-50
                        text-orange-600
                        px-5
                        py-3
                        rounded-2xl
                        font-semibold
                      "
                                        >
                                            {item}
                                        </div>
                                    )
                                )
                            ) : (
                                <p className="text-gray-500">
                                    No ingredients added
                                </p>
                            )}
                        </div>
                    </div>

                    {/* GALLERY */}

                    <div
                        className="
              bg-white
              rounded-[35px]
              border
              border-gray-100
              shadow-sm
              p-8
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
                            Food Gallery
                        </h2>

                        <div
                            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-5
              "
                        >
                            {food.gallery &&
                                food.gallery.length > 0 ? (
                                food.gallery.map((img, index) => (
                                    <div
                                        key={index}
                                        className="
                        rounded-3xl
                        overflow-hidden
                        h-60
                      "
                                    >
                                        <img
                                            src={img}
                                            alt="food"
                                            className="
                          w-full
                          h-full
                          object-cover
                          hover:scale-110
                          transition-all
                          duration-500
                        "
                                        />
                                    </div>
                                ))
                            ) : (
                                <div
                                    className="
                    rounded-3xl
                    overflow-hidden
                    h-60
                  "
                                >
                                    <img
                                        src={
                                            food.image ||
                                            "https://via.placeholder.com/500"
                                        }
                                        alt="food"
                                        className="
                      w-full
                      h-full
                      object-cover
                    "
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}

                <div className="space-y-6">
                    {/* FOOD INFO */}

                    <div
                        className="
              bg-white
              rounded-[35px]
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
                            Food Information
                        </h2>

                        <div className="space-y-5">
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
                    bg-orange-100
                    text-orange-500
                    flex
                    items-center
                    justify-center
                    text-2xl
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
                                        {food.restaurant?.name ||
                                            food.restaurant ||
                                            "N/A"}
                                    </h3>
                                </div>
                            </div>

                            {/* PREP TIME */}

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
                    bg-blue-100
                    text-blue-500
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                                >
                                    <FaClock />
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Preparation Time
                                    </p>

                                    <h3
                                        className="
                      text-lg
                      font-bold
                      text-gray-900
                      mt-1
                    "
                                    >
                                        {food.prepTime || "20 Min"}
                                    </h3>
                                </div>
                            </div>

                            {/* RATING */}

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
                    bg-yellow-100
                    text-yellow-500
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                                >
                                    <FaStar />
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Rating
                                    </p>

                                    <h3
                                        className="
                      text-lg
                      font-bold
                      text-gray-900
                      mt-1
                    "
                                    >
                                        {food.rating || 4.5} / 5
                                    </h3>
                                </div>
                            </div>

                            {/* CALORIES */}

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
                    text-2xl
                  "
                                >
                                    <FaFire />
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Calories
                                    </p>

                                    <h3
                                        className="
                      text-lg
                      font-bold
                      text-gray-900
                      mt-1
                    "
                                    >
                                        {food.calories || "N/A"}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STATS */}

                    <div
                        className="
              bg-white
              rounded-[35px]
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
                            Food Analytics
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
                                        {food.totalOrders || 0}
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
                                        ₹{food.totalRevenue || 0}
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

                            {/* STATUS */}

                            <div
                                className="
                  bg-blue-50
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  justify-between
                "
                            >
                                <div>
                                    <p className="text-gray-600">
                                        Availability
                                    </p>

                                    <h3
                                        className="
                      text-2xl
                      font-extrabold
                      text-gray-900
                      mt-2
                    "
                                    >
                                        {food.status || "Available"}
                                    </h3>
                                </div>

                                <div
                                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-500
                    text-white
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                                >
                                    <FaCheckCircle />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QUICK ACTION */}

                    <div
                        className="
              bg-gradient-to-br
              from-orange-500
              to-orange-600
              rounded-[35px]
              p-8
              text-white
              shadow-lg
            "
                    >
                        <div
                            className="
                w-20
                h-20
                rounded-3xl
                bg-white/20
                flex
                items-center
                justify-center
                text-4xl
              "
                        >
                            <FaUtensils />
                        </div>

                        <h2
                            className="
                text-3xl
                font-extrabold
                mt-6
              "
                        >
                            Popular Food Item
                        </h2>

                        <p className="mt-4 text-orange-100 leading-relaxed">
                            This food item is currently trending
                            and receiving high customer orders.
                        </p>

                        <button
                            className="
                mt-6
                w-full
                bg-white
                text-orange-600
                hover:bg-orange-100
                py-4
                rounded-2xl
                font-bold
                transition-all
              "
                        >
                            Promote Food
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;