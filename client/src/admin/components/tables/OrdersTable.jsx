import {
    FaEye,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

const orders = [
    {
        id: "#ORD-1001",
        customer: "Rahul Sharma",
        restaurant: "Pizza Hub",
        amount: "$120",
        status: "Delivered",
        payment: "Paid",
        date: "12 May 2026",
    },

    {
        id: "#ORD-1002",
        customer: "Priya Singh",
        restaurant: "Burger King",
        amount: "$85",
        status: "Pending",
        payment: "Pending",
        date: "13 May 2026",
    },

    {
        id: "#ORD-1003",
        customer: "Amit Verma",
        restaurant: "Food Plaza",
        amount: "$240",
        status: "Cancelled",
        payment: "Refunded",
        date: "13 May 2026",
    },

    {
        id: "#ORD-1004",
        customer: "Sneha Patel",
        restaurant: "Spicy House",
        amount: "$150",
        status: "Delivered",
        payment: "Paid",
        date: "14 May 2026",
    },
];

const OrdersTable = () => {
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
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
          px-6
          py-6
          border-b
        "
            >
                <div>

                    <h2 className="text-2xl font-extrabold text-gray-900">
                        Recent Orders
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Manage all customer orders
                    </p>
                </div>

                {/* SEARCH */}

                <input
                    type="text"
                    placeholder="Search orders..."
                    className="
            w-full
            md:w-[300px]
            bg-gray-100
            rounded-2xl
            px-5
            py-3
            outline-none
          "
                />
            </div>

            {/* DESKTOP TABLE */}

            <div className="hidden xl:block overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Order ID
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Customer
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Restaurant
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Amount
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Status
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Payment
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

                        {orders.map((order, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition-all"
                            >
                                {/* ORDER ID */}

                                <td className="px-6 py-5 font-bold text-gray-900">
                                    {order.id}
                                </td>

                                {/* CUSTOMER */}

                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-3">

                                        <img
                                            src={`https://i.pravatar.cc/100?img=${index + 10}`}
                                            alt=""
                                            className="
                        w-12
                        h-12
                        rounded-2xl
                        object-cover
                      "
                                        />

                                        <div>

                                            <h3 className="font-semibold text-gray-900">
                                                {order.customer}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                Customer
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* RESTAURANT */}

                                <td className="px-6 py-5 text-gray-700 font-medium">
                                    {order.restaurant}
                                </td>

                                {/* AMOUNT */}

                                <td className="px-6 py-5 font-bold text-orange-500">
                                    {order.amount}
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

                      ${order.status === "Delivered"
                                                ? "bg-green-100 text-green-600"
                                                : order.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-600"
                                            }
                    `}
                                    >
                                        {order.status}
                                    </span>
                                </td>

                                {/* PAYMENT */}

                                <td className="px-6 py-5">

                                    <span
                                        className={`
                      px-4
                      py-2
                      rounded-xl
                      text-sm
                      font-semibold

                      ${order.payment === "Paid"
                                                ? "bg-green-100 text-green-600"
                                                : order.payment === "Pending"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-600"
                                            }
                    `}
                                    >
                                        {order.payment}
                                    </span>
                                </td>

                                {/* DATE */}

                                <td className="px-6 py-5 text-gray-500">
                                    {order.date}
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
                                            <FaTimesCircle />
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

                {orders.map((order, index) => (
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

                        <div className="flex items-center justify-between">

                            <div>

                                <h3 className="font-bold text-lg text-gray-900">
                                    {order.id}
                                </h3>

                                <p className="text-gray-500 text-sm mt-1">
                                    {order.date}
                                </p>
                            </div>

                            <span
                                className={`
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  font-semibold

                  ${order.status === "Delivered"
                                        ? "bg-green-100 text-green-600"
                                        : order.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-red-100 text-red-600"
                                    }
                `}
                            >
                                {order.status}
                            </span>
                        </div>

                        {/* CUSTOMER */}

                        <div className="flex items-center gap-4 mt-5">

                            <img
                                src={`https://i.pravatar.cc/100?img=${index + 10}`}
                                alt=""
                                className="
                  w-14
                  h-14
                  rounded-2xl
                  object-cover
                "
                            />

                            <div>

                                <h3 className="font-bold text-gray-900">
                                    {order.customer}
                                </h3>

                                <p className="text-gray-500 text-sm mt-1">
                                    {order.restaurant}
                                </p>
                            </div>
                        </div>

                        {/* INFO */}

                        <div
                            className="
                grid
                grid-cols-2
                gap-4
                mt-5
              "
                        >
                            <div>

                                <p className="text-gray-500 text-sm">
                                    Amount
                                </p>

                                <h3 className="font-bold text-orange-500 mt-1">
                                    {order.amount}
                                </h3>
                            </div>

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Payment
                                </p>

                                <h3 className="font-bold text-gray-900 mt-1">
                                    {order.payment}
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
                                Accept
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersTable;