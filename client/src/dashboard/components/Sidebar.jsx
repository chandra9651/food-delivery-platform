import {
    FaHome,
    FaUtensils,
    FaClipboardList,
    FaMoneyBillWave,
    FaCog,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-[260px] bg-gray-900 text-white min-h-screen p-6">

            {/* LOGO */}

            <h1 className="text-3xl font-extrabold text-orange-500 mb-12">
                Foodie
            </h1>

            {/* MENU */}

            <div className="space-y-3">

                <Link
                    to="/restaurant-dashboard"
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-500 transition-all"
                >
                    <FaHome />

                    <span>Dashboard</span>
                </Link>

                <Link
                    to="/restaurant-dashboard/add-food"
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-500 transition-all"
                >
                    <FaUtensils />

                    <span>Add Food</span>
                </Link>

                <Link
                    to="/restaurant-dashboard/manage-foods"
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-500 transition-all"
                >
                    <FaClipboardList />

                    <span>Manage Foods</span>
                </Link>

                <Link
                    to="/restaurant-dashboard/orders"
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-500 transition-all"
                >
                    <FaClipboardList />

                    <span>Orders</span>
                </Link>

                <Link
                    to="/restaurant-dashboard/earnings"
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-500 transition-all"
                >
                    <FaMoneyBillWave />

                    <span>Earnings</span>
                </Link>

                <Link
                    to="/restaurant-dashboard/settings"
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-orange-500 transition-all"
                >
                    <FaCog />

                    <span>Settings</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;