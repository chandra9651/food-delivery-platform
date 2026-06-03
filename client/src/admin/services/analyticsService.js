// services/analyticsService.js

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
   GET DASHBOARD ANALYTICS
====================================================== */

export const getDashboardAnalytics =
    async () => {
        try {
            const response = await API.get(
                "/admin/analytics/dashboard"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch dashboard analytics",
                }
            );
        }
    };

/* ======================================================
   GET REVENUE ANALYTICS
====================================================== */

export const getRevenueAnalytics =
    async (period = "monthly") => {
        try {
            const response = await API.get(
                "/admin/analytics/revenue",
                {
                    params: {
                        period,
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch revenue analytics",
                }
            );
        }
    };

/* ======================================================
   GET ORDER ANALYTICS
====================================================== */

export const getOrderAnalytics =
    async (period = "monthly") => {
        try {
            const response = await API.get(
                "/admin/analytics/orders",
                {
                    params: {
                        period,
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch order analytics",
                }
            );
        }
    };

/* ======================================================
   GET CUSTOMER ANALYTICS
====================================================== */

export const getCustomerAnalytics =
    async (period = "monthly") => {
        try {
            const response = await API.get(
                "/admin/analytics/customers",
                {
                    params: {
                        period,
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch customer analytics",
                }
            );
        }
    };

/* ======================================================
   GET SALES REPORTS
====================================================== */

export const getSalesReports =
    async (startDate, endDate) => {
        try {
            const response = await API.get(
                "/admin/analytics/sales-reports",
                {
                    params: {
                        startDate,
                        endDate,
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch sales reports",
                }
            );
        }
    };

/* ======================================================
   GET TOP SELLING FOODS
====================================================== */

export const getTopSellingFoods =
    async () => {
        try {
            const response = await API.get(
                "/admin/analytics/top-foods"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch top selling foods",
                }
            );
        }
    };

/* ======================================================
   GET TOP RESTAURANTS
====================================================== */

export const getTopRestaurants =
    async () => {
        try {
            const response = await API.get(
                "/admin/analytics/top-restaurants"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch top restaurants",
                }
            );
        }
    };

/* ======================================================
   GET DELIVERY ANALYTICS
====================================================== */

export const getDeliveryAnalytics =
    async () => {
        try {
            const response = await API.get(
                "/admin/analytics/delivery"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch delivery analytics",
                }
            );
        }
    };

/* ======================================================
   GET PAYMENT ANALYTICS
====================================================== */

export const getPaymentAnalytics =
    async () => {
        try {
            const response = await API.get(
                "/admin/analytics/payments"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch payment analytics",
                }
            );
        }
    };

/* ======================================================
   GET USER GROWTH ANALYTICS
====================================================== */

export const getUserGrowthAnalytics =
    async (period = "yearly") => {
        try {
            const response = await API.get(
                "/admin/analytics/user-growth",
                {
                    params: {
                        period,
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch user growth analytics",
                }
            );
        }
    };

/* ======================================================
   GET PLATFORM STATS
====================================================== */

export const getPlatformStats =
    async () => {
        try {
            const response = await API.get(
                "/admin/analytics/platform-stats"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch platform stats",
                }
            );
        }
    };

/* ======================================================
   EXPORT ANALYTICS REPORT
====================================================== */

export const exportAnalyticsReport =
    async (type = "pdf") => {
        try {
            const response = await API.get(
                "/admin/analytics/export",
                {
                    params: {
                        type,
                    },

                    responseType: "blob",
                }
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to export analytics report",
                }
            );
        }
    };

/* ======================================================
   GET REAL TIME ANALYTICS
====================================================== */

export const getRealTimeAnalytics =
    async () => {
        try {
            const response = await API.get(
                "/admin/analytics/realtime"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch realtime analytics",
                }
            );
        }
    };

/* ======================================================
   GET MONTHLY EARNINGS
====================================================== */

export const getMonthlyEarnings =
    async (year) => {
        try {
            const response = await API.get(
                "/admin/analytics/monthly-earnings",
                {
                    params: {
                        year,
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch monthly earnings",
                }
            );
        }
    };