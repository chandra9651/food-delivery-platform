// // src/user/pages/Checkout.jsx

// import { useState } from "react";

// import {
//     FaMapMarkerAlt,
//     FaCreditCard,
//     FaMoneyBillWave,
//     FaMobileAlt,
//     FaLock,
// } from "react-icons/fa";

// const Checkout = () => {

//     const [paymentMethod, setPaymentMethod] =
//         useState("cod");

//     const [formData, setFormData] = useState({
//         fullName: "",
//         phone: "",
//         address: "",
//         city: "",
//         pincode: "",
//     });

//     /* ======================================================
//        CART ITEMS
//     ====================================================== */

//     const cartItems = [
//         {
//             id: 1,
//             name: "Cheese Burger",
//             quantity: 2,
//             price: 199,
//             image:
//                 "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
//         },

//         {
//             id: 2,
//             name: "Pepperoni Pizza",
//             quantity: 1,
//             price: 349,
//             image:
//                 "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
//         },
//     ];

//     /* ======================================================
//        TOTALS
//     ====================================================== */

//     const subtotal = cartItems.reduce(
//         (acc, item) =>
//             acc + item.price * item.quantity,
//         0
//     );

//     const deliveryFee = 49;

//     const tax = 39;

//     const total =
//         subtotal + deliveryFee + tax;

//     /* ======================================================
//        HANDLE CHANGE
//     ====================================================== */

//     const changeHandler = (e) => {
//         setFormData({
//             ...formData,

//             [e.target.name]: e.target.value,
//         });
//     };

//     /* ======================================================
//        PLACE ORDER
//     ====================================================== */

//     const placeOrderHandler = (e) => {
//         e.preventDefault();

//         console.log({
//             formData,
//             paymentMethod,
//             total,
//         });
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-10 px-4">

//             <div className="max-w-7xl mx-auto">

//                 {/* PAGE TITLE */}

//                 <div className="mb-10">

//                     <h1 className="text-4xl font-bold text-gray-900">
//                         Checkout
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Complete your order securely
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//                     {/* ======================================================
//                        LEFT SIDE
//                     ====================================================== */}

//                     <div className="lg:col-span-2 space-y-8">

//                         {/* DELIVERY ADDRESS */}

//                         <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

//                             <div className="flex items-center gap-3 mb-6">

//                                 <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">

//                                     <FaMapMarkerAlt className="text-orange-500 text-xl" />
//                                 </div>

//                                 <div>

//                                     <h2 className="text-2xl font-bold text-gray-900">
//                                         Delivery Address
//                                     </h2>

//                                     <p className="text-gray-500 text-sm">
//                                         Enter your delivery details
//                                     </p>
//                                 </div>
//                             </div>

//                             <form
//                                 className="grid grid-cols-1 md:grid-cols-2 gap-5"
//                             >

//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     placeholder="Full Name"
//                                     value={formData.fullName}
//                                     onChange={changeHandler}
//                                     className="
//                     border
//                     border-gray-200
//                     rounded-2xl
//                     px-5
//                     py-4
//                     focus:outline-none
//                     focus:ring-2
//                     focus:ring-orange-400
//                   "
//                                 />

//                                 <input
//                                     type="text"
//                                     name="phone"
//                                     placeholder="Phone Number"
//                                     value={formData.phone}
//                                     onChange={changeHandler}
//                                     className="
//                     border
//                     border-gray-200
//                     rounded-2xl
//                     px-5
//                     py-4
//                     focus:outline-none
//                     focus:ring-2
//                     focus:ring-orange-400
//                   "
//                                 />

//                                 <input
//                                     type="text"
//                                     name="city"
//                                     placeholder="City"
//                                     value={formData.city}
//                                     onChange={changeHandler}
//                                     className="
//                     border
//                     border-gray-200
//                     rounded-2xl
//                     px-5
//                     py-4
//                     focus:outline-none
//                     focus:ring-2
//                     focus:ring-orange-400
//                   "
//                                 />

//                                 <input
//                                     type="text"
//                                     name="pincode"
//                                     placeholder="Pincode"
//                                     value={formData.pincode}
//                                     onChange={changeHandler}
//                                     className="
//                     border
//                     border-gray-200
//                     rounded-2xl
//                     px-5
//                     py-4
//                     focus:outline-none
//                     focus:ring-2
//                     focus:ring-orange-400
//                   "
//                                 />

//                                 <textarea
//                                     rows="4"
//                                     name="address"
//                                     placeholder="Full Address"
//                                     value={formData.address}
//                                     onChange={changeHandler}
//                                     className="
//                     md:col-span-2
//                     border
//                     border-gray-200
//                     rounded-2xl
//                     px-5
//                     py-4
//                     focus:outline-none
//                     focus:ring-2
//                     focus:ring-orange-400
//                     resize-none
//                   "
//                                 ></textarea>
//                             </form>
//                         </div>

//                         {/* PAYMENT METHOD */}

//                         <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

//                             <div className="flex items-center gap-3 mb-6">

//                                 <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">

//                                     <FaCreditCard className="text-orange-500 text-xl" />
//                                 </div>

//                                 <div>

//                                     <h2 className="text-2xl font-bold text-gray-900">
//                                         Payment Method
//                                     </h2>

//                                     <p className="text-gray-500 text-sm">
//                                         Select preferred payment option
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="space-y-4">

//                                 {/* COD */}

//                                 <label
//                                     className={`
//                   flex
//                   items-center
//                   justify-between
//                   border
//                   rounded-2xl
//                   p-5
//                   cursor-pointer
//                   transition-all

//                   ${paymentMethod === "cod"
//                                             ? "border-orange-500 bg-orange-50"
//                                             : "border-gray-200"
//                                         }
//                 `}
//                                 >

//                                     <div className="flex items-center gap-4">

//                                         <FaMoneyBillWave className="text-2xl text-green-500" />

//                                         <div>

//                                             <h3 className="font-bold text-gray-900">
//                                                 Cash on Delivery
//                                             </h3>

//                                             <p className="text-sm text-gray-500">
//                                                 Pay after receiving order
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <input
//                                         type="radio"
//                                         checked={
//                                             paymentMethod ===
//                                             "cod"
//                                         }
//                                         onChange={() =>
//                                             setPaymentMethod(
//                                                 "cod"
//                                             )
//                                         }
//                                     />
//                                 </label>

//                                 {/* UPI */}

//                                 <label
//                                     className={`
//                   flex
//                   items-center
//                   justify-between
//                   border
//                   rounded-2xl
//                   p-5
//                   cursor-pointer
//                   transition-all

//                   ${paymentMethod === "upi"
//                                             ? "border-orange-500 bg-orange-50"
//                                             : "border-gray-200"
//                                         }
//                 `}
//                                 >

//                                     <div className="flex items-center gap-4">

//                                         <FaMobileAlt className="text-2xl text-blue-500" />

//                                         <div>

//                                             <h3 className="font-bold text-gray-900">
//                                                 UPI Payment
//                                             </h3>

//                                             <p className="text-sm text-gray-500">
//                                                 Pay using PhonePe,
//                                                 GPay, Paytm
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <input
//                                         type="radio"
//                                         checked={
//                                             paymentMethod ===
//                                             "upi"
//                                         }
//                                         onChange={() =>
//                                             setPaymentMethod(
//                                                 "upi"
//                                             )
//                                         }
//                                     />
//                                 </label>

//                                 {/* CARD */}

//                                 <label
//                                     className={`
//                   flex
//                   items-center
//                   justify-between
//                   border
//                   rounded-2xl
//                   p-5
//                   cursor-pointer
//                   transition-all

//                   ${paymentMethod === "card"
//                                             ? "border-orange-500 bg-orange-50"
//                                             : "border-gray-200"
//                                         }
//                 `}
//                                 >

//                                     <div className="flex items-center gap-4">

//                                         <FaCreditCard className="text-2xl text-purple-500" />

//                                         <div>

//                                             <h3 className="font-bold text-gray-900">
//                                                 Credit / Debit Card
//                                             </h3>

//                                             <p className="text-sm text-gray-500">
//                                                 Secure online payment
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <input
//                                         type="radio"
//                                         checked={
//                                             paymentMethod ===
//                                             "card"
//                                         }
//                                         onChange={() =>
//                                             setPaymentMethod(
//                                                 "card"
//                                             )
//                                         }
//                                     />
//                                 </label>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ======================================================
//                        RIGHT SIDE
//                     ====================================================== */}

//                     <div>

//                         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-7 sticky top-28">

//                             {/* ORDER SUMMARY */}

//                             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                                 Order Summary
//                             </h2>

//                             {/* ITEMS */}

//                             <div className="space-y-5">

//                                 {cartItems.map((item) => (

//                                     <div
//                                         key={item.id}
//                                         className="flex items-center gap-4"
//                                     >

//                                         <img
//                                             src={item.image}
//                                             alt={item.name}
//                                             className="
//                         w-20
//                         h-20
//                         rounded-2xl
//                         object-cover
//                       "
//                                         />

//                                         <div className="flex-1">

//                                             <h3 className="font-bold text-gray-900">
//                                                 {item.name}
//                                             </h3>

//                                             <p className="text-sm text-gray-500 mt-1">
//                                                 Qty:
//                                                 {" "}
//                                                 {item.quantity}
//                                             </p>
//                                         </div>

//                                         <h4 className="font-bold text-orange-500">
//                                             ₹
//                                             {item.price}
//                                         </h4>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* PRICE DETAILS */}

//                             <div className="border-t border-gray-200 mt-7 pt-6 space-y-4">

//                                 <div className="flex justify-between text-gray-600">

//                                     <span>
//                                         Subtotal
//                                     </span>

//                                     <span>
//                                         ₹{subtotal}
//                                     </span>
//                                 </div>

//                                 <div className="flex justify-between text-gray-600">

//                                     <span>
//                                         Delivery Fee
//                                     </span>

//                                     <span>
//                                         ₹{deliveryFee}
//                                     </span>
//                                 </div>

//                                 <div className="flex justify-between text-gray-600">

//                                     <span>
//                                         Taxes
//                                     </span>

//                                     <span>
//                                         ₹{tax}
//                                     </span>
//                                 </div>

//                                 <div className="border-t border-gray-200 pt-4 flex justify-between text-2xl font-bold text-gray-900">

//                                     <span>Total</span>

//                                     <span className="text-orange-500">
//                                         ₹{total}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* BUTTON */}

//                             <button
//                                 onClick={placeOrderHandler}
//                                 className="
//                 mt-8
//                 w-full
//                 bg-orange-500
//                 hover:bg-orange-600
//                 text-white
//                 py-4
//                 rounded-2xl
//                 font-bold
//                 text-lg
//                 transition-all
//                 duration-300
//                 shadow-lg
//                 flex
//                 items-center
//                 justify-center
//                 gap-3
//               "
//                             >

//                                 <FaLock />

//                                 Place Order
//                             </button>

//                             {/* SECURITY */}

//                             <p className="text-center text-sm text-gray-500 mt-5">
//                                 100% Secure Payments
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Checkout;


import { useEffect, useState } from "react";

import {
    FaMapMarkerAlt,
    FaCreditCard,
    FaMoneyBillWave,
    FaMobileAlt,
    FaLock,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../../api/axios";

const Checkout = () => {

    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] =
        useState("cod");

    const [loading, setLoading] =
        useState(true);

    const [cartItems, setCartItems] =
        useState([]);

    const [formData, setFormData] =
        useState({
            fullName: "",
            phone: "",
            address: "",
            city: "",
            pincode: "",
        });

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
       TOTALS
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

    const tax = Math.floor(
        subtotal * 0.05
    );

    const total =
        subtotal +
        deliveryFee +
        tax;

    /* ======================================================
       HANDLE CHANGE
    ====================================================== */

    const changeHandler = (e) => {

        setFormData({
            ...formData,

            [e.target.name]:
                e.target.value,
        });
    };

    /* ======================================================
       PLACE ORDER
    ====================================================== */

    const placeOrderHandler =
        async () => {

            try {

                if (
                    !formData.fullName ||
                    !formData.phone ||
                    !formData.address ||
                    !formData.city ||
                    !formData.pincode
                ) {

                    return toast.error(
                        "Please fill all fields"
                    );
                }

                const orderData = {

                    orderItems:
                        cartItems.map(
                            (item) => ({
                                food:
                                    item.food ||
                                    item._id,

                                name:
                                    item.name,

                                image:
                                    item.image,

                                price:
                                    item.price,

                                qty:
                                    item.quantity,
                            })
                        ),

                    shippingAddress:
                    {
                        fullName:
                            formData.fullName,

                        phone:
                            formData.phone,

                        address:
                            formData.address,

                        city:
                            formData.city,

                        pincode:
                            formData.pincode,
                    },

                    paymentMethod,

                    itemsPrice:
                        subtotal,

                    deliveryFee,

                    taxPrice:
                        tax,

                    totalPrice:
                        total,
                };

                const { data } =
                    await API.post(
                        "/orders",
                        orderData
                    );

                toast.success(
                    "Order placed successfully"
                );

                console.log(data);

                navigate(
                    "/user/orders"
                );

            } catch (error) {

                toast.error(
                    error.response?.data
                        ?.message ||
                    "Failed to place order"
                );
            }
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
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                "
            >
                Loading Checkout...
            </div>
        );
    }

    return (

        <div className="min-h-screen bg-gray-50 py-10 px-4">

            <div className="max-w-7xl mx-auto">

                {/* PAGE TITLE */}

                <div className="mb-10">

                    <h1
                        className="
                            text-4xl
                            font-bold
                            text-gray-900
                        "
                    >
                        Checkout
                    </h1>

                    <p
                        className="
                            text-gray-500
                            mt-2
                        "
                    >
                        Complete your order
                        securely
                    </p>
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-3
                        gap-8
                    "
                >
                    {/* LEFT SIDE */}

                    <div
                        className="
                            lg:col-span-2
                            space-y-8
                        "
                    >
                        {/* ADDRESS */}

                        <div
                            className="
                                bg-white
                                rounded-3xl
                                p-8
                                shadow-sm
                                border
                                border-gray-100
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    mb-6
                                "
                            >
                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-orange-100
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <FaMapMarkerAlt
                                        className="
                                            text-orange-500
                                            text-xl
                                        "
                                    />
                                </div>

                                <div>

                                    <h2
                                        className="
                                            text-2xl
                                            font-bold
                                        "
                                    >
                                        Delivery
                                        Address
                                    </h2>

                                    <p
                                        className="
                                            text-gray-500
                                            text-sm
                                        "
                                    >
                                        Enter your
                                        delivery
                                        details
                                    </p>
                                </div>
                            </div>

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    md:grid-cols-2
                                    gap-5
                                "
                            >
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={
                                        formData.fullName
                                    }
                                    onChange={
                                        changeHandler
                                    }
                                    className="
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-orange-400
                                    "
                                />

                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={
                                        formData.phone
                                    }
                                    onChange={
                                        changeHandler
                                    }
                                    className="
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-orange-400
                                    "
                                />

                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={
                                        formData.city
                                    }
                                    onChange={
                                        changeHandler
                                    }
                                    className="
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-orange-400
                                    "
                                />

                                <input
                                    type="text"
                                    name="pincode"
                                    placeholder="Pincode"
                                    value={
                                        formData.pincode
                                    }
                                    onChange={
                                        changeHandler
                                    }
                                    className="
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-orange-400
                                    "
                                />

                                <textarea
                                    rows="4"
                                    name="address"
                                    placeholder="Full Address"
                                    value={
                                        formData.address
                                    }
                                    onChange={
                                        changeHandler
                                    }
                                    className="
                                        md:col-span-2
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-orange-400
                                        resize-none
                                    "
                                ></textarea>
                            </div>
                        </div>

                        {/* PAYMENT */}

                        <div
                            className="
                                bg-white
                                rounded-3xl
                                p-8
                                shadow-sm
                                border
                                border-gray-100
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    mb-6
                                "
                            >
                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-2xl
                                        bg-orange-100
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <FaCreditCard
                                        className="
                                            text-orange-500
                                            text-xl
                                        "
                                    />
                                </div>

                                <div>

                                    <h2
                                        className="
                                            text-2xl
                                            font-bold
                                        "
                                    >
                                        Payment
                                        Method
                                    </h2>

                                    <p
                                        className="
                                            text-gray-500
                                            text-sm
                                        "
                                    >
                                        Select
                                        payment
                                        option
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">

                                {/* COD */}

                                <label
                                    className={`
                                        flex
                                        items-center
                                        justify-between
                                        border
                                        rounded-2xl
                                        p-5
                                        cursor-pointer
                                        transition-all

                                        ${paymentMethod ===
                                            "cod"
                                            ? "border-orange-500 bg-orange-50"
                                            : "border-gray-200"
                                        }
                                    `}
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
                                        <FaMoneyBillWave
                                            className="
                                                text-2xl
                                                text-green-500
                                            "
                                        />

                                        <div>

                                            <h3
                                                className="
                                                    font-bold
                                                "
                                            >
                                                Cash on
                                                Delivery
                                            </h3>

                                            <p
                                                className="
                                                    text-sm
                                                    text-gray-500
                                                "
                                            >
                                                Pay after
                                                delivery
                                            </p>
                                        </div>
                                    </div>

                                    <input
                                        type="radio"
                                        checked={
                                            paymentMethod ===
                                            "cod"
                                        }
                                        onChange={() =>
                                            setPaymentMethod(
                                                "cod"
                                            )
                                        }
                                    />
                                </label>

                                {/* UPI */}

                                <label
                                    className={`
                                        flex
                                        items-center
                                        justify-between
                                        border
                                        rounded-2xl
                                        p-5
                                        cursor-pointer
                                        transition-all

                                        ${paymentMethod ===
                                            "upi"
                                            ? "border-orange-500 bg-orange-50"
                                            : "border-gray-200"
                                        }
                                    `}
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
                                        <FaMobileAlt
                                            className="
                                                text-2xl
                                                text-blue-500
                                            "
                                        />

                                        <div>

                                            <h3
                                                className="
                                                    font-bold
                                                "
                                            >
                                                UPI
                                                Payment
                                            </h3>

                                            <p
                                                className="
                                                    text-sm
                                                    text-gray-500
                                                "
                                            >
                                                PhonePe,
                                                GPay,
                                                Paytm
                                            </p>
                                        </div>
                                    </div>

                                    <input
                                        type="radio"
                                        checked={
                                            paymentMethod ===
                                            "upi"
                                        }
                                        onChange={() =>
                                            setPaymentMethod(
                                                "upi"
                                            )
                                        }
                                    />
                                </label>

                                {/* CARD */}

                                <label
                                    className={`
                                        flex
                                        items-center
                                        justify-between
                                        border
                                        rounded-2xl
                                        p-5
                                        cursor-pointer
                                        transition-all

                                        ${paymentMethod ===
                                            "card"
                                            ? "border-orange-500 bg-orange-50"
                                            : "border-gray-200"
                                        }
                                    `}
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
                                        <FaCreditCard
                                            className="
                                                text-2xl
                                                text-purple-500
                                            "
                                        />

                                        <div>

                                            <h3
                                                className="
                                                    font-bold
                                                "
                                            >
                                                Credit /
                                                Debit
                                                Card
                                            </h3>

                                            <p
                                                className="
                                                    text-sm
                                                    text-gray-500
                                                "
                                            >
                                                Secure
                                                payment
                                            </p>
                                        </div>
                                    </div>

                                    <input
                                        type="radio"
                                        checked={
                                            paymentMethod ===
                                            "card"
                                        }
                                        onChange={() =>
                                            setPaymentMethod(
                                                "card"
                                            )
                                        }
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}

                    <div>

                        <div
                            className="
                                bg-white
                                rounded-3xl
                                shadow-sm
                                border
                                border-gray-100
                                p-7
                                sticky
                                top-28
                            "
                        >
                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    mb-6
                                "
                            >
                                Order Summary
                            </h2>

                            {/* ITEMS */}

                            <div className="space-y-5">

                                {cartItems.map(
                                    (item) => (

                                        <div
                                            key={
                                                item._id
                                            }
                                            className="
                                                flex
                                                items-center
                                                gap-4
                                            "
                                        >
                                            <img
                                                src={
                                                    item.image
                                                }
                                                alt={
                                                    item.name
                                                }
                                                className="
                                                    w-20
                                                    h-20
                                                    rounded-2xl
                                                    object-cover
                                                "
                                            />

                                            <div className="flex-1">

                                                <h3
                                                    className="
                                                        font-bold
                                                    "
                                                >
                                                    {
                                                        item.name
                                                    }
                                                </h3>

                                                <p
                                                    className="
                                                        text-sm
                                                        text-gray-500
                                                        mt-1
                                                    "
                                                >
                                                    Qty:
                                                    {" "}
                                                    {
                                                        item.quantity
                                                    }
                                                </p>
                                            </div>

                                            <h4
                                                className="
                                                    font-bold
                                                    text-orange-500
                                                "
                                            >
                                                ₹
                                                {
                                                    item.price
                                                }
                                            </h4>
                                        </div>
                                    )
                                )}
                            </div>

                            {/* PRICE */}

                            <div
                                className="
                                    border-t
                                    border-gray-200
                                    mt-7
                                    pt-6
                                    space-y-4
                                "
                            >
                                <div
                                    className="
                                        flex
                                        justify-between
                                        text-gray-600
                                    "
                                >
                                    <span>
                                        Subtotal
                                    </span>

                                    <span>
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
                                        text-gray-600
                                    "
                                >
                                    <span>
                                        Delivery
                                        Fee
                                    </span>

                                    <span>
                                        ₹
                                        {
                                            deliveryFee
                                        }
                                    </span>
                                </div>

                                <div
                                    className="
                                        flex
                                        justify-between
                                        text-gray-600
                                    "
                                >
                                    <span>
                                        Tax
                                    </span>

                                    <span>
                                        ₹{tax}
                                    </span>
                                </div>

                                <div
                                    className="
                                        border-t
                                        border-gray-200
                                        pt-4
                                        flex
                                        justify-between
                                        text-2xl
                                        font-bold
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
                                        {total}
                                    </span>
                                </div>
                            </div>

                            {/* BUTTON */}

                            <button
                                onClick={
                                    placeOrderHandler
                                }
                                className="
                                    mt-8
                                    w-full
                                    bg-orange-500
                                    hover:bg-orange-600
                                    text-white
                                    py-4
                                    rounded-2xl
                                    font-bold
                                    text-lg
                                    transition-all
                                    duration-300
                                    shadow-lg
                                    flex
                                    items-center
                                    justify-center
                                    gap-3
                                "
                            >
                                <FaLock />

                                Place Order
                            </button>

                            <p
                                className="
                                    text-center
                                    text-sm
                                    text-gray-500
                                    mt-5
                                "
                            >
                                100% Secure
                                Payments
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;