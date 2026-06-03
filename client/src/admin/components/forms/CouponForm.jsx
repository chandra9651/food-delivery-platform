import { useState } from "react";
import {
    FaPercent,
    FaTicketAlt,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaGift,
} from "react-icons/fa";

const CouponForm = () => {
    const [couponData, setCouponData] = useState({
        code: "",
        discount: "",
        minOrder: "",
        maxDiscount: "",
        expiryDate: "",
        usageLimit: "",
        couponType: "Percentage",
        status: "Active",
        description: "",
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

        alert("Coupon Created Successfully!");
    };

    return (
        <div
            className="
        bg-white
        rounded-[32px]
        shadow-sm
        border
        border-gray-100
        p-6
        lg:p-8
      "
        >
            {/* HEADER */}

            <div className="mb-8">

                <h2 className="text-3xl font-extrabold text-gray-900">
                    Create Coupon
                </h2>

                <p className="text-gray-500 mt-2">
                    Add discount coupons for customers
                </p>
            </div>

            {/* FORM */}

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
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
                text-sm
                font-semibold
                text-gray-700
                block
                mb-3
              "
                        >
                            Coupon Code
                        </label>

                        <div className="relative">

                            <FaTicketAlt
                                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-orange-500
                "
                            />

                            <input
                                type="text"
                                name="code"
                                value={couponData.code}
                                onChange={handleChange}
                                placeholder="SAVE50"
                                className="
                  w-full
                  bg-gray-100
                  rounded-2xl
                  py-4
                  pl-12
                  pr-4
                  outline-none
                  focus:ring-2
                  focus:ring-orange-400
                "
                                required
                            />
                        </div>
                    </div>

                    {/* DISCOUNT */}

                    <div>

                        <label
                            className="
                text-sm
                font-semibold
                text-gray-700
                block
                mb-3
              "
                        >
                            Discount Value
                        </label>

                        <div className="relative">

                            <FaPercent
                                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-orange-500
                "
                            />

                            <input
                                type="number"
                                name="discount"
                                value={couponData.discount}
                                onChange={handleChange}
                                placeholder="20"
                                className="
                  w-full
                  bg-gray-100
                  rounded-2xl
                  py-4
                  pl-12
                  pr-4
                  outline-none
                  focus:ring-2
                  focus:ring-orange-400
                "
                                required
                            />
                        </div>
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
                    {/* MIN ORDER */}

                    <div>

                        <label
                            className="
                text-sm
                font-semibold
                text-gray-700
                block
                mb-3
              "
                        >
                            Minimum Order Amount
                        </label>

                        <div className="relative">

                            <FaMoneyBillWave
                                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-orange-500
                "
                            />

                            <input
                                type="number"
                                name="minOrder"
                                value={couponData.minOrder}
                                onChange={handleChange}
                                placeholder="100"
                                className="
                  w-full
                  bg-gray-100
                  rounded-2xl
                  py-4
                  pl-12
                  pr-4
                  outline-none
                  focus:ring-2
                  focus:ring-orange-400
                "
                            />
                        </div>
                    </div>

                    {/* MAX DISCOUNT */}

                    <div>

                        <label
                            className="
                text-sm
                font-semibold
                text-gray-700
                block
                mb-3
              "
                        >
                            Maximum Discount
                        </label>

                        <div className="relative">

                            <FaGift
                                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-orange-500
                "
                            />

                            <input
                                type="number"
                                name="maxDiscount"
                                value={couponData.maxDiscount}
                                onChange={handleChange}
                                placeholder="500"
                                className="
                  w-full
                  bg-gray-100
                  rounded-2xl
                  py-4
                  pl-12
                  pr-4
                  outline-none
                  focus:ring-2
                  focus:ring-orange-400
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
            md:grid-cols-3
            gap-6
          "
                >
                    {/* EXPIRY DATE */}

                    <div>

                        <label
                            className="
                text-sm
                font-semibold
                text-gray-700
                block
                mb-3
              "
                        >
                            Expiry Date
                        </label>

                        <div className="relative">

                            <FaCalendarAlt
                                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-orange-500
                "
                            />

                            <input
                                type="date"
                                name="expiryDate"
                                value={couponData.expiryDate}
                                onChange={handleChange}
                                className="
                  w-full
                  bg-gray-100
                  rounded-2xl
                  py-4
                  pl-12
                  pr-4
                  outline-none
                  focus:ring-2
                  focus:ring-orange-400
                "
                            />
                        </div>
                    </div>

                    {/* USAGE LIMIT */}

                    <div>

                        <label
                            className="
                text-sm
                font-semibold
                text-gray-700
                block
                mb-3
              "
                        >
                            Usage Limit
                        </label>

                        <input
                            type="number"
                            name="usageLimit"
                            value={couponData.usageLimit}
                            onChange={handleChange}
                            placeholder="100"
                            className="
                w-full
                bg-gray-100
                rounded-2xl
                py-4
                px-4
                outline-none
                focus:ring-2
                focus:ring-orange-400
              "
                        />
                    </div>

                    {/* TYPE */}

                    <div>

                        <label
                            className="
                text-sm
                font-semibold
                text-gray-700
                block
                mb-3
              "
                        >
                            Coupon Type
                        </label>

                        <select
                            name="couponType"
                            value={couponData.couponType}
                            onChange={handleChange}
                            className="
                w-full
                bg-gray-100
                rounded-2xl
                py-4
                px-4
                outline-none
                focus:ring-2
                focus:ring-orange-400
              "
                        >
                            <option>Percentage</option>
                            <option>Flat Discount</option>
                            <option>Free Delivery</option>
                        </select>
                    </div>
                </div>

                {/* STATUS */}

                <div>

                    <label
                        className="
              text-sm
              font-semibold
              text-gray-700
              block
              mb-3
            "
                    >
                        Status
                    </label>

                    <select
                        name="status"
                        value={couponData.status}
                        onChange={handleChange}
                        className="
              w-full
              bg-gray-100
              rounded-2xl
              py-4
              px-4
              outline-none
              focus:ring-2
              focus:ring-orange-400
            "
                    >
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>

                {/* DESCRIPTION */}

                <div>

                    <label
                        className="
              text-sm
              font-semibold
              text-gray-700
              block
              mb-3
            "
                    >
                        Description
                    </label>

                    <textarea
                        rows="5"
                        name="description"
                        value={couponData.description}
                        onChange={handleChange}
                        placeholder="Write coupon description..."
                        className="
              w-full
              bg-gray-100
              rounded-2xl
              py-4
              px-4
              outline-none
              resize-none
              focus:ring-2
              focus:ring-orange-400
            "
                    />
                </div>

                {/* BUTTONS */}

                <div
                    className="
            flex
            flex-col
            sm:flex-row
            gap-4
            pt-4
          "
                >
                    <button
                        type="submit"
                        className="
              flex-1
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-4
              rounded-2xl
              font-bold
              text-lg
              transition-all
            "
                    >
                        Create Coupon
                    </button>

                    <button
                        type="button"
                        className="
              flex-1
              bg-gray-200
              hover:bg-gray-300
              text-gray-800
              py-4
              rounded-2xl
              font-bold
              text-lg
              transition-all
            "
                    >
                        Reset Form
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CouponForm;