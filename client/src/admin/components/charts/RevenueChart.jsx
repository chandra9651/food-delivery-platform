import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Area,
    AreaChart,
} from "recharts";

const revenueData = [
    {
        month: "Jan",
        revenue: 12000,
    },

    {
        month: "Feb",
        revenue: 18000,
    },

    {
        month: "Mar",
        revenue: 15000,
    },

    {
        month: "Apr",
        revenue: 24000,
    },

    {
        month: "May",
        revenue: 21000,
    },

    {
        month: "Jun",
        revenue: 32000,
    },

    {
        month: "Jul",
        revenue: 28000,
    },

    {
        month: "Aug",
        revenue: 36000,
    },

    {
        month: "Sep",
        revenue: 40000,
    },

    {
        month: "Oct",
        revenue: 38000,
    },

    {
        month: "Nov",
        revenue: 46000,
    },

    {
        month: "Dec",
        revenue: 52000,
    },
];

const RevenueChart = () => {
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
                        Revenue Analytics
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Monthly revenue performance overview
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
                    <option>Last 12 Months</option>
                    <option>Last 6 Months</option>
                    <option>Last 30 Days</option>
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
                {/* TOTAL */}

                <div
                    className="
            bg-orange-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        Total Revenue
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        $412K
                    </h2>

                    <p className="text-green-500 mt-2 text-sm font-semibold">
                        +18.4% Growth
                    </p>
                </div>

                {/* ORDERS */}

                <div
                    className="
            bg-blue-50
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
                        18.2K
                    </h2>

                    <p className="text-green-500 mt-2 text-sm font-semibold">
                        +12.8% Growth
                    </p>
                </div>

                {/* USERS */}

                <div
                    className="
            bg-green-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        New Customers
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        4.5K
                    </h2>

                    <p className="text-green-500 mt-2 text-sm font-semibold">
                        +24.1% Growth
                    </p>
                </div>
            </div>

            {/* CHART */}

            <div className="w-full h-[400px]">

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart data={revenueData}>

                        <defs>

                            <linearGradient
                                id="colorRevenue"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#f97316"
                                    stopOpacity={0.4}
                                />

                                <stop
                                    offset="95%"
                                    stopColor="#f97316"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                            stroke="#e5e7eb"
                        />

                        <XAxis
                            dataKey="month"
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
                            contentStyle={{
                                borderRadius: "20px",
                                border: "none",
                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.08)",
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#f97316"
                            strokeWidth={4}
                            fill="url(#colorRevenue)"
                        />

                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#f97316"
                            strokeWidth={4}
                            dot={{
                                r: 5,
                                strokeWidth: 3,
                                fill: "#fff",
                            }}
                            activeDot={{
                                r: 8,
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueChart;