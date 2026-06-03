import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";

const salesData = [
    {
        name: "Pizza",
        value: 35,
    },

    {
        name: "Burger",
        value: 25,
    },

    {
        name: "Drinks",
        value: 15,
    },

    {
        name: "Pasta",
        value: 12,
    },

    {
        name: "Dessert",
        value: 13,
    },
];

const COLORS = [
    "#f97316",
    "#3b82f6",
    "#22c55e",
    "#a855f7",
    "#ef4444",
];

const SalesAnalytics = () => {
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
                        Sales Analytics
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Food category sales distribution
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
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>This Year</option>
                </select>
            </div>

            {/* TOP STATS */}

            <div
                className="
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-4
          mb-8
        "
            >
                {/* TOTAL SALES */}

                <div
                    className="
            bg-orange-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        Total Sales
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        $128K
                    </h2>

                    <p className="text-green-500 mt-2 text-sm font-semibold">
                        +22.4% Increase
                    </p>
                </div>

                {/* TOP CATEGORY */}

                <div
                    className="
            bg-blue-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        Top Category
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        Pizza
                    </h2>

                    <p className="text-blue-500 mt-2 text-sm font-semibold">
                        35% Total Sales
                    </p>
                </div>

                {/* BEST SELLER */}

                <div
                    className="
            bg-green-50
            rounded-3xl
            p-5
          "
                >
                    <p className="text-gray-500 text-sm">
                        Best Selling Item
                    </p>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
              mt-2
            "
                    >
                        Cheese Pizza
                    </h2>

                    <p className="text-green-500 mt-2 text-sm font-semibold">
                        4.8K Orders
                    </p>
                </div>
            </div>

            {/* CHART SECTION */}

            <div
                className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          items-center
        "
            >
                {/* PIE CHART */}

                <div className="w-full h-[350px]">

                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                            <Pie
                                data={salesData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={120}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {salesData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={
                                            COLORS[index % COLORS.length]
                                        }
                                    />
                                ))}
                            </Pie>

                            <Tooltip
                                contentStyle={{
                                    borderRadius: "20px",
                                    border: "none",
                                    boxShadow:
                                        "0 10px 30px rgba(0,0,0,0.08)",
                                }}
                            />

                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* CATEGORY DETAILS */}

                <div className="space-y-5">

                    {salesData.map((item, index) => (
                        <div
                            key={index}
                            className="
                flex
                items-center
                justify-between
                gap-4
                bg-gray-50
                rounded-3xl
                p-5
              "
                        >
                            {/* LEFT */}

                            <div className="flex items-center gap-4">

                                <div
                                    className="w-5 h-5 rounded-full"
                                    style={{
                                        backgroundColor:
                                            COLORS[index % COLORS.length],
                                    }}
                                />

                                <div>

                                    <h3 className="font-bold text-gray-900">
                                        {item.name}
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Popular category sales
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT */}

                            <div className="text-right">

                                <h2
                                    className="
                    text-2xl
                    font-extrabold
                    text-gray-900
                  "
                                >
                                    {item.value}%
                                </h2>

                                <p className="text-green-500 text-sm font-semibold mt-1">
                                    Growth +12%
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalesAnalytics;