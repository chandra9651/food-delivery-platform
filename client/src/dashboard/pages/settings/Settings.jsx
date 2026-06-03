// src/dashboard/pages/settings/Settings.jsx

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import API from "../../../api/axios";

const Settings = () => {

    const [loading, setLoading] = useState(false);

    const [restaurantId, setRestaurantId] =
        useState("");

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
    });

    /* ======================================================
       GET RESTAURANT DATA
    ====================================================== */

    const fetchRestaurant = async () => {

        try {

            const token =
                localStorage.getItem(
                    "restaurantToken"
                );

            const { data } = await API.get(
                "/restaurants/settings",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const restaurant = data;

            if (restaurant) {

                setRestaurantId(
                    restaurant._id
                );

                setFormData({
                    name:
                        restaurant.name || "",

                    address:
                        restaurant.address ||
                        "",

                    phone:
                        restaurant.phone || "",
                });
            }

        } catch (error) {

            console.log(error);

            toast.error(
                "Failed to load restaurant data"
            );
        }
    };

    useEffect(() => {

        fetchRestaurant();

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
       UPDATE SETTINGS
    ====================================================== */

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const token =
                localStorage.getItem(
                    "restaurantToken"
                );

            await API.put(
                `/restaurants/${restaurantId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success(
                "Restaurant updated successfully"
            );

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Update failed"
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div>

            <h1 className="text-4xl font-extrabold mb-10">
                Restaurant Settings
            </h1>

            <div className="bg-white rounded-3xl shadow-md p-10">

                <form
                    onSubmit={submitHandler}
                    className="grid gap-8"
                >

                    {/* RESTAURANT NAME */}

                    <div>

                        <label className="font-semibold block mb-3">
                            Restaurant Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={changeHandler}
                            placeholder="Foodie Restaurant"
                            className="
                w-full
                border
                rounded-2xl
                p-4
                outline-none
                focus:border-orange-500
              "
                            required
                        />
                    </div>

                    {/* ADDRESS */}

                    <div>

                        <label className="font-semibold block mb-3">
                            Address
                        </label>

                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={changeHandler}
                            placeholder="Restaurant address"
                            className="
                w-full
                border
                rounded-2xl
                p-4
                outline-none
                focus:border-orange-500
              "
                            required
                        />
                    </div>

                    {/* PHONE */}

                    <div>

                        <label className="font-semibold block mb-3">
                            Phone Number
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={changeHandler}
                            placeholder="+91 9876543210"
                            className="
                w-full
                border
                rounded-2xl
                p-4
                outline-none
                focus:border-orange-500
              "
                            required
                        />
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
              w-fit
              transition-all
            "
                    >
                        {loading
                            ? "Saving..."
                            : "Save Changes"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Settings;