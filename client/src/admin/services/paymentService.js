// services/paymentService.js

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
   GET ALL TRANSACTIONS
====================================================== */

export const getAllTransactions =
    async (
        page = 1,
        limit = 10,
        search = "",
        status = ""
    ) => {
        try {
            const response = await API.get(
                "/admin/payments/transactions",
                {
                    params: {
                        page,
                        limit,
                        search,
                        status,
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch transactions",
                }
            );
        }
    };

/* ======================================================
   GET SINGLE TRANSACTION
====================================================== */

export const getTransactionById =
    async (transactionId) => {
        try {
            const response = await API.get(
                `/admin/payments/transactions/${transactionId}`
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch transaction details",
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
                "/admin/payments/analytics"
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
   GET ALL REFUNDS
====================================================== */

export const getAllRefunds = async (
    page = 1,
    limit = 10,
    status = ""
) => {
    try {
        const response = await API.get(
            "/admin/payments/refunds",
            {
                params: {
                    page,
                    limit,
                    status,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to fetch refunds",
            }
        );
    }
};

/* ======================================================
   APPROVE REFUND
====================================================== */

export const approveRefund = async (
    refundId
) => {
    try {
        const response = await API.put(
            `/admin/payments/refunds/${refundId}/approve`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to approve refund",
            }
        );
    }
};

/* ======================================================
   REJECT REFUND
====================================================== */

export const rejectRefund = async (
    refundId,
    reason = ""
) => {
    try {
        const response = await API.put(
            `/admin/payments/refunds/${refundId}/reject`,
            { reason }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to reject refund",
            }
        );
    }
};

/* ======================================================
   UPDATE PAYMENT SETTINGS
====================================================== */

export const updatePaymentSettings =
    async (settingsData) => {
        try {
            const response = await API.put(
                "/admin/payments/settings",
                settingsData
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to update payment settings",
                }
            );
        }
    };

/* ======================================================
   GET PAYMENT SETTINGS
====================================================== */

export const getPaymentSettings =
    async () => {
        try {
            const response = await API.get(
                "/admin/payments/settings"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch payment settings",
                }
            );
        }
    };

/* ======================================================
   UPDATE PAYMENT GATEWAY
====================================================== */

export const updatePaymentGateway =
    async (gatewayData) => {
        try {
            const response = await API.put(
                "/admin/payments/gateway",
                gatewayData
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to update payment gateway",
                }
            );
        }
    };

/* ======================================================
   GET PAYMENT GATEWAY
====================================================== */

export const getPaymentGateway =
    async () => {
        try {
            const response = await API.get(
                "/admin/payments/gateway"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch payment gateway settings",
                }
            );
        }
    };

/* ======================================================
   SEARCH TRANSACTIONS
====================================================== */

export const searchTransactions =
    async (keyword) => {
        try {
            const response = await API.get(
                "/admin/payments/search",
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
                    message:
                        "Failed to search transactions",
                }
            );
        }
    };

/* ======================================================
   FILTER TRANSACTIONS
====================================================== */

export const filterTransactions =
    async (filters) => {
        try {
            const response = await API.post(
                "/admin/payments/filter",
                filters
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to filter transactions",
                }
            );
        }
    };

/* ======================================================
   EXPORT TRANSACTIONS
====================================================== */

export const exportTransactions =
    async () => {
        try {
            const response = await API.get(
                "/admin/payments/export",
                {
                    responseType: "blob",
                }
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to export transactions",
                }
            );
        }
    };

/* ======================================================
   VERIFY TRANSACTION
====================================================== */

export const verifyTransaction =
    async (transactionId) => {
        try {
            const response = await API.put(
                `/admin/payments/transactions/${transactionId}/verify`
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to verify transaction",
                }
            );
        }
    };