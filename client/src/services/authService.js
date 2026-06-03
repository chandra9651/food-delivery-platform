import API from "../api/axios";

/* ======================================================
   REGISTER USER
====================================================== */

export const registerUser = async (formData) => {

    const { data } =
        await API.post(
            "/auth/register",
            formData
        );

    return data;
};

/* ======================================================
   LOGIN USER
====================================================== */

export const loginUser = async (formData) => {

    const { data } =
        await API.post(
            "/auth/login",
            formData
        );

    return data;
};

/* ======================================================
   GET PROFILE
====================================================== */

export const getProfile = async () => {

    const { data } =
        await API.get(
            "/users/profile"
        );

    return data;
};