import {
    FaStar,
    FaEye,
    FaTrash,
    FaCheckCircle,
} from "react-icons/fa";

const reviews = [
    {
        id: "#REV-1001",
        user: "Rahul Sharma",
        restaurant: "Pizza Hub",
        food: "Cheese Pizza",
        rating: 5,
        comment:
            "Amazing pizza and super fast delivery. Highly recommended!",
        date: "12 May 2026",
        status: "Published",
    },

    {
        id: "#REV-1002",
        user: "Priya Singh",
        restaurant: "Burger King",
        food: "Chicken Burger",
        rating: 4,
        comment:
            "Burger taste was great but delivery was slightly late.",
        date: "13 May 2026",
        status: "Pending",
    },

    {
        id: "#REV-1003",
        user: "Amit Verma",
        restaurant: "Healthy Food",
        food: "Veg Salad",
        rating: 2,
        comment:
            "Food quality was not fresh and packaging was poor.",
        date: "14 May 2026",
        status: "Reported",
    },

    {
        id: "#REV-1004",
        user: "Sneha Patel",
        restaurant: "Italian House",
        food: "Pasta Special",
        rating: 5,
        comment:
            "Best pasta I have ever eaten. Loved the taste!",
        date: "15 May 2026",
        status: "Published",
    },
];

const ReviewsTable = () => {
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
                        Reviews Management
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Monitor customer reviews & feedback
                    </p>
                </div>

                {/* ACTIONS */}

                <div className="flex flex-col sm:flex-row gap-3">

                    <input
                        type="text"
                        placeholder="Search reviews..."
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
                        Export Reviews
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
                                Restaurant
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Food
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Rating
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Review
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Status
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Date
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {reviews.map((review, index) => (
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
                                            src={`https://i.pravatar.cc/100?img=${index + 60}`}
                                            alt={review.user}
                                            className="
                        w-14
                        h-14
                        rounded-2xl
                        object-cover
                      "
                                        />

                                        <div>

                                            <h3 className="font-bold text-gray-900">
                                                {review.user}
                                            </h3>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {review.id}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* RESTAURANT */}

                                <td className="px-6 py-5 font-medium text-gray-700">
                                    {review.restaurant}
                                </td>

                                {/* FOOD */}

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
                                        {review.food}
                                    </span>
                                </td>

                                {/* RATING */}

                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-1">

                                        {[...Array(review.rating)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className="text-orange-500"
                                            />
                                        ))}
                                    </div>
                                </td>

                                {/* COMMENT */}

                                <td className="px-6 py-5">

                                    <p
                                        className="
                      text-gray-600
                      max-w-[280px]
                      line-clamp-2
                    "
                                    >
                                        {review.comment}
                                    </p>
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

                      ${review.status === "Published"
                                                ? "bg-green-100 text-green-600"
                                                : review.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-600"
                                            }
                    `}
                                    >
                                        {review.status}
                                    </span>
                                </td>

                                {/* DATE */}

                                <td className="px-6 py-5 text-gray-500">
                                    {review.date}
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
                                            <FaCheckCircle />
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

                {reviews.map((review, index) => (
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

                        <div className="flex items-start gap-4">

                            <img
                                src={`https://i.pravatar.cc/100?img=${index + 60}`}
                                alt={review.user}
                                className="
                  w-16
                  h-16
                  rounded-2xl
                  object-cover
                "
                            />

                            <div className="flex-1">

                                <div className="flex items-center justify-between gap-3">

                                    <div>

                                        <h3 className="font-bold text-lg text-gray-900">
                                            {review.user}
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            {review.restaurant}
                                        </p>
                                    </div>

                                    <span
                                        className={`
                      px-3
                      py-2
                      rounded-xl
                      text-xs
                      font-semibold

                      ${review.status === "Published"
                                                ? "bg-green-100 text-green-600"
                                                : review.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-600"
                                            }
                    `}
                                    >
                                        {review.status}
                                    </span>
                                </div>

                                {/* RATING */}

                                <div className="flex items-center gap-1 mt-3">

                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className="text-orange-500"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* FOOD */}

                        <div className="mt-5">

                            <span
                                className="
                  inline-block
                  bg-orange-100
                  text-orange-600
                  px-4
                  py-2
                  rounded-xl
                  font-semibold
                "
                            >
                                {review.food}
                            </span>
                        </div>

                        {/* COMMENT */}

                        <p className="text-gray-600 mt-5 leading-relaxed">
                            {review.comment}
                        </p>

                        {/* FOOTER */}

                        <div
                            className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
                mt-6
              "
                        >
                            <p className="text-gray-500 text-sm">
                                {review.date}
                            </p>

                            <div className="flex gap-3">

                                <button
                                    className="
                    flex-1
                    bg-blue-500
                    hover:bg-blue-600
                    text-white
                    px-5
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
                    px-5
                    py-3
                    rounded-2xl
                    font-semibold
                    transition-all
                  "
                                >
                                    Approve
                                </button>

                                <button
                                    className="
                    flex-1
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    px-5
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

export default ReviewsTable;