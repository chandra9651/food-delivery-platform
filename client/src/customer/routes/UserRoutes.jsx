// src/user/routes/UserRoutes.jsx

import { Routes, Route, Navigate } from "react-router-dom";

/* ======================================================
   LAYOUT
====================================================== */

import UserLayout from "../layouts/UserLayout";

/* ======================================================
   AUTH PAGES
====================================================== */

import Login from "../pages/Login";

import Register from "../pages/Register";

/* ======================================================
   USER PAGES
====================================================== */

import Cart from "../pages/Cart";

import Checkout from "../pages/Checkout";

import Orders from "../pages/Orders";

import Profile from "../pages/Profile";

import Wishlist from "../pages/Wishlist";

import Settings from "../pages/Settings";

/* ======================================================
   PROTECTED ROUTE
====================================================== */

const ProtectedRoute = ({ children }) => {

    const userToken = localStorage.getItem("userToken");

    if (!userToken) {
        return (
            <Navigate
                to="/user/login"
                replace
            />
        );
    }

    return children;
};

/* ======================================================
   USER ROUTES
====================================================== */

const UserRoutes = () => {
    return (
        <Routes>

            {/* ======================================================
                AUTH ROUTES
            ====================================================== */}

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            {/* ======================================================
                PROTECTED USER ROUTES
            ====================================================== */}

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <UserLayout />
                    </ProtectedRoute>
                }
            >

                {/* CART */}

                <Route
                    path="cart"
                    element={<Cart />}
                />

                {/* CHECKOUT */}

                <Route
                    path="checkout"
                    element={<Checkout />}
                />

                {/* ORDERS */}

                <Route
                    path="orders"
                    element={<Orders />}
                />

                {/* PROFILE */}

                <Route
                    path="profile"
                    element={<Profile />}
                />

                {/* WISHLIST */}

                <Route
                    path="wishlist"
                    element={<Wishlist />}
                />
                {/* Settings */}
                <Route
                    path="settings"
                    element={<Settings />}
                />
            </Route>

            {/* ======================================================
                FALLBACK
            ====================================================== */}

            <Route
                path="*"
                element={
                    <Navigate
                        to="/user/login"
                        replace
                    />
                }
            />

        </Routes>
    );
};

export default UserRoutes;
