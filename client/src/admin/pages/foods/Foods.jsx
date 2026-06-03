// // /client/src/admin/pages/foods/Foods.jsx


// import { useState } from "react";

// import FoodsTable from "../../components/tables/FoodsTable";

// import {
//     FaUtensils,
//     FaHamburger,
//     FaDollarSign,
//     FaFire,
//     FaSearch,
//     FaFilter,
//     FaDownload,
//     FaPlus,
// } from "react-icons/fa";

// const Foods = () => {
//     const [search, setSearch] = useState("");

//     return (
//         <div className="space-y-8">
//             {/* PAGE HEADER */}

//             <div
//                 className="
//           flex
//           flex-col
//           xl:flex-row
//           xl:items-center
//           xl:justify-between
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
//                         Foods Management
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Manage all food items across restaurants
//                     </p>
//                 </div>

//                 {/* RIGHT */}

//                 <div className="flex flex-wrap gap-4">

//                     <button
//                         className="
//               bg-white
//               border
//               border-gray-200
//               hover:bg-gray-100
//               text-gray-800
//               px-6
//               py-4
//               rounded-2xl
//               font-bold
//               flex
//               items-center
//               gap-3
//               transition-all
//             "
//                     >
//                         <FaDownload />

//                         Export Foods
//                     </button>

//                     <button
//                         className="
//               bg-orange-500
//               hover:bg-orange-600
//               text-white
//               px-6
//               py-4
//               rounded-2xl
//               font-bold
//               flex
//               items-center
//               gap-3
//               shadow-lg
//               shadow-orange-200
//               transition-all
//             "
//                     >
//                         <FaPlus />

//                         Add Food
//                     </button>
//                 </div>
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
//                 {/* TOTAL FOODS */}

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
//                         <FaUtensils />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         18.5K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Total Foods
//                     </p>
//                 </div>

//                 {/* FAST FOOD */}

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
//               bg-red-100
//               text-red-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaHamburger />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         8.2K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Fast Foods
//                     </p>
//                 </div>

//                 {/* REVENUE */}

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
//                         <FaDollarSign />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         $450K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Food Revenue
//                     </p>
//                 </div>

//                 {/* TRENDING */}

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
//                         <FaFire />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         1.5K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Trending Foods
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
//                         placeholder="Search foods..."
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
//                         <option>Burger</option>
//                         <option>Chinese</option>
//                         <option>Indian</option>
//                         <option>Desserts</option>
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
//                         <option>All Status</option>
//                         <option>Available</option>
//                         <option>Out of Stock</option>
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

//             <FoodsTable />
//         </div>
//     );
// };

// export default Foods;



// /client/src/admin/pages/foods/Foods.jsx

import { useEffect, useMemo, useState } from "react";

import axios from "axios";

import FoodsTable from "../../components/tables/FoodsTable";

import {
    FaUtensils,
    FaHamburger,
    FaDollarSign,
    FaFire,
    FaSearch,
    FaFilter,
    FaDownload,
    FaPlus,
    FaSpinner,
} from "react-icons/fa";

const Foods = () => {
    const [search, setSearch] = useState("");
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    const [categoryFilter, setCategoryFilter] =
        useState("All Categories");

    const [statusFilter, setStatusFilter] =
        useState("All Status");

    // BACKEND API URL
    const API_URL =
        import.meta.env.VITE_API_URL ||
        "http://localhost:5000/api";

    // FETCH ALL FOODS
    const fetchFoods = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `${API_URL}/foods`
            );

            setFoods(data?.foods || []);
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to fetch foods"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFoods();
    }, []);

    // FILTERED FOODS
    const filteredFoods = useMemo(() => {
        return foods.filter((food) => {
            const matchesSearch =
                food?.name
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                food?.restaurant?.name
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                food?.category
                    ?.toLowerCase()
                    .includes(search.toLowerCase());

            const matchesCategory =
                categoryFilter === "All Categories"
                    ? true
                    : food?.category === categoryFilter;

            const matchesStatus =
                statusFilter === "All Status"
                    ? true
                    : food?.status === statusFilter;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesStatus
            );
        });
    }, [
        foods,
        search,
        categoryFilter,
        statusFilter,
    ]);

    // STATS
    const totalFoods = foods.length;

    const fastFoods = foods.filter(
        (food) =>
            food?.category === "Burger" ||
            food?.category === "Pizza"
    ).length;

    const totalRevenue = foods.reduce(
        (acc, food) =>
            acc + (Number(food?.revenue) || 0),
        0
    );

    const trendingFoods = foods.filter(
        (food) => food?.isTrending === true
    ).length;

    // UNIQUE CATEGORIES
    const categories = [
        ...new Set(
            foods.map((food) => food?.category)
        ),
    ];

    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}

            <div
                className="
          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between
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
                        Foods Management
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage all food items across restaurants
                    </p>
                </div>

                {/* RIGHT */}

                <div className="flex flex-wrap gap-4">
                    <button
                        className="
              bg-white
              border
              border-gray-200
              hover:bg-gray-100
              text-gray-800
              px-6
              py-4
              rounded-2xl
              font-bold
              flex
              items-center
              gap-3
              transition-all
            "
                    >
                        <FaDownload />

                        Export Foods
                    </button>

                    <button
                        className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-6
              py-4
              rounded-2xl
              font-bold
              flex
              items-center
              gap-3
              shadow-lg
              shadow-orange-200
              transition-all
            "
                    >
                        <FaPlus />

                        Add Food
                    </button>
                </div>
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
                {/* TOTAL FOODS */}

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
                        <FaUtensils />
                    </div>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
            "
                    >
                        {totalFoods}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Foods
                    </p>
                </div>

                {/* FAST FOOD */}

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
              bg-red-100
              text-red-500
              flex
              items-center
              justify-center
              text-2xl
              mb-5
            "
                    >
                        <FaHamburger />
                    </div>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
            "
                    >
                        {fastFoods}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Fast Foods
                    </p>
                </div>

                {/* REVENUE */}

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
                        <FaDollarSign />
                    </div>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
            "
                    >
                        ${totalRevenue.toLocaleString()}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Food Revenue
                    </p>
                </div>

                {/* TRENDING */}

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
                        <FaFire />
                    </div>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
            "
                    >
                        {trendingFoods}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Trending Foods
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
                        placeholder="Search foods..."
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
                    {/* CATEGORY FILTER */}

                    <select
                        value={categoryFilter}
                        onChange={(e) =>
                            setCategoryFilter(
                                e.target.value
                            )
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
                        <option>All Categories</option>

                        {categories.map(
                            (category, index) => (
                                <option
                                    key={index}
                                    value={category}
                                >
                                    {category}
                                </option>
                            )
                        )}
                    </select>

                    {/* STATUS FILTER */}

                    <select
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(
                                e.target.value
                            )
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
                        <option>All Status</option>

                        <option value="Available">
                            Available
                        </option>

                        <option value="Out of Stock">
                            Out of Stock
                        </option>
                    </select>

                    {/* FILTER BUTTON */}

                    <button
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

            <div
                className="
          bg-white
          rounded-[32px]
          border
          border-gray-100
          shadow-sm
          overflow-hidden
        "
            >
                {loading ? (
                    <div
                        className="
              flex
              items-center
              justify-center
              py-24
            "
                    >
                        <FaSpinner className="text-4xl text-orange-500 animate-spin" />
                    </div>
                ) : (
                    <FoodsTable
                        foods={filteredFoods}
                        refreshFoods={fetchFoods}
                    />
                )}
            </div>
        </div>
    );
};

export default Foods;