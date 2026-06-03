const Input = ({
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
    name,
    icon,
    error,
    disabled = false,
    required = false,
    className = "",
}) => {
    return (
        <div className="w-full">
            {/* LABEL */}

            {label && (
                <label
                    className="
            block
            text-sm
            font-semibold
            text-gray-700
            mb-3
          "
                >
                    {label}
                </label>
            )}

            {/* INPUT CONTAINER */}

            <div className="relative">
                {/* ICON */}

                {icon && (
                    <div
                        className="
              absolute
              top-1/2
              left-4
              -translate-y-1/2
              text-orange-500
              text-lg
            "
                    >
                        {icon}
                    </div>
                )}

                {/* INPUT */}

                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    disabled={disabled}
                    required={required}
                    className={`
            w-full
            bg-gray-100
            border
            ${error
                            ? "border-red-400"
                            : "border-transparent"
                        }
            rounded-2xl
            py-4
            ${icon
                            ? "pl-12"
                            : "pl-4"
                        }
            pr-4
            outline-none
            transition-all
            duration-300
            focus:ring-2
            ${error
                            ? "focus:ring-red-300"
                            : "focus:ring-orange-300"
                        }
            focus:bg-white
            disabled:opacity-50
            disabled:cursor-not-allowed
            ${className}
          `}
                />

                {/* ERROR MESSAGE */}

                {error && (
                    <p
                        className="
              text-red-500
              text-sm
              mt-2
              font-medium
            "
                    >
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Input;