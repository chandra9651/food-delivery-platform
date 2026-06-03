import { useState } from "react";

import {
    FaStore,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGlobe,
    FaMoneyBillWave,
    FaClock,
    FaSave,
} from "react-icons/fa";

const SettingsForm = () => {
    const [settingsData, setSettingsData] =
        useState({
            siteName: "FoodExpress",
            email: "admin@foodexpress.com",
            phone: "+91 9876543210",
            address: "New Delhi, India",
            website: "https://foodexpress.com",
            currency: "USD",
            deliveryCharge: "5",
            openingTime: "09:00",
            closingTime: "23:00",
            maintenanceMode: "Off",
            orderAutoAccept: "On",
            description:
                "FoodExpress is an online food ordering and delivery platform.",
        });

    const handleChange = (e) => {
        setSettingsData({
            ...settingsData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(settingsData);

        alert("Settings Updated Successfully!");
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
                    System Settings
                </h2>

                <p className="text-gray-500 mt-2">
                    Manage platform settings & configurations
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
                    {/* SITE NAME */}

                    <div>

                        <label
                            className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-3
              "
                        >
                            Website Name
                        </label>

                        <div className="relative">

                            <FaStore
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
                                name="siteName"
                                value={settingsData.siteName}
                                onChange={handleChange}
                                placeholder="FoodExpress"
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

                    {/* EMAIL */}

                    <div>

                        <label
                            className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-3
              "
                        >
                            Support Email
                        </label>

                        <div className="relative">

                            <FaEnvelope
                                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-orange-500
                "
                            />

                            <input
                                type="email"
                                name="email"
                                value={settingsData.email}
                                onChange={handleChange}
                                placeholder="admin@example.com"
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

                {/* ROW 2 */}

                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
                >
                    {/* PHONE */}

                    <div>

                        <label
                            className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-3
              "
                        >
                            Contact Number
                        </label>

                        <div className="relative">

                            <FaPhoneAlt
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
                                name="phone"
                                value={settingsData.phone}
                                onChange={handleChange}
                                placeholder="+91 9876543210"
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

                    {/* WEBSITE */}

                    <div>

                        <label
                            className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-3
              "
                        >
                            Website URL
                        </label>

                        <div className="relative">

                            <FaGlobe
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
                                name="website"
                                value={settingsData.website}
                                onChange={handleChange}
                                placeholder="https://example.com"
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

                {/* ADDRESS */}

                <div>

                    <label
                        className="
              block
              text-sm
              font-semibold
              text-gray-700
              mb-3
            "
                    >
                        Office Address
                    </label>

                    <div className="relative">

                        <FaMapMarkerAlt
                            className="
                absolute
                top-5
                left-4
                text-orange-500
              "
                        />

                        <textarea
                            rows="3"
                            name="address"
                            value={settingsData.address}
                            onChange={handleChange}
                            placeholder="Enter address..."
                            className="
                w-full
                bg-gray-100
                rounded-2xl
                py-4
                pl-12
                pr-4
                outline-none
                resize-none
                focus:ring-2
                focus:ring-orange-400
              "
                        />
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
                    {/* CURRENCY */}

                    <div>

                        <label
                            className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-3
              "
                        >
                            Currency
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

                            <select
                                name="currency"
                                value={settingsData.currency}
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
                            >
                                <option>USD</option>
                                <option>INR</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>

                    {/* DELIVERY CHARGE */}

                    <div>

                        <label
                            className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-3
              "
                        >
                            Delivery Charge
                        </label>

                        <input
                            type="number"
                            name="deliveryCharge"
                            value={settingsData.deliveryCharge}
                            onChange={handleChange}
                            placeholder="5"
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

                    {/* MAINTENANCE */}

                    <div>

                        <label
                            className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-3
              "
                        >
                            Maintenance Mode
                        </label>

                        <select
                            name="maintenanceMode"
                            value={settingsData.maintenanceMode}
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
                            <option>Off</option>
                            <option>On</option>
                        </select>
                    </div>
                </div>

                {/* ROW 4 */}

                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
          "
                >
                    {/* OPENING TIME */}

                    <div>

                        <label
                            className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-3
              "
                        >
                            Opening Time
                        </label>

                        <div className="relative">

                            <FaClock
                                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-orange-500
                "
                            />

                            <input
                                type="time"
                                name="openingTime"
                                value={settingsData.openingTime}
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

                    {/* CLOSING TIME */}

                    <div>

                        <label
                            className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-3
              "
                        >
                            Closing Time
                        </label>

                        <div className="relative">

                            <FaClock
                                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-orange-500
                "
                            />

                            <input
                                type="time"
                                name="closingTime"
                                value={settingsData.closingTime}
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

                    {/* AUTO ACCEPT */}

                    <div>

                        <label
                            className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-3
              "
                        >
                            Auto Accept Orders
                        </label>

                        <select
                            name="orderAutoAccept"
                            value={settingsData.orderAutoAccept}
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
                            <option>On</option>
                            <option>Off</option>
                        </select>
                    </div>
                </div>

                {/* DESCRIPTION */}

                <div>

                    <label
                        className="
              block
              text-sm
              font-semibold
              text-gray-700
              mb-3
            "
                    >
                        Website Description
                    </label>

                    <textarea
                        rows="5"
                        name="description"
                        value={settingsData.description}
                        onChange={handleChange}
                        placeholder="Write website description..."
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

                {/* BUTTON */}

                <button
                    type="submit"
                    className="
            w-full
            bg-orange-500
            hover:bg-orange-600
            text-white
            py-4
            rounded-2xl
            font-bold
            text-lg
            transition-all
            flex
            items-center
            justify-center
            gap-3
          "
                >
                    <FaSave />

                    Save Settings
                </button>
            </form>
        </div>
    );
};

export default SettingsForm;