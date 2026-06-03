// hooks/useAdminAuth.js

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

/* ======================================================
   CUSTOM HOOK
====================================================== */

const useAdminAuth = () => {
    const navigate = useNavigate();

    /* ======================================================
       STATES
    ====================================================== */

    const [admin, setAdmin] = useState(null);

    const [loading, setLoading] = useState(true);

    const [isAuthenticated, setIsAuthenticated] =
        useState(false);

    /* ======================================================
       VERIFY ADMIN
    ====================================================== */

    const verifyAdmin = async () => {
        try {
            setLoading(true);

            const token =
                localStorage.getItem("adminToken");

            /* TOKEN NOT FOUND */

            if (!token) {
                setIsAuthenticated(false);

                setAdmin(null);

                setLoading(false);

                navigate("/admin/login");

                return;
            }

            /* API CALL */

            const response = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL ||
                "http://localhost:5000/api"
                }/admin/auth/me`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                    withCredentials: true,
                }
            );

            /* SUCCESS */

            setAdmin(response.data.admin);

            setIsAuthenticated(true);
        } catch (error) {
            console.error(
                "Admin authentication failed:",
                error
            );

            /* REMOVE INVALID TOKEN */

            localStorage.removeItem("adminToken");

            setAdmin(null);

            setIsAuthenticated(false);

            navigate("/admin/login");
        } finally {
            setLoading(false);
        }
    };

    /* ======================================================
       LOGIN
    ====================================================== */

    const loginAdmin = async (
        email,
        password
    ) => {
        try {
            setLoading(true);

            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL ||
                "http://localhost:5000/api"
                }/admin/auth/login`,
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            );

            /* SAVE TOKEN */

            localStorage.setItem(
                "adminToken",
                response.data.token
            );

            /* SAVE ADMIN */

            setAdmin(response.data.admin);

            setIsAuthenticated(true);

            /* REDIRECT */

            navigate("/admin");

            return {
                success: true,

                data: response.data,
            };
        } catch (error) {
            console.error(
                "Admin login failed:",
                error
            );

            return {
                success: false,

                message:
                    error.response?.data?.message ||
                    "Login failed",
            };
        } finally {
            setLoading(false);
        }
    };

    /* ======================================================
       LOGOUT
    ====================================================== */

    const logoutAdmin = async () => {
        try {
            setLoading(true);

            const token =
                localStorage.getItem("adminToken");

            /* OPTIONAL API LOGOUT */

            await axios.post(
                `${import.meta.env.VITE_API_BASE_URL ||
                "http://localhost:5000/api"
                }/admin/auth/logout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                    withCredentials: true,
                }
            );
        } catch (error) {
            console.error(
                "Logout API failed:",
                error
            );
        } finally {
            /* CLEAR LOCAL DATA */

            localStorage.removeItem("adminToken");

            setAdmin(null);

            setIsAuthenticated(false);

            setLoading(false);

            navigate("/admin/login");
        }
    };

    /* ======================================================
       UPDATE PROFILE
    ====================================================== */

    const updateAdminProfile = async (
        profileData
    ) => {
        try {
            const token =
                localStorage.getItem("adminToken");

            const response = await axios.put(
                `${import.meta.env.VITE_API_BASE_URL ||
                "http://localhost:5000/api"
                }/admin/auth/profile`,
                profileData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                    withCredentials: true,
                }
            );

            setAdmin(response.data.admin);

            return {
                success: true,

                data: response.data,
            };
        } catch (error) {
            return {
                success: false,

                message:
                    error.response?.data?.message ||
                    "Failed to update profile",
            };
        }
    };

    /* ======================================================
       CHANGE PASSWORD
    ====================================================== */

    const changePassword = async (
        currentPassword,
        newPassword
    ) => {
        try {
            const token =
                localStorage.getItem("adminToken");

            const response = await axios.put(
                `${import.meta.env.VITE_API_BASE_URL ||
                "http://localhost:5000/api"
                }/admin/auth/change-password`,
                {
                    currentPassword,
                    newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                    withCredentials: true,
                }
            );

            return {
                success: true,

                data: response.data,
            };
        } catch (error) {
            return {
                success: false,

                message:
                    error.response?.data?.message ||
                    "Failed to change password",
            };
        }
    };

    /* ======================================================
       AUTO VERIFY
    ====================================================== */

    useEffect(() => {
        verifyAdmin();
    }, []);

    /* ======================================================
       RETURN
    ====================================================== */

    return {
        admin,

        loading,

        isAuthenticated,

        loginAdmin,

        logoutAdmin,

        verifyAdmin,

        updateAdminProfile,

        changePassword,
    };
};

export default useAdminAuth;