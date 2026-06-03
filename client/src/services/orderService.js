// src/services/orderService.js

import API from "../api/axios";

/* ======================================================
   PLACE ORDER
====================================================== */

export const placeOrder = async (orderData) => {
    const { data } = await API.post(
        "/orders",
        orderData
    );

    return data;
};

/* ======================================================
   GET MY ORDERS
====================================================== */

export const getMyOrders = async () => {
    const { data } = await API.get(
        "/orders/my-orders"
    );

    return data;
};

/* ======================================================
   GET RESTAURANT ORDERS
====================================================== */

export const getRestaurantOrders =
    async () => {
        const { data } = await API.get(
            "/orders/restaurant-orders"
        );

        return data;
    };

/* ======================================================
   UPDATE ORDER STATUS
====================================================== */

export const updateOrderStatus =
    async (id, status) => {
        const { data } = await API.put(
            `/orders/${id}/status`,
            { status }
        );

        return data;
    };