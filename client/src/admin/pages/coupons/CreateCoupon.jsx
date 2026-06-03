import { useState } from "react";

import {
    FaTicketAlt,
    FaPercent,
    FaDollarSign,
    FaCalendarAlt,
    FaUsers,
    FaShoppingCart,
    FaSave,
    FaArrowLeft,
    FaTag,
    FaCheckCircle,
} from "react-icons/fa";

const CreateCoupon = () => {
    const [couponData, setCouponData] = useState({
        code: "",
        discountType: "percentage",
        discountValue: "",
        minimumOrder: "",
        usageLimit: "",
        startDate: "",
        expiryDate: "",
        description: "",
        status: "active",
    });

    const handleChange = (e) => {
        setCouponData({
            ...couponData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(couponData);
    };

    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}

            <div
                className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
        "
            >
                {/* LEFT */}

                <div className="flex items-center gap-4">
                    <button
                        className="
              w-14
              h-14
              rounded-2xl
              bg-white
              border
              border-gray-200
              hover:bg-gray-100
              flex
              items-center
              justify-center
              transition-all
            "
                    >
                        <FaArrowLeft className="text-gray-700 text-lg" />
                    </button>

                    <div>
                        <h1
                            className="
                text-3xl
                md:text-4xl
                font-extrabold
                text-gray-900
              "
                        >
                            Create Coupon
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Create promotional discount coupon for customers
                        </p>
                    </div>
                </div>

                {/* BUTTON */}

                <button
                    onClick={handleSubmit}
                    className="
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-7
            py-4
            rounded-2xl
            font-bold
            shadow-lg
            shadow-orange-200
            transition-all
            flex
            items-center
            gap-3
            w-fit
          "
                >
                    <FaSave />

                    Save Coupon
                </button>
            </div>

            {/* FORM SECTION */}

            <div
                className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        "
            >
                {/* LEFT FORM */}

                <div
                    className="
            xl:col-span-2
            bg-white
            rounded-[32px]
            border
            border-gray-100
            shadow-sm
            p-6
          "
                >
                    {/* TITLE */}

                    <div className="mb-8">
                        <h2
                            className="
                text-2xl
                font-extrabold
                text-gray-900
              "
                        >
                            Coupon Information
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Fill all coupon details carefully
                        </p>
                    </div>

                    {/* FORM */}

                    <form className="space-y-6">
                        {/* ROW 1 */}

                        <div
                            className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
                        >
                            {/* COUPON CODE */}

                            <div>
                                <label
                                    className="
                    block
                    mb-3
                    font-bold
                    text-gray-700
                  "
                                >
                                    Coupon Code
                                </label>

                                <div
                                    className="
                    flex
                    items-center
                    gap-3
                    border
                    border-gray-200
                    rounded-2xl
                    px-5
                    py-4
                  "
                                >
                                    <FaTicketAlt className="text-orange-500" />

                                    <input
                                        type="text"
                                        name="code"
                                        placeholder="WELCOME50"
                                        value={couponData.code}
                                        onChange={handleChange}
                                        className="
                      w-full
                      outline-none
                      bg-transparent
                    "
                                    />
                                </div>
                            </div>

                            {/* DISCOUNT TYPE */}

                            <div>
                                <label
                                    className="
                    block
                    mb-3
                    font-bold
                    text-gray-700
                  "
                                >
                                    Discount Type
                                </label>

                                <select
                                    name="discountType"
                                    value={couponData.discountType}
                                    onChange={handleChange}
                                    className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                  "
                                >
                                    <option value="percentage">
                                        Percentage Discount
                                    </option>

                                    <option value="fixed">
                                        Fixed Amount
                                    </option>

                                    <option value="delivery">
                                        Free Delivery
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* ROW 2 */}

                        <div
                            className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
                        >
                            {/* DISCOUNT VALUE */}

                            <div>
                                <label
                                    className="
                    block
                    mb-3
                    font-bold
                    text-gray-700
                  "
                                >
                                    Discount Value
                                </label>

                                <div
                                    className="
                    flex
                    items-center
                    gap-3
                    border
                    border-gray-200
                    rounded-2xl
                    px-5
                    py-4
                  "
                                >
                                    {couponData.discountType === "fixed" ? (
                                        <FaDollarSign className="text-green-500" />
                                    ) : (
                                        <FaPercent className="text-orange-500" />
                                    )}

                                    <input
                                        type="number"
                                        name="discountValue"
                                        placeholder="Enter discount"
                                        value={couponData.discountValue}
                                        onChange={handleChange}
                                        className="
                      w-full
                      outline-none
                      bg-transparent
                    "
                                    />
                                </div>
                            </div>

                            {/* MINIMUM ORDER */}

                            <div>
                                <label
                                    className="
                    block
                    mb-3
                    font-bold
                    text-gray-700
                  "
                                >
                                    Minimum Order Amount
                                </label>

                                <div
                                    className="
                    flex
                    items-center
                    gap-3
                    border
                    border-gray-200
                    rounded-2xl
                    px-5
                    py-4
                  "
                                >
                                    <FaShoppingCart className="text-blue-500" />

                                    <input
                                        type="number"
                                        name="minimumOrder"
                                        placeholder="Minimum order value"
                                        value={couponData.minimumOrder}
                                        onChange={handleChange}
                                        className="
                      w-full
                      outline-none
                      bg-transparent
                    "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ROW 3 */}

                        <div
                            className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
                        >
                            {/* USAGE LIMIT */}

                            <div>
                                <label
                                    className="
                    block
                    mb-3
                    font-bold
                    text-gray-700
                  "
                                >
                                    Usage Limit
                                </label>

                                <div
                                    className="
                    flex
                    items-center
                    gap-3
                    border
                    border-gray-200
                    rounded-2xl
                    px-5
                    py-4
                  "
                                >
                                    <FaUsers className="text-purple-500" />

                                    <input
                                        type="number"
                                        name="usageLimit"
                                        placeholder="Maximum usage"
                                        value={couponData.usageLimit}
                                        onChange={handleChange}
                                        className="
                      w-full
                      outline-none
                      bg-transparent
                    "
                                    />
                                </div>
                            </div>

                            {/* STATUS */}

                            <div>
                                <label
                                    className="
                    block
                    mb-3
                    font-bold
                    text-gray-700
                  "
                                >
                                    Coupon Status
                                </label>

                                <select
                                    name="status"
                                    value={couponData.status}
                                    onChange={handleChange}
                                    className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                  "
                                >
                                    <option value="active">
                                        Active
                                    </option>

                                    <option value="inactive">
                                        Inactive
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* ROW 4 */}

                        <div
                            className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
                        >
                            {/* START DATE */}

                            <div>
                                <label
                                    className="
                    block
                    mb-3
                    font-bold
                    text-gray-700
                  "
                                >
                                    Start Date
                                </label>

                                <div
                                    className="
                    flex
                    items-center
                    gap-3
                    border
                    border-gray-200
                    rounded-2xl
                    px-5
                    py-4
                  "
                                >
                                    <FaCalendarAlt className="text-orange-500" />

                                    <input
                                        type="date"
                                        name="startDate"
                                        value={couponData.startDate}
                                        onChange={handleChange}
                                        className="
                      w-full
                      outline-none
                      bg-transparent
                    "
                                    />
                                </div>
                            </div>

                            {/* EXPIRY DATE */}

                            <div>
                                <label
                                    className="
                    block
                    mb-3
                    font-bold
                    text-gray-700
                  "
                                >
                                    Expiry Date
                                </label>

                                <div
                                    className="
                    flex
                    items-center
                    gap-3
                    border
                    border-gray-200
                    rounded-2xl
                    px-5
                    py-4
                  "
                                >
                                    <FaCalendarAlt className="text-red-500" />

                                    <input
                                        type="date"
                                        name="expiryDate"
                                        value={couponData.expiryDate}
                                        onChange={handleChange}
                                        className="
                      w-full
                      outline-none
                      bg-transparent
                    "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}

                        <div>
                            <label
                                className="
                  block
                  mb-3
                  font-bold
                  text-gray-700
                "
                            >
                                Coupon Description
                            </label>

                            <textarea
                                rows="6"
                                name="description"
                                placeholder="Write coupon details..."
                                value={couponData.description}
                                onChange={handleChange}
                                className="
                  w-full
                  border
                  border-gray-200
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  resize-none
                "
                            />
                        </div>
                    </form>
                </div>

                {/* RIGHT SIDEBAR */}

                <div className="space-y-6">
                    {/* PREVIEW CARD */}

                    <div
                        className="
              bg-gradient-to-r
              from-orange-500
              to-orange-400
              rounded-[32px]
              p-6
              text-white
              shadow-lg
            "
                    >
                        <div
                            className="
                flex
                items-center
                justify-between
              "
                        >
                            <div
                                className="
                  w-16
                  h-16
                  rounded-3xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
                            >
                                <FaTag />
                            </div>

                            <div
                                className="
                  bg-white/20
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-bold
                "
                            >
                                LIVE PREVIEW
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2
                                className="
                  text-4xl
                  font-extrabold
                  tracking-wide
                "
                            >
                                {couponData.code || "WELCOME50"}
                            </h2>

                            <p className="text-white/80 mt-3">
                                {couponData.discountValue || "50"}
                                {couponData.discountType === "fixed"
                                    ? "$ OFF"
                                    : couponData.discountType === "delivery"
                                        ? " Free Delivery"
                                        : "% OFF"}
                            </p>
                        </div>

                        <div
                            className="
                mt-8
                bg-white/10
                rounded-2xl
                p-4
              "
                        >
                            <div
                                className="
                  flex
                  items-center
                  gap-3
                "
                            >
                                <FaCheckCircle />

                                <span className="font-semibold">
                                    Valid Coupon
                                </span>
                            </div>

                            <p className="text-white/80 text-sm mt-2">
                                Customers can apply this coupon during checkout
                            </p>
                        </div>
                    </div>

                    {/* QUICK INFO */}

                    <div
                        className="
              bg-white
              rounded-[32px]
              border
              border-gray-100
              shadow-sm
              p-6
            "
                    >
                        <h2
                            className="
                text-2xl
                font-extrabold
                text-gray-900
                mb-6
              "
                        >
                            Coupon Tips
                        </h2>

                        <div className="space-y-5">
                            <div
                                className="
                  flex
                  items-start
                  gap-4
                "
                            >
                                <div
                                    className="
                    w-10
                    h-10
                    rounded-xl
                    bg-orange-100
                    text-orange-500
                    flex
                    items-center
                    justify-center
                  "
                                >
                                    <FaPercent />
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        High Conversion
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Use attractive discounts to increase order conversions
                                    </p>
                                </div>
                            </div>

                            <div
                                className="
                  flex
                  items-start
                  gap-4
                "
                            >
                                <div
                                    className="
                    w-10
                    h-10
                    rounded-xl
                    bg-blue-100
                    text-blue-500
                    flex
                    items-center
                    justify-center
                  "
                                >
                                    <FaUsers />
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        Usage Limits
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Set usage limits to control promotional budget
                                    </p>
                                </div>
                            </div>

                            <div
                                className="
                  flex
                  items-start
                  gap-4
                "
                            >
                                <div
                                    className="
                    w-10
                    h-10
                    rounded-xl
                    bg-green-100
                    text-green-500
                    flex
                    items-center
                    justify-center
                  "
                                >
                                    <FaCalendarAlt />
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        Expiry Control
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Always set expiry dates for better campaign management
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCoupon;