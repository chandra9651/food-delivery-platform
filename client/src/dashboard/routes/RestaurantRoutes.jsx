// src/restaurant/routes/RestaurantRoutes.jsx

import { Routes, Route, Navigate } from "react-router-dom";

/* ======================================================
   LAYOUT
====================================================== */

import DashboardLayout from "../layouts/DashboardLayout";

/* ======================================================
   AUTH
====================================================== */

import RestaurantLogin from "../auth/RestaurantLogin";

import RestaurantRegister from "../auth/RestaurantRegister";

/* ======================================================
   DASHBOARD
====================================================== */

import DashboardHome from "../pages/DashboardHome";

/* ======================================================
   FOODS
====================================================== */

import AddFood from "../pages/foods/AddFood";

import ManageFoods from "../pages/foods/ManageFoods";

import EditFood from "../pages/foods/EditFood";

/* ======================================================
   ORDERS
====================================================== */

import Orders from "../pages/orders/Orders";

import OrderDetails from "../pages/orders/OrderDetails";

/* ======================================================
   EARNINGS
====================================================== */

import Earnings from "../pages/earnings/Earnings";

/* ======================================================
   SETTINGS
====================================================== */

import Settings from "../pages/settings/Settings";

import RestaurantProfile from "../pages/settings/RestaurantProfile";

/* ======================================================
   PROTECTED ROUTE
====================================================== */

const ProtectedRoute = ({ children }) => {

    const restaurantToken =
        localStorage.getItem("restaurantToken");

    if (!restaurantToken) {
        return (
            <Navigate
                to="/restaurant/login"
                replace
            />
        );
    }

    return children;
};

/* ======================================================
   RESTAURANT ROUTES
====================================================== */

const RestaurantRoutes = () => {
    return (
        <Routes>

            {/* ======================================================
                LOGIN
            ====================================================== */}

            <Route
                path="/login"
                element={<RestaurantLogin />}
            />

            {/* ======================================================
                REGISTER
            ====================================================== */}

            <Route
                path="/register"
                element={<RestaurantRegister />}
            />



            {/* ======================================================
                PROTECTED ROUTES
            ====================================================== */}

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >

                {/* DASHBOARD */}

                <Route
                    index
                    element={<DashboardHome />}
                />

                {/* FOODS */}

                <Route
                    path="add-food"
                    element={<AddFood />}
                />

                <Route
                    path="manage-foods"
                    element={<ManageFoods />}
                />

                <Route
                    path="edit-food/:id"
                    element={<EditFood />}
                />

                {/* ORDERS */}

                <Route
                    path="orders"
                    element={<Orders />}
                />

                <Route
                    path="orders/:id"
                    element={<OrderDetails />}
                />

                {/* EARNINGS */}

                <Route
                    path="earnings"
                    element={<Earnings />}
                />

                {/* SETTINGS */}

                <Route
                    path="settings"
                    element={<Settings />}
                />

                <Route
                    path="profile"
                    element={<RestaurantProfile />}
                />

            </Route>

            {/* ======================================================
                FALLBACK
            ====================================================== */}

            <Route
                path="*"
                element={
                    <Navigate
                        to="/restaurant/login"
                        replace
                    />
                }
            />

        </Routes>
    );
};

export default RestaurantRoutes;