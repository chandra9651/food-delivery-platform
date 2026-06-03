// src/dashboard/pages/EditFood.jsx

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../../../api/axios";

const EditFood = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [preview, setPreview] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        image: "",
    });

    /* ======================================================
       GET FOOD DETAILS
    ====================================================== */

    const getFoodDetails = async () => {

        try {

            const { data } = await API.get("/foods");

            console.log(data);

            const food = data.find(
                (item) => item._id === id
            );

            if (food) {

                setFormData({
                    name: food.name || "",
                    price: food.price || "",
                    category: food.category || "",
                    description:
                        food.description || "",
                    image: food.image || "",
                });

                // setPreview(food.image);

                setPreview(`${import.meta.env.VITE_SERVER_URL}${food.image}`);


            } else {

                toast.error("Food not found");
            }

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load food"
            );
        }
    };

    useEffect(() => {

        getFoodDetails();

    }, [id]);

    /* ======================================================
       HANDLE CHANGE
    ====================================================== */

    const changeHandler = (e) => {

        setFormData({
            ...formData,

            [e.target.name]: e.target.value,
        });
    };

    /* ======================================================
       IMAGE CHANGE
    ====================================================== */

    const imageHandler = (e) => {

        const file = e.target.files[0];

        if (file) {

            setFormData({
                ...formData,
                image: file,
            });

            setPreview(
                URL.createObjectURL(file)
            );
        }
    };

    /* ======================================================
       UPDATE FOOD
    ====================================================== */

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const token =
                localStorage.getItem(
                    "restaurantToken"
                );

            const foodData = new FormData();

            foodData.append(
                "name",
                formData.name
            );

            foodData.append(
                "price",
                formData.price
            );

            foodData.append(
                "category",
                formData.category
            );

            foodData.append(
                "description",
                formData.description
            );

            if (formData.image) {

                foodData.append(
                    "image",
                    formData.image
                );
            }

            await API.put(
                `/foods/${id}`,
                foodData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type":
                            "multipart/form-data",
                    },
                }
            );

            toast.success(
                "Food updated successfully"
            );

            navigate(
                "/restaurant/manage-foods"
            );

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update food"
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
                    Edit Food
                </h1>

                <p className="text-gray-500 mt-2">
                    Update food details
                </p>
            </div>

            {/* FORM */}

            <div className="bg-white rounded-3xl shadow-md p-10">

                <form
                    onSubmit={submitHandler}
                    className="grid md:grid-cols-2 gap-8"
                >

                    {/* FOOD NAME */}

                    <div>

                        <label className="font-semibold block mb-3">
                            Food Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={changeHandler}
                            placeholder="Enter food name"
                            required
                            className="
                w-full
                border
                rounded-2xl
                p-4
                outline-none
                focus:border-orange-500
              "
                        />
                    </div>

                    {/* PRICE */}

                    <div>

                        <label className="font-semibold block mb-3">
                            Price
                        </label>

                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={changeHandler}
                            placeholder="Enter price"
                            required
                            className="
                w-full
                border
                rounded-2xl
                p-4
                outline-none
                focus:border-orange-500
              "
                        />
                    </div>

                    {/* CATEGORY */}

                    <div>

                        <label className="font-semibold block mb-3">
                            Category
                        </label>

                        <select
                            name="category"
                            value={formData.category}
                            onChange={changeHandler}
                            required
                            className="
                w-full
                border
                rounded-2xl
                p-4
                outline-none
                focus:border-orange-500
              "
                        >

                            <option value="">
                                Select Category
                            </option>

                            <option value="Pizza">
                                Pizza
                            </option>

                            <option value="Burger">
                                Burger
                            </option>

                            <option value="Indian">
                                Indian
                            </option>

                            <option value="Chinese">
                                Chinese
                            </option>

                            <option value="Biryani">
                                Biryani
                            </option>

                            <option value="Drinks">
                                Drinks
                            </option>

                        </select>
                    </div>

                    {/* IMAGE */}

                    <div>

                        <label className="font-semibold block mb-3">
                            Food Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={imageHandler}
                            className="
                w-full
                border
                rounded-2xl
                p-4
              "
                        />
                    </div>

                    {/* IMAGE PREVIEW */}

                    {preview && (

                        <div className="md:col-span-2">

                            <img
                                src={preview}
                                alt="preview"
                                className="
                  w-52
                  h-52
                  object-cover
                  rounded-3xl
                  border
                "
                            />
                        </div>
                    )}

                    {/* DESCRIPTION */}

                    <div className="md:col-span-2">

                        <label className="font-semibold block mb-3">
                            Description
                        </label>

                        <textarea
                            rows="5"
                            name="description"
                            value={formData.description}
                            onChange={changeHandler}
                            placeholder="Food description..."
                            required
                            className="
                w-full
                border
                rounded-2xl
                p-4
                outline-none
                focus:border-orange-500
              "
                        ></textarea>
                    </div>

                    {/* BUTTON */}

                    <div className="md:col-span-2">

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
                transition-all
              "
                        >
                            {loading
                                ? "Updating..."
                                : "Update Food"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditFood;