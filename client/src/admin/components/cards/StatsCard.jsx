import { motion } from "framer-motion";

const StatsCard = ({
    title,
    value,
    icon,
    growth,
    color,
}) => {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="
        relative
        overflow-hidden
        bg-white
        rounded-[30px]
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
            {/* BACKGROUND GRADIENT */}

            <div
                className={`
          absolute
          top-0
          right-0
          w-40
          h-40
          rounded-full
          blur-3xl
          opacity-10
          ${color}
        `}
            ></div>

            {/* TOP SECTION */}

            <div className="flex items-start justify-between">

                {/* TEXT */}

                <div>

                    <p className="text-gray-500 text-sm md:text-base font-medium">
                        {title}
                    </p>

                    <h2
                        className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-gray-900
              mt-4
              tracking-tight
            "
                    >
                        {value}
                    </h2>
                </div>

                {/* ICON */}

                <div
                    className={`
            w-16
            h-16
            md:w-18
            md:h-18
            rounded-2xl
            flex
            items-center
            justify-center
            text-3xl
            text-white
            shadow-lg
            ${color}
          `}
                >
                    {icon}
                </div>
            </div>

            {/* BOTTOM */}

            <div className="mt-8 flex items-center justify-between">

                {/* GROWTH */}

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

                {/* SMALL TEXT */}

                <p className="text-gray-400 text-sm">
                    Since last month
                </p>
            </div>

            {/* DECORATIVE LINE */}

            <div
                className={`
          absolute
          bottom-0
          left-0
          h-2
          w-full
          ${color}
        `}
            ></div>
        </motion.div>
    );
};

export default StatsCard;