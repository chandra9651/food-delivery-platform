
// admin/components/cards/RevenueCard.jsx

import {
    FaArrowUp,
    FaArrowDown,
    FaDollarSign,
} from "react-icons/fa";

import formatCurrency from "../../utils/formatCurrency";

const RevenueCard = ({
    title = "Total Revenue",

    amount = 0,

    growth = "+0%",

    period = "This Month",
}) => {
    /* ======================================================
       GROWTH CHECK
    ====================================================== */

    const isPositive = growth.includes("+");

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
            {/* TOP */}

            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm font-medium">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                        {formatCurrency(amount)}
                    </h2>
                </div>

                {/* ICON */}

                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                    <FaDollarSign className="text-2xl text-green-600" />
                </div>
            </div>

            {/* BOTTOM */}

            <div className="flex items-center justify-between mt-6">
                <div
                    className={`flex items-center gap-2 text-sm font-semibold ${isPositive
                        ? "text-green-600"
                        : "text-red-600"
                        }`}
                >
                    {isPositive ? (
                        <FaArrowUp />
                    ) : (
                        <FaArrowDown />
                    )}

                    <span>{growth}</span>
                </div>

                <span className="text-sm text-gray-500">
                    {period}
                </span>
            </div>
        </div>
    );
};

export default RevenueCard;