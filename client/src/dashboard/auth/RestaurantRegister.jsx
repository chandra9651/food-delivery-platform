// // src/dashboard/auth/RestaurantRegister.jsx

// import { useState } from "react";

// import { Link, useNavigate } from "react-router-dom";

// import toast from "react-hot-toast";

// const RestaurantRegister = () => {

//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         restaurantName: "",
//         ownerName: "",
//         email: "",
//         phone: "",
//         password: "",
//         address: "",
//     });

//     const changeHandler = (e) => {
//         setFormData({
//             ...formData,

//             [e.target.name]: e.target.value,
//         });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();

//         console.log(formData);

//         toast.success(
//             "Restaurant registered successfully"
//         );

//         navigate("/restaurant/login");
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

//             <form
//                 onSubmit={submitHandler}
//                 className="
//           bg-white
//           w-full
//           max-w-2xl
//           p-8
//           rounded-3xl
//           shadow-lg
//         "
//             >

//                 <h1
//                     className="
//             text-4xl
//             font-extrabold
//             text-center
//             text-gray-900
//             mb-2
//           "
//                 >
//                     Restaurant Register
//                 </h1>

//                 <p className="text-center text-gray-500 mb-10">
//                     Create your restaurant dashboard
//                 </p>

//                 <div
//                     className="
//             grid grid-cols-1
//             md:grid-cols-2
//             gap-5
//           "
//                 >

//                     <input
//                         type="text"
//                         name="restaurantName"
//                         placeholder="Restaurant Name"
//                         value={formData.restaurantName}
//                         onChange={changeHandler}
//                         className="border p-4 rounded-xl outline-none"
//                     />

//                     <input
//                         type="text"
//                         name="ownerName"
//                         placeholder="Owner Name"
//                         value={formData.ownerName}
//                         onChange={changeHandler}
//                         className="border p-4 rounded-xl outline-none"
//                     />

//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={changeHandler}
//                         className="border p-4 rounded-xl outline-none"
//                     />

//                     <input
//                         type="text"
//                         name="phone"
//                         placeholder="Phone"
//                         value={formData.phone}
//                         onChange={changeHandler}
//                         className="border p-4 rounded-xl outline-none"
//                     />

//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={changeHandler}
//                         className="border p-4 rounded-xl outline-none"
//                     />

//                     <input
//                         type="text"
//                         name="address"
//                         placeholder="Address"
//                         value={formData.address}
//                         onChange={changeHandler}
//                         className="border p-4 rounded-xl outline-none"
//                     />
//                 </div>

//                 <button
//                     className="
//             w-full
//             bg-orange-500
//             hover:bg-orange-600
//             text-white
//             py-4
//             rounded-2xl
//             font-bold
//             text-lg
//             mt-8
//             transition-all
//           "
//                 >
//                     Register Restaurant
//                 </button>

//                 <p className="text-center mt-6 text-gray-600">

//                     Already have account?{" "}

//                     <Link
//                         to="/restaurant/login"
//                         className="text-orange-500 font-semibold"
//                     >
//                         Login
//                     </Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default RestaurantRegister;




// src/dashboard/auth/RestaurantRegister.jsx

import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../../api/axios";

const RestaurantRegister = () => {

    const navigate = useNavigate();

    const [loading, setLoading] =
        useState(false);

    const [formData, setFormData] = useState({
        restaurantName: "",
        ownerName: "",
        email: "",
        phone: "",
        password: "",
        address: "",
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

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            /* ======================================================
               SEND DATA TO BACKEND
            ====================================================== */

            const { data } =
                await API.post(
                    "/restaurants/register",
                    {
                        name:
                            formData.restaurantName,

                        ownerName:
                            formData.ownerName,

                        email:
                            formData.email,

                        phone:
                            formData.phone,

                        password:
                            formData.password,

                        address:
                            formData.address,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "restaurantToken"
                            )}`,
                        },
                    }
                );

            toast.success(
                data.message ||
                "Restaurant registered successfully"
            );

            navigate(
                "/restaurant/login"
            );

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Registration failed"
            );

        } finally {

            setLoading(false);
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

            <form
                onSubmit={submitHandler}
                className="
          bg-white
          w-full
          max-w-2xl
          p-8
          rounded-3xl
          shadow-lg
        "
            >

                <h1
                    className="
            text-4xl
            font-extrabold
            text-center
            text-gray-900
            mb-2
          "
                >
                    Restaurant Register
                </h1>

                <p className="text-center text-gray-500 mb-10">
                    Create your restaurant dashboard
                </p>

                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          "
                >

                    {/* RESTAURANT NAME */}

                    <input
                        type="text"
                        name="restaurantName"
                        placeholder="Restaurant Name"
                        value={
                            formData.restaurantName
                        }
                        onChange={changeHandler}
                        required
                        className="
              border
              p-4
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-orange-400
            "
                    />

                    {/* OWNER NAME */}

                    <input
                        type="text"
                        name="ownerName"
                        placeholder="Owner Name"
                        value={
                            formData.ownerName
                        }
                        onChange={changeHandler}
                        required
                        className="
              border
              p-4
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-orange-400
            "
                    />

                    {/* EMAIL */}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={changeHandler}
                        required
                        className="
              border
              p-4
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-orange-400
            "
                    />

                    {/* PHONE */}

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={changeHandler}
                        required
                        className="
              border
              p-4
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-orange-400
            "
                    />

                    {/* PASSWORD */}

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={
                            formData.password
                        }
                        onChange={changeHandler}
                        required
                        className="
              border
              p-4
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-orange-400
            "
                    />

                    {/* ADDRESS */}

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={
                            formData.address
                        }
                        onChange={changeHandler}
                        required
                        className="
              border
              p-4
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-orange-400
            "
                    />
                </div>

                {/* BUTTON */}

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
            mt-8
            transition-all
            disabled:opacity-70
          "
                >
                    {loading
                        ? "Registering..."
                        : "Register Restaurant"}
                </button>

                {/* LOGIN */}

                <p className="text-center mt-6 text-gray-600">

                    Already have account?{" "}

                    <Link
                        to="/restaurant/login"
                        className="
              text-orange-500
              font-semibold
              hover:underline
            "
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RestaurantRegister;