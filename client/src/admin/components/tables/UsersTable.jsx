import {
    FaEye,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

const users = [
    {
        id: "#USR-1001",
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        phone: "+91 9876543210",
        orders: 120,
        spent: "$2,450",
        status: "Active",
        joined: "12 Jan 2026",
    },

    {
        id: "#USR-1002",
        name: "Priya Singh",
        email: "priya@gmail.com",
        phone: "+91 9876543211",
        orders: 85,
        spent: "$1,820",
        status: "Blocked",
        joined: "05 Feb 2026",
    },

    {
        id: "#USR-1003",
        name: "Amit Verma",
        email: "amit@gmail.com",
        phone: "+91 9876543212",
        orders: 64,
        spent: "$980",
        status: "Active",
        joined: "22 Mar 2026",
    },

    {
        id: "#USR-1004",
        name: "Sneha Patel",
        email: "sneha@gmail.com",
        phone: "+91 9876543213",
        orders: 210,
        spent: "$4,250",
        status: "Active",
        joined: "10 Apr 2026",
    },
];

const UsersTable = () => {
    return (
        <div
            className="
        bg-white
        rounded-[32px]
        shadow-sm
        border
        border-gray-100
        overflow-hidden
      "
        >
            {/* HEADER */}

            <div
                className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
          px-6
          py-6
          border-b
        "
            >
                <div>

                    <h2 className="text-2xl font-extrabold text-gray-900">
                        Users Management
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Manage all platform users
                    </p>
                </div>

                {/* SEARCH */}

                <div className="flex flex-col sm:flex-row gap-3">

                    <input
                        type="text"
                        placeholder="Search users..."
                        className="
              bg-gray-100
              rounded-2xl
              px-5
              py-3
              outline-none
              w-full
              sm:w-[260px]
            "
                    />

                    <button
                        className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-6
              py-3
              rounded-2xl
              font-semibold
              transition-all
            "
                    >
                        Add User
                    </button>
                </div>
            </div>

            {/* DESKTOP TABLE */}

            <div className="hidden xl:block overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                User
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Phone
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Orders
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Total Spent
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Status
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Joined
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {users.map((user, index) => (
                            <tr
                                key={index}
                                className="
                  border-b
                  hover:bg-gray-50
                  transition-all
                "
                            >
                                {/* USER */}

                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src={`https://i.pravatar.cc/100?img=${index + 20}`}
                                            alt={user.name}
                                            className="
                        w-14
                        h-14
                        rounded-2xl
                        object-cover
                      "
                                        />

                                        <div>

                                            <h3 className="font-bold text-gray-900">
                                                {user.name}
                                            </h3>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* PHONE */}

                                <td className="px-6 py-5 text-gray-700 font-medium">
                                    {user.phone}
                                </td>

                                {/* ORDERS */}

                                <td className="px-6 py-5">

                                    <span
                                        className="
                      bg-orange-100
                      text-orange-600
                      px-4
                      py-2
                      rounded-xl
                      font-semibold
                    "
                                    >
                                        {user.orders}
                                    </span>
                                </td>

                                {/* SPENT */}

                                <td className="px-6 py-5 font-bold text-green-600">
                                    {user.spent}
                                </td>

                                {/* STATUS */}

                                <td className="px-6 py-5">

                                    <span
                                        className={`
                      px-4
                      py-2
                      rounded-xl
                      text-sm
                      font-semibold

                      ${user.status === "Active"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-600"
                                            }
                    `}
                                    >
                                        {user.status}
                                    </span>
                                </td>

                                {/* JOINED */}

                                <td className="px-6 py-5 text-gray-500">
                                    {user.joined}
                                </td>

                                {/* ACTIONS */}

                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-3">

                                        <button
                                            className="
                        w-11
                        h-11
                        rounded-xl
                        bg-blue-100
                        text-blue-600
                        hover:bg-blue-500
                        hover:text-white
                        transition-all
                        flex
                        items-center
                        justify-center
                      "
                                        >
                                            <FaEye />
                                        </button>

                                        <button
                                            className="
                        w-11
                        h-11
                        rounded-xl
                        bg-green-100
                        text-green-600
                        hover:bg-green-500
                        hover:text-white
                        transition-all
                        flex
                        items-center
                        justify-center
                      "
                                        >
                                            <FaEdit />
                                        </button>

                                        <button
                                            className="
                        w-11
                        h-11
                        rounded-xl
                        bg-red-100
                        text-red-600
                        hover:bg-red-500
                        hover:text-white
                        transition-all
                        flex
                        items-center
                        justify-center
                      "
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MOBILE CARDS */}

            <div className="xl:hidden p-5 space-y-5">

                {users.map((user, index) => (
                    <div
                        key={index}
                        className="
              border
              rounded-3xl
              p-5
              bg-gray-50
            "
                    >
                        {/* TOP */}

                        <div className="flex items-center gap-4">

                            <img
                                src={`https://i.pravatar.cc/100?img=${index + 20}`}
                                alt={user.name}
                                className="
                  w-16
                  h-16
                  rounded-2xl
                  object-cover
                "
                            />

                            <div className="flex-1">

                                <h3 className="font-bold text-lg text-gray-900">
                                    {user.name}
                                </h3>

                                <p className="text-gray-500 text-sm mt-1 break-all">
                                    {user.email}
                                </p>
                            </div>

                            <span
                                className={`
                  px-3
                  py-2
                  rounded-xl
                  text-xs
                  font-semibold

                  ${user.status === "Active"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                    }
                `}
                            >
                                {user.status}
                            </span>
                        </div>

                        {/* DETAILS */}

                        <div
                            className="
                grid
                grid-cols-2
                gap-4
                mt-6
              "
                        >
                            <div>

                                <p className="text-gray-500 text-sm">
                                    Phone
                                </p>

                                <h3 className="font-semibold text-gray-900 mt-1">
                                    {user.phone}
                                </h3>
                            </div>

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Orders
                                </p>

                                <h3 className="font-semibold text-orange-500 mt-1">
                                    {user.orders}
                                </h3>
                            </div>

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Spent
                                </p>

                                <h3 className="font-bold text-green-600 mt-1">
                                    {user.spent}
                                </h3>
                            </div>

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Joined
                                </p>

                                <h3 className="font-semibold text-gray-900 mt-1">
                                    {user.joined}
                                </h3>
                            </div>
                        </div>

                        {/* ACTIONS */}

                        <div className="flex gap-3 mt-6">

                            <button
                                className="
                  flex-1
                  bg-blue-500
                  hover:bg-blue-600
                  text-white
                  py-3
                  rounded-2xl
                  font-semibold
                  transition-all
                "
                            >
                                View
                            </button>

                            <button
                                className="
                  flex-1
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  py-3
                  rounded-2xl
                  font-semibold
                  transition-all
                "
                            >
                                Edit
                            </button>

                            <button
                                className="
                  flex-1
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  py-3
                  rounded-2xl
                  font-semibold
                  transition-all
                "
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersTable;