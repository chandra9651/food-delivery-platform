// services/restaurantService.js

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
   GET ALL RESTAURANTS
====================================================== */

export const getAllRestaurants = async (
    page = 1,
    limit = 10,
    search = "",
    status = ""
) => {
    try {
        const response = await API.get(
            "/admin/restaurants",
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
                message: "Failed to fetch restaurants",
            }
        );
    }
};

/* ======================================================
   GET SINGLE RESTAURANT
====================================================== */

export const getRestaurantById = async (
    restaurantId
) => {
    try {
        const response = await API.get(
            `/admin/restaurants/${restaurantId}`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message:
                    "Failed to fetch restaurant details",
            }
        );
    }
};

/* ======================================================
   APPROVE RESTAURANT
====================================================== */

export const approveRestaurant = async (
    restaurantId
) => {
    try {
        const response = await API.put(
            `/admin/restaurants/${restaurantId}/approve`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to approve restaurant",
            }
        );
    }
};

/* ======================================================
   REJECT RESTAURANT
====================================================== */

export const rejectRestaurant = async (
    restaurantId,
    reason = ""
) => {
    try {
        const response = await API.put(
            `/admin/restaurants/${restaurantId}/reject`,
            { reason }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to reject restaurant",
            }
        );
    }
};

/* ======================================================
   BLOCK RESTAURANT
====================================================== */

export const blockRestaurant = async (
    restaurantId,
    reason = ""
) => {
    try {
        const response = await API.put(
            `/admin/restaurants/${restaurantId}/block`,
            { reason }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to block restaurant",
            }
        );
    }
};

/* ======================================================
   UNBLOCK RESTAURANT
====================================================== */

export const unblockRestaurant = async (
    restaurantId
) => {
    try {
        const response = await API.put(
            `/admin/restaurants/${restaurantId}/unblock`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message:
                    "Failed to unblock restaurant",
            }
        );
    }
};

/* ======================================================
   DELETE RESTAURANT
====================================================== */

export const deleteRestaurant = async (
    restaurantId
) => {
    try {
        const response = await API.delete(
            `/admin/restaurants/${restaurantId}`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to delete restaurant",
            }
        );
    }
};

/* ======================================================
   GET PENDING RESTAURANTS
====================================================== */

export const getPendingRestaurants =
    async () => {
        try {
            const response = await API.get(
                "/admin/restaurants/pending"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch pending restaurants",
                }
            );
        }
    };

/* ======================================================
   SEARCH RESTAURANTS
====================================================== */

export const searchRestaurants = async (
    keyword
) => {
    try {
        const response = await API.get(
            "/admin/restaurants/search",
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
                message: "Failed to search restaurants",
            }
        );
    }
};

/* ======================================================
   FILTER RESTAURANTS
====================================================== */

export const filterRestaurants = async (
    filters
) => {
    try {
        const response = await API.post(
            "/admin/restaurants/filter",
            filters
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message:
                    "Failed to filter restaurants",
            }
        );
    }
};

/* ======================================================
   GET RESTAURANT ANALYTICS
====================================================== */

export const getRestaurantAnalytics =
    async () => {
        try {
            const response = await API.get(
                "/admin/restaurants/analytics"
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch restaurant analytics",
                }
            );
        }
    };

/* ======================================================
   EXPORT RESTAURANTS
====================================================== */

export const exportRestaurants = async () => {
    try {
        const response = await API.get(
            "/admin/restaurants/export",
            {
                responseType: "blob",
            }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to export restaurants",
            }
        );
    }
};

/* ======================================================
   UPDATE RESTAURANT STATUS
====================================================== */

export const updateRestaurantStatus =
    async (restaurantId, status) => {
        try {
            const response = await API.put(
                `/admin/restaurants/${restaurantId}/status`,
                { status }
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to update restaurant status",
                }
            );
        }
    };

/* ======================================================
   GET RESTAURANT REVIEWS
====================================================== */

export const getRestaurantReviews =
    async (restaurantId) => {
        try {
            const response = await API.get(
                `/admin/restaurants/${restaurantId}/reviews`
            );

            return response.data;
        } catch (error) {
            throw (
                error.response?.data || {
                    message:
                        "Failed to fetch restaurant reviews",
                }
            );
        }
    };