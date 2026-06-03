// src/admin/pages/auth/AdminLogin.jsx

import { useState } from "react";

import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaShieldAlt,
    FaArrowRight,
    FaCheckCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../../../api/axios";

const AdminLogin = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] =
        useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: true,
    });

    /* ======================================================
       HANDLE CHANGE
    ====================================================== */

    const handleChange = (e) => {

        const {
            name,
            value,
            type,
            checked,
        } = e.target;

        setFormData({
            ...formData,

            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        });
    };

    /* ======================================================
       HANDLE SUBMIT
    ====================================================== */

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const { data } = await API.post(
                "/admin/login",
                {
                    email: formData.email,
                    password: formData.password,
                }
            );

            /* ======================================================
               SAVE TOKEN
            ====================================================== */

            localStorage.setItem(
                "adminToken",
                data.token
            );

            localStorage.setItem(
                "adminInfo",
                JSON.stringify(data)
            );

            toast.success(
                "Admin Login Successful"
            );

            navigate("/admin");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Login failed"
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div
            className="
        min-h-screen
        bg-gray-100
        flex
        items-center
        justify-center
        p-4
      "
        >
            {/* MAIN CONTAINER */}

            <div
                className="
          w-full
          max-w-6xl
          bg-white
          rounded-[40px]
          overflow-hidden
          shadow-2xl
          grid
          grid-cols-1
          lg:grid-cols-2
        "
            >
                {/* LEFT SIDE */}

                <div
                    className="
            hidden
            lg:flex
            flex-col
            justify-between
            bg-gradient-to-br
            from-orange-500
            to-orange-400
            text-white
            p-10
            relative
            overflow-hidden
          "
                >
                    {/* TOP */}

                    <div>

                        <div
                            className="
                w-20
                h-20
                rounded-[28px]
                bg-white/20
                flex
                items-center
                justify-center
                text-4xl
                backdrop-blur-sm
              "
                        >
                            <FaShieldAlt />
                        </div>

                        <h1
                            className="
                text-5xl
                font-extrabold
                mt-10
                leading-tight
              "
                        >
                            Admin Dashboard
                        </h1>

                        <p
                            className="
                text-white/80
                text-lg
                mt-6
                leading-relaxed
              "
                        >
                            Manage restaurants,
                            orders, customers,
                            payments and analytics
                            from one powerful admin
                            panel.
                        </p>
                    </div>

                    {/* FEATURES */}

                    <div className="space-y-5 mt-12">

                        <div className="flex items-center gap-4">

                            <div
                                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                "
                            >
                                <FaCheckCircle />
                            </div>

                            <div>

                                <h3 className="font-bold text-lg">
                                    Secure Authentication
                                </h3>

                                <p className="text-white/80 text-sm mt-1">
                                    Advanced admin
                                    security and
                                    protection
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">

                            <div
                                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                "
                            >
                                <FaCheckCircle />
                            </div>

                            <div>

                                <h3 className="font-bold text-lg">
                                    Real-Time Monitoring
                                </h3>

                                <p className="text-white/80 text-sm mt-1">
                                    Track orders and
                                    platform
                                    performance
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">

                            <div
                                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                "
                            >
                                <FaCheckCircle />
                            </div>

                            <div>

                                <h3 className="font-bold text-lg">
                                    Powerful Analytics
                                </h3>

                                <p className="text-white/80 text-sm mt-1">
                                    Get insights into
                                    sales and customers
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BACKGROUND CIRCLE */}

                    <div
                        className="
              absolute
              -bottom-24
              -right-24
              w-80
              h-80
              bg-white/10
              rounded-full
            "
                    />

                    <div
                        className="
              absolute
              top-10
              right-10
              w-24
              h-24
              bg-white/10
              rounded-full
            "
                    />
                </div>

                {/* RIGHT SIDE */}

                <div
                    className="
            p-6
            sm:p-10
            lg:p-14
            flex
            flex-col
            justify-center
          "
                >
                    {/* MOBILE LOGO */}

                    <div className="lg:hidden flex justify-center mb-8">

                        <div
                            className="
                w-20
                h-20
                rounded-[28px]
                bg-orange-500
                text-white
                flex
                items-center
                justify-center
                text-4xl
                shadow-lg
              "
                        >
                            <FaShieldAlt />
                        </div>
                    </div>

                    {/* HEADING */}

                    <div className="text-center lg:text-left">

                        <h2
                            className="
                text-4xl
                font-extrabold
                text-gray-900
              "
                        >
                            Welcome Back 👋
                        </h2>

                        <p className="text-gray-500 mt-4 text-lg">
                            Login to access the
                            admin dashboard
                        </p>
                    </div>

                    {/* FORM */}

                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 space-y-6"
                    >
                        {/* EMAIL */}

                        <div>

                            <label
                                className="
                  block
                  mb-3
                  font-bold
                  text-gray-700
                "
                            >
                                Email Address
                            </label>

                            <div
                                className="
                  flex
                  items-center
                  gap-4
                  border
                  border-gray-200
                  rounded-2xl
                  px-5
                  py-4
                  focus-within:border-orange-500
                  transition-all
                "
                            >

                                <FaEnvelope className="text-orange-500" />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter admin email"
                                    value={
                                        formData.email
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                    className="
                    w-full
                    outline-none
                    bg-transparent
                  "
                                />
                            </div>
                        </div>

                        {/* PASSWORD */}

                        <div>

                            <label
                                className="
                  block
                  mb-3
                  font-bold
                  text-gray-700
                "
                            >
                                Password
                            </label>

                            <div
                                className="
                  flex
                  items-center
                  gap-4
                  border
                  border-gray-200
                  rounded-2xl
                  px-5
                  py-4
                  focus-within:border-orange-500
                  transition-all
                "
                            >

                                <FaLock className="text-orange-500" />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    placeholder="Enter password"
                                    value={
                                        formData.password
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    required
                                    className="
                    w-full
                    outline-none
                    bg-transparent
                  "
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                    className="text-gray-500"
                                >
                                    {showPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* OPTIONS */}

                        <div
                            className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
              "
                        >
                            {/* REMEMBER */}

                            <label
                                className="
                  flex
                  items-center
                  gap-3
                  text-gray-600
                  cursor-pointer
                "
                            >

                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={
                                        formData.rememberMe
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="
                    w-5
                    h-5
                    accent-orange-500
                  "
                                />

                                Remember Me
                            </label>

                            {/* FORGOT */}

                            <button
                                type="button"
                                className="
                  text-orange-500
                  hover:text-orange-600
                  font-semibold
                  transition-all
                "
                            >
                                Forgot Password?
                            </button>
                        </div>

                        {/* LOGIN BUTTON */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                w-full
                bg-orange-500
                hover:bg-orange-600
                text-white
                py-4
                rounded-2xl
                font-bold
                text-lg
                shadow-lg
                shadow-orange-200
                transition-all
                flex
                items-center
                justify-center
                gap-3
                disabled:opacity-70
              "
                        >

                            {loading
                                ? "Logging in..."
                                : "Login To Dashboard"}

                            <FaArrowRight />
                        </button>
                    </form>

                    {/* FOOTER */}

                    <div
                        className="
              mt-10
              pt-8
              border-t
              border-gray-100
              text-center
            "
                    >

                        <p className="text-gray-500">
                            Protected Admin System •
                            Secure Access
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;