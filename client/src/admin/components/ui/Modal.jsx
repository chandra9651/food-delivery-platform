import { FaTimes } from "react-icons/fa";

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    width = "max-w-2xl",
}) => {
    if (!isOpen) return null;

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
            {/* MODAL BOX */}

            <div
                className={`
          bg-white
          w-full
          ${width}
          rounded-[32px]
          shadow-2xl
          overflow-hidden
          animate-[fadeIn_.3s_ease]
        `}
            >
                {/* HEADER */}

                <div
                    className="
            flex
            items-center
            justify-between
            px-6
            py-5
            border-b
            border-gray-100
          "
                >
                    <h2
                        className="
              text-2xl
              font-extrabold
              text-gray-900
            "
                    >
                        {title}
                    </h2>

                    {/* CLOSE BUTTON */}

                    <button
                        onClick={onClose}
                        className="
              w-11
              h-11
              rounded-full
              bg-gray-100
              hover:bg-red-500
              hover:text-white
              transition-all
              flex
              items-center
              justify-center
              text-gray-600
            "
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* BODY */}

                <div
                    className="
            p-6
            max-h-[80vh]
            overflow-y-auto
          "
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;