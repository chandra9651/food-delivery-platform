import { FaBoxOpen } from "react-icons/fa";

const EmptyState = ({
    title = "No Data Found",
    description = "There is nothing to display right now.",
    buttonText,
    onClick,
    icon,
}) => {
    return (
        <div
            className="
        bg-white
        rounded-[32px]
        border
        border-gray-100
        shadow-sm
        p-8
        md:p-12
        flex
        flex-col
        items-center
        justify-center
        text-center
      "
        >
            {/* ICON */}

            <div
                className="
          w-24
          h-24
          rounded-full
          bg-orange-100
          flex
          items-center
          justify-center
          text-orange-500
          text-4xl
          mb-6
        "
            >
                {icon || <FaBoxOpen />}
            </div>

            {/* TITLE */}

            <h2
                className="
          text-2xl
          md:text-3xl
          font-extrabold
          text-gray-900
        "
            >
                {title}
            </h2>

            {/* DESCRIPTION */}

            <p
                className="
          text-gray-500
          mt-3
          max-w-md
          leading-relaxed
        "
            >
                {description}
            </p>

            {/* BUTTON */}

            {buttonText && (
                <button
                    onClick={onClick}
                    className="
            mt-8
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-8
            py-4
            rounded-2xl
            font-bold
            transition-all
            duration-300
            shadow-lg
            shadow-orange-200
          "
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default EmptyState;