const Loader = ({
    size = "md",
    text = "Loading...",
    fullScreen = false,
}) => {
    /* SIZE CLASSES */

    const sizes = {
        sm: "w-8 h-8 border-2",
        md: "w-14 h-14 border-4",
        lg: "w-20 h-20 border-4",
    };

    /* LOADER CONTENT */

    const loaderContent = (
        <div
            className="
        flex
        flex-col
        items-center
        justify-center
        gap-4
      "
        >
            {/* SPINNER */}

            <div
                className={`
          ${sizes[size]}
          border-orange-500
          border-t-transparent
          rounded-full
          animate-spin
        `}
            />

            {/* TEXT */}

            {text && (
                <p
                    className="
            text-gray-600
            font-semibold
            text-lg
          "
                >
                    {text}
                </p>
            )}
        </div>
    );

    /* FULL SCREEN */

    if (fullScreen) {
        return (
            <div
                className="
          fixed
          inset-0
          z-50
          bg-white
          flex
          items-center
          justify-center
        "
            >
                {loaderContent}
            </div>
        );
    }

    return (
        <div
            className="
        w-full
        py-12
        flex
        items-center
        justify-center
      "
        >
            {loaderContent}
        </div>
    );
};

export default Loader;