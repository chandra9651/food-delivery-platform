// import { motion } from "framer-motion";

// import {
//     FaPlus,
//     FaMinus,
//     FaTrash,
//     FaArrowRight,
//     FaShoppingBag,
// } from "react-icons/fa";

// const cartItems = [
//     {
//         id: 1,
//         name: "Pepperoni Pizza",
//         category: "Pizza • Italian",
//         image:
//             "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200",
//         price: 299,
//         quantity: 2,
//     },

//     {
//         id: 2,
//         name: "Chicken Burger",
//         category: "Burger • Fast Food",
//         image:
//             "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
//         price: 199,
//         quantity: 1,
//     },

//     {
//         id: 3,
//         name: "Biryani Combo",
//         category: "Indian • Biryani",
//         image:
//             "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1200",
//         price: 349,
//         quantity: 1,
//     },
// ];

// const Cart = () => {
//     const subtotal = cartItems.reduce(
//         (acc, item) => acc + item.price * item.quantity,
//         0
//     );

//     const deliveryFee = 49;

//     const total = subtotal + deliveryFee;

//     return (
//         <div className="bg-slate-50 min-h-screen">

//             {/* HERO */}

//             <section className="relative overflow-hidden">

//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"></div>

//                 <div className="relative max-w-7xl mx-auto px-4 py-24 text-center text-white">

//                     <p className="uppercase tracking-[5px] font-semibold text-orange-100">
//                         Your Cart
//                     </p>

//                     <h1 className="text-5xl lg:text-7xl font-extrabold mt-6">
//                         Ready To Checkout
//                     </h1>

//                     <p className="max-w-3xl mx-auto mt-8 text-lg text-orange-100 leading-8">
//                         Review your selected meals and proceed to secure checkout.
//                     </p>
//                 </div>
//             </section>

//             {/* CART SECTION */}

//             <section className="max-w-7xl mx-auto px-4 py-24">

//                 <div className="grid lg:grid-cols-3 gap-10">

//                     {/* LEFT SIDE */}

//                     <div className="lg:col-span-2 space-y-8">

//                         {cartItems.map((item) => (
//                             <motion.div
//                                 whileHover={{ y: -5 }}
//                                 key={item.id}
//                                 className="bg-white rounded-[35px] p-6 shadow-md hover:shadow-2xl transition-all flex flex-col md:flex-row gap-6"
//                             >

//                                 {/* IMAGE */}

//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className="w-full md:w-52 h-52 object-cover rounded-3xl"
//                                 />

//                                 {/* CONTENT */}

//                                 <div className="flex-1 flex flex-col justify-between">

//                                     <div>

//                                         <div className="flex justify-between items-start gap-4">

//                                             <div>

//                                                 <h2 className="text-3xl font-extrabold">
//                                                     {item.name}
//                                                 </h2>

//                                                 <p className="text-gray-500 mt-3 text-lg">
//                                                     {item.category}
//                                                 </p>
//                                             </div>

//                                             <button className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
//                                                 <FaTrash />
//                                             </button>
//                                         </div>

//                                         <h3 className="text-3xl font-extrabold text-orange-500 mt-8">
//                                             ₹{item.price}
//                                         </h3>
//                                     </div>

//                                     {/* QUANTITY */}

//                                     <div className="flex items-center justify-between mt-10">

//                                         <div className="flex items-center bg-slate-100 rounded-full overflow-hidden">

//                                             <button className="w-14 h-14 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
//                                                 <FaMinus />
//                                             </button>

//                                             <span className="px-6 font-bold text-lg">
//                                                 {item.quantity}
//                                             </span>

//                                             <button className="w-14 h-14 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
//                                                 <FaPlus />
//                                             </button>
//                                         </div>

//                                         <h2 className="text-3xl font-extrabold">
//                                             ₹{item.price * item.quantity}
//                                         </h2>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     {/* RIGHT SIDE */}

//                     <div>

//                         <div className="bg-white rounded-[40px] shadow-xl p-10 sticky top-28">

//                             {/* TITLE */}

//                             <div className="flex items-center gap-4">

//                                 <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl">
//                                     <FaShoppingBag />
//                                 </div>

//                                 <div>

//                                     <p className="text-gray-500">
//                                         Order Summary
//                                     </p>

//                                     <h2 className="text-3xl font-extrabold">
//                                         Checkout
//                                     </h2>
//                                 </div>
//                             </div>

//                             {/* COUPON */}

//                             <div className="mt-10">

//                                 <p className="font-semibold mb-4">
//                                     Promo Code
//                                 </p>

//                                 <div className="flex gap-3">

//                                     <input
//                                         type="text"
//                                         placeholder="Enter coupon"
//                                         className="flex-1 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
//                                     />

//                                     <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-2xl font-semibold transition-all">
//                                         Apply
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* PRICE DETAILS */}

//                             <div className="mt-10 space-y-6">

//                                 <div className="flex justify-between text-lg">

//                                     <span className="text-gray-600">
//                                         Subtotal
//                                     </span>

//                                     <span className="font-bold">
//                                         ₹{subtotal}
//                                     </span>
//                                 </div>

//                                 <div className="flex justify-between text-lg">

//                                     <span className="text-gray-600">
//                                         Delivery Fee
//                                     </span>

//                                     <span className="font-bold">
//                                         ₹{deliveryFee}
//                                     </span>
//                                 </div>

//                                 <div className="border-t pt-6 flex justify-between text-2xl font-extrabold">

//                                     <span>Total</span>

//                                     <span className="text-orange-500">
//                                         ₹{total}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* BUTTON */}

//                             <button className="w-full mt-10 bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-3 hover:scale-[1.02]">

//                                 Proceed To Checkout

//                                 <FaArrowRight />
//                             </button>

//                             {/* DELIVERY NOTE */}

//                             <div className="bg-orange-50 rounded-3xl p-6 mt-8">

//                                 <h3 className="font-bold text-lg">
//                                     Free Delivery Offer 🎉
//                                 </h3>

//                                 <p className="text-gray-600 mt-3 leading-7">
//                                     Add items worth ₹500 more and get free delivery.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Cart;



import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
    FaPlus,
    FaMinus,
    FaTrash,
    FaArrowRight,
    FaShoppingBag,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../../api/axios";

const Cart = () => {

    const navigate = useNavigate();

    const [cartItems, setCartItems] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    /* ======================================================
       FETCH CART
    ====================================================== */

    useEffect(() => {

        const fetchCart =
            async () => {

                try {

                    const { data } =
                        await API.get(
                            "/cart"
                        );

                    setCartItems(data);

                } catch (error) {

                    toast.error(
                        error.response?.data
                            ?.message ||
                        "Failed to load cart"
                    );

                } finally {

                    setLoading(false);
                }
            };

        fetchCart();

    }, []);

    /* ======================================================
       INCREASE QUANTITY
    ====================================================== */

    const increaseQuantity =
        async (itemId) => {

            try {

                const updatedCart =
                    cartItems.map(
                        (item) => {

                            if (
                                item._id ===
                                itemId
                            ) {
                                return {
                                    ...item,

                                    quantity:
                                        item.quantity +
                                        1,
                                };
                            }

                            return item;
                        }
                    );

                setCartItems(
                    updatedCart
                );

            } catch (error) {

                toast.error(
                    "Failed to update quantity"
                );
            }
        };

    /* ======================================================
       DECREASE QUANTITY
    ====================================================== */

    const decreaseQuantity =
        async (itemId) => {

            try {

                const updatedCart =
                    cartItems.map(
                        (item) => {

                            if (
                                item._id ===
                                itemId &&
                                item.quantity >
                                1
                            ) {
                                return {
                                    ...item,

                                    quantity:
                                        item.quantity -
                                        1,
                                };
                            }

                            return item;
                        }
                    );

                setCartItems(
                    updatedCart
                );

            } catch (error) {

                toast.error(
                    "Failed to update quantity"
                );
            }
        };

    /* ======================================================
       REMOVE ITEM
    ====================================================== */

    const removeItem =
        async (itemId) => {

            try {

                const filtered =
                    cartItems.filter(
                        (item) =>
                            item._id !==
                            itemId
                    );

                setCartItems(
                    filtered
                );

                toast.success(
                    "Item removed"
                );

            } catch (error) {

                toast.error(
                    "Failed to remove item"
                );
            }
        };

    /* ======================================================
       CALCULATIONS
    ====================================================== */

    const subtotal =
        cartItems.reduce(
            (acc, item) =>
                acc +
                item.price *
                item.quantity,
            0
        );

    const deliveryFee =
        subtotal > 500
            ? 0
            : 49;

    const total =
        subtotal + deliveryFee;

    /* ======================================================
       CHECKOUT
    ====================================================== */

    const checkoutHandler = () => {

        if (
            cartItems.length === 0
        ) {

            toast.error(
                "Cart is empty"
            );

            return;
        }

        navigate("/user/checkout");
    };

    /* ======================================================
       LOADING
    ====================================================== */

    if (loading) {

        return (

            <div
                className="
                    min-h-screen
                    flex
                    justify-center
                    items-center
                    text-2xl
                    font-bold
                "
            >
                Loading Cart...
            </div>
        );
    }

    return (

        <div className="bg-slate-50 min-h-screen">

            {/* HERO */}

            <section className="relative overflow-hidden">

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-orange-500
                        to-red-500
                    "
                ></div>

                <div
                    className="
                        relative
                        max-w-7xl
                        mx-auto
                        px-4
                        py-24
                        text-center
                        text-white
                    "
                >
                    <p
                        className="
                            uppercase
                            tracking-[5px]
                            font-semibold
                            text-orange-100
                        "
                    >
                        Your Cart
                    </p>

                    <h1
                        className="
                            text-5xl
                            lg:text-7xl
                            font-extrabold
                            mt-6
                        "
                    >
                        Ready To Checkout
                    </h1>

                    <p
                        className="
                            max-w-3xl
                            mx-auto
                            mt-8
                            text-lg
                            text-orange-100
                            leading-8
                        "
                    >
                        Review your selected
                        meals and proceed to
                        secure checkout.
                    </p>
                </div>
            </section>

            {/* EMPTY CART */}

            {cartItems.length === 0 && (

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        py-28
                    "
                >
                    <FaShoppingBag
                        className="
                            text-7xl
                            text-orange-400
                            mb-6
                        "
                    />

                    <h2
                        className="
                            text-4xl
                            font-bold
                            mb-4
                        "
                    >
                        Cart Is Empty
                    </h2>

                    <p
                        className="
                            text-gray-500
                            text-lg
                        "
                    >
                        Add delicious food
                        into your cart
                    </p>
                </div>
            )}

            {/* CART SECTION */}

            {cartItems.length > 0 && (

                <section
                    className="
                        max-w-7xl
                        mx-auto
                        px-4
                        py-24
                    "
                >
                    <div
                        className="
                            grid
                            lg:grid-cols-3
                            gap-10
                        "
                    >
                        {/* LEFT */}

                        <div
                            className="
                                lg:col-span-2
                                space-y-8
                            "
                        >
                            {cartItems.map(
                                (item) => (

                                    <motion.div
                                        whileHover={{
                                            y: -5,
                                        }}
                                        key={
                                            item._id
                                        }
                                        className="
                                            bg-white
                                            rounded-[35px]
                                            p-6
                                            shadow-md
                                            hover:shadow-2xl
                                            transition-all
                                            flex
                                            flex-col
                                            md:flex-row
                                            gap-6
                                        "
                                    >
                                        {/* IMAGE */}

                                        <img
                                            src={
                                                item.image
                                            }
                                            alt={
                                                item.name
                                            }
                                            className="
                                                w-full
                                                md:w-52
                                                h-52
                                                object-cover
                                                rounded-3xl
                                            "
                                        />

                                        {/* CONTENT */}

                                        <div
                                            className="
                                                flex-1
                                                flex
                                                flex-col
                                                justify-between
                                            "
                                        >
                                            <div>

                                                <div
                                                    className="
                                                        flex
                                                        justify-between
                                                        items-start
                                                        gap-4
                                                    "
                                                >
                                                    <div>

                                                        <h2
                                                            className="
                                                                text-3xl
                                                                font-extrabold
                                                            "
                                                        >
                                                            {
                                                                item.name
                                                            }
                                                        </h2>

                                                        <p
                                                            className="
                                                                text-gray-500
                                                                mt-3
                                                                text-lg
                                                            "
                                                        >
                                                            {
                                                                item.category
                                                            }
                                                        </p>
                                                    </div>

                                                    <button
                                                        onClick={() =>
                                                            removeItem(
                                                                item._id
                                                            )
                                                        }
                                                        className="
                                                            w-12
                                                            h-12
                                                            rounded-full
                                                            bg-red-100
                                                            text-red-500
                                                            flex
                                                            items-center
                                                            justify-center
                                                            hover:bg-red-500
                                                            hover:text-white
                                                            transition-all
                                                        "
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>

                                                <h3
                                                    className="
                                                        text-3xl
                                                        font-extrabold
                                                        text-orange-500
                                                        mt-8
                                                    "
                                                >
                                                    ₹
                                                    {
                                                        item.price
                                                    }
                                                </h3>
                                            </div>

                                            {/* QUANTITY */}

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-between
                                                    mt-10
                                                "
                                            >
                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        bg-slate-100
                                                        rounded-full
                                                        overflow-hidden
                                                    "
                                                >
                                                    <button
                                                        onClick={() =>
                                                            decreaseQuantity(
                                                                item._id
                                                            )
                                                        }
                                                        className="
                                                            w-14
                                                            h-14
                                                            flex
                                                            items-center
                                                            justify-center
                                                            hover:bg-orange-500
                                                            hover:text-white
                                                            transition-all
                                                        "
                                                    >
                                                        <FaMinus />
                                                    </button>

                                                    <span
                                                        className="
                                                            px-6
                                                            font-bold
                                                            text-lg
                                                        "
                                                    >
                                                        {
                                                            item.quantity
                                                        }
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            increaseQuantity(
                                                                item._id
                                                            )
                                                        }
                                                        className="
                                                            w-14
                                                            h-14
                                                            flex
                                                            items-center
                                                            justify-center
                                                            hover:bg-orange-500
                                                            hover:text-white
                                                            transition-all
                                                        "
                                                    >
                                                        <FaPlus />
                                                    </button>
                                                </div>

                                                <h2
                                                    className="
                                                        text-3xl
                                                        font-extrabold
                                                    "
                                                >
                                                    ₹
                                                    {
                                                        item.price *
                                                        item.quantity
                                                    }
                                                </h2>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            )}
                        </div>

                        {/* RIGHT */}

                        <div>

                            <div
                                className="
                                    bg-white
                                    rounded-[40px]
                                    shadow-xl
                                    p-10
                                    sticky
                                    top-28
                                "
                            >
                                {/* TITLE */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >
                                    <div
                                        className="
                                            w-16
                                            h-16
                                            rounded-2xl
                                            bg-orange-100
                                            text-orange-500
                                            flex
                                            items-center
                                            justify-center
                                            text-2xl
                                        "
                                    >
                                        <FaShoppingBag />
                                    </div>

                                    <div>

                                        <p
                                            className="
                                                text-gray-500
                                            "
                                        >
                                            Order Summary
                                        </p>

                                        <h2
                                            className="
                                                text-3xl
                                                font-extrabold
                                            "
                                        >
                                            Checkout
                                        </h2>
                                    </div>
                                </div>

                                {/* PRICE */}

                                <div
                                    className="
                                        mt-10
                                        space-y-6
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            justify-between
                                            text-lg
                                        "
                                    >
                                        <span
                                            className="
                                                text-gray-600
                                            "
                                        >
                                            Subtotal
                                        </span>

                                        <span
                                            className="
                                                font-bold
                                            "
                                        >
                                            ₹
                                            {
                                                subtotal
                                            }
                                        </span>
                                    </div>

                                    <div
                                        className="
                                            flex
                                            justify-between
                                            text-lg
                                        "
                                    >
                                        <span
                                            className="
                                                text-gray-600
                                            "
                                        >
                                            Delivery Fee
                                        </span>

                                        <span
                                            className="
                                                font-bold
                                            "
                                        >
                                            ₹
                                            {
                                                deliveryFee
                                            }
                                        </span>
                                    </div>

                                    <div
                                        className="
                                            border-t
                                            pt-6
                                            flex
                                            justify-between
                                            text-2xl
                                            font-extrabold
                                        "
                                    >
                                        <span>
                                            Total
                                        </span>

                                        <span
                                            className="
                                                text-orange-500
                                            "
                                        >
                                            ₹
                                            {
                                                total
                                            }
                                        </span>
                                    </div>
                                </div>

                                {/* BUTTON */}

                                <button
                                    onClick={
                                        checkoutHandler
                                    }
                                    className="
                                        w-full
                                        mt-10
                                        bg-orange-500
                                        hover:bg-orange-600
                                        text-white
                                        py-5
                                        rounded-2xl
                                        text-lg
                                        font-bold
                                        transition-all
                                        flex
                                        items-center
                                        justify-center
                                        gap-3
                                        hover:scale-[1.02]
                                    "
                                >
                                    Proceed To
                                    Checkout

                                    <FaArrowRight />
                                </button>

                                {/* NOTE */}

                                <div
                                    className="
                                        bg-orange-50
                                        rounded-3xl
                                        p-6
                                        mt-8
                                    "
                                >
                                    <h3
                                        className="
                                            font-bold
                                            text-lg
                                        "
                                    >
                                        Free Delivery
                                        Offer 🎉
                                    </h3>

                                    <p
                                        className="
                                            text-gray-600
                                            mt-3
                                            leading-7
                                        "
                                    >
                                        Add items
                                        worth ₹500
                                        more and get
                                        free
                                        delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Cart;
