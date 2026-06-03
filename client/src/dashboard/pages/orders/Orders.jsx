// src/dashboard/pages/orders/Orders.jsx

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
    FaBox,
    FaUser,
    FaMoneyBillWave,
    FaCheckCircle,
    FaClock,
    FaTruck,
} from "react-icons/fa";

import {
    getRestaurantOrders,
    updateOrderStatus,
} from "../../../services/orderService";

const Orders = () => {

    const [orders, setOrders] = useState([]);

    const [loading, setLoading] =
        useState(true);

    /* ======================================================
       FETCH ORDERS
    ====================================================== */

    useEffect(() => {

        fetchOrders();

    }, []);

    const fetchOrders = async () => {

        try {

            const data =
                await getRestaurantOrders();

            setOrders(data);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to fetch orders"
            );

        } finally {

            setLoading(false);
        }
    };

    /* ======================================================
       UPDATE STATUS
    ====================================================== */

    const statusHandler = async (
        orderId,
        currentStatus
    ) => {

        let nextStatus = "Pending";

        if (currentStatus === "Pending") {

            nextStatus = "Preparing";

        } else if (
            currentStatus === "Preparing"
        ) {

            nextStatus = "Out for Delivery";

        } else if (
            currentStatus ===
            "Out for Delivery"
        ) {

            nextStatus = "Delivered";
        }

        try {

            await updateOrderStatus(
                orderId,
                nextStatus
            );

            toast.success(
                `Order marked as ${nextStatus}`
            );

            fetchOrders();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update status"
            );
        }
    };

    /* ======================================================
       STATUS STYLE
    ====================================================== */

    const getStatusStyle = (status) => {

        switch (status) {

            case "Pending":
                return "bg-yellow-100 text-yellow-700";

            case "Preparing":
                return "bg-blue-100 text-blue-700";

            case "Out for Delivery":
                return "bg-purple-100 text-purple-700";

            case "Delivered":
                return "bg-green-100 text-green-700";

            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    /* ======================================================
       STATUS ICON
    ====================================================== */

    const getStatusIcon = (status) => {

        switch (status) {

            case "Pending":
                return <FaClock />;

            case "Preparing":
                return <FaBox />;

            case "Out for Delivery":
                return <FaTruck />;

            case "Delivered":
                return <FaCheckCircle />;

            default:
                return <FaClock />;
        }
    };

    /* ======================================================
       LOADING
    ====================================================== */

    if (loading) {

        return (
            <div className="text-center py-20 text-2xl font-bold">
                Loading Orders...
            </div>
        );
    }

    return (
        <div>

            {/* PAGE TITLE */}

            <div className="mb-10">

                <h1 className="text-4xl font-extrabold text-gray-900">
                    Restaurant Orders
                </h1>

                <p className="text-gray-500 mt-3">
                    Manage customer orders easily
                </p>
            </div>

            {/* EMPTY */}

            {orders.length === 0 ? (

                <div className="
          bg-white
          rounded-3xl
          p-16
          text-center
          shadow-md
        ">

                    <div className="
            w-24
            h-24
            mx-auto
            rounded-full
            bg-orange-100
            text-orange-500
            flex
            items-center
            justify-center
            text-4xl
          ">
                        <FaBox />
                    </div>

                    <h2 className="text-3xl font-bold mt-6">
                        No Orders Found
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Orders will appear here
                    </p>
                </div>

            ) : (

                <div className="grid gap-6">

                    {orders.map((order) => (

                        <div
                            key={order._id}
                            className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                border
                border-gray-100
                flex
                flex-col
                xl:flex-row
                xl:items-center
                xl:justify-between
                gap-6
              "
                        >

                            {/* LEFT */}

                            <div>

                                <h2 className="
                  text-2xl
                  font-extrabold
                  text-gray-900
                ">
                                    Order #
                                    {order._id.slice(-6)}
                                </h2>

                                <div className="
                  mt-4
                  space-y-2
                  text-gray-600
                ">

                                    <p className="
                    flex
                    items-center
                    gap-2
                  ">
                                        <FaUser />

                                        {
                                            order.user?.name
                                        }
                                    </p>

                                    <p>
                                        Total Items:
                                        {" "}
                                        {
                                            order.orderItems
                                                ?.length
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* AMOUNT */}

                            <div className="text-center">

                                <p className="
                  text-gray-500
                  mb-2
                ">
                                    Amount
                                </p>

                                <h3 className="
                  text-3xl
                  font-extrabold
                  text-orange-500
                  flex
                  items-center
                  gap-2
                  justify-center
                ">
                                    <FaMoneyBillWave />

                                    ₹
                                    {order.totalPrice}
                                </h3>
                            </div>

                            {/* STATUS */}

                            <div className="text-center">

                                <p className="
                  text-gray-500
                  mb-3
                ">
                                    Status
                                </p>

                                <span
                                    className={`
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-full
                    font-semibold
                    ${getStatusStyle(
                                        order.status
                                    )}
                  `}
                                >
                                    {
                                        getStatusIcon(
                                            order.status
                                        )
                                    }

                                    {order.status}
                                </span>
                            </div>

                            {/* BUTTON */}

                            <div>

                                {order.status !==
                                    "Delivered" && (

                                        <button
                                            onClick={() =>
                                                statusHandler(
                                                    order._id,
                                                    order.status
                                                )
                                            }
                                            className="
                        bg-orange-500
                        hover:bg-orange-600
                        text-white
                        px-7
                        py-4
                        rounded-2xl
                        font-bold
                        transition-all
                        duration-300
                        shadow-lg
                      "
                                        >
                                            Update Status
                                        </button>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;