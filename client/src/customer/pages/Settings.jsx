// src/pages/settings/Settings.jsx

import { useState } from "react";

import {
    FaLock,
    FaBell,
    FaSave,
} from "react-icons/fa";

import toast from "react-hot-toast";

import API from "../../api/axios";

const Settings = () => {

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
            emailNotifications: true,
            orderNotifications: true,
        });

    const changeHandler = (e) => {

        const { name, value, type, checked } =
            e.target;

        setFormData({
            ...formData,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        });
    };

    const submitHandler = async (e) => {

        e.preventDefault();

        if (
            formData.newPassword !==
            formData.confirmPassword
        ) {
            return toast.error(
                "Passwords do not match"
            );
        }

        try {

            setLoading(true);

            const { data } =
                await API.put(
                    "/users/settings",
                    formData
                );

            toast.success(
                data.message ||
                "Settings updated successfully"
            );

            setFormData({
                ...formData,
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });

        } catch (error) {

            toast.error(
                error.response?.data
                    ?.message ||
                "Failed to update settings"
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div
            className="
                min-h-screen
                bg-gray-50
                py-10
                px-4
            "
        >
            <div
                className="
                    max-w-4xl
                    mx-auto
                "
            >

                {/* HEADER */}

                <div className="mb-8">

                    <h1
                        className="
                            text-4xl
                            font-bold
                            text-gray-900
                        "
                    >
                        Settings
                    </h1>

                    <p
                        className="
                            text-gray-500
                            mt-2
                        "
                    >
                        Manage account security
                        and preferences
                    </p>

                </div>

                {/* CARD */}

                <div
                    className="
                        bg-white
                        rounded-3xl
                        shadow-sm
                        border
                        border-gray-100
                        overflow-hidden
                    "
                >

                    <div
                        className="
                            bg-gradient-to-r
                            from-orange-500
                            to-red-500
                            h-32
                        "
                    />

                    <form
                        onSubmit={
                            submitHandler
                        }
                        className="
                            p-8
                            space-y-8
                        "
                    >

                        {/* PASSWORD SECTION */}

                        <div>

                            <h2
                                className="
                                    text-xl
                                    font-bold
                                    mb-6
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <FaLock />
                                Security
                            </h2>

                            <div
                                className="
                                    grid
                                    md:grid-cols-2
                                    gap-6
                                "
                            >

                                <div>

                                    <label
                                        className="
                                            font-medium
                                            block
                                            mb-2
                                        "
                                    >
                                        Current Password
                                    </label>

                                    <input
                                        type="password"
                                        name="currentPassword"
                                        value={
                                            formData.currentPassword
                                        }
                                        onChange={
                                            changeHandler
                                        }
                                        className="
                                            w-full
                                            border
                                            border-gray-200
                                            rounded-2xl
                                            px-4
                                            py-4
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-orange-400
                                        "
                                    />

                                </div>

                                <div>

                                    <label
                                        className="
                                            font-medium
                                            block
                                            mb-2
                                        "
                                    >
                                        New Password
                                    </label>

                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={
                                            formData.newPassword
                                        }
                                        onChange={
                                            changeHandler
                                        }
                                        className="
                                            w-full
                                            border
                                            border-gray-200
                                            rounded-2xl
                                            px-4
                                            py-4
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-orange-400
                                        "
                                    />

                                </div>

                                <div
                                    className="
                                        md:col-span-2
                                    "
                                >

                                    <label
                                        className="
                                            font-medium
                                            block
                                            mb-2
                                        "
                                    >
                                        Confirm Password
                                    </label>

                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={
                                            formData.confirmPassword
                                        }
                                        onChange={
                                            changeHandler
                                        }
                                        className="
                                            w-full
                                            border
                                            border-gray-200
                                            rounded-2xl
                                            px-4
                                            py-4
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-orange-400
                                        "
                                    />

                                </div>

                            </div>

                        </div>

                        {/* NOTIFICATIONS */}

                        <div>

                            <h2
                                className="
                                    text-xl
                                    font-bold
                                    mb-6
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <FaBell />
                                Notifications
                            </h2>

                            <div
                                className="
                                    space-y-4
                                "
                            >

                                <label
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        p-4
                                    "
                                >

                                    <span>
                                        Email Notifications
                                    </span>

                                    <input
                                        type="checkbox"
                                        name="emailNotifications"
                                        checked={
                                            formData.emailNotifications
                                        }
                                        onChange={
                                            changeHandler
                                        }
                                    />

                                </label>

                                <label
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        p-4
                                    "
                                >

                                    <span>
                                        Order Status Notifications
                                    </span>

                                    <input
                                        type="checkbox"
                                        name="orderNotifications"
                                        checked={
                                            formData.orderNotifications
                                        }
                                        onChange={
                                            changeHandler
                                        }
                                    />

                                </label>

                            </div>

                        </div>

                        {/* BUTTON */}

                        <div
                            className="
                                flex
                                justify-end
                            "
                        >

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    bg-orange-500
                                    hover:bg-orange-600
                                    text-white
                                    px-8
                                    py-4
                                    rounded-2xl
                                    font-semibold
                                    flex
                                    items-center
                                    gap-3
                                    transition-all
                                "
                            >

                                <FaSave />

                                {loading
                                    ? "Saving..."
                                    : "Save Settings"}

                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default Settings;