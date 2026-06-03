import { useState } from "react";

import toast from "react-hot-toast";
import {
    FaUpload,
    FaUtensils,
} from "react-icons/fa";

import {
    createFood,
} from "../../../services/foodService";


const AddFood = () => {


    const [loading, setLoading] =
        useState(false);


    const [preview, setPreview] =
        useState("");

    const [formData, setFormData] =
        useState({
            name: "",
            price: "",
            category: "Pizza",
            image: "",
            description: "",
        });


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
          HANDLE IMAGE
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
           SUBMIT
        ====================================================== */


    const submitHandler = async (
        e
    ) => {

        e.preventDefault();

        try {

            setLoading(true);

            const foodData =
                new FormData();

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

            foodData.append(
                "image",
                formData.image
            );

            console.log(foodData);


            // console.log([...foodData.entries()]);


            // await createFood(
            //     foodData
            // );

            toast.success(
                "Food added successfully"
            );

            /* RESET */

            setFormData({
                name: "",
                price: "",
                category: "Pizza",
                image: "",
                description: "",
            });

            setPreview("");

        } catch (error) {

            toast.error(
                error.response?.data
                    ?.message ||
                "Failed to add food"
            );

        } finally {

            setLoading(false);
        }
    };


    return (
        <div>

            {/* HEADER */}

            <div className="mb-10">

                <h1 className="text-4xl font-extrabold text-gray-900">
                    Add New Food
                </h1>

                <p className="text-gray-500 mt-2">
                    Add delicious food items to your restaurant menu
                </p>
            </div>

            {/* FORM CARD */}

            <div
                className="
          bg-white
          rounded-3xl
          shadow-md
          p-10
          border
          border-gray-100
        "
            >

                <form
                    onSubmit={
                        submitHandler
                    }
                    className="
            grid
            md:grid-cols-2
            gap-8
          "
                >

                    {/* FOOD NAME */}

                    <div>

                        <label
                            className="
                font-semibold
                block
                mb-3
                text-gray-700
              "
                        >
                            Food Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={
                                formData.name
                            }
                            onChange={
                                changeHandler
                            }
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

                        <label
                            className="
                font-semibold
                block
                mb-3
                text-gray-700
              "
                        >
                            Price
                        </label>

                        <input
                            type="number"
                            name="price"
                            value={
                                formData.price
                            }
                            onChange={
                                changeHandler
                            }
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

                        <label
                            className="
                font-semibold
                block
                mb-3
                text-gray-700
              "
                        >
                            Category
                        </label>

                        <select
                            name="category"
                            value={
                                formData.category
                            }
                            onChange={
                                changeHandler
                            }
                            className="
                w-full
                border
                rounded-2xl
                p-4
                outline-none
                focus:border-orange-500
              "
                        >

                            <option>
                                Pizza
                            </option>

                            <option>
                                Burger
                            </option>

                            <option>
                                Indian
                            </option>

                            <option>
                                Chinese
                            </option>

                            <option>
                                Drinks
                            </option>

                            <option>
                                Dessert
                            </option>

                        </select>
                    </div>

                    {/* IMAGE */}

                    <div>

                        <label
                            className="
                font-semibold
                block
                mb-3
                text-gray-700
              "
                        >
                            Food Image
                        </label>

                        <label
                            className="
                border-2
                border-dashed
                border-orange-300
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                hover:bg-orange-50
                transition-all
              "
                        >

                            <FaUpload
                                className="
                  text-3xl
                  text-orange-500
                  mb-3
                "
                            />

                            <p className="font-medium text-gray-700">
                                Upload Food Image
                            </p>

                            <p className="text-sm text-gray-400 mt-1">
                                PNG, JPG, JPEG
                            </p>

                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={
                                    imageHandler
                                }
                            />
                        </label>
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
                  rounded-3xl
                  object-cover
                  shadow-lg
                "
                            />
                        </div>
                    )}

                    {/* DESCRIPTION */}

                    <div className="md:col-span-2">

                        <label
                            className="
                font-semibold
                block
                mb-3
                text-gray-700
              "
                        >
                            Description
                        </label>

                        <textarea
                            rows="5"
                            name="description"
                            value={
                                formData.description
                            }
                            onChange={
                                changeHandler
                            }
                            placeholder="Food description..."
                            required
                            className="
                w-full
                border
                rounded-2xl
                p-4
                outline-none
                resize-none
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
                flex
                items-center
                gap-3
                disabled:opacity-70
              "
                        >

                            <FaUtensils />

                            {loading
                                ? "Adding Food..."
                                : "Add Food"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}



