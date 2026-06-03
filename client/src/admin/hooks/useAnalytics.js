// hooks/useAnalytics.js

import { useEffect, useState } from "react";

import {
    getDashboardAnalytics,
    getRevenueAnalytics,
    getOrderAnalytics,
    getCustomerAnalytics,
    getSalesReports,
    getTopSellingFoods,
    getTopRestaurants,
    getDeliveryAnalytics,
    getPaymentAnalytics,
    getUserGrowthAnalytics,
    getPlatformStats,
    getRealTimeAnalytics,
    getMonthlyEarnings,
} from "../services/analyticsService";

/* ======================================================
   CUSTOM ANALYTICS HOOK
====================================================== */

const useAnalytics = () => {
    /* ======================================================
       STATES
    ====================================================== */

    const [dashboardData, setDashboardData] =
        useState(null);

    const [revenueData, setRevenueData] =
        useState(null);

    const [orderData, setOrderData] =
        useState(null);

    const [customerData, setCustomerData] =
        useState(null);

    const [salesReports, setSalesReports] =
        useState([]);

    const [topFoods, setTopFoods] = useState([]);

    const [topRestaurants, setTopRestaurants] =
        useState([]);

    const [deliveryAnalytics, setDeliveryAnalytics] =
        useState(null);

    const [paymentAnalytics, setPaymentAnalytics] =
        useState(null);

    const [userGrowth, setUserGrowth] =
        useState(null);

    const [platformStats, setPlatformStats] =
        useState(null);

    const [realTimeAnalytics, setRealTimeAnalytics] =
        useState(null);

    const [monthlyEarnings, setMonthlyEarnings] =
        useState([]);

    const [loading, setLoading] =
        useState(false);

    const [error, setError] = useState(null);

    /* ======================================================
       FETCH DASHBOARD ANALYTICS
    ====================================================== */

    const fetchDashboardAnalytics =
        async () => {
            try {
                setLoading(true);

                const data =
                    await getDashboardAnalytics();

                setDashboardData(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch dashboard analytics"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       FETCH REVENUE ANALYTICS
    ====================================================== */

    const fetchRevenueAnalytics =
        async (period = "monthly") => {
            try {
                setLoading(true);

                const data =
                    await getRevenueAnalytics(period);

                setRevenueData(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch revenue analytics"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       FETCH ORDER ANALYTICS
    ====================================================== */

    const fetchOrderAnalytics =
        async (period = "monthly") => {
            try {
                setLoading(true);

                const data =
                    await getOrderAnalytics(period);

                setOrderData(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch order analytics"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       FETCH CUSTOMER ANALYTICS
    ====================================================== */

    const fetchCustomerAnalytics =
        async (period = "monthly") => {
            try {
                setLoading(true);

                const data =
                    await getCustomerAnalytics(period);

                setCustomerData(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch customer analytics"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       FETCH SALES REPORTS
    ====================================================== */

    const fetchSalesReports =
        async (startDate, endDate) => {
            try {
                setLoading(true);

                const data = await getSalesReports(
                    startDate,
                    endDate
                );

                setSalesReports(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch sales reports"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       FETCH TOP FOODS
    ====================================================== */

    const fetchTopFoods = async () => {
        try {
            setLoading(true);

            const data =
                await getTopSellingFoods();

            setTopFoods(data);
        } catch (error) {
            setError(
                error.message ||
                "Failed to fetch top foods"
            );
        } finally {
            setLoading(false);
        }
    };

    /* ======================================================
       FETCH TOP RESTAURANTS
    ====================================================== */

    const fetchTopRestaurants =
        async () => {
            try {
                setLoading(true);

                const data =
                    await getTopRestaurants();

                setTopRestaurants(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch top restaurants"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       FETCH DELIVERY ANALYTICS
    ====================================================== */

    const fetchDeliveryAnalytics =
        async () => {
            try {
                setLoading(true);

                const data =
                    await getDeliveryAnalytics();

                setDeliveryAnalytics(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch delivery analytics"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       FETCH PAYMENT ANALYTICS
    ====================================================== */

    const fetchPaymentAnalytics =
        async () => {
            try {
                setLoading(true);

                const data =
                    await getPaymentAnalytics();

                setPaymentAnalytics(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch payment analytics"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       FETCH USER GROWTH ANALYTICS
    ====================================================== */

    const fetchUserGrowthAnalytics =
        async (period = "yearly") => {
            try {
                setLoading(true);

                const data =
                    await getUserGrowthAnalytics(
                        period
                    );

                setUserGrowth(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch user growth analytics"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       FETCH PLATFORM STATS
    ====================================================== */

    const fetchPlatformStats =
        async () => {
            try {
                setLoading(true);

                const data =
                    await getPlatformStats();

                setPlatformStats(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch platform stats"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       FETCH REALTIME ANALYTICS
    ====================================================== */

    const fetchRealTimeAnalytics =
        async () => {
            try {
                const data =
                    await getRealTimeAnalytics();

                setRealTimeAnalytics(data);
            } catch (error) {
                console.error(error);
            }
        };

    /* ======================================================
       FETCH MONTHLY EARNINGS
    ====================================================== */

    const fetchMonthlyEarnings =
        async (year) => {
            try {
                setLoading(true);

                const data =
                    await getMonthlyEarnings(year);

                setMonthlyEarnings(data);
            } catch (error) {
                setError(
                    error.message ||
                    "Failed to fetch monthly earnings"
                );
            } finally {
                setLoading(false);
            }
        };

    /* ======================================================
       REFRESH ALL ANALYTICS
    ====================================================== */

    const refreshAnalytics = async () => {
        await Promise.all([
            fetchDashboardAnalytics(),
            fetchRevenueAnalytics(),
            fetchOrderAnalytics(),
            fetchCustomerAnalytics(),
            fetchTopFoods(),
            fetchTopRestaurants(),
            fetchDeliveryAnalytics(),
            fetchPaymentAnalytics(),
            fetchUserGrowthAnalytics(),
            fetchPlatformStats(),
        ]);
    };

    /* ======================================================
       AUTO LOAD DASHBOARD
    ====================================================== */

    useEffect(() => {
        fetchDashboardAnalytics();

        fetchRevenueAnalytics();

        fetchOrderAnalytics();

        fetchCustomerAnalytics();

        fetchTopFoods();

        fetchTopRestaurants();

        fetchPlatformStats();

        fetchPaymentAnalytics();
    }, []);

    /* ======================================================
       REALTIME REFRESH
    ====================================================== */

    useEffect(() => {
        fetchRealTimeAnalytics();

        const interval = setInterval(() => {
            fetchRealTimeAnalytics();
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    /* ======================================================
       RETURN
    ====================================================== */

    return {
        dashboardData,

        revenueData,

        orderData,

        customerData,

        salesReports,

        topFoods,

        topRestaurants,

        deliveryAnalytics,

        paymentAnalytics,

        userGrowth,

        platformStats,

        realTimeAnalytics,

        monthlyEarnings,

        loading,

        error,

        fetchDashboardAnalytics,

        fetchRevenueAnalytics,

        fetchOrderAnalytics,

        fetchCustomerAnalytics,

        fetchSalesReports,

        fetchTopFoods,

        fetchTopRestaurants,

        fetchDeliveryAnalytics,

        fetchPaymentAnalytics,

        fetchUserGrowthAnalytics,

        fetchPlatformStats,

        fetchRealTimeAnalytics,

        fetchMonthlyEarnings,

        refreshAnalytics,
    };
};

export default useAnalytics;