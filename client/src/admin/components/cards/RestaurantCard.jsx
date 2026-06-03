import { motion } from "framer-motion";

import {
    FaStore,
    FaStar,
    FaMapMarkerAlt,
    FaUtensils,
} from "react-icons/fa";

const RestaurantCard = ({
    image,
    name,
    location,
    rating,
    foods,
    orders,
    revenue,
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
            {/* IMAGE */}

            <div className="relative">

                <img
                    src={image}
                    alt={name}
                    className="
            w-full
            h-[220px]
            object-cover
          "
                />

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
            backdrop-blur-lg
            
            ${status === "Active"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }
          `}
                >
                    {status}
                </div>
            </div>

            {/* CONTENT */}

            <div className="p-6">

                {/* TOP */}

                <div className="flex items-start justify-between gap-4">

                    <div>

                        <h2
                            className="
                text-2xl
                font-bold
                text-gray-900
              "
                        >
                            {name}
                        </h2>

                        <div
                            className="
                flex
                items-center
                gap-2
                text-gray-500
                mt-3
              "
                        >
                            <FaMapMarkerAlt />

                            <span className="text-sm">
                                {location}
                            </span>
                        </div>
                    </div>

                    {/* RATING */}

                    <div
                        className="
              flex
              items-center
              gap-2
              bg-orange-100
              text-orange-600
              px-3
              py-2
              rounded-xl
              font-semibold
            "
                    >
                        <FaStar />

                        {rating}
                    </div>
                </div>

                {/* STATS */}

                <div
                    className="
            grid
            grid-cols-2
            gap-4
            mt-8
          "
                >
                    {/* FOODS */}

                    <div
                        className="
              bg-gray-100
              rounded-2xl
              p-4
            "
                    >
                        <div className="flex items-center gap-3">

                            <div
                                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-orange-500
                  text-white
                  flex
                  items-center
                  justify-center
                "
                            >
                                <FaUtensils />
                            </div>

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Foods
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                                    {foods}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* ORDERS */}

                    <div
                        className="
              bg-gray-100
              rounded-2xl
              p-4
            "
                    >
                        <div className="flex items-center gap-3">

                            <div
                                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-green-500
                  text-white
                  flex
                  items-center
                  justify-center
                "
                            >
                                <FaStore />
                            </div>

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Orders
                                </p>

                                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                                    {orders}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* REVENUE */}

                <div
                    className="
            mt-6
            bg-gradient-to-r
            from-orange-500
            to-red-500
            rounded-2xl
            p-5
            text-white
          "
                >
                    <p className="text-orange-100 text-sm">
                        Total Revenue
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              mt-2
            "
                    >
                        {revenue}
                    </h2>
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
                        View Details
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
                        Manage
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default RestaurantCard;