import { useState } from "react";

import {
    FaBell,
    FaHeading,
    FaAlignLeft,
    FaUsers,
    FaPaperPlane,
    FaImage,
} from "react-icons/fa";

const NotificationForm = () => {
    const [notificationData, setNotificationData] =
        useState({
            title: "",
            message: "",
            audience: "All Users",
            type: "General",
            image: "",
            status: "Send Now",
        });

    const handleChange = (e) => {
        setNotificationData({
            ...notificationData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(notificationData);

        alert("Notification Sent Successfully!");
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
                    Send Notification
                </h2>

                <p className="text-gray-500 mt-2">
                    Send notifications to users, restaurants, or riders
                </p>
            </div>

            {/* FORM */}

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                {/* TITLE */}

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
                        Notification Title
                    </label>

                    <div className="relative">

                        <FaHeading
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
                            name="title"
                            value={notificationData.title}
                            onChange={handleChange}
                            placeholder="Big Weekend Offer!"
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

                {/* MESSAGE */}

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
                        Notification Message
                    </label>

                    <div className="relative">

                        <FaAlignLeft
                            className="
                absolute
                top-5
                left-4
                text-orange-500
              "
                        />

                        <textarea
                            rows="6"
                            name="message"
                            value={notificationData.message}
                            onChange={handleChange}
                            placeholder="Write your notification message..."
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
                            required
                        />
                    </div>
                </div>

                {/* ROW */}

                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
                >
                    {/* AUDIENCE */}

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
                            Audience
                        </label>

                        <div className="relative">

                            <FaUsers
                                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-orange-500
                "
                            />

                            <select
                                name="audience"
                                value={notificationData.audience}
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
                                <option>All Users</option>
                                <option>Customers</option>
                                <option>Restaurants</option>
                                <option>Delivery Riders</option>
                            </select>
                        </div>
                    </div>

                    {/* TYPE */}

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
                            Notification Type
                        </label>

                        <div className="relative">

                            <FaBell
                                className="
                  absolute
                  top-1/2
                  left-4
                  -translate-y-1/2
                  text-orange-500
                "
                            />

                            <select
                                name="type"
                                value={notificationData.type}
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
                                <option>General</option>
                                <option>Offer</option>
                                <option>Order Update</option>
                                <option>System Alert</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* IMAGE */}

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
                        Notification Banner Image
                    </label>

                    <div className="relative">

                        <FaImage
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
                            name="image"
                            value={notificationData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/banner.jpg"
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

                {/* IMAGE PREVIEW */}

                {notificationData.image && (
                    <div
                        className="
              w-full
              h-[240px]
              rounded-3xl
              overflow-hidden
              border
              border-gray-200
            "
                    >
                        <img
                            src={notificationData.image}
                            alt="Preview"
                            className="
                w-full
                h-full
                object-cover
              "
                        />
                    </div>
                )}

                {/* STATUS */}

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
                        Delivery Option
                    </label>

                    <select
                        name="status"
                        value={notificationData.status}
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
                        <option>Send Now</option>
                        <option>Schedule Later</option>
                        <option>Save Draft</option>
                    </select>
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
              flex
              items-center
              justify-center
              gap-3
            "
                    >
                        <FaPaperPlane />

                        Send Notification
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
                        Save Draft
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NotificationForm;