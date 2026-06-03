const Button = ({
    children,
    type = "button",
    onClick,
    className = "",
    disabled = false,
    loading = false,
    icon,
    fullWidth = false,
    variant = "primary",
    size = "md",
}) => {
    /* VARIANTS */

    const variants = {
        primary: `
      bg-orange-500
      hover:bg-orange-600
      text-white
      shadow-lg
      shadow-orange-200
    `,

        secondary: `
      bg-gray-100
      hover:bg-gray-200
      text-gray-800
    `,

        success: `
      bg-green-500
      hover:bg-green-600
      text-white
      shadow-lg
      shadow-green-200
    `,

        danger: `
      bg-red-500
      hover:bg-red-600
      text-white
      shadow-lg
      shadow-red-200
    `,

        outline: `
      border-2
      border-orange-500
      text-orange-500
      hover:bg-orange-500
      hover:text-white
    `,

        dark: `
      bg-gray-900
      hover:bg-black
      text-white
    `,
    };

    /* SIZES */

    const sizes = {
        sm: `
      px-4
      py-2
      text-sm
      rounded-xl
    `,

        md: `
      px-6
      py-3
      text-base
      rounded-2xl
    `,

        lg: `
      px-8
      py-4
      text-lg
      rounded-2xl
    `,
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        flex
        items-center
        justify-center
        gap-2
        font-semibold
        transition-all
        duration-300
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
        >
            {/* LOADING SPINNER */}

            {loading ? (
                <div
                    className="
            w-5
            h-5
            border-2
            border-white
            border-t-transparent
            rounded-full
            animate-spin
          "
                />
            ) : (
                <>
                    {icon && <span>{icon}</span>}

                    <span>{children}</span>
                </>
            )}
        </button>
    );
};

export default Button;