import { FaExclamationTriangle } from "react-icons/fa";

const ConfirmDialog = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Are you sure?",
    message = "This action cannot be undone.",
    confirmText = "Confirm",
    cancelText = "Cancel",
    type = "danger",
    loading = false,
}) => {
    if (!isOpen) return null;

    /* BUTTON STYLES */

    const confirmStyles = {
        danger: `
      bg-red-500
      hover:bg-red-600
      shadow-red-200
    `,

        warning: `
      bg-yellow-500
      hover:bg-yellow-600
      shadow-yellow-200
    `,

        success: `
      bg-green-500
      hover:bg-green-600
      shadow-green-200
    `,
    };

    return (
        <div
            className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-sm
        px-4
      "
        >
            {/* DIALOG BOX */}

            <div
                className="
          bg-white
          w-full
          max-w-md
          rounded-[32px]
          shadow-2xl
          p-8
          text-center
          animate-[fadeIn_.3s_ease]
        "
            >
                {/* ICON */}

                <div
                    className="
            w-24
            h-24
            mx-auto
            rounded-full
            bg-red-100
            flex
            items-center
            justify-center
            text-red-500
            text-4xl
            mb-6
          "
                >
                    <FaExclamationTriangle />
                </div>

                {/* TITLE */}

                <h2
                    className="
            text-3xl
            font-extrabold
            text-gray-900
          "
                >
                    {title}
                </h2>

                {/* MESSAGE */}

                <p
                    className="
            text-gray-500
            mt-4
            leading-relaxed
          "
                >
                    {message}
                </p>

                {/* ACTION BUTTONS */}

                <div
                    className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-8
          "
                >
                    {/* CANCEL */}

                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="
              flex-1
              bg-gray-200
              hover:bg-gray-300
              text-gray-800
              py-4
              rounded-2xl
              font-bold
              transition-all
              duration-300
              disabled:opacity-50
            "
                    >
                        {cancelText}
                    </button>

                    {/* CONFIRM */}

                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className={`
              flex-1
              text-white
              py-4
              rounded-2xl
              font-bold
              transition-all
              duration-300
              shadow-lg
              disabled:opacity-50
              flex
              items-center
              justify-center
              gap-3
              ${confirmStyles[type]}
            `}
                    >
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
                            confirmText
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;