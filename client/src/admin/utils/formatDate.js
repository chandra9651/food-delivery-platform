// utils/formatDate.js

/* ======================================================
   FORMAT DATE
====================================================== */

const formatDate = (
    date,
    locale = "en-IN",
    options = {}
) => {
    /* INVALID DATE */

    if (!date) {
        return "N/A";
    }

    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
        return "Invalid Date";
    }

    /* DEFAULT OPTIONS */

    const defaultOptions = {
        day: "numeric",

        month: "short",

        year: "numeric",
    };

    /* FORMAT DATE */

    return parsedDate.toLocaleDateString(
        locale,
        {
            ...defaultOptions,
            ...options,
        }
    );
};

export default formatDate;