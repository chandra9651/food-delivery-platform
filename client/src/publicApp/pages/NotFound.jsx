// src/publicApp/pages/NotFound.jsx

import { Link } from "react-router-dom";

import {
    FaHome,
    FaArrowLeft,
} from "react-icons/fa";

const NotFound = () => {
    return (
        <div
            className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-50
        px-4
      "
        >

            <div className="text-center max-w-xl">

                {/* 404 */}

                <h1
                    className="
            text-[120px]
            md:text-[180px]
            font-extrabold
            text-orange-500
            leading-none
          "
                >
                    404
                </h1>

                {/* TITLE */}

                <h2
                    className="
            text-3xl
            md:text-5xl
            font-bold
            text-gray-900
            mt-4
          "
                >
                    Page Not Found
                </h2>

                {/* DESCRIPTION */}

                <p
                    className="
            text-gray-500
            mt-6
            text-lg
            leading-relaxed
          "
                >
                    Sorry, the page you are looking for
                    does not exist or has been moved.
                </p>

                {/* BUTTONS */}

                <div
                    className="
            mt-10
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
          "
                >

                    {/* HOME */}

                    <Link
                        to="/"
                        className="
              flex items-center gap-3
              bg-orange-500 hover:bg-orange-600
              text-white
              px-7 py-4
              rounded-2xl
              font-semibold
              transition-all
              shadow-lg
            "
                    >

                        <FaHome />

                        Back to Home
                    </Link>

                    {/* GO BACK */}

                    <button
                        onClick={() =>
                            window.history.back()
                        }
                        className="
              flex items-center gap-3
              bg-white hover:bg-gray-100
              border border-gray-200
              text-gray-700
              px-7 py-4
              rounded-2xl
              font-semibold
              transition-all
            "
                    >

                        <FaArrowLeft />

                        Go Back
                    </button>
                </div>

                {/* IMAGE */}

                <div className="mt-14">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                        alt="404"
                        className="
              w-72
              mx-auto
              opacity-90
            "
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFound;