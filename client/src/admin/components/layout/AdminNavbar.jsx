import {
    FaBars,
    FaSearch,
    FaBell,
    FaEnvelope,
} from "react-icons/fa";

const AdminNavbar = ({ setSidebarOpen }) => {
    return (
        <header
            className="
        sticky
        top-0
        z-30
        bg-white/80
        backdrop-blur-lg
        border-b
        border-gray-200
      "
        >
            <div
                className="
          flex
          items-center
          justify-between
          px-4
          md:px-8
          py-4
        "
            >
                {/* LEFT SIDE */}

                <div className="flex items-center gap-4">

                    {/* MOBILE MENU BUTTON */}

                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="
              lg:hidden
              w-11
              h-11
              rounded-xl
              bg-gray-100
              hover:bg-orange-500
              hover:text-white
              transition-all
              flex
              items-center
              justify-center
              text-xl
            "
                    >
                        <FaBars />
                    </button>

                    {/* PAGE TITLE */}

                    <div>

                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                            Dashboard
                        </h1>

                        <p className="text-gray-500 text-sm mt-1">
                            Welcome back, Admin 👋
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE */}

                <div className="flex items-center gap-3 md:gap-5">

                    {/* SEARCH BAR */}

                    <div
                        className="
              hidden
              md:flex
              items-center
              bg-gray-100
              rounded-2xl
              px-4
              py-3
              w-[320px]
            "
                    >
                        <FaSearch className="text-gray-400" />

                        <input
                            type="text"
                            placeholder="Search here..."
                            className="
                bg-transparent
                outline-none
                ml-3
                w-full
                text-sm
              "
                        />
                    </div>

                    {/* NOTIFICATION */}

                    <button
                        className="
              relative
              w-11
              h-11
              rounded-xl
              bg-gray-100
              hover:bg-orange-500
              hover:text-white
              transition-all
              flex
              items-center
              justify-center
              text-lg
            "
                    >
                        <FaBell />

                        <span
                            className="
                absolute
                -top-1
                -right-1
                w-5
                h-5
                rounded-full
                bg-red-500
                text-white
                text-xs
                flex
                items-center
                justify-center
              "
                        >
                            3
                        </span>
                    </button>

                    {/* MESSAGE */}

                    <button
                        className="
              relative
              hidden
              md:flex
              w-11
              h-11
              rounded-xl
              bg-gray-100
              hover:bg-orange-500
              hover:text-white
              transition-all
              items-center
              justify-center
              text-lg
            "
                    >
                        <FaEnvelope />

                        <span
                            className="
                absolute
                -top-1
                -right-1
                w-5
                h-5
                rounded-full
                bg-green-500
                text-white
                text-xs
                flex
                items-center
                justify-center
              "
                        >
                            2
                        </span>
                    </button>

                    {/* ADMIN PROFILE */}

                    <div
                        className="
              flex
              items-center
              gap-3
              bg-gray-100
              rounded-2xl
              px-3
              py-2
              cursor-pointer
              hover:bg-gray-200
              transition-all
            "
                    >
                        <img
                            src="https://i.pravatar.cc/100?img=12"
                            alt="admin"
                            className="
                w-11
                h-11
                rounded-xl
                object-cover
              "
                        />

                        <div className="hidden md:block">

                            <h3 className="font-bold text-sm text-gray-900">
                                Chandra
                            </h3>

                            <p className="text-xs text-gray-500 mt-1">
                                Super Admin
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminNavbar;