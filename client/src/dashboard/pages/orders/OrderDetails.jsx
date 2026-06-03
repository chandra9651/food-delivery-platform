// src/dashboard/pages/orders/OrderDetails.jsx

import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import toast from "react-hot-toast";

import {
    FaArrowLeft,
    FaUser,
    FaPhone,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaBox,
    FaCheckCircle,
    FaTruck,
    FaClock,
} from "react-icons/fa";

import { getRestaurantOrders } from "../../../services/orderService";

const OrderDetails = () => {

    const { id } = useParams();

    const [order, setOrder] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    /* ======================================================
       FETCH ORDER
    ====================================================== */

    useEffect(() => {

        fetchOrder();

    }, [id]);

    const fetchOrder = async () => {

        try {

            const data =
                await getRestaurantOrders();

            const singleOrder =
                data.find(
                    (item) => item._id === id
                );

            setOrder(singleOrder);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to fetch order"
            );

        } finally {

            setLoading(false);
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
            <div className="
        text-center
        py-20
        text-2xl
        font-bold
      ">
                Loading Order Details...
            </div>
        );
    }

    /* ======================================================
       NO ORDER
    ====================================================== */

    if (!order) {

        return (
            <div className="
        text-center
        py-20
      ">

                <h2 className="
          text-3xl
          font-bold
          text-red-500
        ">
                    Order Not Found
                </h2>

                <Link
                    to="/dashboard/orders"
                    className="
            inline-block
            mt-6
            bg-orange-500
            text-white
            px-6
            py-3
            rounded-2xl
          "
                >
                    Back to Orders
                </Link>
            </div>
        );
    }

    return (
        <div>

            {/* HEADER */}

            <div className="
        flex
        items-center
        justify-between
        mb-10
      ">

                <div>

                    <Link
                        to="/dashboard/orders"
                        className="
              inline-flex
              items-center
              gap-2
              text-orange-500
              font-semibold
              mb-4
            "
                    >
                        <FaArrowLeft />

                        Back to Orders
                    </Link>

                    <h1 className="
            text-4xl
            font-extrabold
            text-gray-900
          ">
                        Order Details
                    </h1>

                    <p className="
            text-gray-500
            mt-2
          ">
                        Order ID:
                        {" "}
                        {order._id}
                    </p>
                </div>

                <span
                    className={`
            inline-flex
            items-center
            gap-2
            px-6
            py-3
            rounded-full
            font-bold
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

            {/* GRID */}

            <div className="
        grid
        lg:grid-cols-3
        gap-8
      ">

                {/* LEFT SIDE */}

                <div className="
          lg:col-span-2
          space-y-8
        ">

                    {/* ORDER ITEMS */}

                    <div className="
            bg-white
            rounded-3xl
            p-8
            shadow-md
          ">

                        <h2 className="
              text-2xl
              font-bold
              mb-8
            ">
                            Ordered Items
                        </h2>

                        <div className="space-y-6">

                            {order.orderItems?.map(
                                (item, index) => (

                                    <div
                                        key={index}
                                        className="
                    flex
                    items-center
                    justify-between
                    border-b
                    pb-5
                  "
                                    >

                                        <div className="
                      flex
                      items-center
                      gap-5
                    ">

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

                                                <h3 className="
                            text-xl
                            font-bold
                          ">
                                                    {
                                                        item.name
                                                    }
                                                </h3>

                                                <p className="
                            text-gray-500
                            mt-1
                          ">
                                                    Quantity:
                                                    {" "}
                                                    {
                                                        item.quantity
                                                    }
                                                </p>
                                            </div>
                                        </div>

                                        <h3 className="
                      text-2xl
                      font-bold
                      text-orange-500
                    ">
                                            ₹
                                            {
                                                item.price
                                            }
                                        </h3>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* CUSTOMER INFO */}

                    <div className="
            bg-white
            rounded-3xl
            p-8
            shadow-md
          ">

                        <h2 className="
              text-2xl
              font-bold
              mb-8
            ">
                            Customer Information
                        </h2>

                        <div className="
              grid
              md:grid-cols-2
              gap-6
            ">

                            <div className="
                flex
                items-center
                gap-4
              ">

                                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-orange-100
                  text-orange-500
                  flex
                  items-center
                  justify-center
                  text-xl
                ">
                                    <FaUser />
                                </div>

                                <div>

                                    <p className="
                    text-gray-500
                  ">
                                        Customer Name
                                    </p>

                                    <h3 className="
                    font-bold
                    text-lg
                  ">
                                        {
                                            order.user
                                                ?.name
                                        }
                                    </h3>
                                </div>
                            </div>

                            <div className="
                flex
                items-center
                gap-4
              ">

                                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-green-100
                  text-green-500
                  flex
                  items-center
                  justify-center
                  text-xl
                ">
                                    <FaPhone />
                                </div>

                                <div>

                                    <p className="
                    text-gray-500
                  ">
                                        Phone Number
                                    </p>

                                    <h3 className="
                    font-bold
                    text-lg
                  ">
                                        {
                                            order.shippingAddress
                                                ?.phone
                                        }
                                    </h3>
                                </div>
                            </div>

                            <div className="
                md:col-span-2
                flex
                items-start
                gap-4
              ">

                                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-100
                  text-blue-500
                  flex
                  items-center
                  justify-center
                  text-xl
                ">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>

                                    <p className="
                    text-gray-500
                  ">
                                        Delivery Address
                                    </p>

                                    <h3 className="
                    font-bold
                    text-lg
                    leading-8
                  ">
                                        {
                                            order.shippingAddress
                                                ?.address
                                        }
                                        ,
                                        {" "}
                                        {
                                            order.shippingAddress
                                                ?.city
                                        }
                                        ,
                                        {" "}
                                        {
                                            order.shippingAddress
                                                ?.pincode
                                        }
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}

                <div>

                    <div className="
            bg-white
            rounded-3xl
            p-8
            shadow-md
            sticky
            top-28
          ">

                        <h2 className="
              text-2xl
              font-bold
              mb-8
            ">
                            Payment Summary
                        </h2>

                        <div className="space-y-5">

                            <div className="
                flex
                justify-between
                text-lg
              ">
                                <span className="
                  text-gray-500
                ">
                                    Payment Method
                                </span>

                                <span className="
                  font-bold
                ">
                                    {
                                        order.paymentMethod
                                    }
                                </span>
                            </div>

                            <div className="
                flex
                justify-between
                text-lg
              ">
                                <span className="
                  text-gray-500
                ">
                                    Payment Status
                                </span>

                                <span className={`
                  font-bold
                  ${order.isPaid
                                        ? "text-green-500"
                                        : "text-red-500"
                                    }
                `}>
                                    {order.isPaid
                                        ? "Paid"
                                        : "Pending"}
                                </span>
                            </div>

                            <div className="
                border-t
                pt-5
                flex
                justify-between
                items-center
              ">

                                <span className="
                  text-xl
                  font-bold
                ">
                                    Total Amount
                                </span>

                                <h3 className="
                  text-3xl
                  font-extrabold
                  text-orange-500
                  flex
                  items-center
                  gap-2
                ">
                                    <FaMoneyBillWave />

                                    ₹
                                    {
                                        order.totalPrice
                                    }
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;