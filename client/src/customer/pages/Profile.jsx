
import { useEffect, useState } from "react";

import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaCamera,
    FaSave,
} from "react-icons/fa";

import toast from "react-hot-toast";

import {
    getProfile,
} from "../../services/authService";

import API from "../../api/axios";

const Profile = () => {

    const [loading, setLoading] =
        useState(true);

    const [preview, setPreview] =
        useState(
            "https://i.pravatar.cc/300?img=12"
        );

    const [formData, setFormData] =
        useState({
            name: "",
            email: "",
            phone: "",
            address: "",
            profileImage: "https://via.placeholder.com/300"
        });

    /* ======================================================
       FETCH PROFILE
    ====================================================== */

    useEffect(() => {

        const fetchProfile =
            async () => {

                try {
                    const data =
                        await getProfile();

                    setFormData({
                        name:
                            data.name || "",

                        email:
                            data.email || "",

                        phone:
                            data.phone || "",

                        address:
                            data.address || "",
                    });

                    if (data.profileImage) {
                        setPreview(
                            data.profileImage
                                ? `${import.meta.env.VITE_SERVER_URL}${data.profileImage}`
                                : "https://via.placeholder.com/300"
                        );
                    }

                } catch (error) {

                    toast.error(
                        "Failed to load profile"
                    );
                } finally {

                    setLoading(false);
                }
            };

        fetchProfile();

    }, []);

    /* ======================================================
       HANDLE CHANGE
    ====================================================== */

    const changeHandler = (e) => {

        setFormData({
            ...formData,

            [e.target.name]:
                e.target.value,
        });
    };

    /* ======================================================
       IMAGE CHANGE
    ====================================================== */

    const imageHandler = (e) => {

        const file =
            e.target.files[0];

        if (!file) return;

        setFormData({
            ...formData,
            profileImage: file,
        });

        setPreview(
            URL.createObjectURL(file)
        );
    };

    /* ======================================================
       SUBMIT UPDATE
    ====================================================== */

    // const submitHandler = async (
    //     e
    // ) => {

    //     e.preventDefault();

    //     try {

    //         const { data } =
    //             await API.put(
    //                 "/users/profile",
    //                 formData
    //             );

    //         toast.success(
    //             data.message ||
    //             "Profile updated successfully"
    //         );

    //     } catch (error) {

    //         toast.error(
    //             error.response?.data
    //                 ?.message ||
    //             "Update failed"
    //         );
    //     }
    // };

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            const updatedData =
                new FormData();

            updatedData.append(
                "name",
                formData.name
            );

            updatedData.append(
                "email",
                formData.email
            );

            updatedData.append(
                "phone",
                formData.phone
            );

            updatedData.append(
                "address",
                formData.address
            );

            if (formData.profileImage) {

                updatedData.append(
                    "profileImage",
                    formData.profileImage
                );
            }

            const { data } =
                await API.put(
                    "/users/profile",
                    updatedData,
                    {
                        headers: {
                            "Content-Type":
                                "multipart/form-data",
                        },
                    }
                );

            toast.success(data.message);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Update failed"
            );
        }
    };

    /* ======================================================
       LOADING
    ====================================================== */

    if (loading) {

        return (

            <div
                className="
                    min-h-screen
                    flex
                    justify-center
                    items-center
                    text-2xl
                    font-semibold
                "
            >
                Loading...
            </div>
        );
    }

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
                    max-w-5xl
                    mx-auto
                "
            >
                {/* PAGE TITLE */}

                <div className="mb-8">

                    <h1
                        className="
                            text-4xl
                            font-bold
                            text-gray-900
                        "
                    >
                        My Profile
                    </h1>

                    <p
                        className="
                            text-gray-500
                            mt-2
                        "
                    >
                        Manage your personal
                        information
                    </p>
                </div>

                {/* PROFILE CARD */}

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
                    {/* TOP SECTION */}

                    <div
                        className="
                            bg-gradient-to-r
                            from-orange-500
                            to-red-500
                            h-44
                            relative
                        "
                    >
                        {/* PROFILE IMAGE */}

                        <div
                            className="
                                absolute
                                left-10
                                -bottom-16
                            "
                        >
                            <div
                                className="
                                    relative
                                "
                            >
                                <img
                                    src={preview}
                                    alt="profile"
                                    className="
                                        w-36
                                        h-36
                                        rounded-3xl
                                        border-4
                                        border-white
                                        object-cover
                                        shadow-lg
                                    "
                                />

                                <label
                                    htmlFor="profileImage"
                                    className="
                                        absolute
                                        bottom-2
                                        right-2
                                        bg-orange-500
                                        hover:bg-orange-600
                                        text-white
                                        w-10
                                        h-10
                                        rounded-full
                                        flex
                                        items-center
                                        justify-center
                                        cursor-pointer
                                        shadow-lg
                                    "
                                >
                                    <FaCamera />
                                </label>

                                <input
                                    type="file"
                                    id="profileImage"
                                    hidden
                                    accept="image/*"
                                    onChange={
                                        imageHandler
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* FORM */}

                    <div
                        className="
                            pt-24
                            px-8
                            pb-10
                        "
                    >
                        <form
                            onSubmit={
                                submitHandler
                            }
                            className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-6
                            "
                        >
                            {/* NAME */}

                            <div>

                                <label
                                    className="
                                        text-sm
                                        font-semibold
                                        text-gray-700
                                        mb-2
                                        block
                                    "
                                >
                                    Full Name
                                </label>

                                <div
                                    className="
                                        relative
                                    "
                                >
                                    <FaUser
                                        className="
                                            absolute
                                            top-1/2
                                            left-4
                                            -translate-y-1/2
                                            text-gray-400
                                        "
                                    />

                                    <input
                                        type="text"
                                        name="name"
                                        value={
                                            formData.name
                                        }
                                        onChange={
                                            changeHandler
                                        }
                                        placeholder="Enter full name"
                                        className="
                                            w-full
                                            border
                                            border-gray-200
                                            rounded-2xl
                                            pl-12
                                            pr-4
                                            py-4
                                            focus:outline-none
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
                                        text-sm
                                        font-semibold
                                        text-gray-700
                                        mb-2
                                        block
                                    "
                                >
                                    Email Address
                                </label>

                                <div
                                    className="
                                        relative
                                    "
                                >
                                    <FaEnvelope
                                        className="
                                            absolute
                                            top-1/2
                                            left-4
                                            -translate-y-1/2
                                            text-gray-400
                                        "
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        value={
                                            formData.email
                                        }
                                        onChange={
                                            changeHandler
                                        }
                                        placeholder="Enter email"
                                        className="
                                            w-full
                                            border
                                            border-gray-200
                                            rounded-2xl
                                            pl-12
                                            pr-4
                                            py-4
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-orange-400
                                        "
                                    />
                                </div>
                            </div>

                            {/* PHONE */}

                            <div>

                                <label
                                    className="
                                        text-sm
                                        font-semibold
                                        text-gray-700
                                        mb-2
                                        block
                                    "
                                >
                                    Phone Number
                                </label>

                                <div
                                    className="
                                        relative
                                    "
                                >
                                    <FaPhone
                                        className="
                                            absolute
                                            top-1/2
                                            left-4
                                            -translate-y-1/2
                                            text-gray-400
                                        "
                                    />

                                    <input
                                        type="text"
                                        name="phone"
                                        value={
                                            formData.phone
                                        }
                                        onChange={
                                            changeHandler
                                        }
                                        placeholder="Enter phone number"
                                        className="
                                            w-full
                                            border
                                            border-gray-200
                                            rounded-2xl
                                            pl-12
                                            pr-4
                                            py-4
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-orange-400
                                        "
                                    />
                                </div>
                            </div>

                            {/* ADDRESS */}

                            <div>

                                <label
                                    className="
                                        text-sm
                                        font-semibold
                                        text-gray-700
                                        mb-2
                                        block
                                    "
                                >
                                    Address
                                </label>

                                <div
                                    className="
                                        relative
                                    "
                                >
                                    <FaMapMarkerAlt
                                        className="
                                            absolute
                                            top-1/2
                                            left-4
                                            -translate-y-1/2
                                            text-gray-400
                                        "
                                    />

                                    <input
                                        type="text"
                                        name="address"
                                        value={
                                            formData.address
                                        }
                                        onChange={
                                            changeHandler
                                        }
                                        placeholder="Enter address"
                                        className="
                                            w-full
                                            border
                                            border-gray-200
                                            rounded-2xl
                                            pl-12
                                            pr-4
                                            py-4
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-orange-400
                                        "
                                    />
                                </div>
                            </div>

                            {/* BUTTON */}

                            <div
                                className="
                                    md:col-span-2
                                    flex
                                    justify-end
                                    mt-4
                                "
                            >
                                <button
                                    type="submit"
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        bg-orange-500
                                        hover:bg-orange-600
                                        text-white
                                        px-8
                                        py-4
                                        rounded-2xl
                                        font-semibold
                                        transition-all
                                        duration-300
                                        shadow-lg
                                        cursor-pointer
                                    "
                                >
                                    <FaSave />

                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;