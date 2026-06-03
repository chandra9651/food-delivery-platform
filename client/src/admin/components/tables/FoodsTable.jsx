import {
    FaEye,
    FaEdit,
    FaTrash,
    FaStar,
} from "react-icons/fa";

const foods = [
    {
        id: "#FOOD-1001",
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        name: "Cheese Pizza",
        restaurant: "Pizza Hub",
        category: "Pizza",
        price: "$18",
        rating: "4.8",
        orders: "2.1k",
        status: "Available",
    },

    {
        id: "#FOOD-1002",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        name: "Chicken Burger",
        restaurant: "Burger King",
        category: "Burger",
        price: "$12",
        rating: "4.6",
        orders: "1.7k",
        status: "Available",
    },

    {
        id: "#FOOD-1003",
        image:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        name: "Veg Salad",
        restaurant: "Healthy Food",
        category: "Salad",
        price: "$10",
        rating: "4.5",
        orders: "980",
        status: "Unavailable",
    },

    {
        id: "#FOOD-1004",
        image:
            "https://images.unsplash.com/photo-1600891964092-4316c288032e",
        name: "Pasta Special",
        restaurant: "Italian House",
        category: "Pasta",
        price: "$16",
        rating: "4.9",
        orders: "3.4k",
        status: "Available",
    },
];

const FoodsTable = () => {
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
                        Foods Management
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Manage all foods & menu items
                    </p>
                </div>

                {/* ACTIONS */}

                <div className="flex flex-col sm:flex-row gap-3">

                    <input
                        type="text"
                        placeholder="Search foods..."
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
                        Add Food
                    </button>
                </div>
            </div>

            {/* DESKTOP TABLE */}

            <div className="hidden xl:block overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Food
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Restaurant
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Category
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Price
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Rating
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Orders
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

                        {foods.map((food, index) => (
                            <tr
                                key={index}
                                className="
                  border-b
                  hover:bg-gray-50
                  transition-all
                "
                            >
                                {/* FOOD */}

                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src={food.image}
                                            alt={food.name}
                                            className="
                        w-16
                        h-16
                        rounded-2xl
                        object-cover
                      "
                                        />

                                        <div>

                                            <h3 className="font-bold text-gray-900">
                                                {food.name}
                                            </h3>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {food.id}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* RESTAURANT */}

                                <td className="px-6 py-5 text-gray-700 font-medium">
                                    {food.restaurant}
                                </td>

                                {/* CATEGORY */}

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
                                        {food.category}
                                    </span>
                                </td>

                                {/* PRICE */}

                                <td className="px-6 py-5 font-bold text-green-600">
                                    {food.price}
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

                                        {food.rating}
                                    </div>
                                </td>

                                {/* ORDERS */}

                                <td className="px-6 py-5 font-semibold text-gray-700">
                                    {food.orders}
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

                      ${food.status === "Available"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-600"
                                            }
                    `}
                                    >
                                        {food.status}
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

                {foods.map((food, index) => (
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
                            src={food.image}
                            alt={food.name}
                            className="
                w-full
                h-[220px]
                object-cover
              "
                        />

                        {/* CONTENT */}

                        <div className="p-5">

                            {/* TOP */}

                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    <h3 className="font-bold text-xl text-gray-900">
                                        {food.name}
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        {food.restaurant}
                                    </p>
                                </div>

                                <span
                                    className={`
                    px-3
                    py-2
                    rounded-xl
                    text-xs
                    font-semibold

                    ${food.status === "Available"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-600"
                                        }
                  `}
                                >
                                    {food.status}
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
                                        Category
                                    </p>

                                    <h3 className="font-bold text-orange-500 mt-1">
                                        {food.category}
                                    </h3>
                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Price
                                    </p>

                                    <h3 className="font-bold text-green-600 mt-1">
                                        {food.price}
                                    </h3>
                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        Orders
                                    </p>

                                    <h3 className="font-semibold text-gray-900 mt-1">
                                        {food.orders}
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

                                        {food.rating}
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

export default FoodsTable;