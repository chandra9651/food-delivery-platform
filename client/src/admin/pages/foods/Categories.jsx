// // /client/src/admin/pages/analytics/Categories.jsx

// import { useState } from "react";

// import {
//     FaLayerGroup,
//     FaPizzaSlice,
//     FaHamburger,
//     FaIceCream,
//     FaCoffee,
//     FaSearch,
//     FaFilter,
//     FaEdit,
//     FaTrash,
//     FaPlus,
// } from "react-icons/fa";

// const Categories = () => {
//     const [search, setSearch] = useState("");

//     /* DUMMY DATA */

//     const categories = [
//         {
//             id: 1,
//             name: "Pizza",
//             foods: 1250,
//             restaurants: 120,
//             icon: <FaPizzaSlice />,
//             color: "bg-orange-100 text-orange-500",
//         },

//         {
//             id: 2,
//             name: "Burger",
//             foods: 980,
//             restaurants: 95,
//             icon: <FaHamburger />,
//             color: "bg-red-100 text-red-500",
//         },

//         {
//             id: 3,
//             name: "Desserts",
//             foods: 650,
//             restaurants: 70,
//             icon: <FaIceCream />,
//             color: "bg-pink-100 text-pink-500",
//         },

//         {
//             id: 4,
//             name: "Coffee",
//             foods: 420,
//             restaurants: 40,
//             icon: <FaCoffee />,
//             color: "bg-brown-100 text-amber-700",
//         },
//     ];

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
//                         Categories Management
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Manage food categories across platform
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
//                     <FaPlus />

//                     Add Category
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
//                         <FaLayerGroup />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         24
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Total Categories
//                     </p>
//                 </div>

//                 {/* PIZZA */}

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
//                         <FaPizzaSlice />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         1.2K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Pizza Foods
//                     </p>
//                 </div>

//                 {/* BURGER */}

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
//                         <FaHamburger />
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
//                         Burger Foods
//                     </p>
//                 </div>

//                 {/* DESSERTS */}

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
//               bg-pink-100
//               text-pink-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaIceCream />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         650
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Dessert Foods
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
//                         placeholder="Search categories..."
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

//                 {/* FILTER */}

//                 <button
//                     className="
//             bg-gray-900
//             hover:bg-black
//             text-white
//             px-6
//             py-4
//             rounded-2xl
//             font-semibold
//             flex
//             items-center
//             justify-center
//             gap-3
//             transition-all
//             w-full
//             sm:w-auto
//           "
//                 >
//                     <FaFilter />

//                     Filter Categories
//                 </button>
//             </div>

//             {/* CATEGORY GRID */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           md:grid-cols-2
//           xl:grid-cols-3
//           gap-6
//         "
//             >
//                 {categories.map((category) => (
//                     <div
//                         key={category.id}
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//               hover:shadow-xl
//               transition-all
//             "
//                     >
//                         {/* TOP */}

//                         <div
//                             className="
//                 flex
//                 items-start
//                 justify-between
//                 gap-4
//               "
//                         >
//                             {/* ICON */}

//                             <div
//                                 className={`
//                   w-20
//                   h-20
//                   rounded-3xl
//                   flex
//                   items-center
//                   justify-center
//                   text-4xl
//                   ${category.color}
//                 `}
//                             >
//                                 {category.icon}
//                             </div>

//                             {/* ACTIONS */}

//                             <div className="flex gap-3">

//                                 <button
//                                     className="
//                     w-12
//                     h-12
//                     rounded-2xl
//                     bg-gray-100
//                     hover:bg-orange-500
//                     hover:text-white
//                     text-gray-700
//                     flex
//                     items-center
//                     justify-center
//                     transition-all
//                   "
//                                 >
//                                     <FaEdit />
//                                 </button>

//                                 <button
//                                     className="
//                     w-12
//                     h-12
//                     rounded-2xl
//                     bg-red-100
//                     hover:bg-red-500
//                     hover:text-white
//                     text-red-500
//                     flex
//                     items-center
//                     justify-center
//                     transition-all
//                   "
//                                 >
//                                     <FaTrash />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* CONTENT */}

//                         <div className="mt-8">

//                             <h2
//                                 className="
//                   text-2xl
//                   font-extrabold
//                   text-gray-900
//                 "
//                             >
//                                 {category.name}
//                             </h2>

//                             <div
//                                 className="
//                   grid
//                   grid-cols-2
//                   gap-4
//                   mt-6
//                 "
//                             >
//                                 {/* FOODS */}

//                                 <div
//                                     className="
//                     bg-gray-50
//                     rounded-2xl
//                     p-4
//                   "
//                                 >
//                                     <p className="text-gray-500 text-sm">
//                                         Foods
//                                     </p>

//                                     <h3
//                                         className="
//                       text-2xl
//                       font-extrabold
//                       text-gray-900
//                       mt-2
//                     "
//                                     >
//                                         {category.foods}
//                                     </h3>
//                                 </div>

//                                 {/* RESTAURANTS */}

//                                 <div
//                                     className="
//                     bg-gray-50
//                     rounded-2xl
//                     p-4
//                   "
//                                 >
//                                     <p className="text-gray-500 text-sm">
//                                         Restaurants
//                                     </p>

//                                     <h3
//                                         className="
//                       text-2xl
//                       font-extrabold
//                       text-gray-900
//                       mt-2
//                     "
//                                     >
//                                         {category.restaurants}
//                                     </h3>
//                                 </div>
//                             </div>

//                             {/* BUTTON */}

//                             <button
//                                 className="
//                   mt-6
//                   w-full
//                   bg-orange-500
//                   hover:bg-orange-600
//                   text-white
//                   py-4
//                   rounded-2xl
//                   font-bold
//                   transition-all
//                 "
//                             >
//                                 View Foods
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Categories;



// /client/src/admin/pages/analytics/Categories.jsx

import { useEffect, useMemo, useState } from "react";

import axios from "axios";

import {
    FaLayerGroup,
    FaPizzaSlice,
    FaHamburger,
    FaIceCream,
    FaCoffee,
    FaSearch,
    FaFilter,
    FaEdit,
    FaTrash,
    FaPlus,
    FaSpinner,
} from "react-icons/fa";

const API_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const Categories = () => {
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(null);

    // FETCH CATEGORIES

    const fetchCategories = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const { data } = await axios.get(
                `${API_URL}/api/admin/categories`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCategories(data.categories || []);
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to fetch categories"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // DELETE CATEGORY

    const deleteCategoryHandler = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this category?"
        );

        if (!confirmDelete) return;

        try {
            setDeleteLoading(id);

            const token = localStorage.getItem("token");

            const { data } = await axios.delete(
                `${API_URL}/api/admin/categories/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert(data.message);

            setCategories((prev) =>
                prev.filter((item) => item._id !== id)
            );
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to delete category"
            );
        } finally {
            setDeleteLoading(null);
        }
    };

    // FILTERED CATEGORIES

    const filteredCategories = useMemo(() => {
        return categories.filter((category) =>
            category.name
                ?.toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [categories, search]);

    // STATS

    const totalCategories = categories.length;

    const totalFoods = categories.reduce(
        (acc, item) => acc + (item.foodsCount || 0),
        0
    );

    const totalRestaurants = categories.reduce(
        (acc, item) => acc + (item.restaurantsCount || 0),
        0
    );

    // ICON HANDLER

    const getCategoryIcon = (name) => {
        const category = name?.toLowerCase();

        if (category?.includes("pizza")) {
            return <FaPizzaSlice />;
        }

        if (category?.includes("burger")) {
            return <FaHamburger />;
        }

        if (
            category?.includes("dessert") ||
            category?.includes("ice")
        ) {
            return <FaIceCream />;
        }

        if (
            category?.includes("coffee") ||
            category?.includes("tea")
        ) {
            return <FaCoffee />;
        }

        return <FaLayerGroup />;
    };

    // COLOR HANDLER

    const getCategoryColor = (name) => {
        const category = name?.toLowerCase();

        if (category?.includes("pizza")) {
            return "bg-orange-100 text-orange-500";
        }

        if (category?.includes("burger")) {
            return "bg-red-100 text-red-500";
        }

        if (
            category?.includes("dessert") ||
            category?.includes("ice")
        ) {
            return "bg-pink-100 text-pink-500";
        }

        if (
            category?.includes("coffee") ||
            category?.includes("tea")
        ) {
            return "bg-amber-100 text-amber-700";
        }

        return "bg-blue-100 text-blue-500";
    };

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
                        Categories Management
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage food categories across platform
                    </p>
                </div>

                {/* RIGHT */}

                <button
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
                    <FaPlus />
                    Add Category
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
                        <FaLayerGroup />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {loading ? "..." : totalCategories}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Categories
                    </p>
                </div>

                {/* FOODS */}

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
                        <FaPizzaSlice />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {loading ? "..." : totalFoods}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Foods
                    </p>
                </div>

                {/* RESTAURANTS */}

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
                        <FaHamburger />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {loading ? "..." : totalRestaurants}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Restaurants
                    </p>
                </div>

                {/* ACTIVE */}

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
                            bg-pink-100
                            text-pink-500
                            flex
                            items-center
                            justify-center
                            text-2xl
                            mb-5
                        "
                    >
                        <FaIceCream />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {loading ? "..." : filteredCategories.length}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Showing Results
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
                        placeholder="Search categories..."
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

                {/* FILTER */}

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
                        w-full
                        sm:w-auto
                    "
                >
                    <FaFilter />
                    Filter Categories
                </button>
            </div>

            {/* LOADING */}

            {loading ? (
                <div className="flex justify-center py-20">
                    <FaSpinner className="text-5xl text-orange-500 animate-spin" />
                </div>
            ) : filteredCategories.length === 0 ? (
                <div
                    className="
                        bg-white
                        rounded-[32px]
                        border
                        border-gray-100
                        shadow-sm
                        p-10
                        text-center
                    "
                >
                    <h2 className="text-2xl font-bold text-gray-800">
                        No Categories Found
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Try searching with another keyword
                    </p>
                </div>
            ) : (
                /* CATEGORY GRID */

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3
                        gap-6
                    "
                >
                    {filteredCategories.map((category) => (
                        <div
                            key={category._id}
                            className="
                                bg-white
                                rounded-[32px]
                                border
                                border-gray-100
                                shadow-sm
                                p-6
                                hover:shadow-xl
                                transition-all
                            "
                        >
                            {/* TOP */}

                            <div
                                className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-4
                                "
                            >
                                {/* ICON */}

                                <div
                                    className={`
                                        w-20
                                        h-20
                                        rounded-3xl
                                        flex
                                        items-center
                                        justify-center
                                        text-4xl
                                        ${getCategoryColor(category.name)}
                                    `}
                                >
                                    {getCategoryIcon(category.name)}
                                </div>

                                {/* ACTIONS */}

                                <div className="flex gap-3">
                                    <button
                                        className="
                                            w-12
                                            h-12
                                            rounded-2xl
                                            bg-gray-100
                                            hover:bg-orange-500
                                            hover:text-white
                                            text-gray-700
                                            flex
                                            items-center
                                            justify-center
                                            transition-all
                                        "
                                    >
                                        <FaEdit />
                                    </button>

                                    <button
                                        onClick={() =>
                                            deleteCategoryHandler(
                                                category._id
                                            )
                                        }
                                        disabled={
                                            deleteLoading ===
                                            category._id
                                        }
                                        className="
                                            w-12
                                            h-12
                                            rounded-2xl
                                            bg-red-100
                                            hover:bg-red-500
                                            hover:text-white
                                            text-red-500
                                            flex
                                            items-center
                                            justify-center
                                            transition-all
                                            disabled:opacity-50
                                        "
                                    >
                                        {deleteLoading ===
                                            category._id ? (
                                            <FaSpinner className="animate-spin" />
                                        ) : (
                                            <FaTrash />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* CONTENT */}

                            <div className="mt-8">
                                <h2
                                    className="
                                        text-2xl
                                        font-extrabold
                                        text-gray-900
                                    "
                                >
                                    {category.name}
                                </h2>

                                <div
                                    className="
                                        grid
                                        grid-cols-2
                                        gap-4
                                        mt-6
                                    "
                                >
                                    {/* FOODS */}

                                    <div
                                        className="
                                            bg-gray-50
                                            rounded-2xl
                                            p-4
                                        "
                                    >
                                        <p className="text-gray-500 text-sm">
                                            Foods
                                        </p>

                                        <h3
                                            className="
                                                text-2xl
                                                font-extrabold
                                                text-gray-900
                                                mt-2
                                            "
                                        >
                                            {category.foodsCount || 0}
                                        </h3>
                                    </div>

                                    {/* RESTAURANTS */}

                                    <div
                                        className="
                                            bg-gray-50
                                            rounded-2xl
                                            p-4
                                        "
                                    >
                                        <p className="text-gray-500 text-sm">
                                            Restaurants
                                        </p>

                                        <h3
                                            className="
                                                text-2xl
                                                font-extrabold
                                                text-gray-900
                                                mt-2
                                            "
                                        >
                                            {category.restaurantsCount || 0}
                                        </h3>
                                    </div>
                                </div>

                                {/* BUTTON */}

                                <button
                                    className="
                                        mt-6
                                        w-full
                                        bg-orange-500
                                        hover:bg-orange-600
                                        text-white
                                        py-4
                                        rounded-2xl
                                        font-bold
                                        transition-all
                                    "
                                >
                                    View Foods
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Categories;

