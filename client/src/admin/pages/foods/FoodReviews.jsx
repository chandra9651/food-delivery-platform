// /client/src/admin/pages/foods/FoodReviews.jsx


// import { useState } from "react";

// import {
//     FaStar,
//     FaSearch,
//     FaFilter,
//     FaTrash,
//     FaReply,
//     FaFlag,
//     FaCheckCircle,
//     FaClock,
// } from "react-icons/fa";

// const FoodReviews = () => {
//     const [search, setSearch] = useState("");

//     /* DUMMY DATA */

//     const reviews = [
//         {
//             id: 1,
//             customer: "Rahul Sharma",
//             food: "Cheese Burst Pizza",
//             restaurant: "Pizza Hub",
//             rating: 5,
//             status: "Approved",
//             review:
//                 "Amazing taste and super fresh ingredients. Delivery was fast and packaging was excellent.",
//             date: "12 May 2026",
//             image:
//                 "https://randomuser.me/api/portraits/men/32.jpg",
//         },

//         {
//             id: 2,
//             customer: "Priya Verma",
//             food: "Chicken Burger",
//             restaurant: "Burger Point",
//             rating: 4,
//             status: "Pending",
//             review:
//                 "Burger was juicy and tasty. Fries could be more crispy but overall experience was good.",
//             date: "11 May 2026",
//             image:
//                 "https://randomuser.me/api/portraits/women/44.jpg",
//         },

//         {
//             id: 3,
//             customer: "Aman Gupta",
//             food: "Chinese Noodles",
//             restaurant: "Chinese Bowl",
//             rating: 2,
//             status: "Reported",
//             review:
//                 "Food arrived cold and taste was average. Delivery took too much time.",
//             date: "10 May 2026",
//             image:
//                 "https://randomuser.me/api/portraits/men/52.jpg",
//         },
//     ];

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
//                         Food Reviews
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Monitor and manage customer food reviews
//                     </p>
//                 </div>

//                 {/* RIGHT */}

//                 <div
//                     className="
//             bg-orange-100
//             text-orange-600
//             px-6
//             py-4
//             rounded-2xl
//             font-bold
//             flex
//             items-center
//             gap-3
//             w-fit
//           "
//                 >
//                     <FaStar />

//                     12.5K Total Reviews
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
//               bg-yellow-100
//               text-yellow-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaStar />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         12.5K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Total Reviews
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
//                         10.8K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Approved Reviews
//                     </p>
//                 </div>

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
//               bg-orange-100
//               text-orange-500
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
//                         950
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Pending Reviews
//                     </p>
//                 </div>

//                 {/* REPORTED */}

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
//                         <FaFlag />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         120
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Reported Reviews
//                     </p>
//                 </div>
//             </div>

//             {/* SEARCH & FILTER */}

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
//                         placeholder="Search reviews..."
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

//                 <div
//                     className="
//             flex
//             flex-col
//             sm:flex-row
//             gap-4
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
//                         <option>All Ratings</option>
//                         <option>5 Star</option>
//                         <option>4 Star</option>
//                         <option>3 Star</option>
//                         <option>2 Star</option>
//                         <option>1 Star</option>
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

//             {/* REVIEWS */}

//             <div className="space-y-6">
//                 {reviews.map((item) => (
//                     <div
//                         key={item.id}
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//               hover:shadow-lg
//               transition-all
//             "
//                     >
//                         {/* TOP */}

//                         <div
//                             className="
//                 flex
//                 flex-col
//                 lg:flex-row
//                 lg:items-start
//                 lg:justify-between
//                 gap-5
//               "
//                         >
//                             {/* LEFT */}

//                             <div className="flex gap-5">
//                                 {/* IMAGE */}

//                                 <img
//                                     src={item.image}
//                                     alt={item.customer}
//                                     className="
//                     w-16
//                     h-16
//                     rounded-2xl
//                     object-cover
//                   "
//                                 />

//                                 {/* CONTENT */}

//                                 <div>

//                                     <h2
//                                         className="
//                       text-xl
//                       font-extrabold
//                       text-gray-900
//                     "
//                                     >
//                                         {item.customer}
//                                     </h2>

//                                     <p className="text-gray-500 mt-1">
//                                         {item.food} • {item.restaurant}
//                                     </p>

//                                     {/* RATING */}

//                                     <div className="flex gap-1 mt-3">
//                                         {[...Array(item.rating)].map(
//                                             (_, index) => (
//                                                 <FaStar
//                                                     key={index}
//                                                     className="text-yellow-400"
//                                                 />
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* STATUS */}

//                             <div
//                                 className={`
//                   px-5
//                   py-3
//                   rounded-full
//                   text-sm
//                   font-bold
//                   w-fit

//                   ${item.status === "Approved"
//                                         ? "bg-green-100 text-green-600"

//                                         : item.status === "Pending"
//                                             ? "bg-orange-100 text-orange-600"

//                                             : "bg-red-100 text-red-600"
//                                     }
//                 `}
//                             >
//                                 {item.status}
//                             </div>
//                         </div>

//                         {/* REVIEW */}

//                         <div
//                             className="
//                 mt-6
//                 bg-gray-50
//                 rounded-3xl
//                 p-5
//               "
//                         >
//                             <p
//                                 className="
//                   text-gray-700
//                   leading-relaxed
//                 "
//                             >
//                                 {item.review}
//                             </p>
//                         </div>

//                         {/* FOOTER */}

//                         <div
//                             className="
//                 flex
//                 flex-col
//                 lg:flex-row
//                 lg:items-center
//                 lg:justify-between
//                 gap-5
//                 mt-6
//               "
//                         >
//                             {/* DATE */}

//                             <p className="text-gray-500">
//                                 Posted on {item.date}
//                             </p>

//                             {/* ACTIONS */}

//                             <div className="flex flex-wrap gap-3">
//                                 {/* REPLY */}

//                                 <button
//                                     className="
//                     bg-blue-100
//                     hover:bg-blue-500
//                     hover:text-white
//                     text-blue-600
//                     px-5
//                     py-3
//                     rounded-2xl
//                     font-semibold
//                     flex
//                     items-center
//                     gap-3
//                     transition-all
//                   "
//                                 >
//                                     <FaReply />

//                                     Reply
//                                 </button>

//                                 {/* DELETE */}

//                                 <button
//                                     className="
//                     bg-red-100
//                     hover:bg-red-500
//                     hover:text-white
//                     text-red-600
//                     px-5
//                     py-3
//                     rounded-2xl
//                     font-semibold
//                     flex
//                     items-center
//                     gap-3
//                     transition-all
//                   "
//                                 >
//                                     <FaTrash />

//                                     Delete
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FoodReviews;



// /client/src/admin/pages/foods/FoodReviews.jsx

import { useEffect, useMemo, useState } from "react";

import axios from "axios";

import {
    FaStar,
    FaSearch,
    FaFilter,
    FaTrash,
    FaReply,
    FaFlag,
    FaCheckCircle,
    FaClock,
    FaSpinner,
} from "react-icons/fa";

const FoodReviews = () => {
    const [search, setSearch] = useState("");
    const [ratingFilter, setRatingFilter] = useState("All Ratings");

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    // BACKEND URL
    const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api";

    // FETCH REVIEWS
    const fetchReviews = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `${API_URL}/reviews`
            );

            setReviews(data?.reviews || []);
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to fetch reviews"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // DELETE REVIEW
    const deleteReview = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this review?"
        );

        if (!confirmDelete) return;

        try {
            await axios.delete(`${API_URL}/reviews/${id}`);

            setReviews((prev) =>
                prev.filter((item) => item._id !== id)
            );

            alert("Review deleted successfully");
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to delete review"
            );
        }
    };

    // FILTERED REVIEWS
    const filteredReviews = useMemo(() => {
        return reviews.filter((item) => {
            const matchesSearch =
                item.customer?.toLowerCase().includes(search.toLowerCase()) ||
                item.food?.toLowerCase().includes(search.toLowerCase()) ||
                item.restaurant
                    ?.toLowerCase()
                    .includes(search.toLowerCase());

            const matchesRating =
                ratingFilter === "All Ratings"
                    ? true
                    : item.rating === Number(ratingFilter);

            return matchesSearch && matchesRating;
        });
    }, [reviews, search, ratingFilter]);

    // STATS
    const totalReviews = reviews.length;

    const approvedReviews = reviews.filter(
        (item) => item.status === "Approved"
    ).length;

    const pendingReviews = reviews.filter(
        (item) => item.status === "Pending"
    ).length;

    const reportedReviews = reviews.filter(
        (item) => item.status === "Reported"
    ).length;

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
                        Food Reviews
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Monitor and manage customer food reviews
                    </p>
                </div>

                {/* RIGHT */}

                <div
                    className="
            bg-orange-100
            text-orange-600
            px-6
            py-4
            rounded-2xl
            font-bold
            flex
            items-center
            gap-3
            w-fit
          "
                >
                    <FaStar />

                    {totalReviews} Total Reviews
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
              bg-yellow-100
              text-yellow-500
              flex
              items-center
              justify-center
              text-2xl
              mb-5
            "
                    >
                        <FaStar />
                    </div>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
            "
                    >
                        {totalReviews}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Reviews
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
                        {approvedReviews}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Approved Reviews
                    </p>
                </div>

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
              bg-orange-100
              text-orange-500
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
                        {pendingReviews}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Pending Reviews
                    </p>
                </div>

                {/* REPORTED */}

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
                        <FaFlag />
                    </div>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
            "
                    >
                        {reportedReviews}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Reported Reviews
                    </p>
                </div>
            </div>

            {/* SEARCH & FILTER */}

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
                        placeholder="Search reviews..."
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

                <div
                    className="
            flex
            flex-col
            sm:flex-row
            gap-4
          "
                >
                    <select
                        value={ratingFilter}
                        onChange={(e) =>
                            setRatingFilter(e.target.value)
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
                        <option>All Ratings</option>
                        <option value="5">5 Star</option>
                        <option value="4">4 Star</option>
                        <option value="3">3 Star</option>
                        <option value="2">2 Star</option>
                        <option value="1">1 Star</option>
                    </select>

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

            {/* LOADING */}

            {loading ? (
                <div
                    className="
            bg-white
            rounded-[30px]
            p-20
            flex
            items-center
            justify-center
          "
                >
                    <FaSpinner className="animate-spin text-4xl text-orange-500" />
                </div>
            ) : filteredReviews.length === 0 ? (
                <div
                    className="
            bg-white
            rounded-[30px]
            p-16
            text-center
            border
            border-gray-100
          "
                >
                    <h2 className="text-2xl font-bold text-gray-800">
                        No Reviews Found
                    </h2>

                    <p className="text-gray-500 mt-2">
                        No reviews available right now
                    </p>
                </div>
            ) : (
                /* REVIEWS */
                <div className="space-y-6">
                    {filteredReviews.map((item) => (
                        <div
                            key={item._id}
                            className="
                bg-white
                rounded-[32px]
                border
                border-gray-100
                shadow-sm
                p-6
                hover:shadow-lg
                transition-all
              "
                        >
                            {/* TOP */}

                            <div
                                className="
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-start
                  lg:justify-between
                  gap-5
                "
                            >
                                {/* LEFT */}

                                <div className="flex gap-5">
                                    {/* IMAGE */}

                                    <img
                                        src={
                                            item.image ||
                                            "https://randomuser.me/api/portraits/men/32.jpg"
                                        }
                                        alt={item.customer}
                                        className="
                      w-16
                      h-16
                      rounded-2xl
                      object-cover
                    "
                                    />

                                    {/* CONTENT */}

                                    <div>
                                        <h2
                                            className="
                        text-xl
                        font-extrabold
                        text-gray-900
                      "
                                        >
                                            {item.customer}
                                        </h2>

                                        <p className="text-gray-500 mt-1">
                                            {item.food} •{" "}
                                            {item.restaurant}
                                        </p>

                                        {/* RATING */}

                                        <div className="flex gap-1 mt-3">
                                            {[...Array(item.rating)].map(
                                                (_, index) => (
                                                    <FaStar
                                                        key={index}
                                                        className="text-yellow-400"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* STATUS */}

                                <div
                                    className={`
                    px-5
                    py-3
                    rounded-full
                    text-sm
                    font-bold
                    w-fit

                    ${item.status === "Approved"
                                            ? "bg-green-100 text-green-600"
                                            : item.status === "Pending"
                                                ? "bg-orange-100 text-orange-600"
                                                : "bg-red-100 text-red-600"
                                        }
                  `}
                                >
                                    {item.status}
                                </div>
                            </div>

                            {/* REVIEW */}

                            <div
                                className="
                  mt-6
                  bg-gray-50
                  rounded-3xl
                  p-5
                "
                            >
                                <p
                                    className="
                    text-gray-700
                    leading-relaxed
                  "
                                >
                                    {item.review}
                                </p>
                            </div>

                            {/* FOOTER */}

                            <div
                                className="
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-5
                  mt-6
                "
                            >
                                {/* DATE */}

                                <p className="text-gray-500">
                                    Posted on{" "}
                                    {new Date(
                                        item.createdAt
                                    ).toLocaleDateString()}
                                </p>

                                {/* ACTIONS */}

                                <div className="flex flex-wrap gap-3">
                                    {/* REPLY */}

                                    <button
                                        className="
                      bg-blue-100
                      hover:bg-blue-500
                      hover:text-white
                      text-blue-600
                      px-5
                      py-3
                      rounded-2xl
                      font-semibold
                      flex
                      items-center
                      gap-3
                      transition-all
                    "
                                    >
                                        <FaReply />

                                        Reply
                                    </button>

                                    {/* DELETE */}

                                    <button
                                        onClick={() =>
                                            deleteReview(item._id)
                                        }
                                        className="
                      bg-red-100
                      hover:bg-red-500
                      hover:text-white
                      text-red-600
                      px-5
                      py-3
                      rounded-2xl
                      font-semibold
                      flex
                      items-center
                      gap-3
                      transition-all
                    "
                                    >
                                        <FaTrash />

                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FoodReviews;