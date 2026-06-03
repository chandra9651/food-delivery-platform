import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Line,
} from "recharts";

const userGrowthData = [
    {
        month: "Jan",
        users: 1200,
    },

    {
        month: "Feb",
        users: 1800,
    },

    {
        month: "Mar",
        users: 2400,
    },

    {
        month: "Apr",
        users: 3100,
    },

    {
        month: "May",
        users: 4200,
    },

    {
        month: "Jun",
        users: 5100,
    },

    {
        month: "Jul",
        users: 6200,
    },

    {
        month: "Aug",
        users: 7600,
    },

    {
        month: "Sep",
        users: 8900,
    },

    {
        month: "Oct",
        users: 10200,
    },

    {
        month: "Nov",
        users: 11800,
    },

    {
        month: "Dec",
        users: 13500,
    },
];

const UserGrowthChart = () => {
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
                        User Growth Analytics
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Track customer growth & registrations
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
                {/* TOTAL USERS */}

                <div
                    className="
            bg-orange-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        Total Users
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        13.5K
                    </h2>

                    <p className="text-green-500 mt-2 text-sm font-semibold">
                        +24.6% Growth
                    </p>
                </div>

                {/* NEW USERS */}

                <div
                    className="
            bg-blue-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        New Registrations
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        2.4K
                    </h2>

                    <p className="text-green-500 mt-2 text-sm font-semibold">
                        +18.2% Increase
                    </p>
                </div>

                {/* ACTIVE USERS */}

                <div
                    className="
            bg-green-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        Active Customers
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        9.8K
                    </h2>

                    <p className="text-green-500 mt-2 text-sm font-semibold">
                        72% Active Rate
                    </p>
                </div>
            </div>

            {/* CHART */}

            <div className="w-full h-[400px]">

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart data={userGrowthData}>

                        <defs>

                            <linearGradient
                                id="userGrowth"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#3b82f6"
                                    stopOpacity={0.4}
                                />

                                <stop
                                    offset="95%"
                                    stopColor="#3b82f6"
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
                            dataKey="users"
                            stroke="#3b82f6"
                            strokeWidth={4}
                            fill="url(#userGrowth)"
                        />

                        <Line
                            type="monotone"
                            dataKey="users"
                            stroke="#3b82f6"
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

export default UserGrowthChart;