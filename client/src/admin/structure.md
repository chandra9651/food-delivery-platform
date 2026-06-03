src/
│
├── admin/
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── AdminSidebar.jsx
│   │   │   ├── AdminNavbar.jsx
│   │   │   ├── MobileSidebar.jsx
│   │   │   └── AdminLayout.jsx
│   │   │
│   │   ├── cards/
│   │   │   ├── StatsCard.jsx
│   │   │   ├── RevenueCard.jsx
│   │   │   ├── OrdersCard.jsx
│   │   │   ├── RestaurantCard.jsx
│   │   │   └── UserCard.jsx
│   │   │
│   │   ├── tables/
│   │   │   ├── OrdersTable.jsx
│   │   │   ├── UsersTable.jsx
│   │   │   ├── RestaurantsTable.jsx
│   │   │   ├── FoodsTable.jsx
│   │   │   ├── DeliveryTable.jsx
│   │   │   └── ReviewsTable.jsx
│   │   │
│   │   ├── charts/
│   │   │   ├── RevenueChart.jsx
│   │   │   ├── OrdersChart.jsx
│   │   │   ├── UserGrowthChart.jsx
│   │   │   └── SalesAnalytics.jsx
│   │   │
│   │   ├── forms/
│   │   │   ├── CouponForm.jsx
│   │   │   ├── CategoryForm.jsx
│   │   │   ├── NotificationForm.jsx
│   │   │   └── SettingsForm.jsx
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Modal.jsx
│   │       ├── Loader.jsx
│   │       ├── EmptyState.jsx
│   │       ├── StatusBadge.jsx
│   │       └── ConfirmDialog.jsx
│   │
│   ├── pages/
│   │   │
│   │   ├── DashboardHome.jsx
│   │   │
│   │   ├── orders/
│   │   │   ├── Orders.jsx
│   │   │   ├── OrderDetails.jsx
│   │   │   └── PendingOrders.jsx
│   │   │
│   │   ├── users/
│   │   │   ├── Users.jsx
│   │   │   ├── UserDetails.jsx
│   │   │   └── BlockedUsers.jsx
│   │   │
│   │   ├── restaurants/
│   │   │   ├── Restaurants.jsx
│   │   │   ├── RestaurantDetails.jsx
│   │   │   ├── PendingRestaurants.jsx
│   │   │   └── RestaurantRequests.jsx
│   │   │
│   │   ├── foods/
│   │   │   ├── Foods.jsx
│   │   │   ├── FoodDetails.jsx
│   │   │   ├── Categories.jsx
│   │   │   └── FoodReviews.jsx
│   │   │
│   │   ├── delivery/
│   │   │   ├── DeliveryPartners.jsx
│   │   │   ├── ActiveDeliveries.jsx
│   │   │   └── DeliveryReports.jsx
│   │   │
│   │   ├── analytics/
│   │   │   ├── RevenueAnalytics.jsx
│   │   │   ├── OrdersAnalytics.jsx
│   │   │   ├── SalesReports.jsx
│   │   │   └── CustomerAnalytics.jsx
│   │   │
│   │   ├── payments/
│   │   │   ├── Transactions.jsx
│   │   │   ├── Refunds.jsx
│   │   │   └── PaymentSettings.jsx
│   │   │
│   │   ├── coupons/
│   │   │   ├── Coupons.jsx
│   │   │   └── CreateCoupon.jsx
│   │   │
│   │   ├── notifications/
│   │   │   ├── Notifications.jsx
│   │   │   └── SendNotification.jsx
│   │   │
│   │   ├── settings/
│   │   │   ├── GeneralSettings.jsx
│   │   │   ├── DeliverySettings.jsx
│   │   │   ├── PaymentGateway.jsx
│   │   │   └── AdminProfile.jsx
│   │   │
│   │   └── auth/
│   │       └── AdminLogin.jsx
│   │
│   ├── routes/
│   │   └── AdminRoutes.jsx
│   │
│   ├── services/
│   │   ├── orderService.js
│   │   ├── userService.js
│   │   ├── restaurantService.js
│   │   ├── analyticsService.js
│   │   ├── paymentService.js
│   │   └── couponService.js
│   │
│   ├── hooks/
│   │   ├── useAdminAuth.js
│   │   ├── useSidebar.js
│   │   └── useAnalytics.js
│   │
│   ├── utils/
│   │   ├── formatCurrency.js
│   │   ├── formatDate.js
│   │   ├── statusColor.js
│   │   └── generateReport.js
│   │
│   └── constants/
│       ├── sidebarLinks.js
│       ├── orderStatus.js
│       └── dashboardStats.js
│
└── App.jsx