// /client/src/admin/routes/AdminRoutes.jsx


import { Routes, Route, Navigate } from "react-router-dom";

/* LAYOUT */
import AdminLayout from "../components/layout/AdminLayout";

/* AUTH */
import AdminLogin from "../pages/auth/AdminLogin";

/* DASHBOARD */
import DashboardHome from "../pages/DashboardHome";

/* ORDERS */
import Orders from "../pages/orders/Orders";
import OrderDetails from "../pages/orders/OrderDetails";
import PendingOrders from "../pages/orders/PendingOrders";

/* USERS */
import Users from "../pages/users/Users";
import UserDetails from "../pages/users/UserDetails";
import BlockedUsers from "../pages/users/BlockedUsers";

/* RESTAURANTS */
import Restaurants from "../pages/restaurants/Restaurants";
import RestaurantDetails from "../pages/restaurants/RestaurantDetails";
import PendingRestaurants from "../pages/restaurants/PendingRestaurants";
import RestaurantRequests from "../pages/restaurants/RestaurantRequests";

/* FOODS */
import Foods from "../pages/foods/Foods";
import FoodDetails from "../pages/foods/FoodDetails";
import Categories from "../pages/foods/Categories";
import FoodReviews from "../pages/foods/FoodReviews";

/* DELIVERY */
import DeliveryPartners from "../pages/delivery/DeliveryPartners";
import ActiveDeliveries from "../pages/delivery/ActiveDeliveries";
import DeliveryReports from "../pages/delivery/DeliveryReports";

/* ANALYTICS */
import RevenueAnalytics from "../pages/analytics/RevenueAnalytics";
import OrdersAnalytics from "../pages/analytics/OrdersAnalytics";
import SalesReports from "../pages/analytics/SalesReports";
import CustomerAnalytics from "../pages/analytics/CustomerAnalytics";

/* PAYMENTS */
import Transactions from "../pages/payments/Transactions";
import Refunds from "../pages/payments/Refunds";
import PaymentSettings from "../pages/payments/PaymentSettings";
import PaymentGateway from "../pages/settings/PaymentGateway";

/* MARKETING */
import Coupons from "../pages/coupons/Coupons";
import CreateCoupon from "../pages/coupons/CreateCoupon";
import Notifications from "../pages/notifications/Notifications";
import SendNotification from "../pages/notifications/SendNotification";

/* SETTINGS */
import GeneralSettings from "../pages/settings/GeneralSettings";
import DeliverySettings from "../pages/settings/DeliverySettings";
import AdminProfile from "../pages/settings/AdminProfile";

/* ------------------------------------------------------- */
/* PROTECTED ROUTE */
/* ------------------------------------------------------- */

const ProtectedRoute = ({ children }) => {
    const adminToken = localStorage.getItem("adminToken");

    if (!adminToken) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

/* ------------------------------------------------------- */
/* ADMIN ROUTES */
/* ------------------------------------------------------- */

const AdminRoutes = () => {
    return (
        <Routes>
            {/* LOGIN */}

            <Route
                path="/login"
                element={<AdminLogin />}
            />

            {/* PROTECTED ROUTES */}

            <Route
                path="/"
                element={
                    // <ProtectedRoute>
                    <AdminLayout />
                    // </ProtectedRoute>
                }
            >
                {/* DASHBOARD */}

                <Route
                    index
                    element={<DashboardHome />}
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

                <Route
                    path="pending-orders"
                    element={<PendingOrders />}
                />

                {/* USERS */}

                <Route
                    path="users"
                    element={<Users />}
                />

                <Route
                    path="users/:id"
                    element={<UserDetails />}
                />

                <Route
                    path="blocked-users"
                    element={<BlockedUsers />}
                />

                {/* RESTAURANTS */}

                <Route
                    path="restaurants"
                    element={<Restaurants />}
                />

                <Route
                    path="restaurants/:id"
                    element={<RestaurantDetails />}
                />

                <Route
                    path="pending-restaurants"
                    element={<PendingRestaurants />}
                />

                <Route
                    path="restaurant-requests"
                    element={<RestaurantRequests />}
                />

                {/* FOODS */}

                <Route
                    path="foods"
                    element={<Foods />}
                />

                <Route
                    path="foods/:id"
                    element={<FoodDetails />}
                />

                <Route
                    path="categories"
                    element={<Categories />}
                />

                <Route
                    path="food-reviews"
                    element={<FoodReviews />}
                />

                {/* DELIVERY */}

                <Route
                    path="delivery-partners"
                    element={<DeliveryPartners />}
                />

                <Route
                    path="active-deliveries"
                    element={<ActiveDeliveries />}
                />

                <Route
                    path="delivery-reports"
                    element={<DeliveryReports />}
                />

                {/* ANALYTICS */}

                <Route
                    path="revenue-analytics"
                    element={<RevenueAnalytics />}
                />

                <Route
                    path="orders-analytics"
                    element={<OrdersAnalytics />}
                />

                <Route
                    path="sales-reports"
                    element={<SalesReports />}
                />

                <Route
                    path="customer-analytics"
                    element={<CustomerAnalytics />}
                />

                {/* PAYMENTS */}

                <Route
                    path="transactions"
                    element={<Transactions />}
                />

                <Route
                    path="refunds"
                    element={<Refunds />}
                />

                <Route
                    path="payment-settings"
                    element={<PaymentSettings />}
                />

                <Route
                    path="payment-gateway"
                    element={<PaymentGateway />}
                />

                {/* MARKETING */}

                <Route
                    path="coupons"
                    element={<Coupons />}
                />

                <Route
                    path="create-coupon"
                    element={<CreateCoupon />}
                />

                <Route
                    path="notifications"
                    element={<Notifications />}
                />

                <Route
                    path="send-notification"
                    element={<SendNotification />}
                />

                {/* SETTINGS */}

                <Route
                    path="general-settings"
                    element={<GeneralSettings />}
                />

                <Route
                    path="delivery-settings"
                    element={<DeliverySettings />}
                />

                <Route
                    path="admin-profile"
                    element={<AdminProfile />}
                />
            </Route>

            {/* FALLBACK */}

            <Route
                path="*"
                element={
                    <Navigate to="/admin" replace />
                }
            />
        </Routes>
    );
};

export default AdminRoutes;