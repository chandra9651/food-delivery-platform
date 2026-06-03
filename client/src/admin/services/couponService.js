// services/couponService.js

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
   GET ALL COUPONS
====================================================== */

export const getAllCoupons = async (
    page = 1,
    limit = 10,
    search = "",
    status = ""
) => {
    try {
        const response = await API.get(
            "/admin/coupons",
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
                message: "Failed to fetch coupons",
            }
        );
    }
};

/* ======================================================
   GET SINGLE COUPON
====================================================== */

export const getCouponById = async (
    couponId
) => {
    try {
        const response = await API.get(
            `/admin/coupons/${couponId}`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message:
                    "Failed to fetch coupon details",
            }
        );
    }
};

/* ======================================================
   CREATE COUPON
====================================================== */

export const createCoupon = async (
    couponData
) => {
    try {
        const response = await API.post(
            "/admin/coupons",
            couponData
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to create coupon",
            }
        );
    }
};

/* ======================================================
   UPDATE COUPON
====================================================== */

export const updateCoupon = async (
    couponId,
    couponData
) => {
    try {
        const response = await API.put(
            `/admin/coupons/${couponId}`,
            couponData
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to update coupon",
            }
        );
    }
};

/* ======================================================
   DELETE COUPON
====================================================== */

export const deleteCoupon = async (
    couponId
) => {
    try {
        const response = await API.delete(
            `/admin/coupons/${couponId}`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to delete coupon",
            }
        );
    }
};

/* ======================================================
   ACTIVATE COUPON
====================================================== */

export const activateCoupon = async (
    couponId
) => {
    try {
        const response = await API.put(
            `/admin/coupons/${couponId}/activate`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to activate coupon",
            }
        );
    }
};

/* ======================================================
   DEACTIVATE COUPON
====================================================== */

export const deactivateCoupon =
    async (couponId) => {
        try {
            const response = await API.put(
                `/admin/coupons/${couponId}/deactivate`
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to deactivate coupon",
                }
            );
        }
    };

/* ======================================================
   SEARCH COUPONS
====================================================== */

export const searchCoupons = async (
    keyword
) => {
    try {
        const response = await API.get(
            "/admin/coupons/search",
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
                message: "Failed to search coupons",
            }
        );
    }
};

/* ======================================================
   FILTER COUPONS
====================================================== */

export const filterCoupons = async (
    filters
) => {
    try {
        const response = await API.post(
            "/admin/coupons/filter",
            filters
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to filter coupons",
            }
        );
    }
};

/* ======================================================
   GET COUPON ANALYTICS
====================================================== */

export const getCouponAnalytics =
    async () => {
        try {
            const response = await API.get(
                "/admin/coupons/analytics"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch coupon analytics",
                }
            );
        }
    };

/* ======================================================
   EXPORT COUPONS
====================================================== */

export const exportCoupons = async () => {
    try {
        const response = await API.get(
            "/admin/coupons/export",
            {
                responseType: "blob",
            }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to export coupons",
            }
        );
    }
};

/* ======================================================
   VALIDATE COUPON
====================================================== */

export const validateCoupon = async (
    code
) => {
    try {
        const response = await API.post(
            "/admin/coupons/validate",
            { code }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Invalid coupon code",
            }
        );
    }
};

/* ======================================================
   GET EXPIRED COUPONS
====================================================== */

export const getExpiredCoupons =
    async () => {
        try {
            const response = await API.get(
                "/admin/coupons/expired"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch expired coupons",
                }
            );
        }
    };