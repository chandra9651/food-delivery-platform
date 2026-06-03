import { motion } from "framer-motion";

import {
    FaClipboardList,
    FaArrowUp,
    FaClock,
} from "react-icons/fa";

const OrdersCard = ({
    totalOrders,
    pendingOrders,
    completedOrders,
    growth,
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="
        relative
        overflow-hidden
        bg-white
        rounded-[32px]
        p-6
        md:p-7
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-300
        border
        border-gray-100
      "
        >
            {/* BACKGROUND EFFECT */}

            <div
                className="
          absolute
          -top-10
          -right-10
          w-40
          h-40
          bg-orange-500/10
          rounded-full
          blur-3xl
        "
            ></div>

            {/* TOP */}

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-gray-500 font-medium">
                        Orders Overview
                    </p>

                    <h2
                        className="
              text-4xl
              md:text-5xl
              font-extrabold
              text-gray-900
              mt-4
            "
                    >
                        {totalOrders}
                    </h2>
                </div>

                {/* ICON */}

                <div
                    className="
            w-16
            h-16
            rounded-2xl
            bg-orange-500
            flex
            items-center
            justify-center
            text-white
            text-3xl
            shadow-lg
            shadow-orange-500/30
          "
                >
                    <FaClipboardList />
                </div>
            </div>

            {/* ORDER STATS */}

            <div className="grid grid-cols-2 gap-4 mt-10">

                {/* PENDING */}

                <div
                    className="
            bg-orange-50
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
                            <FaClock />
                        </div>

                        <div>

                            <p className="text-gray-500 text-sm">
                                Pending
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-1">
                                {pendingOrders}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* COMPLETED */}

                <div
                    className="
            bg-green-50
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
                            <FaArrowUp />
                        </div>

                        <div>

                            <p className="text-gray-500 text-sm">
                                Completed
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-1">
                                {completedOrders}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}

            <div
                className="
          mt-8
          flex
          items-center
          justify-between
          flex-wrap
          gap-3
        "
            >
                <div
                    className="
            inline-flex
            items-center
            gap-2
            bg-green-100
            text-green-700
            px-4
            py-2
            rounded-xl
            text-sm
            font-semibold
          "
                >
                    ↑ {growth}
                </div>

                <p className="text-gray-400 text-sm">
                    Orders increased this month
                </p>
            </div>

            {/* BOTTOM BORDER */}

            <div
                className="
          absolute
          bottom-0
          left-0
          w-full
          h-2
          bg-orange-500
        "
            ></div>
        </motion.div>
    );
};

export default OrdersCard;