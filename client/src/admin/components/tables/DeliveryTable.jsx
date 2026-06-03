import {
    FaMotorcycle,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEye,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

const deliveries = [
    {
        id: "#DEL-1001",
        rider: "Rahul Rider",
        phone: "+91 9876543210",
        location: "Delhi, India",
        orders: 240,
        earnings: "$2,450",
        status: "Online",
        vehicle: "Bike",
    },

    {
        id: "#DEL-1002",
        rider: "Aman Delivery",
        phone: "+91 9876543211",
        location: "Mumbai, India",
        orders: 180,
        earnings: "$1,820",
        status: "Offline",
        vehicle: "Scooter",
    },

    {
        id: "#DEL-1003",
        rider: "Sneha Express",
        phone: "+91 9876543212",
        location: "Bangalore, India",
        orders: 320,
        earnings: "$3,640",
        status: "Online",
        vehicle: "Bike",
    },

    {
        id: "#DEL-1004",
        rider: "Fast Rider",
        phone: "+91 9876543213",
        location: "Hyderabad, India",
        orders: 150,
        earnings: "$1,240",
        status: "Blocked",
        vehicle: "Cycle",
    },
];

const DeliveryTable = () => {
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
                        Delivery Riders
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Manage delivery partners & riders
                    </p>
                </div>

                {/* ACTIONS */}

                <div className="flex flex-col sm:flex-row gap-3">

                    <input
                        type="text"
                        placeholder="Search riders..."
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
                        Add Rider
                    </button>
                </div>
            </div>

            {/* DESKTOP TABLE */}

            <div className="hidden xl:block overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Rider
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Vehicle
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Orders
                            </th>

                            <th className="text-left px-6 py-5 text-gray-500 font-semibold">
                                Earnings
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

                        {deliveries.map((delivery, index) => (
                            <tr
                                key={index}
                                className="
                  border-b
                  hover:bg-gray-50
                  transition-all
                "
                            >
                                {/* RIDER */}

                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src={`https://i.pravatar.cc/100?img=${index + 40}`}
                                            alt={delivery.rider}
                                            className="
                        w-16
                        h-16
                        rounded-2xl
                        object-cover
                      "
                                        />

                                        <div>

                                            <h3 className="font-bold text-gray-900">
                                                {delivery.rider}
                                            </h3>

                                            <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">

                                                <FaPhoneAlt />

                                                {delivery.phone}
                                            </div>

                                            <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">

                                                <FaMapMarkerAlt />

                                                {delivery.location}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* VEHICLE */}

                                <td className="px-6 py-5">

                                    <div
                                        className="
                      inline-flex
                      items-center
                      gap-2
                      bg-orange-100
                      text-orange-600
                      px-4
                      py-2
                      rounded-xl
                      font-semibold
                    "
                                    >
                                        <FaMotorcycle />

                                        {delivery.vehicle}
                                    </div>
                                </td>

                                {/* ORDERS */}

                                <td className="px-6 py-5 font-semibold text-gray-700">
                                    {delivery.orders}
                                </td>

                                {/* EARNINGS */}

                                <td className="px-6 py-5 font-bold text-green-600">
                                    {delivery.earnings}
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

                      ${delivery.status === "Online"
                                                ? "bg-green-100 text-green-600"
                                                : delivery.status === "Offline"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-600"
                                            }
                    `}
                                    >
                                        {delivery.status}
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

                {deliveries.map((delivery, index) => (
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
                                src={`https://i.pravatar.cc/100?img=${index + 40}`}
                                alt={delivery.rider}
                                className="
                  w-16
                  h-16
                  rounded-2xl
                  object-cover
                "
                            />

                            <div className="flex-1">

                                <h3 className="font-bold text-lg text-gray-900">
                                    {delivery.rider}
                                </h3>

                                <p className="text-gray-500 text-sm mt-1">
                                    {delivery.phone}
                                </p>
                            </div>

                            <span
                                className={`
                  px-3
                  py-2
                  rounded-xl
                  text-xs
                  font-semibold

                  ${delivery.status === "Online"
                                        ? "bg-green-100 text-green-600"
                                        : delivery.status === "Offline"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-red-100 text-red-600"
                                    }
                `}
                            >
                                {delivery.status}
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
                                    Vehicle
                                </p>

                                <h3 className="font-bold text-orange-500 mt-1">
                                    {delivery.vehicle}
                                </h3>
                            </div>

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Orders
                                </p>

                                <h3 className="font-semibold text-gray-900 mt-1">
                                    {delivery.orders}
                                </h3>
                            </div>

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Earnings
                                </p>

                                <h3 className="font-bold text-green-600 mt-1">
                                    {delivery.earnings}
                                </h3>
                            </div>

                            <div>

                                <p className="text-gray-500 text-sm">
                                    Location
                                </p>

                                <h3 className="font-semibold text-gray-900 mt-1">
                                    {delivery.location}
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
                                Approve
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
                                Block
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeliveryTable;