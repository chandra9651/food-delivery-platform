import { useEffect, useState } from "react";

import {
    FaBoxOpen,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

import toast from "react-hot-toast";

import API from "../../api/axios";

const Orders = () => {

    const [orders, setOrders] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    /* ======================================================
       FETCH ORDERS
    ====================================================== */

    useEffect(() => {

        const fetchOrders =
            async () => {

                try {

                    const { data } =
                        await API.get(
                            "/orders/my-orders"
                        );

                    setOrders(data);

                } catch (error) {

                    toast.error(
                        error.response?.data
                            ?.message ||
                        "Failed to load orders"
                    );

                } finally {

                    setLoading(false);
                }
            };

        fetchOrders();

    }, []);

    /* ======================================================
       STATUS COLOR
    ====================================================== */

    const getStatusStyle = (
        status
    ) => {

        switch (status) {

            case "Pending":
                return {
                    color:
                        "bg-yellow-100 text-yellow-700",

                    icon:
                        <FaClock />,
                };

            case "Delivered":
                return {
                    color:
                        "bg-green-100 text-green-700",

                    icon:
                        <FaCheckCircle />,
                };

            case "Cancelled":
                return {
                    color:
                        "bg-red-100 text-red-700",

                    icon:
                        <FaTimesCircle />,
                };

            default:
                return {
                    color:
                        "bg-blue-100 text-blue-700",

                    icon:
                        <FaBoxOpen />,
                };
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
                    justify-center
                    items-center
                    text-2xl
                    font-semibold
                "
            >
                Loading Orders...
            </div>
        );
    }

    return (

        <div
            className="
                min-h-screen
                bg-gray-50
                py-10
                px-4
            "
        >
            <div
                className="
                    max-w-6xl
                    mx-auto
                "
            >
                {/* TITLE */}

                <div className="mb-8">

                    <h1
                        className="
                            text-4xl
                            font-bold
                            text-gray-900
                        "
                    >
                        My Orders
                    </h1>

                    <p
                        className="
                            text-gray-500
                            mt-2
                        "
                    >
                        Track all your food
                        orders
                    </p>
                </div>

                {/* EMPTY */}

                {orders.length === 0 && (

                    <div
                        className="
                            bg-white
                            rounded-3xl
                            p-16
                            text-center
                            shadow-sm
                        "
                    >
                        <FaBoxOpen
                            className="
                                text-6xl
                                text-orange-500
                                mx-auto
                                mb-5
                            "
                        />

                        <h2
                            className="
                                text-2xl
                                font-bold
                                mb-3
                            "
                        >
                            No Orders Found
                        </h2>

                        <p
                            className="
                                text-gray-500
                            "
                        >
                            You have not placed
                            any order yet.
                        </p>
                    </div>
                )}

                {/* ORDERS */}

                <div className="space-y-6">

                    {orders.map((order) => {

                        const statusStyle =
                            getStatusStyle(
                                order.status
                            );

                        return (

                            <div
                                key={order._id}
                                className="
                                    bg-white
                                    rounded-3xl
                                    shadow-sm
                                    border
                                    border-gray-100
                                    overflow-hidden
                                "
                            >
                                {/* HEADER */}

                                <div
                                    className="
                                        flex
                                        flex-col
                                        md:flex-row
                                        md:items-center
                                        md:justify-between
                                        gap-4
                                        p-6
                                        border-b
                                        border-gray-100
                                    "
                                >
                                    <div>

                                        <h2
                                            className="
                                                text-xl
                                                font-bold
                                                text-gray-900
                                            "
                                        >
                                            Order #
                                            {order._id.slice(
                                                -6
                                            )}
                                        </h2>

                                        <p
                                            className="
                                                text-gray-500
                                                mt-1
                                            "
                                        >
                                            {
                                                new Date(
                                                    order.createdAt
                                                ).toLocaleString()
                                            }
                                        </p>
                                    </div>

                                    {/* STATUS */}

                                    <div
                                        className={`
                                            flex
                                            items-center
                                            gap-2
                                            px-5
                                            py-2
                                            rounded-full
                                            text-sm
                                            font-semibold
                                            w-fit
                                            ${statusStyle.color}
                                        `}
                                    >
                                        {
                                            statusStyle.icon
                                        }

                                        {order.status}
                                    </div>
                                </div>

                                {/* BODY */}

                                <div className="p-6">

                                    {/* ITEMS */}

                                    <div className="space-y-4">

                                        {order.orderItems?.map(
                                            (
                                                item,
                                                index
                                            ) => (

                                                <div
                                                    key={
                                                        index
                                                    }
                                                    className="
                                                        flex
                                                        items-center
                                                        justify-between
                                                        border-b
                                                        border-gray-100
                                                        pb-4
                                                    "
                                                >
                                                    <div
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

                                                        <div>

                                                            <h3
                                                                className="
                                                                    font-semibold
                                                                    text-lg
                                                                "
                                                            >
                                                                {
                                                                    item.name
                                                                }
                                                            </h3>

                                                            <p
                                                                className="
                                                                    text-gray-500
                                                                    mt-1
                                                                "
                                                            >
                                                                Qty:
                                                                {
                                                                    item.qty
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <h3
                                                        className="
                                                            text-lg
                                                            font-bold
                                                            text-orange-500
                                                        "
                                                    >
                                                        ₹
                                                        {
                                                            item.price
                                                        }
                                                    </h3>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* FOOTER */}

                                    <div
                                        className="
                                            mt-6
                                            flex
                                            flex-col
                                            md:flex-row
                                            md:items-center
                                            md:justify-between
                                            gap-4
                                        "
                                    >
                                        <div>

                                            <p
                                                className="
                                                    text-gray-500
                                                "
                                            >
                                                Payment Method:
                                            </p>

                                            <h3
                                                className="
                                                    font-semibold
                                                    mt-1
                                                "
                                            >
                                                {
                                                    order.paymentMethod
                                                }
                                            </h3>
                                        </div>

                                        <div
                                            className="
                                                text-right
                                            "
                                        >
                                            <p
                                                className="
                                                    text-gray-500
                                                "
                                            >
                                                Total Amount
                                            </p>

                                            <h2
                                                className="
                                                    text-3xl
                                                    font-bold
                                                    text-orange-500
                                                "
                                            >
                                                ₹
                                                {
                                                    order.totalPrice
                                                }
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Orders;