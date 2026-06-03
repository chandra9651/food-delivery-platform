import { motion } from "framer-motion";

import {
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaShoppingBag,
} from "react-icons/fa";

const UserCard = ({
    image,
    name,
    email,
    phone,
    location,
    orders,
    spent,
    status,
}) => {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="
        bg-white
        rounded-[32px]
        overflow-hidden
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-300
        border
        border-gray-100
      "
        >
            {/* TOP SECTION */}

            <div
                className="
          relative
          bg-gradient-to-r
          from-orange-500
          to-red-500
          px-6
          pt-8
          pb-16
        "
            >
                {/* STATUS */}

                <div
                    className={`
            absolute
            top-5
            right-5
            px-4
            py-2
            rounded-xl
            text-sm
            font-semibold
            
            ${status === "Active"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }
          `}
                >
                    {status}
                </div>

                {/* PROFILE */}

                <div className="flex flex-col items-center">

                    <img
                        src={image}
                        alt={name}
                        className="
              w-28
              h-28
              rounded-full
              border-4
              border-white
              object-cover
              shadow-xl
            "
                    />

                    <h2
                        className="
              mt-5
              text-2xl
              font-extrabold
              text-white
            "
                    >
                        {name}
                    </h2>

                    <p className="text-orange-100 mt-2">
                        Premium Customer
                    </p>
                </div>
            </div>

            {/* DETAILS */}

            <div className="px-6 pb-6 -mt-8">

                <div
                    className="
            bg-white
            rounded-3xl
            shadow-lg
            p-5
          "
                >
                    {/* EMAIL */}

                    <div className="flex items-center gap-4 py-3 border-b">

                        <div
                            className="
                w-12
                h-12
                rounded-2xl
                bg-orange-100
                text-orange-500
                flex
                items-center
                justify-center
              "
                        >
                            <FaEnvelope />
                        </div>

                        <div>

                            <p className="text-sm text-gray-500">
                                Email
                            </p>

                            <h3 className="font-semibold text-gray-900 mt-1 break-all">
                                {email}
                            </h3>
                        </div>
                    </div>

                    {/* PHONE */}

                    <div className="flex items-center gap-4 py-3 border-b">

                        <div
                            className="
                w-12
                h-12
                rounded-2xl
                bg-blue-100
                text-blue-500
                flex
                items-center
                justify-center
              "
                        >
                            <FaPhoneAlt />
                        </div>

                        <div>

                            <p className="text-sm text-gray-500">
                                Phone
                            </p>

                            <h3 className="font-semibold text-gray-900 mt-1">
                                {phone}
                            </h3>
                        </div>
                    </div>

                    {/* LOCATION */}

                    <div className="flex items-center gap-4 py-3">

                        <div
                            className="
                w-12
                h-12
                rounded-2xl
                bg-green-100
                text-green-500
                flex
                items-center
                justify-center
              "
                        >
                            <FaMapMarkerAlt />
                        </div>

                        <div>

                            <p className="text-sm text-gray-500">
                                Location
                            </p>

                            <h3 className="font-semibold text-gray-900 mt-1">
                                {location}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* STATS */}

                <div
                    className="
            grid
            grid-cols-2
            gap-4
            mt-6
          "
                >
                    {/* ORDERS */}

                    <div
                        className="
              bg-orange-50
              rounded-2xl
              p-5
              text-center
            "
                    >
                        <div
                            className="
                w-14
                h-14
                rounded-2xl
                bg-orange-500
                text-white
                flex
                items-center
                justify-center
                mx-auto
                text-xl
              "
                        >
                            <FaShoppingBag />
                        </div>

                        <p className="text-gray-500 mt-4 text-sm">
                            Orders
                        </p>

                        <h2
                            className="
                text-3xl
                font-extrabold
                text-gray-900
                mt-2
              "
                        >
                            {orders}
                        </h2>
                    </div>

                    {/* SPENT */}

                    <div
                        className="
              bg-green-50
              rounded-2xl
              p-5
              text-center
            "
                    >
                        <div
                            className="
                w-14
                h-14
                rounded-2xl
                bg-green-500
                text-white
                flex
                items-center
                justify-center
                mx-auto
                text-xl
              "
                        >
                            <FaUser />
                        </div>

                        <p className="text-gray-500 mt-4 text-sm">
                            Total Spent
                        </p>

                        <h2
                            className="
                text-3xl
                font-extrabold
                text-gray-900
                mt-2
              "
                        >
                            {spent}
                        </h2>
                    </div>
                </div>

                {/* BUTTONS */}

                <div
                    className="
            mt-6
            flex
            flex-col
            sm:flex-row
            gap-4
          "
                >
                    <button
                        className="
              flex-1
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-3
              rounded-2xl
              font-semibold
              transition-all
            "
                    >
                        View Profile
                    </button>

                    <button
                        className="
              flex-1
              border
              border-gray-300
              hover:bg-gray-100
              py-3
              rounded-2xl
              font-semibold
              transition-all
            "
                    >
                        Message
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default UserCard;