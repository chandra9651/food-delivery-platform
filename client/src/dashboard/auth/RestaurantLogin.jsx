// // src/dashboard/auth/RestaurantLogin.jsx

// import { useState } from "react";

// import {
//     FaEnvelope,
//     FaLock,
//     FaUtensils,
// } from "react-icons/fa";

// import {
//     Link,
//     useNavigate,
// } from "react-router-dom";

// const RestaurantLogin = () => {

//     const navigate = useNavigate();

//     const [formData, setFormData] =
//         useState({
//             email: "",
//             password: "",
//         });

//     /* ======================================================
//        HANDLE CHANGE
//     ====================================================== */

//     const changeHandler = (e) => {

//         setFormData({
//             ...formData,

//             [e.target.name]:
//                 e.target.value,
//         });
//     };

//     /* ======================================================
//        HANDLE SUBMIT
//     ====================================================== */

//     const submitHandler = (e) => {

//         e.preventDefault();

//         console.log(formData);

//         /* ======================================================
//            TEMP LOGIN
//         ====================================================== */

//         localStorage.setItem(
//             "restaurantToken",
//             "foodie-dashboard-token"
//         );

//         navigate("/restaurant");
//     };

//     return (
//         <div
//             className="
//         min-h-screen
//         flex
//         items-center
//         justify-center
//         bg-gray-100
//         px-4
//       "
//         >

//             <div
//                 className="
//           w-full
//           max-w-md
//           bg-white
//           rounded-3xl
//           shadow-xl
//           overflow-hidden
//         "
//             >

//                 {/* ======================================================
//                    TOP SECTION
//                 ====================================================== */}

//                 <div
//                     className="
//             bg-orange-500
//             px-8
//             py-10
//             text-white
//             text-center
//           "
//                 >

//                     <div
//                         className="
//               w-20
//               h-20
//               rounded-3xl
//               bg-white/20
//               mx-auto
//               flex
//               items-center
//               justify-center
//               text-4xl
//               mb-5
//             "
//                     >
//                         <FaUtensils />
//                     </div>

//                     <h1 className="text-3xl font-bold">
//                         Dashboard Login
//                     </h1>

//                     <p className="mt-2 text-orange-100">
//                         Manage your restaurant easily
//                     </p>
//                 </div>

//                 {/* ======================================================
//                    FORM
//                 ====================================================== */}

//                 <div className="p-8">

//                     <form
//                         onSubmit={submitHandler}
//                         className="space-y-6"
//                     >

//                         {/* EMAIL */}

//                         <div>

//                             <label
//                                 className="
//                   block
//                   text-sm
//                   font-semibold
//                   text-gray-700
//                   mb-2
//                 "
//                             >
//                                 Email Address
//                             </label>

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   border
//                   border-gray-200
//                   rounded-2xl
//                   px-4
//                   focus-within:ring-2
//                   focus-within:ring-orange-400
//                 "
//                             >

//                                 <FaEnvelope className="text-gray-400" />

//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="Enter email"
//                                     value={formData.email}
//                                     onChange={
//                                         changeHandler
//                                     }
//                                     required
//                                     className="
//                     w-full
//                     px-4
//                     py-4
//                     outline-none
//                     bg-transparent
//                   "
//                                 />
//                             </div>
//                         </div>

//                         {/* PASSWORD */}

//                         <div>

//                             <label
//                                 className="
//                   block
//                   text-sm
//                   font-semibold
//                   text-gray-700
//                   mb-2
//                 "
//                             >
//                                 Password
//                             </label>

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   border
//                   border-gray-200
//                   rounded-2xl
//                   px-4
//                   focus-within:ring-2
//                   focus-within:ring-orange-400
//                 "
//                             >

//                                 <FaLock className="text-gray-400" />

//                                 <input
//                                     type="password"
//                                     name="password"
//                                     placeholder="Enter password"
//                                     value={formData.password}
//                                     onChange={
//                                         changeHandler
//                                     }
//                                     required
//                                     className="
//                     w-full
//                     px-4
//                     py-4
//                     outline-none
//                     bg-transparent
//                   "
//                                 />
//                             </div>
//                         </div>

//                         {/* FORGOT PASSWORD */}

//                         <div className="flex justify-end">

//                             <Link
//                                 to="/restaurant/forgot-password"
//                                 className="
//                   text-sm
//                   text-orange-500
//                   hover:underline
//                 "
//                             >
//                                 Forgot Password?
//                             </Link>
//                         </div>

//                         {/* LOGIN BUTTON */}

//                         <button
//                             type="submit"
//                             className="
//                 w-full
//                 bg-orange-500
//                 hover:bg-orange-600
//                 transition-all
//                 text-white
//                 font-bold
//                 py-4
//                 rounded-2xl
//                 shadow-lg
//               "
//                         >
//                             Login to Dashboard
//                         </button>
//                     </form>

//                     {/* FOOTER */}

//                     <div className="mt-8 space-y-3 text-center">

//                         {/* REGISTER */}

//                         <p className="text-gray-500">

//                             Don't have restaurant account?

//                             {" "}

//                             <Link
//                                 to="/restaurant/register"
//                                 className="
//                   text-orange-500
//                   font-semibold
//                   hover:underline
//                 "
//                             >
//                                 Register Now
//                             </Link>
//                         </p>

//                         {/* WEBSITE */}

//                         <p className="text-gray-500">

//                             Want to order food?

//                             {" "}

//                             <Link
//                                 to="/"
//                                 className="
//                   text-orange-500
//                   font-semibold
//                   hover:underline
//                 "
//                             >
//                                 Go to Website
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RestaurantLogin;




// src/dashboard/auth/RestaurantLogin.jsx

import { useState } from "react";

import {
    FaEnvelope,
    FaLock,
    FaUtensils,
} from "react-icons/fa";

import {
    Link,
    useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import API from "../../api/axios";

const RestaurantLogin = () => {

    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] =
        useState({
            email: "",
            password: "",
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
       HANDLE SUBMIT
    ====================================================== */

    // const submitHandler = async (e) => {

    //     e.preventDefault();

    //     try {

    //         setLoading(true);

    //         /* ======================================================
    //            API CALL
    //         ====================================================== */

    //         const { data } =
    //             await API.post(
    //                 "/auth/login",
    //                 formData
    //             );

    //         /* ======================================================
    //            CHECK ROLE
    //         ====================================================== */

    //         if (
    //             data?.user?.role !==
    //             "restaurant"
    //         ) {
    //             toast.error(
    //                 "This account is not a restaurant account"
    //             );

    //             return;
    //         }

    //         /* ======================================================
    //            SAVE TOKEN
    //         ====================================================== */

    //         localStorage.setItem(
    //             "restaurantToken",
    //             data.token
    //         );

    //         localStorage.setItem(
    //             "restaurantUser",
    //             JSON.stringify(data.user)
    //         );

    //         toast.success(
    //             "Restaurant login successful"
    //         );

    //         navigate("/dashboard");

    //     } catch (error) {

    //         toast.error(
    //             error.response?.data?.message ||
    //             "Login failed"
    //         );

    //     } finally {

    //         setLoading(false);
    //     }
    // };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const { data } =
                await API.post(
                    "/restaurants/login",
                    formData
                );

            localStorage.setItem(
                "restaurantToken",
                data.token
            );

            localStorage.setItem(
                "restaurantInfo",
                JSON.stringify(data)
            );

            toast.success(
                data.message
            );

            navigate("/restaurant");
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div
            className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-100
        px-4
      "
        >

            <div
                className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
        "
            >

                {/* ======================================================
                   TOP SECTION
                ====================================================== */}

                <div
                    className="
            bg-orange-500
            px-8
            py-10
            text-white
            text-center
          "
                >

                    <div
                        className="
              w-20
              h-20
              rounded-3xl
              bg-white/20
              mx-auto
              flex
              items-center
              justify-center
              text-4xl
              mb-5
            "
                    >
                        <FaUtensils />
                    </div>

                    <h1 className="text-3xl font-bold">
                        Dashboard Login
                    </h1>

                    <p className="mt-2 text-orange-100">
                        Manage your restaurant easily
                    </p>
                </div>

                {/* ======================================================
                   FORM
                ====================================================== */}

                <div className="p-8">

                    <form
                        onSubmit={submitHandler}
                        className="space-y-6"
                    >

                        {/* EMAIL */}

                        <div>

                            <label
                                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
                            >
                                Email Address
                            </label>

                            <div
                                className="
                  flex
                  items-center
                  border
                  border-gray-200
                  rounded-2xl
                  px-4
                  focus-within:ring-2
                  focus-within:ring-orange-400
                "
                            >

                                <FaEnvelope className="text-gray-400" />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={
                                        changeHandler
                                    }
                                    required
                                    className="
                    w-full
                    px-4
                    py-4
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
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
                            >
                                Password
                            </label>

                            <div
                                className="
                  flex
                  items-center
                  border
                  border-gray-200
                  rounded-2xl
                  px-4
                  focus-within:ring-2
                  focus-within:ring-orange-400
                "
                            >

                                <FaLock className="text-gray-400" />

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={
                                        changeHandler
                                    }
                                    required
                                    className="
                    w-full
                    px-4
                    py-4
                    outline-none
                    bg-transparent
                  "
                                />
                            </div>
                        </div>

                        {/* FORGOT PASSWORD */}

                        <div className="flex justify-end">

                            <Link
                                to="/restaurant/forgot-password"
                                className="
                  text-sm
                  text-orange-500
                  hover:underline
                "
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* LOGIN BUTTON */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                w-full
                bg-orange-500
                hover:bg-orange-600
                transition-all
                text-white
                font-bold
                py-4
                rounded-2xl
                shadow-lg
                disabled:opacity-70
              "
                        >
                            {loading
                                ? "Logging in..."
                                : "Login to Dashboard"}
                        </button>
                    </form>

                    {/* FOOTER */}

                    <div className="mt-8 space-y-3 text-center">

                        {/* REGISTER */}

                        <p className="text-gray-500">

                            Don't have restaurant account?

                            {" "}

                            <Link
                                to="/restaurant/register"
                                className="
                  text-orange-500
                  font-semibold
                  hover:underline
                "
                            >
                                Register Now
                            </Link>
                        </p>

                        {/* WEBSITE */}

                        <p className="text-gray-500">

                            Want to order food?

                            {" "}

                            <Link
                                to="/"
                                className="
                  text-orange-500
                  font-semibold
                  hover:underline
                "
                            >
                                Go to Website
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantLogin;