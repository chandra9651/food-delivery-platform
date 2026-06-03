// // /client/src/admin/pages/orders/OrderDetails.jsx


// import {
//     FaArrowLeft,
//     FaMapMarkerAlt,
//     FaPhoneAlt,
//     FaEnvelope,
//     FaClock,
//     FaCheckCircle,
//     FaTruck,
//     FaBoxOpen,
// } from "react-icons/fa";

// import StatusBadge from "../../components/ui/StatusBadge";

// const OrderDetails = () => {
//     /* DUMMY ORDER DATA */

//     const order = {
//         id: "#ORD-1025",
//         customer: "Chandra Prakash",
//         email: "chandra@gmail.com",
//         phone: "+91 9876543210",
//         address: "New Delhi, India",
//         status: "Delivered",
//         payment: "Paid",
//         restaurant: "Pizza Hub",
//         rider: "Rahul Kumar",
//         createdAt: "17 May 2026, 08:30 PM",
//         total: "$128.00",

//         items: [
//             {
//                 id: 1,
//                 name: "Cheese Pizza",
//                 qty: 2,
//                 price: "$40",
//                 image:
//                     "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
//             },

//             {
//                 id: 2,
//                 name: "Burger Combo",
//                 qty: 1,
//                 price: "$28",
//                 image:
//                     "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
//             },

//             {
//                 id: 3,
//                 name: "Cold Drink",
//                 qty: 2,
//                 price: "$20",
//                 image:
//                     "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop",
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
//                             Order Details
//                         </h1>

//                         <p className="text-gray-500 mt-2">
//                             Complete order information & tracking
//                         </p>
//                     </div>
//                 </div>

//                 {/* STATUS */}

//                 <div className="flex items-center gap-4">

//                     <StatusBadge status={order.status} />

//                     <button
//                         className="
//               bg-orange-500
//               hover:bg-orange-600
//               text-white
//               px-6
//               py-4
//               rounded-2xl
//               font-bold
//               shadow-lg
//               shadow-orange-200
//               transition-all
//             "
//                     >
//                         Update Status
//                     </button>
//                 </div>
//             </div>

//             {/* TOP CARDS */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           md:grid-cols-2
//           xl:grid-cols-4
//           gap-6
//         "
//             >
//                 {/* ORDER ID */}

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
//                         <FaBoxOpen />
//                     </div>

//                     <h3 className="text-gray-500 font-medium">
//                         Order ID
//                     </h3>

//                     <h2
//                         className="
//               text-2xl
//               font-extrabold
//               text-gray-900
//               mt-2
//             "
//                     >
//                         {order.id}
//                     </h2>
//                 </div>

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
//               bg-green-100
//               text-green-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         💰
//                     </div>

//                     <h3 className="text-gray-500 font-medium">
//                         Total Amount
//                     </h3>

//                     <h2
//                         className="
//               text-2xl
//               font-extrabold
//               text-gray-900
//               mt-2
//             "
//                     >
//                         {order.total}
//                     </h2>
//                 </div>

//                 {/* PAYMENT */}

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

//                     <h3 className="text-gray-500 font-medium">
//                         Payment Status
//                     </h3>

//                     <h2
//                         className="
//               text-2xl
//               font-extrabold
//               text-gray-900
//               mt-2
//             "
//                     >
//                         {order.payment}
//                     </h2>
//                 </div>

//                 {/* DELIVERY */}

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
//                         <FaTruck />
//                     </div>

//                     <h3 className="text-gray-500 font-medium">
//                         Delivery Partner
//                     </h3>

//                     <h2
//                         className="
//               text-2xl
//               font-extrabold
//               text-gray-900
//               mt-2
//             "
//                     >
//                         {order.rider}
//                     </h2>
//                 </div>
//             </div>

//             {/* MAIN SECTION */}

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
//                     {/* ORDER ITEMS */}

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
//                 mb-6
//               "
//                         >
//                             Ordered Items
//                         </h2>

//                         <div className="space-y-5">
//                             {order.items.map((item) => (
//                                 <div
//                                     key={item.id}
//                                     className="
//                     flex
//                     flex-col
//                     sm:flex-row
//                     sm:items-center
//                     sm:justify-between
//                     gap-5
//                     bg-gray-50
//                     rounded-3xl
//                     p-4
//                   "
//                                 >
//                                     {/* LEFT */}

//                                     <div className="flex items-center gap-4">

//                                         <img
//                                             src={item.image}
//                                             alt={item.name}
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
//                                                 {item.name}
//                                             </h3>

//                                             <p className="text-gray-500 mt-2">
//                                                 Quantity: {item.qty}
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
//                                         {item.price}
//                                     </h2>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* ORDER TIMELINE */}

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
//                             Order Timeline
//                         </h2>

//                         <div className="space-y-8">
//                             {/* STEP */}

//                             {[
//                                 "Order Placed",
//                                 "Restaurant Accepted",
//                                 "Food Prepared",
//                                 "Out for Delivery",
//                                 "Delivered",
//                             ].map((step, index) => (
//                                 <div
//                                     key={index}
//                                     className="
//                     flex
//                     items-start
//                     gap-4
//                   "
//                                 >
//                                     {/* ICON */}

//                                     <div
//                                         className="
//                       w-12
//                       h-12
//                       rounded-full
//                       bg-green-100
//                       text-green-500
//                       flex
//                       items-center
//                       justify-center
//                       shrink-0
//                     "
//                                     >
//                                         <FaCheckCircle />
//                                     </div>

//                                     {/* TEXT */}

//                                     <div>

//                                         <h3
//                                             className="
//                         text-lg
//                         font-bold
//                         text-gray-900
//                       "
//                                         >
//                                             {step}
//                                         </h3>

//                                         <p className="text-gray-500 mt-1">
//                                             17 May 2026 • 08:30 PM
//                                         </p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT */}

//                 <div className="space-y-6">
//                     {/* CUSTOMER */}

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
//                 mb-6
//               "
//                         >
//                             Customer Details
//                         </h2>

//                         <div className="space-y-5">
//                             <div className="flex items-center gap-4">

//                                 <div
//                                     className="
//                     w-14
//                     h-14
//                     rounded-full
//                     bg-orange-100
//                     flex
//                     items-center
//                     justify-center
//                     font-bold
//                     text-orange-500
//                     text-xl
//                   "
//                                 >
//                                     C
//                                 </div>

//                                 <div>

//                                     <h3
//                                         className="
//                       text-lg
//                       font-bold
//                       text-gray-900
//                     "
//                                     >
//                                         {order.customer}
//                                     </h3>

//                                     <p className="text-gray-500">
//                                         Customer
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="space-y-4 pt-3">
//                                 <div className="flex items-center gap-3">

//                                     <FaEnvelope className="text-orange-500" />

//                                     <p className="text-gray-700">
//                                         {order.email}
//                                     </p>
//                                 </div>

//                                 <div className="flex items-center gap-3">

//                                     <FaPhoneAlt className="text-orange-500" />

//                                     <p className="text-gray-700">
//                                         {order.phone}
//                                     </p>
//                                 </div>

//                                 <div className="flex items-start gap-3">

//                                     <FaMapMarkerAlt className="text-orange-500 mt-1" />

//                                     <p className="text-gray-700">
//                                         {order.address}
//                                     </p>
//                                 </div>

//                                 <div className="flex items-center gap-3">

//                                     <FaClock className="text-orange-500" />

//                                     <p className="text-gray-700">
//                                         {order.createdAt}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RESTAURANT */}

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
//                 mb-6
//               "
//                         >
//                             Restaurant Info
//                         </h2>

//                         <div
//                             className="
//                 bg-gray-50
//                 rounded-3xl
//                 p-5
//               "
//                         >
//                             <h3
//                                 className="
//                   text-xl
//                   font-bold
//                   text-gray-900
//                 "
//                             >
//                                 {order.restaurant}
//                             </h3>

//                             <p className="text-gray-500 mt-2">
//                                 Fast food & pizza restaurant
//                             </p>

//                             <button
//                                 className="
//                   mt-5
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
//                                 View Restaurant
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderDetails;




// /client/src/admin/pages/orders/OrderDetails.jsx

import { useEffect, useState } from "react";

import { useNavigate, useParams, Link } from "react-router-dom";

import axios from "axios";

import toast from "react-hot-toast";

import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaCheckCircle,
    FaTruck,
    FaBoxOpen,
} from "react-icons/fa";

import StatusBadge from "../../components/ui/StatusBadge";

const API_URL = import.meta.env.VITE_API_URL;

const OrderDetails = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const [updating, setUpdating] = useState(false);

    const [order, setOrder] = useState(null);

    const [status, setStatus] = useState("");

    // FETCH ORDER DETAILS

    const fetchOrder = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const { data } = await axios.get(
                `${API_URL}/api/admin/orders/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (data.success) {
                setOrder(data.order);

                setStatus(data.order.status);
            }
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to fetch order details"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrder();
    }, [id]);

    // UPDATE ORDER STATUS

    const updateOrderStatus = async () => {
        try {
            setUpdating(true);

            const token = localStorage.getItem("token");

            const { data } = await axios.put(
                `${API_URL}/api/admin/orders/${id}/status`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (data.success) {
                toast.success("Order status updated");

                fetchOrder();
            }
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to update order status"
            );
        } finally {
            setUpdating(false);
        }
    };

    // LOADING

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <div
                    className="
            w-16
            h-16
            border-4
            border-orange-500
            border-t-transparent
            rounded-full
            animate-spin
          "
                />
            </div>
        );
    }

    // NOT FOUND

    if (!order) {
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
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Order Not Found
                </h2>

                <button
                    onClick={() => navigate(-1)}
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
                            Order Details
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Complete order information & tracking
                        </p>
                    </div>
                </div>

                {/* STATUS */}

                <div className="flex flex-wrap items-center gap-4">
                    <StatusBadge status={order.status} />

                    <select
                        value={status}
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                        className="
              bg-white
              border
              border-gray-200
              px-5
              py-4
              rounded-2xl
              outline-none
              font-semibold
            "
                    >
                        <option value="Pending">
                            Pending
                        </option>

                        <option value="Confirmed">
                            Confirmed
                        </option>

                        <option value="Preparing">
                            Preparing
                        </option>

                        <option value="Out For Delivery">
                            Out For Delivery
                        </option>

                        <option value="Delivered">
                            Delivered
                        </option>

                        <option value="Cancelled">
                            Cancelled
                        </option>
                    </select>

                    <button
                        onClick={updateOrderStatus}
                        disabled={updating}
                        className="
              bg-orange-500
              hover:bg-orange-600
              disabled:opacity-60
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
                        {updating
                            ? "Updating..."
                            : "Update Status"}
                    </button>
                </div>
            </div>

            {/* TOP CARDS */}

            <div
                className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
            >
                {/* ORDER ID */}

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
                        <FaBoxOpen />
                    </div>

                    <h3 className="text-gray-500 font-medium">
                        Order ID
                    </h3>

                    <h2
                        className="
              text-2xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        #{order._id?.slice(-6).toUpperCase()}
                    </h2>
                </div>

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
              bg-green-100
              text-green-500
              flex
              items-center
              justify-center
              text-2xl
              mb-5
            "
                    >
                        💰
                    </div>

                    <h3 className="text-gray-500 font-medium">
                        Total Amount
                    </h3>

                    <h2
                        className="
              text-2xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        ₹{order.totalAmount}
                    </h2>
                </div>

                {/* PAYMENT */}

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

                    <h3 className="text-gray-500 font-medium">
                        Payment Status
                    </h3>

                    <h2
                        className="
              text-2xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        {order.paymentStatus || "Paid"}
                    </h2>
                </div>

                {/* DELIVERY */}

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
                        <FaTruck />
                    </div>

                    <h3 className="text-gray-500 font-medium">
                        Delivery Partner
                    </h3>

                    <h2
                        className="
              text-2xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        {order.deliveryPartner?.name ||
                            "Not Assigned"}
                    </h2>
                </div>
            </div>

            {/* MAIN SECTION */}

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
                    {/* ORDER ITEMS */}

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
                mb-6
              "
                        >
                            Ordered Items
                        </h2>

                        <div className="space-y-5">
                            {order.items?.map((item, index) => (
                                <div
                                    key={index}
                                    className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-5
                    bg-gray-50
                    rounded-3xl
                    p-4
                  "
                                >
                                    {/* LEFT */}

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={
                                                item.food?.image ||
                                                "https://via.placeholder.com/150"
                                            }
                                            alt={item.food?.name}
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
                                                {item.food?.name}
                                            </h3>

                                            <p className="text-gray-500 mt-2">
                                                Quantity: {item.quantity}
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
                                        ₹
                                        {item.price *
                                            item.quantity}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ORDER TIMELINE */}

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
                            Order Timeline
                        </h2>

                        <div className="space-y-8">
                            {[
                                "Pending",
                                "Confirmed",
                                "Preparing",
                                "Out For Delivery",
                                "Delivered",
                            ].map((step, index) => (
                                <div
                                    key={index}
                                    className="
                    flex
                    items-start
                    gap-4
                  "
                                >
                                    {/* ICON */}

                                    <div
                                        className={`
                      w-12
                      h-12
                      rounded-full
                      flex
                      items-center
                      justify-center
                      shrink-0

                      ${[
                                                "Pending",
                                                "Confirmed",
                                                "Preparing",
                                                "Out For Delivery",
                                                "Delivered",
                                            ].indexOf(order.status) >= index
                                                ? "bg-green-100 text-green-500"
                                                : "bg-gray-100 text-gray-400"
                                            }
                    `}
                                    >
                                        <FaCheckCircle />
                                    </div>

                                    {/* TEXT */}

                                    <div>
                                        <h3
                                            className="
                        text-lg
                        font-bold
                        text-gray-900
                      "
                                        >
                                            {step}
                                        </h3>

                                        <p className="text-gray-500 mt-1">
                                            {new Date(
                                                order.createdAt
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}

                <div className="space-y-6">
                    {/* CUSTOMER */}

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
                mb-6
              "
                        >
                            Customer Details
                        </h2>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div
                                    className="
                    w-14
                    h-14
                    rounded-full
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-orange-500
                    text-xl
                  "
                                >
                                    {order.user?.name?.charAt(0)}
                                </div>

                                <div>
                                    <h3
                                        className="
                      text-lg
                      font-bold
                      text-gray-900
                    "
                                    >
                                        {order.user?.name}
                                    </h3>

                                    <p className="text-gray-500">
                                        Customer
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-3">
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-orange-500" />

                                    <p className="text-gray-700">
                                        {order.user?.email}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-orange-500" />

                                    <p className="text-gray-700">
                                        {order.user?.phone ||
                                            "N/A"}
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-orange-500 mt-1" />

                                    <p className="text-gray-700">
                                        {order.deliveryAddress ||
                                            "No address"}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaClock className="text-orange-500" />

                                    <p className="text-gray-700">
                                        {new Date(
                                            order.createdAt
                                        ).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RESTAURANT */}

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
                mb-6
              "
                        >
                            Restaurant Info
                        </h2>

                        <div
                            className="
                bg-gray-50
                rounded-3xl
                p-5
              "
                        >
                            <h3
                                className="
                  text-xl
                  font-bold
                  text-gray-900
                "
                            >
                                {order.restaurant?.name}
                            </h3>

                            <p className="text-gray-500 mt-2">
                                {order.restaurant?.address}
                            </p>

                            <Link
                                to={`/admin/restaurants/${order.restaurant?._id}`}
                                className="
                  mt-5
                  w-full
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  py-4
                  rounded-2xl
                  font-bold
                  transition-all
                  flex
                  items-center
                  justify-center
                "
                            >
                                View Restaurant
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;