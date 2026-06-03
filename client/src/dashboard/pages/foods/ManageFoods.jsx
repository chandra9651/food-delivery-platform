// src/dashboard/pages/foods/ManageFoods.jsx

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
    FaEdit,
    FaTrash,
    FaUtensils,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import {
    getFoods,
    deleteFood,
    getRestaurantFoods
} from "../../../services/foodService";

const ManageFoods = () => {

    const [foods, setFoods] = useState([]);

    const [loading, setLoading] =
        useState(true);

    /* ======================================================
       FETCH FOODS
    ====================================================== */

    const fetchFoods = async () => {

        try {

            // const restaurantId = localStorage.getItem("restaurantInfo")._id;

            console.log('food before call api')
            // const data = await getFoods();
            const data = await getRestaurantFoods();
            console.log(data);

            setFoods(data);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load foods"
            );

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {

        fetchFoods();

    }, []);

    /* ======================================================
       DELETE FOOD
    ====================================================== */

    const deleteHandler = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this food?"
        );

        if (!confirmDelete) return;

        try {

            await deleteFood(id);

            toast.success(
                "Food deleted successfully"
            );

            setFoods((prevFoods) =>
                prevFoods.filter(
                    (food) => food._id !== id
                )
            );

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Delete failed"
            );
        }
    };

    /* ======================================================
       LOADING
    ====================================================== */

    if (loading) {
        return (
            <div className="text-center py-20 text-2xl font-bold">
                Loading foods...
            </div>
        );
    }

    return (
        <div>

            {/* PAGE HEADER */}

            <div className="flex items-center justify-between mb-10">

                <div>

                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Manage Foods
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage all restaurant foods
                    </p>
                </div>

                <Link
                    to="/restaurant/add-food"
                    className="
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
            transition-all
          "
                >
                    + Add Food
                </Link>
            </div>

            {/* EMPTY STATE */}

            {foods.length === 0 ? (

                <div
                    className="
            bg-white
            rounded-3xl
            shadow-sm
            border
            border-gray-100
            p-20
            text-center
          "
                >

                    <div
                        className="
              w-28
              h-28
              rounded-full
              bg-orange-100
              flex
              items-center
              justify-center
              mx-auto
              mb-6
            "
                    >
                        <FaUtensils className="text-5xl text-orange-500" />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900">
                        No Foods Found
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Start by adding your first food item
                    </p>
                </div>

            ) : (

                <div
                    className="
            bg-white
            rounded-3xl
            shadow-md
            overflow-hidden
          "
                >

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            {/* TABLE HEAD */}

                            <thead
                                className="
                  bg-orange-500
                  text-white
                "
                            >

                                <tr>

                                    <th className="p-5 text-left">
                                        Food
                                    </th>

                                    <th className="p-5 text-left">
                                        Category
                                    </th>

                                    <th className="p-5 text-left">
                                        Price
                                    </th>

                                    <th className="p-5 text-left">
                                        Description
                                    </th>

                                    <th className="p-5 text-left">
                                        Actions
                                    </th>

                                </tr>
                            </thead>

                            {/* TABLE BODY */}

                            <tbody>

                                {foods.map((food) => (

                                    <tr
                                        key={food._id}
                                        className="
                      border-b
                      hover:bg-gray-50
                      transition-all
                    "
                                    >

                                        {/* FOOD */}

                                        <td className="p-5">

                                            <div className="flex items-center gap-4">

                                                <img
                                                    src={
                                                        food.image ||
                                                        "https://via.placeholder.com/100"
                                                    }
                                                    alt={food.name}
                                                    className="
                            w-16
                            h-16
                            rounded-2xl
                            object-cover
                          "
                                                />

                                                <div>

                                                    <h3 className="font-bold text-lg text-gray-900">
                                                        {food.name}
                                                    </h3>

                                                    <p className="text-sm text-gray-500">
                                                        Food Item
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* CATEGORY */}

                                        <td className="p-5">

                                            <span
                                                className="
                          bg-orange-100
                          text-orange-600
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-semibold
                        "
                                            >
                                                {food.category}
                                            </span>
                                        </td>

                                        {/* PRICE */}

                                        <td className="p-5 font-bold text-lg text-gray-900">
                                            ₹{food.price}
                                        </td>

                                        {/* DESCRIPTION */}

                                        <td className="p-5 text-gray-600 max-w-xs truncate">
                                            {food.description}
                                        </td>

                                        {/* ACTIONS */}

                                        <td className="p-5">

                                            <div className="flex gap-3">

                                                {/* EDIT */}

                                                <Link
                                                    to={`/restaurant/edit-food/${food._id}`}
                                                    className="
                            bg-blue-500
                            hover:bg-blue-600
                            text-white
                            px-5
                            py-3
                            rounded-2xl
                            flex
                            items-center
                            gap-2
                            transition-all
                          "
                                                >
                                                    <FaEdit />

                                                    Edit
                                                </Link>

                                                {/* DELETE */}

                                                <button
                                                    onClick={() =>
                                                        deleteHandler(
                                                            food._id
                                                        )
                                                    }
                                                    className="
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            px-5
                            py-3
                            rounded-2xl
                            flex
                            items-center
                            gap-2
                            transition-all
                          "
                                                >
                                                    <FaTrash />

                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageFoods;