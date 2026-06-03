// import { useState } from "react";

// import { Link, useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";

// import toast from "react-hot-toast";

// import API from "../../api/axios";

// import { setCredentials } from "../../features/auth/authSlice";

// const Register = () => {
//     const navigate = useNavigate();

//     const dispatch = useDispatch();

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });

//     const changeHandler = (e) => {
//         setFormData({
//             ...formData,

//             [e.target.name]: e.target.value,
//         });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();

//         try {
//             const { data } = await API.post(
//                 "/auth/register",
//                 formData
//             );

//             dispatch(setCredentials(data));

//             toast.success(
//                 "Registration successful"
//             );

//             navigate("/");
//         } catch (error) {
//             toast.error(
//                 error.response?.data?.message
//             );
//         }
//     };

//     return (
//         <div className="min-h-screen flex justify-center items-center bg-gray-100">
//             <form
//                 onSubmit={submitHandler}
//                 className="bg-white p-8 rounded shadow-md w-[400px]"
//             >
//                 <h2 className="text-3xl font-bold mb-6 text-center">
//                     Register
//                 </h2>

//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={changeHandler}
//                     className="w-full border p-3 mb-4 rounded"
//                 />

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={changeHandler}
//                     className="w-full border p-3 mb-4 rounded"
//                 />

//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={changeHandler}
//                     className="w-full border p-3 mb-4 rounded"
//                 />

//                 <button className="bg-black text-white w-full py-3 rounded">
//                     Register
//                 </button>

//                 <p className="mt-4 text-center">
//                     Already have an account?{" "}
//                     <Link
//                         to="/login"
//                         className="text-blue-500"
//                     >
//                         Login
//                     </Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Register;



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
    registerUser,
} from "../../services/authService";

const Register = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData, setFormData] =
        useState({
            name: "",
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

    const submitHandler = async (
        e
    ) => {

        e.preventDefault();

        try {

            /* REGISTER API */

            const data =
                await registerUser(
                    formData
                );

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
                "Registration successful"
            );

            /* REDIRECT */

            navigate("/");

        } catch (error) {

            toast.error(
                error.response?.data
                    ?.message ||
                "Registration failed"
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
                    Create Account
                </h2>

                <p
                    className="
                        text-gray-500
                        text-center
                        mb-8
                    "
                >
                    Register to continue
                </p>

                {/* NAME */}

                <div className="mb-5">

                    <label
                        className="
                            block
                            mb-2
                            font-medium
                            text-gray-700
                        "
                    >
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
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
                    "
                >
                    Register
                </button>

                {/* LOGIN */}

                <p
                    className="
                        mt-6
                        text-center
                        text-gray-600
                    "
                >
                    Already have an
                    account?{" "}

                    <Link
                        to="/user/login"
                        className="
                            text-orange-500
                            font-semibold
                        "
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;