// utils/statusColor.js

/* ======================================================
   STATUS COLOR UTILITY
====================================================== */

const statusColor = (status = "") => {
    const normalizedStatus =
        status.toLowerCase();

    /* ======================================================
       STATUS COLORS
    ====================================================== */

    const colors = {
        /* SUCCESS */

        delivered:
            "bg-green-100 text-green-700 border border-green-200",

        completed:
            "bg-green-100 text-green-700 border border-green-200",

        active:
            "bg-green-100 text-green-700 border border-green-200",

        approved:
            "bg-green-100 text-green-700 border border-green-200",

        paid:
            "bg-green-100 text-green-700 border border-green-200",

        verified:
            "bg-green-100 text-green-700 border border-green-200",

        success:
            "bg-green-100 text-green-700 border border-green-200",

        /* WARNING */

        pending:
            "bg-yellow-100 text-yellow-700 border border-yellow-200",

        processing:
            "bg-yellow-100 text-yellow-700 border border-yellow-200",

        preparing:
            "bg-yellow-100 text-yellow-700 border border-yellow-200",

        scheduled:
            "bg-yellow-100 text-yellow-700 border border-yellow-200",

        /* INFO */

        shipped:
            "bg-blue-100 text-blue-700 border border-blue-200",

        confirmed:
            "bg-blue-100 text-blue-700 border border-blue-200",

        assigned:
            "bg-blue-100 text-blue-700 border border-blue-200",

        dispatched:
            "bg-blue-100 text-blue-700 border border-blue-200",

        /* DANGER */

        cancelled:
            "bg-red-100 text-red-700 border border-red-200",

        rejected:
            "bg-red-100 text-red-700 border border-red-200",

        blocked:
            "bg-red-100 text-red-700 border border-red-200",

        failed:
            "bg-red-100 text-red-700 border border-red-200",

        inactive:
            "bg-red-100 text-red-700 border border-red-200",

        refunded:
            "bg-red-100 text-red-700 border border-red-200",

        /* DARK */

        draft:
            "bg-gray-100 text-gray-700 border border-gray-200",

        expired:
            "bg-gray-100 text-gray-700 border border-gray-200",
    };

    /* ======================================================
       RETURN COLOR
    ====================================================== */

    return (
        colors[normalizedStatus] ||
        "bg-gray-100 text-gray-700 border border-gray-200"
    );
};

export default statusColor;