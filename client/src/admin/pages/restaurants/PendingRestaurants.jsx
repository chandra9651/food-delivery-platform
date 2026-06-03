// // /client/src/admin/pages/restaurants/PendingRestaurants.jsx



// import { useState } from "react";

// import RestaurantsTable from "../../components/tables/RestaurantsTable";

// import {
//     FaClock,
//     FaCheckCircle,
//     FaStore,
//     FaSearch,
//     FaFilter,
//     FaDownload,
//     FaUserShield,
// } from "react-icons/fa";

// const PendingRestaurants = () => {
//     const [search, setSearch] = useState("");

//     return (
//         <div className="space-y-8">
//             {/* PAGE HEADER */}

//             <div
//                 className="
//           flex
//           flex-col
//           lg:flex-row
//           lg:items-center
//           lg:justify-between
//           gap-5
//         "
//             >
//                 {/* LEFT */}

//                 <div>

//                     <h1
//                         className="
//               text-3xl
//               md:text-4xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         Pending Restaurants
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Review and approve new restaurant registrations
//                     </p>
//                 </div>

//                 {/* RIGHT */}

//                 <button
//                     className="
//             bg-orange-500
//             hover:bg-orange-600
//             text-white
//             px-6
//             py-4
//             rounded-2xl
//             font-bold
//             shadow-lg
//             shadow-orange-200
//             transition-all
//             flex
//             items-center
//             justify-center
//             gap-3
//           "
//                 >
//                     <FaDownload />

//                     Export Requests
//                 </button>
//             </div>

//             {/* STATS */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           xl:grid-cols-4
//           gap-6
//         "
//             >
//                 {/* PENDING */}

//                 <div
//                     className="
//             bg-white
//             rounded-[30px]
//             p-6
//             border
//             border-gray-100
//             shadow-sm
//           "
//                 >
//                     <div
//                         className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-yellow-100
//               text-yellow-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaClock />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         145
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Pending Requests
//                     </p>
//                 </div>

//                 {/* APPROVED */}

//                 <div
//                     className="
//             bg-white
//             rounded-[30px]
//             p-6
//             border
//             border-gray-100
//             shadow-sm
//           "
//                 >
//                     <div
//                         className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-green-100
//               text-green-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaCheckCircle />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         1,050
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Approved Restaurants
//                     </p>
//                 </div>

//                 {/* TOTAL */}

//                 <div
//                     className="
//             bg-white
//             rounded-[30px]
//             p-6
//             border
//             border-gray-100
//             shadow-sm
//           "
//                 >
//                     <div
//                         className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-orange-100
//               text-orange-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaStore />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         1,250
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Total Restaurants
//                     </p>
//                 </div>

//                 {/* VERIFIED */}

//                 <div
//                     className="
//             bg-white
//             rounded-[30px]
//             p-6
//             border
//             border-gray-100
//             shadow-sm
//           "
//                 >
//                     <div
//                         className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-purple-100
//               text-purple-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaUserShield />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         980
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Verified Restaurants
//                     </p>
//                 </div>
//             </div>

//             {/* FILTER BAR */}

//             <div
//                 className="
//           bg-white
//           rounded-[30px]
//           border
//           border-gray-100
//           shadow-sm
//           p-5
//           flex
//           flex-col
//           xl:flex-row
//           xl:items-center
//           xl:justify-between
//           gap-5
//         "
//             >
//                 {/* SEARCH */}

//                 <div
//                     className="
//             relative
//             w-full
//             xl:max-w-md
//           "
//                 >
//                     <FaSearch
//                         className="
//               absolute
//               top-1/2
//               left-4
//               -translate-y-1/2
//               text-gray-400
//             "
//                     />

//                     <input
//                         type="text"
//                         placeholder="Search pending restaurants..."
//                         value={search}
//                         onChange={(e) =>
//                             setSearch(e.target.value)
//                         }
//                         className="
//               w-full
//               bg-gray-100
//               rounded-2xl
//               py-4
//               pl-12
//               pr-4
//               outline-none
//               focus:ring-2
//               focus:ring-orange-300
//             "
//                     />
//                 </div>

//                 {/* FILTERS */}

//                 <div
//                     className="
//             flex
//             flex-col
//             sm:flex-row
//             gap-4
//             w-full
//             xl:w-auto
//           "
//                 >
//                     <select
//                         className="
//               bg-gray-100
//               px-5
//               py-4
//               rounded-2xl
//               outline-none
//               font-medium
//             "
//                     >
//                         <option>All Categories</option>
//                         <option>Pizza</option>
//                         <option>Fast Food</option>
//                         <option>Chinese</option>
//                         <option>Indian</option>
//                     </select>

//                     <select
//                         className="
//               bg-gray-100
//               px-5
//               py-4
//               rounded-2xl
//               outline-none
//               font-medium
//             "
//                     >
//                         <option>Newest First</option>
//                         <option>Oldest First</option>
//                     </select>

//                     <button
//                         className="
//               bg-gray-900
//               hover:bg-black
//               text-white
//               px-6
//               py-4
//               rounded-2xl
//               font-semibold
//               flex
//               items-center
//               justify-center
//               gap-3
//               transition-all
//             "
//                     >
//                         <FaFilter />

//                         Filter
//                     </button>
//                 </div>
//             </div>

//             {/* TABLE */}

//             <RestaurantsTable />
//         </div>
//     );
// };

// export default PendingRestaurants;



// /client/src/admin/pages/restaurants/PendingRestaurants.jsx

import { useEffect, useState } from "react";

import axios from "axios";

import RestaurantsTable from "../../components/tables/RestaurantsTable";

import {
    FaClock,
    FaCheckCircle,
    FaStore,
    FaSearch,
    FaFilter,
    FaDownload,
    FaUserShield,
} from "react-icons/fa";

const PendingRestaurants = () => {
    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("");

    const [sortBy, setSortBy] = useState("newest");

    const [restaurants, setRestaurants] = useState([]);

    const [loading, setLoading] = useState(false);

    const [stats, setStats] = useState({
        pendingRestaurants: 0,
        approvedRestaurants: 0,
        totalRestaurants: 0,
        verifiedRestaurants: 0,
    });

    // ================= FETCH PENDING RESTAURANTS =================

    const fetchPendingRestaurants = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const { data } = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL
                }/api/admin/restaurants/pending`,
                {
                    params: {
                        search,
                        category,
                        sortBy,
                    },

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setRestaurants(data.restaurants);

            setStats(data.stats);
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to fetch restaurants"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPendingRestaurants();
    }, [search, category, sortBy]);

    // ================= EXPORT =================

    const handleExport = () => {
        const csvRows = [];

        csvRows.push([
            "Restaurant Name",
            "Owner",
            "Email",
            "Category",
            "Status",
        ]);

        restaurants.forEach((item) => {
            csvRows.push([
                item.name,
                item.owner?.name || "N/A",
                item.email,
                item.category,
                item.status,
            ]);
        });

        const csvContent = csvRows
            .map((row) => row.join(","))
            .join("\n");

        const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;",
        });

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.setAttribute(
            "download",
            "pending-restaurants.csv"
        );

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };

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
                {/* LEFT */}

                <div>
                    <h1
                        className="
                            text-3xl
                            md:text-4xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        Pending Restaurants
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Review and approve new restaurant
                        registrations
                    </p>
                </div>

                {/* RIGHT */}

                <button
                    onClick={handleExport}
                    className="
                        bg-orange-500
                        hover:bg-orange-600
                        text-white
                        px-6
                        py-4
                        rounded-2xl
                        font-bold
                        shadow-lg
                        shadow-orange-200
                        transition-all
                        flex
                        items-center
                        justify-center
                        gap-3
                    "
                >
                    <FaDownload />

                    Export Requests
                </button>
            </div>

            {/* STATS */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                "
            >
                {/* PENDING */}

                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-6
                        border
                        border-gray-100
                        shadow-sm
                    "
                >
                    <div
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-yellow-100
                            text-yellow-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        <FaClock />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.pendingRestaurants}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Pending Requests
                    </p>
                </div>

                {/* APPROVED */}

                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-6
                        border
                        border-gray-100
                        shadow-sm
                    "
                >
                    <div
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-green-100
                            text-green-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        <FaCheckCircle />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.approvedRestaurants}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Approved Restaurants
                    </p>
                </div>

                {/* TOTAL */}

                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-6
                        border
                        border-gray-100
                        shadow-sm
                    "
                >
                    <div
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-orange-100
                            text-orange-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        <FaStore />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.totalRestaurants}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Restaurants
                    </p>
                </div>

                {/* VERIFIED */}

                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-6
                        border
                        border-gray-100
                        shadow-sm
                    "
                >
                    <div
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-purple-100
                            text-purple-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        <FaUserShield />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.verifiedRestaurants}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Verified Restaurants
                    </p>
                </div>
            </div>

            {/* FILTER BAR */}

            <div
                className="
                    bg-white
                    rounded-[30px]
                    border
                    border-gray-100
                    shadow-sm
                    p-5
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                    gap-5
                "
            >
                {/* SEARCH */}

                <div
                    className="
                        relative
                        w-full
                        xl:max-w-md
                    "
                >
                    <FaSearch
                        className="
                            absolute
                            top-1/2
                            left-4
                            -translate-y-1/2
                            text-gray-400
                        "
                    />

                    <input
                        type="text"
                        placeholder="Search pending restaurants..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="
                            w-full
                            bg-gray-100
                            rounded-2xl
                            py-4
                            pl-12
                            pr-4
                            outline-none
                            focus:ring-2
                            focus:ring-orange-300
                        "
                    />
                </div>

                {/* FILTERS */}

                <div
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-4
                        w-full
                        xl:w-auto
                    "
                >
                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        className="
                            bg-gray-100
                            px-5
                            py-4
                            rounded-2xl
                            outline-none
                            font-medium
                        "
                    >
                        <option value="">
                            All Categories
                        </option>

                        <option value="Pizza">
                            Pizza
                        </option>

                        <option value="Fast Food">
                            Fast Food
                        </option>

                        <option value="Chinese">
                            Chinese
                        </option>

                        <option value="Indian">
                            Indian
                        </option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value)
                        }
                        className="
                            bg-gray-100
                            px-5
                            py-4
                            rounded-2xl
                            outline-none
                            font-medium
                        "
                    >
                        <option value="newest">
                            Newest First
                        </option>

                        <option value="oldest">
                            Oldest First
                        </option>
                    </select>

                    <button
                        onClick={fetchPendingRestaurants}
                        className="
                            bg-gray-900
                            hover:bg-black
                            text-white
                            px-6
                            py-4
                            rounded-2xl
                            font-semibold
                            flex
                            items-center
                            justify-center
                            gap-3
                            transition-all
                        "
                    >
                        <FaFilter />

                        Filter
                    </button>
                </div>
            </div>

            {/* TABLE */}

            {loading ? (
                <div
                    className="
                        bg-white
                        rounded-[30px]
                        p-10
                        text-center
                        font-bold
                        text-gray-500
                    "
                >
                    Loading restaurants...
                </div>
            ) : (
                <RestaurantsTable
                    restaurants={restaurants}
                    fetchRestaurants={
                        fetchPendingRestaurants
                    }
                />
            )}
        </div>
    );
};

export default PendingRestaurants;