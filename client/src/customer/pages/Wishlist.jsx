// // src/user/pages/Wishlist.jsx

// import { useState } from "react";

// import {
//     FaHeart,
//     FaShoppingCart,
//     FaTrash,
//     FaStar,
// } from "react-icons/fa";

// const Wishlist = () => {

//     const [wishlistItems, setWishlistItems] = useState([
//         {
//             id: 1,
//             name: "Cheese Burger",
//             restaurant: "Burger King",
//             price: 199,
//             rating: 4.5,
//             image:
//                 "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
//         },

//         {
//             id: 2,
//             name: "Pepperoni Pizza",
//             restaurant: "Pizza Hut",
//             price: 349,
//             rating: 4.8,
//             image:
//                 "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
//         },

//         {
//             id: 3,
//             name: "Chicken Biryani",
//             restaurant: "Biryani House",
//             price: 259,
//             rating: 4.7,
//             image:
//                 "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1200&auto=format&fit=crop",
//         },
//     ]);

//     /* ======================================================
//        REMOVE ITEM
//     ====================================================== */

//     const removeWishlistItem = (id) => {

//         const filteredItems = wishlistItems.filter(
//             (item) => item.id !== id
//         );

//         setWishlistItems(filteredItems);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-10 px-4">

//             <div className="max-w-7xl mx-auto">

//                 {/* PAGE HEADER */}

//                 <div className="flex items-center justify-between mb-10">

//                     <div>

//                         <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
//                             <FaHeart className="text-red-500" />

//                             My Wishlist
//                         </h1>

//                         <p className="text-gray-500 mt-2">
//                             Save your favorite foods for later
//                         </p>
//                     </div>

//                     <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">

//                         <span className="font-semibold text-gray-700">
//                             {wishlistItems.length} Items
//                         </span>
//                     </div>
//                 </div>

//                 {/* EMPTY STATE */}

//                 {wishlistItems.length === 0 ? (

//                     <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100">

//                         <div className="w-28 h-28 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">

//                             <FaHeart className="text-5xl text-red-500" />
//                         </div>

//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                             Your Wishlist is Empty
//                         </h2>

//                         <p className="text-gray-500 text-lg">
//                             Add your favorite foods to wishlist
//                         </p>
//                     </div>

//                 ) : (

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//                         {wishlistItems.map((item) => (

//                             <div
//                                 key={item.id}
//                                 className="
//                 bg-white
//                 rounded-3xl
//                 overflow-hidden
//                 shadow-sm
//                 border
//                 border-gray-100
//                 hover:shadow-xl
//                 transition-all
//                 duration-300
//               "
//                             >

//                                 {/* IMAGE */}

//                                 <div className="relative h-60 overflow-hidden">

//                                     <img
//                                         src={item.image}
//                                         alt={item.name}
//                                         className="
//                     w-full
//                     h-full
//                     object-cover
//                     hover:scale-110
//                     transition-all
//                     duration-500
//                   "
//                                     />

//                                     {/* REMOVE BUTTON */}

//                                     <button
//                                         onClick={() =>
//                                             removeWishlistItem(item.id)
//                                         }
//                                         className="
//                     absolute
//                     top-4
//                     right-4
//                     w-11
//                     h-11
//                     rounded-full
//                     bg-white
//                     text-red-500
//                     flex
//                     items-center
//                     justify-center
//                     shadow-lg
//                     hover:bg-red-500
//                     hover:text-white
//                     transition-all
//                   "
//                                     >
//                                         <FaTrash />
//                                     </button>
//                                 </div>

//                                 {/* CONTENT */}

//                                 <div className="p-6">

//                                     {/* TITLE */}

//                                     <div className="flex items-start justify-between gap-4">

//                                         <div>

//                                             <h2 className="text-2xl font-bold text-gray-900">
//                                                 {item.name}
//                                             </h2>

//                                             <p className="text-gray-500 mt-1">
//                                                 {item.restaurant}
//                                             </p>
//                                         </div>

//                                         {/* RATING */}

//                                         <div className="
//                     flex
//                     items-center
//                     gap-1
//                     bg-orange-50
//                     px-3
//                     py-1
//                     rounded-full
//                   ">
//                                             <FaStar className="text-yellow-500 text-sm" />

//                                             <span className="font-semibold text-sm">
//                                                 {item.rating}
//                                             </span>
//                                         </div>
//                                     </div>

//                                     {/* PRICE */}

//                                     <div className="mt-5 flex items-center justify-between">

//                                         <h3 className="text-3xl font-extrabold text-orange-500">
//                                             ₹{item.price}
//                                         </h3>

//                                         <button
//                                             className="
//                       flex
//                       items-center
//                       gap-3
//                       bg-orange-500
//                       hover:bg-orange-600
//                       text-white
//                       px-5
//                       py-3
//                       rounded-2xl
//                       font-semibold
//                       transition-all
//                     "
//                                         >
//                                             <FaShoppingCart />

//                                             Add
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Wishlist;




// src/user/pages/Wishlist.jsx

import { useEffect, useState } from "react";

import {
    FaHeart,
    FaShoppingCart,
    FaTrash,
    FaStar,
} from "react-icons/fa";

import toast from "react-hot-toast";

import API from "../../api/axios";

const Wishlist = () => {

    const [wishlistItems, setWishlistItems] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    /* ======================================================
       GET TOKEN
    ====================================================== */

    const userInfo = JSON.parse(
        localStorage.getItem("userInfo")
    );

    const token = userInfo?.token;

    /* ======================================================
       GET WISHLIST
    ====================================================== */

    const fetchWishlist = async () => {

        try {

            const { data } = await API.get(
                "/wishlist",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setWishlistItems(data);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load wishlist"
            );

        } finally {

            setLoading(false);
        }
    };

    /* ======================================================
       REMOVE ITEM
    ====================================================== */

    const removeWishlistItem = async (id) => {

        try {

            await API.delete(
                `/wishlist/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const filteredItems =
                wishlistItems.filter(
                    (item) => item._id !== id
                );

            setWishlistItems(filteredItems);

            toast.success(
                "Item removed from wishlist"
            );

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to remove item"
            );
        }
    };

    /* ======================================================
       ADD TO CART
    ====================================================== */

    const addToCartHandler = async (foodId) => {

        try {

            await API.post(
                "/cart",
                {
                    foodId,
                    quantity: 1,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success(
                "Item added to cart"
            );

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to add to cart"
            );
        }
    };

    /* ======================================================
       USE EFFECT
    ====================================================== */

    useEffect(() => {

        if (token) {
            fetchWishlist();
        } else {
            setLoading(false);
        }

    }, []);

    /* ======================================================
       LOADING
    ====================================================== */

    if (loading) {

        return (
            <div className="min-h-screen flex items-center justify-center">

                <h2 className="text-2xl font-bold">
                    Loading Wishlist...
                </h2>
            </div>
        );
    }

    /* ======================================================
       NO LOGIN
    ====================================================== */

    if (!token) {

        return (
            <div className="min-h-screen flex items-center justify-center">

                <div className="bg-white p-10 rounded-3xl shadow-lg text-center">

                    <h2 className="text-3xl font-bold mb-4">
                        Login Required
                    </h2>

                    <p className="text-gray-500">
                        Please login to view your wishlist
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">

            <div className="max-w-7xl mx-auto">

                {/* PAGE HEADER */}

                <div className="flex items-center justify-between mb-10">

                    <div>

                        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">

                            <FaHeart className="text-red-500" />

                            My Wishlist
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Save your favorite foods for later
                        </p>
                    </div>

                    <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">

                        <span className="font-semibold text-gray-700">

                            {wishlistItems.length} Items
                        </span>
                    </div>
                </div>

                {/* EMPTY STATE */}

                {wishlistItems.length === 0 ? (

                    <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100">

                        <div className="w-28 h-28 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">

                            <FaHeart className="text-5xl text-red-500" />
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">

                            Your Wishlist is Empty
                        </h2>

                        <p className="text-gray-500 text-lg">

                            Add your favorite foods to wishlist
                        </p>
                    </div>

                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {wishlistItems.map((item) => (

                            <div
                                key={item._id}
                                className="
                                    bg-white
                                    rounded-3xl
                                    overflow-hidden
                                    shadow-sm
                                    border
                                    border-gray-100
                                    hover:shadow-xl
                                    transition-all
                                    duration-300
                                "
                            >

                                {/* IMAGE */}

                                <div className="relative h-60 overflow-hidden">

                                    <img
                                        src={
                                            item.image ||
                                            "https://via.placeholder.com/500"
                                        }
                                        alt={item.name}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                            hover:scale-110
                                            transition-all
                                            duration-500
                                        "
                                    />

                                    {/* REMOVE BUTTON */}

                                    <button
                                        onClick={() =>
                                            removeWishlistItem(
                                                item._id
                                            )
                                        }
                                        className="
                                            absolute
                                            top-4
                                            right-4
                                            w-11
                                            h-11
                                            rounded-full
                                            bg-white
                                            text-red-500
                                            flex
                                            items-center
                                            justify-center
                                            shadow-lg
                                            hover:bg-red-500
                                            hover:text-white
                                            transition-all
                                        "
                                    >
                                        <FaTrash />
                                    </button>
                                </div>

                                {/* CONTENT */}

                                <div className="p-6">

                                    {/* TITLE */}

                                    <div className="flex items-start justify-between gap-4">

                                        <div>

                                            <h2 className="text-2xl font-bold text-gray-900">

                                                {item.name}
                                            </h2>

                                            <p className="text-gray-500 mt-1">

                                                {item.restaurant?.name ||
                                                    "Restaurant"}
                                            </p>
                                        </div>

                                        {/* RATING */}

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-1
                                                bg-orange-50
                                                px-3
                                                py-1
                                                rounded-full
                                            "
                                        >

                                            <FaStar className="text-yellow-500 text-sm" />

                                            <span className="font-semibold text-sm">

                                                {item.rating || 4.5}
                                            </span>
                                        </div>
                                    </div>

                                    {/* PRICE */}

                                    <div className="mt-5 flex items-center justify-between">

                                        <h3 className="text-3xl font-extrabold text-orange-500">

                                            ₹{item.price}
                                        </h3>

                                        <button
                                            onClick={() =>
                                                addToCartHandler(
                                                    item._id
                                                )
                                            }
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                bg-orange-500
                                                hover:bg-orange-600
                                                text-white
                                                px-5
                                                py-3
                                                rounded-2xl
                                                font-semibold
                                                transition-all
                                            "
                                        >

                                            <FaShoppingCart />

                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;