import {
    FaEye,
    FaEdit,
    FaTrash,
    FaStar,
} from "react-icons/fa";

const restaurants = [
    {
        id: "#RST-1001",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        name: "Pizza Hub",
        owner: "Rahul Sharma",
        foods: 120,
        orders: "5.2k",
        revenue: "$24,500",
        rating: "4.8",
        status: "Active",
    },

    {
        id: "#RST-1002",
        image:
            "https://images.unsplash.com/photo-1552566626-52f8b828add9",
        name: "Burger King",
        owner: "Priya Singh",
        foods: 98,
        orders: "3.8k",
        revenue: "$18,200",
        rating: "4.6",
        status: "Pending",
    },

    {
        id: "#RST-1003",
        image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
        name: "Food Plaza",
        owner: "Amit Verma",
        foods: 145,
        orders: "6.1k",
        revenue: "$31,700",
        rating: "4.9",
        status: "Active",
    },

    {
        id: "#RST-1004",
        image:
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
        name: "Spicy House",
        owner: "Sneha Patel",
        foods: 84,
        orders: "2.4k",
        revenue: "$12,300",
        rating: "4.5",
        status: "Blocked",
    },
];

const RestaurantsTable = () => {
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
                        Restaurants Management
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Manage all restaurant partners
                    </p>
                </div>

                {/* ACTIONS */}

                <div className="flex flex-col sm:flex-row gap-3">

                    <input
                        type="text"
                        placeholder="Search restaurants..."
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
                        Add Restaurant
                    </button>
                </div>
            </div>

            {/* DESKTOP TABLE */}

            <div className="hidden xl:block overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Restaurant
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Owner
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Foods
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Orders
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Revenue
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Rating
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Status
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {restaurants.map((restaurant, index) => (
                            <tr
                                key={index}
                                className="
                  border-b
                  hover:bg-gray-50
                  transition-all
                "
                            >
                                {/* RESTAURANT */}

                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src={restaurant.image}
                                            alt={restaurant.name}
                                            className="
                        w-16
                        h-16
                        rounded-2xl
                        object-cover
                      "
                                        />

                                        <div>

                                            <h3 className="font-bold text-gray-900">
                                                {restaurant.name}
                                            </h3>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {restaurant.id}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* OWNER */}

                                <td className="px-6 py-5 text-gray-700 font-medium">
                                    {restaurant.owner}
                                </td>

                                {/* FOODS */}

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
                                        {restaurant.foods}
                                    </span>
                                </td>

                                {/* ORDERS */}

                                <td className="px-6 py-5 font-semibold text-gray-700">
                                    {restaurant.orders}
                                </td>

                                {/* REVENUE */}

                                <td className="px-6 py-5 font-bold text-green-600">
                                    {restaurant.revenue}
                                </td>

                                {/* RATING */}

                                <td className="px-6 py-5">

                                    <div
                                        className="
                      flex
                      items-center
                      gap-2
                      text-orange-500
                      font-bold
                    "
                                    >
                                        <FaStar />

                                        {restaurant.rating}
                                    </div>
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

                      ${restaurant.status === "Active"
                                                ? "bg-green-100 text-green-600"
                                                : restaurant.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-600"
                                            }
                    `}
                                    >
                                        {restaurant.status}
                                    </span>
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

                {restaurants.map((restaurant, index) => (
                    <div
                        key={index}
                        className="
              border
              rounded-3xl
              overflow-hidden
              bg-gray-50
            "
                    >
                        {/* IMAGE */}

                        <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="
                w-full
                h-[200px]
                object-cover
              "
                        />

                        {/* CONTENT */}

                        <div className="p-5">

                            {/* TOP */}

                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    <h3 className="font-bold text-xl text-gray-900">
                                        {restaurant.name}
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Owner: {restaurant.owner}
                                    </p>
                                </div>

                                <span
                                    className={`
                    px-3
                    py-2
                    rounded-xl
                    text-xs
                    font-semibold

                    ${restaurant.status === "Active"
                                            ? "bg-green-100 text-green-600"
                                            : restaurant.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : "bg-red-100 text-red-600"
                                        }
                  `}
                                >
                                    {restaurant.status}
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
                                        Foods
                                    </p>

                                    <h3 className="font-bold text-orange-500 mt-1">
                                        {restaurant.foods}
                                    </h3>
                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Orders
                                    </p>

                                    <h3 className="font-semibold text-gray-900 mt-1">
                                        {restaurant.orders}
                                    </h3>
                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Revenue
                                    </p>

                                    <h3 className="font-bold text-green-600 mt-1">
                                        {restaurant.revenue}
                                    </h3>
                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Rating
                                    </p>

                                    <div
                                        className="
                      flex
                      items-center
                      gap-2
                      text-orange-500
                      font-bold
                      mt-1
                    "
                                    >
                                        <FaStar />

                                        {restaurant.rating}
                                    </div>
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantsTable;