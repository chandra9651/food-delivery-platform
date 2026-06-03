// constants/orderStatus.js

/* ======================================================
   ORDER STATUS LIST
====================================================== */

export const ORDER_STATUS = [
    "Pending",

    "Confirmed",

    "Preparing",

    "Out for Delivery",

    "Delivered",

    "Cancelled",
];

/* ======================================================
   PAYMENT STATUS
====================================================== */

export const PAYMENT_STATUS = [
    "Pending",

    "Paid",

    "Failed",

    "Refunded",
];

/* ======================================================
   DELIVERY STATUS
====================================================== */

export const DELIVERY_STATUS = [
    "Assigned",

    "Picked Up",

    "On The Way",

    "Delivered",
];

/* ======================================================
   ORDER STATUS COLORS
====================================================== */

export const ORDER_STATUS_COLORS = {
    Pending:
        "bg-yellow-100 text-yellow-700 border border-yellow-200",

    Confirmed:
        "bg-blue-100 text-blue-700 border border-blue-200",

    Preparing:
        "bg-orange-100 text-orange-700 border border-orange-200",

    "Out for Delivery":
        "bg-purple-100 text-purple-700 border border-purple-200",

    Delivered:
        "bg-green-100 text-green-700 border border-green-200",

    Cancelled:
        "bg-red-100 text-red-700 border border-red-200",
};

/* ======================================================
   PAYMENT STATUS COLORS
====================================================== */

export const PAYMENT_STATUS_COLORS = {
    Pending:
        "bg-yellow-100 text-yellow-700 border border-yellow-200",

    Paid:
        "bg-green-100 text-green-700 border border-green-200",

    Failed:
        "bg-red-100 text-red-700 border border-red-200",

    Refunded:
        "bg-gray-100 text-gray-700 border border-gray-200",
};

/* ======================================================
   DELIVERY STATUS COLORS
====================================================== */

export const DELIVERY_STATUS_COLORS = {
    Assigned:
        "bg-blue-100 text-blue-700 border border-blue-200",

    "Picked Up":
        "bg-orange-100 text-orange-700 border border-orange-200",

    "On The Way":
        "bg-purple-100 text-purple-700 border border-purple-200",

    Delivered:
        "bg-green-100 text-green-700 border border-green-200",
};