// services/userService.js

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
   GET ALL USERS
====================================================== */

export const getAllUsers = async (
    page = 1,
    limit = 10,
    search = "",
    status = ""
) => {
    try {
        const response = await API.get("/admin/users", {
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
                message: "Failed to fetch users",
            }
        );
    }
};

/* ======================================================
   GET SINGLE USER
====================================================== */

export const getUserById = async (userId) => {
    try {
        const response = await API.get(
            `/admin/users/${userId}`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to fetch user details",
            }
        );
    }
};

/* ======================================================
   UPDATE USER
====================================================== */

export const updateUser = async (
    userId,
    userData
) => {
    try {
        const response = await API.put(
            `/admin/users/${userId}`,
            userData
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to update user",
            }
        );
    }
};

/* ======================================================
   BLOCK USER
====================================================== */

export const blockUser = async (
    userId,
    reason = ""
) => {
    try {
        const response = await API.put(
            `/admin/users/${userId}/block`,
            { reason }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to block user",
            }
        );
    }
};

/* ======================================================
   UNBLOCK USER
====================================================== */

export const unblockUser = async (userId) => {
    try {
        const response = await API.put(
            `/admin/users/${userId}/unblock`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to unblock user",
            }
        );
    }
};

/* ======================================================
   DELETE USER
====================================================== */

export const deleteUser = async (userId) => {
    try {
        const response = await API.delete(
            `/admin/users/${userId}`
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to delete user",
            }
        );
    }
};

/* ======================================================
   GET BLOCKED USERS
====================================================== */

export const getBlockedUsers = async () => {
    try {
        const response = await API.get(
            "/admin/users/blocked"
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to fetch blocked users",
            }
        );
    }
};

/* ======================================================
   SEARCH USERS
====================================================== */

export const searchUsers = async (keyword) => {
    try {
        const response = await API.get(
            "/admin/users/search",
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
                message: "Failed to search users",
            }
        );
    }
};

/* ======================================================
   FILTER USERS
====================================================== */

export const filterUsers = async (filters) => {
    try {
        const response = await API.post(
            "/admin/users/filter",
            filters
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to filter users",
            }
        );
    }
};

/* ======================================================
   GET USER ANALYTICS
====================================================== */

export const getUserAnalytics = async () => {
    try {
        const response = await API.get(
            "/admin/users/analytics"
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to fetch user analytics",
            }
        );
    }
};

/* ======================================================
   EXPORT USERS
====================================================== */

export const exportUsers = async () => {
    try {
        const response = await API.get(
            "/admin/users/export",
            {
                responseType: "blob",
            }
        );

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to export users",
            }
        );
    }
};