import API from "../api/axios";

/* ======================================================
   CREATE FOOD
====================================================== */

export const createFood = async (foodData) => {
    const { data } = await API.post(
        "/foods",
        foodData,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("restaurantToken")}`,
            },
        }
    );

    return data;
};

/* ======================================================
   GET ALL FOODS
====================================================== */

export const getFoods = async () => {
    const { data } = await API.get("/foods");

    return data;
};

/* ======================================================
   GET RESTAURANT FOODS
====================================================== */

export const getRestaurantFoods = async (
    // restaurantId
) => {
    const { data } = await API.get(
        // `/foods/restaurant/${restaurantId}`
        `/foods/restaurant/`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("restaurantToken")}`,
            },
        }
    );

    return data;
};

/* ======================================================
   UPDATE FOOD
====================================================== */

export const updateFood = async (
    id,
    foodData
) => {
    const { data } = await API.put(
        `/foods/${id}`,
        foodData,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("restaurantToken")}`,
            },
        }
    );

    return data;
};

/* ======================================================
   DELETE FOOD
====================================================== */

export const deleteFood = async (id) => {
    const { data } = await API.delete(
        `/foods/${id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("restaurantToken")}`,
            },
        }
    );

    return data;
};