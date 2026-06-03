import { useState } from "react";

import {
    Link,
    useNavigate,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import toast from "react-hot-toast";

import {
    setCredentials,
} from "../../features/auth/authSlice";

import {
    loginUser,
} from "../../services/authService";

const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    /* ======================================================
       INPUT CHANGE
    ====================================================== */

    const changeHandler = (e) => {

        setFormData({
            ...formData,

            [e.target.name]:
                e.target.value,
        });
    };

    /* ======================================================
       FORM SUBMIT
    ====================================================== */

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            /* LOGIN API */

            const data =
                await loginUser(formData);

            /* SAVE TOKEN */

            localStorage.setItem(
                "userToken",
                data.token
            );

            /* SAVE USER */

            localStorage.setItem(
                "userInfo",
                JSON.stringify(data)
            );

            /* SAVE REDUX */

            dispatch(
                setCredentials(data)
            );

            toast.success(
                "Login successful"
            );

            /* REDIRECT */

            navigate("/user");

        } catch (error) {

            toast.error(
                error.response?.data
                    ?.message ||
                "Login failed"
            );
        }
    };

    return (

        <div
            className="
                min-h-screen
                flex
                justify-center
                items-center
                bg-gray-100
                px-4
            "
        >
            <form
                onSubmit={submitHandler}
                className="
                    bg-white
                    p-8
                    rounded-2xl
                    shadow-lg
                    w-full
                    max-w-md
                "
            >
                {/* HEADING */}

                <h2
                    className="
                        text-3xl
                        font-bold
                        mb-2
                        text-center
                        text-gray-800
                    "
                >
                    Welcome Back
                </h2>

                <p
                    className="
                        text-gray-500
                        text-center
                        mb-8
                    "
                >
                    Login to your account
                </p>

                {/* EMAIL */}

                <div className="mb-5">

                    <label
                        className="
                            block
                            mb-2
                            font-medium
                            text-gray-700
                        "
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={changeHandler}
                        required
                        className="
                            w-full
                            border
                            border-gray-300
                            p-3
                            rounded-lg
                            outline-none
                            focus:border-orange-500
                        "
                    />
                </div>

                {/* PASSWORD */}

                <div className="mb-6">

                    <label
                        className="
                            block
                            mb-2
                            font-medium
                            text-gray-700
                        "
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={changeHandler}
                        required
                        className="
                            w-full
                            border
                            border-gray-300
                            p-3
                            rounded-lg
                            outline-none
                            focus:border-orange-500
                        "
                    />
                </div>

                {/* BUTTON */}

                <button
                    type="submit"
                    className="
                        bg-orange-500
                        hover:bg-orange-600
                        transition-all
                        text-white
                        w-full
                        py-3
                        rounded-lg
                        font-semibold
                        cursor-pointer
                    "
                >
                    Login
                </button>

                {/* REGISTER */}

                <p
                    className="
                        mt-6
                        text-center
                        text-gray-600
                    "
                >
                    Don't have an account?{" "}

                    <Link
                        to="/user/register"
                        className="
                            text-orange-500
                            font-semibold
                        "
                    >
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;