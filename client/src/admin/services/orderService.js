// services/orderService.js

import axios from "axios";

/* ======================================================
   AXIOS INSTANCE
====================================================== */

const API = axios.create({
    baseURL:
        import.meta.env.VITE_API_BASE_URL ||
        "http://localhost:5000/api",

    withCredentials: true,
});

/* ======================================================
   AUTH TOKEN
====================================================== */

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("adminToken");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

/* ======================================================
   GET ALL ORDERS
====================================================== */

export const getAllOrders = async (
    page = 1,
    limit = 10,
    search = "",
    status = ""
) => {
    try {
        const response = await API.get("/admin/orders", {
            params: {
                page,
                limit,
                search,
                status,
            },
        });

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to fetch orders",
            }
        );
    }
};

/* ======================================================
   GET SINGLE ORDER
====================================================== */

export const getOrderById = async (orderId) => {
    try {
        const response = await API.get(
            `/admin/orders/${orderId}`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to fetch order details",
            }
        );
    }
};

/* ======================================================
   UPDATE ORDER STATUS
====================================================== */

export const updateOrderStatus = async (
    orderId,
    status
) => {
    try {
        const response = await API.put(
            `/admin/orders/${orderId}/status`,
            { status }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to update order status",
            }
        );
    }
};

/* ======================================================
   ASSIGN DELIVERY PARTNER
====================================================== */

export const assignDeliveryPartner = async (
    orderId,
    deliveryPartnerId
) => {
    try {
        const response = await API.put(
            `/admin/orders/${orderId}/assign-delivery`,
            {
                deliveryPartnerId,
            }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to assign delivery partner",
            }
        );
    }
};

/* ======================================================
   DELETE ORDER
====================================================== */

export const deleteOrder = async (orderId) => {
    try {
        const response = await API.delete(
            `/admin/orders/${orderId}`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to delete order",
            }
        );
    }
};

/* ======================================================
   GET PENDING ORDERS
====================================================== */

export const getPendingOrders = async () => {
    try {
        const response = await API.get(
            "/admin/orders/pending"
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to fetch pending orders",
            }
        );
    }
};

/* ======================================================
   GET ORDER ANALYTICS
====================================================== */

export const getOrderAnalytics = async () => {
    try {
        const response = await API.get(
            "/admin/orders/analytics"
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to fetch order analytics",
            }
        );
    }
};

/* ======================================================
   EXPORT ORDERS
====================================================== */

export const exportOrders = async () => {
    try {
        const response = await API.get(
            "/admin/orders/export",
            {
                responseType: "blob",
            }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to export orders",
            }
        );
    }
};

/* ======================================================
   SEARCH ORDERS
====================================================== */

export const searchOrders = async (keyword) => {
    try {
        const response = await API.get(
            "/admin/orders/search",
            {
                params: {
                    keyword,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to search orders",
            }
        );
    }
};

/* ======================================================
   FILTER ORDERS
====================================================== */

export const filterOrders = async (filters) => {
    try {
        const response = await API.post(
            "/admin/orders/filter",
            filters
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to filter orders",
            }
        );
    }
};