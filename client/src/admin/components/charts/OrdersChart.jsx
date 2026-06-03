import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const ordersData = [
    {
        day: "Mon",
        orders: 120,
    },

    {
        day: "Tue",
        orders: 210,
    },

    {
        day: "Wed",
        orders: 180,
    },

    {
        day: "Thu",
        orders: 280,
    },

    {
        day: "Fri",
        orders: 350,
    },

    {
        day: "Sat",
        orders: 420,
    },

    {
        day: "Sun",
        orders: 390,
    },
];

const OrdersChart = () => {
    return (
        <div
            className="
        bg-white
        rounded-[32px]
        p-6
        shadow-sm
        border
        border-gray-100
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
          mb-8
        "
            >
                <div>

                    <h2 className="text-2xl font-extrabold text-gray-900">
                        Orders Overview
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Weekly orders performance analytics
                    </p>
                </div>

                {/* FILTER */}

                <select
                    className="
            bg-gray-100
            px-5
            py-3
            rounded-2xl
            outline-none
            font-medium
            text-gray-700
            w-full
            md:w-auto
          "
                >
                    <option>This Week</option>
                    <option>Last Week</option>
                    <option>This Month</option>
                </select>
            </div>

            {/* STATS */}

            <div
                className="
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-4
          mb-8
        "
            >
                {/* TOTAL ORDERS */}

                <div
                    className="
            bg-orange-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        Total Orders
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        1,950
                    </h2>

                    <p className="text-green-500 mt-2 text-sm font-semibold">
                        +16.2% Increase
                    </p>
                </div>

                {/* DELIVERED */}

                <div
                    className="
            bg-green-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        Delivered Orders
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        1,720
                    </h2>

                    <p className="text-green-500 mt-2 text-sm font-semibold">
                        88% Success Rate
                    </p>
                </div>

                {/* CANCELLED */}

                <div
                    className="
            bg-red-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        Cancelled Orders
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        230
                    </h2>

                    <p className="text-red-500 mt-2 text-sm font-semibold">
                        12% Cancellation
                    </p>
                </div>
            </div>

            {/* CHART */}

            <div className="w-full h-[400px]">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={ordersData}>

                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                            stroke="#e5e7eb"
                        />

                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fill: "#6b7280",
                                fontSize: 13,
                            }}
                        />

                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fill: "#6b7280",
                                fontSize: 13,
                            }}
                        />

                        <Tooltip
                            cursor={{
                                fill: "rgba(249,115,22,0.08)",
                            }}
                            contentStyle={{
                                borderRadius: "20px",
                                border: "none",
                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)",
                            }}
                        />

                        <Bar
                            dataKey="orders"
                            radius={[14, 14, 0, 0]}
                            fill="#f97316"
                            barSize={45}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default OrdersChart;