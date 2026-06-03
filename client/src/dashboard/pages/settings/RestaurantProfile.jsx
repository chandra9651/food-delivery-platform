// src/dashboard/pages/settings/RestaurantProfile.jsx

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
    FaStore,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaImage,
    FaSave,
} from "react-icons/fa";

import API from "../../../api/axios";

const RestaurantProfile = () => {

    const [loading, setLoading] =
        useState(false);

    const [preview, setPreview] =
        useState("");

    const [formData, setFormData] =
        useState({
            restaurantName: "",
            ownerName: "",
            email: "",
            phone: "",
            address: "",
            image: "",
        });

    /* ======================================================
       GET RESTAURANT PROFILE
    ====================================================== */

    const getRestaurantProfile =
        async () => {
            try {
                setLoading(true);
                console.log("Before API request");
                const { data } =
                    await API.get(
                        "/restaurants/profile",
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("restaurantToken")}`,
                            },
                        }
                    );

                console.log(data);

                setFormData({
                    restaurantName:
                        data.name || "",

                    ownerName:
                        data.ownerName || "",

                    email:
                        data.email || "",

                    phone:
                        data.phone || "",

                    address:
                        data.address || "",

                    image:
                        data.image || "",
                });

                // setPreview(data.image);
                setPreview(`${import.meta.env.VITE_SERVER_URL}${data.image}`);

            } catch (error) {
                toast.error(
                    error.response?.data
                        ?.message ||
                    "Failed to load profile"
                );
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
        console.log("RestaurantProfile mounted");
        getRestaurantProfile();
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

        const file = e.target.files[0];

        if (!file) return;

        setFormData({
            ...formData,
            image: file,
        });

        setPreview(
            URL.createObjectURL(file)
        );
    };

    /* ======================================================
       UPDATE PROFILE
    ====================================================== */

    const submitHandler = async (e) => {

        e.preventDefault();

        try {
            setLoading(true);

            const updatedData =
                new FormData();

            updatedData.append(
                "restaurantName",
                formData.restaurantName
            );

            updatedData.append(
                "ownerName",
                formData.ownerName
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

            if (
                formData.image &&
                typeof formData.image !==
                "string"
            ) {
                updatedData.append(
                    "image",
                    formData.image
                );
            }

            await API.put(
                "/restaurants/update-profile",
                updatedData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem("restaurantToken")}`
                    },
                }
            );

            toast.success(
                "Restaurant profile updated"
            );

            getRestaurantProfile();

        } catch (error) {
            toast.error(
                error.response?.data
                    ?.message ||
                "Update failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            {/* PAGE TITLE */}

            <div className="mb-10">

                <h1 className="text-4xl font-extrabold text-gray-900">
                    Restaurant Profile
                </h1>

                <p className="text-gray-500 mt-2">
                    Manage restaurant information
                </p>
            </div>

            {/* CARD */}

            <div className="bg-white rounded-3xl shadow-md p-8">

                <form
                    onSubmit={submitHandler}
                    className="space-y-8"
                >

                    {/* IMAGE */}

                    <div className="flex flex-col items-center">

                        <div className="relative">

                            <img
                                src={
                                    preview ||
                                    "https://via.placeholder.com/200"
                                }
                                alt="restaurant"
                                className="
                  w-40
                  h-40
                  rounded-3xl
                  object-cover
                  border-4
                  border-orange-100
                  shadow-lg
                "
                            />

                            <label
                                htmlFor="image"
                                className="
                  absolute
                  bottom-3
                  right-3
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  w-12
                  h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  shadow-lg
                "
                            >
                                <FaImage />
                            </label>

                            <input
                                type="file"
                                id="image"
                                hidden
                                accept="image/*"
                                onChange={
                                    imageHandler
                                }
                            />
                        </div>
                    </div>

                    {/* FORM GRID */}

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* RESTAURANT NAME */}

                        <div>

                            <label className="font-semibold block mb-3">
                                Restaurant Name
                            </label>

                            <div className="relative">

                                <FaStore
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
                                    name="restaurantName"
                                    value={
                                        formData.restaurantName
                                    }
                                    onChange={
                                        changeHandler
                                    }
                                    placeholder="Restaurant name"
                                    className="
                    w-full
                    border
                    rounded-2xl
                    py-4
                    pl-12
                    pr-4
                    outline-none
                    focus:border-orange-500
                  "
                                />
                            </div>
                        </div>

                        {/* OWNER NAME */}

                        <div>

                            <label className="font-semibold block mb-3">
                                Owner Name
                            </label>

                            <div className="relative">

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
                                    name="ownerName"
                                    value={
                                        formData.ownerName
                                    }
                                    onChange={
                                        changeHandler
                                    }
                                    placeholder="Owner name"
                                    className="
                    w-full
                    border
                    rounded-2xl
                    py-4
                    pl-12
                    pr-4
                    outline-none
                    focus:border-orange-500
                  "
                                />
                            </div>
                        </div>

                        {/* EMAIL */}

                        <div>

                            <label className="font-semibold block mb-3">
                                Email
                            </label>

                            <div className="relative">

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
                                    placeholder="Email address"
                                    className="
                    w-full
                    border
                    rounded-2xl
                    py-4
                    pl-12
                    pr-4
                    outline-none
                    focus:border-orange-500
                  "
                                />
                            </div>
                        </div>

                        {/* PHONE */}

                        <div>

                            <label className="font-semibold block mb-3">
                                Phone
                            </label>

                            <div className="relative">

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
                                    placeholder="Phone number"
                                    className="
                    w-full
                    border
                    rounded-2xl
                    py-4
                    pl-12
                    pr-4
                    outline-none
                    focus:border-orange-500
                  "
                                />
                            </div>
                        </div>

                        {/* ADDRESS */}

                        <div className="md:col-span-2">

                            <label className="font-semibold block mb-3">
                                Address
                            </label>

                            <div className="relative">

                                <FaMapMarkerAlt
                                    className="
                    absolute
                    top-6
                    left-4
                    text-gray-400
                  "
                                />

                                <textarea
                                    rows="5"
                                    name="address"
                                    value={
                                        formData.address
                                    }
                                    onChange={
                                        changeHandler
                                    }
                                    placeholder="Restaurant address"
                                    className="
                    w-full
                    border
                    rounded-2xl
                    py-4
                    pl-12
                    pr-4
                    outline-none
                    resize-none
                    focus:border-orange-500
                  "
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* BUTTON */}

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
              font-bold
              flex
              items-center
              gap-3
              transition-all
            "
                    >

                        <FaSave />

                        {loading
                            ? "Saving..."
                            : "Save Changes"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RestaurantProfile;