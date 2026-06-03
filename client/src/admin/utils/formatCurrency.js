// utils/formatCurrency.js

/* ======================================================
   FORMAT CURRENCY
====================================================== */

const formatCurrency = (
    amount,
    currency = "INR",
    locale = "en-IN"
) => {
    /* INVALID VALUE */

    if (
        amount === null ||
        amount === undefined ||
        isNaN(amount)
    ) {
        return "₹0";
    }

    /* FORMAT */

    return new Intl.NumberFormat(locale, {
        style: "currency",

        currency,

        minimumFractionDigits: 0,

        maximumFractionDigits: 2,
    }).format(amount);
};

export default formatCurrency;