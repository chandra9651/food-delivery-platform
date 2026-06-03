import StatsCard from "../components/cards/StatsCard";
import RevenueCard from "../components/cards/RevenueCard"
import OrdersCard from "../components/cards/OrdersCard";
import RestaurantCard from "../components/cards/RestaurantCard";
import UserCard from "../components/cards/UserCard";

import RevenueChart from "../components/charts/RevenueChart";
import OrdersChart from "../components/charts/OrdersChart";
import UserGrowthChart from "../components/charts/UserGrowthChart";
import SalesAnalytics from "../components/charts/SalesAnalytics";

import {
    FaUsers,
    FaStore,
    FaShoppingBag,
    FaDollarSign,
} from "react-icons/fa";

const DashboardHome = () => {
    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}

            <div
                className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
        "
            >
                <div>

                    <h1
                        className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-gray-900
            "
                    >
                        Admin Dashboard
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Welcome back 👋 Manage your food delivery platform
                    </p>
                </div>

                {/* ACTION BUTTON */}

                <button
                    className="
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-7
            py-4
            rounded-2xl
            font-bold
            shadow-lg
            shadow-orange-200
            transition-all
            duration-300
          "
                >
                    Generate Report
                </button>
            </div>

            {/* TOP STATS */}

            <div
                className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
            >
                <StatsCard
                    title="Total Users"
                    value="18.5K"
                    growth="+12.4%"
                    icon={<FaUsers />}
                    color="blue"
                />

                <StatsCard
                    title="Restaurants"
                    value="1,250"
                    growth="+8.1%"
                    icon={<FaStore />}
                    color="orange"
                />

                <StatsCard
                    title="Orders"
                    value="25.4K"
                    growth="+15.8%"
                    icon={<FaShoppingBag />}
                    color="green"
                />

                <StatsCard
                    title="Revenue"
                    value="$128K"
                    growth="+22.5%"
                    icon={<FaDollarSign />}
                    color="purple"
                />
            </div>

            {/* SECOND SECTION */}

            <div
                className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        "
            >
                {/* LEFT */}

                <div className="xl:col-span-2">
                    <RevenueChart />
                </div>

                {/* RIGHT */}

                <div className="space-y-6">
                    <RevenueCard />

                    <OrdersCard />
                </div>
            </div>

            {/* THIRD SECTION */}

            <div
                className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
            >
                <OrdersChart />

                <UserGrowthChart />
            </div>

            {/* FOURTH SECTION */}

            <div
                className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        "
            >
                {/* SALES */}

                <div className="xl:col-span-2">
                    <SalesAnalytics />
                </div>

                {/* SIDE CARDS */}

                <div className="space-y-6">
                    <RestaurantCard />

                    <UserCard />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;