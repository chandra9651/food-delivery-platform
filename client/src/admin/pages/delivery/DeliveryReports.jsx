// // /client/src/admin/pages/analytics/DeliveryReports.jsx


// import { useState } from "react";

// import {
//     FaMotorcycle,
//     FaCheckCircle,
//     FaClock,
//     FaMoneyBillWave,
//     FaChartLine,
//     FaSearch,
//     FaFilter,
//     FaDownload,
//     FaMapMarkerAlt,
//     FaUser,
//     FaStore,
//     FaBox,
// } from "react-icons/fa";

// const DeliveryReports = () => {
//     const [search, setSearch] = useState("");

//     /* DUMMY DATA */

//     const reports = [
//         {
//             id: "#DLV-1001",
//             customer: "Rahul Sharma",
//             rider: "Aman Gupta",
//             restaurant: "Pizza Hub",
//             city: "Lucknow",
//             amount: "$24",
//             time: "28 Min",
//             status: "Delivered",
//             date: "12 May 2026",
//         },

//         {
//             id: "#DLV-1002",
//             customer: "Priya Verma",
//             rider: "Rohit Kumar",
//             restaurant: "Burger Point",
//             city: "Delhi",
//             amount: "$18",
//             time: "34 Min",
//             status: "Delayed",
//             date: "12 May 2026",
//         },

//         {
//             id: "#DLV-1003",
//             customer: "Karan Singh",
//             rider: "Vikas Sharma",
//             restaurant: "Chinese Bowl",
//             city: "Mumbai",
//             amount: "$31",
//             time: "21 Min",
//             status: "Delivered",
//             date: "11 May 2026",
//         },

//         {
//             id: "#DLV-1004",
//             customer: "Neha Sharma",
//             rider: "Arjun Verma",
//             restaurant: "Food Corner",
//             city: "Kanpur",
//             amount: "$14",
//             time: "40 Min",
//             status: "Cancelled",
//             date: "10 May 2026",
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
//                         Delivery Reports
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Analyze delivery performance and order reports
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

//                     Export Report
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
//                         <FaMotorcycle />
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
//                         Total Deliveries
//                     </p>
//                 </div>

//                 {/* DELIVERED */}

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
//                         16.9K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Successful Deliveries
//                     </p>
//                 </div>

//                 {/* AVERAGE */}

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
//               bg-blue-100
//               text-blue-500
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
//                         29 Min
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Average Delivery Time
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
//               bg-yellow-100
//               text-yellow-500
//               flex
//               items-center
//               justify-center
//               text-2xl
//               mb-5
//             "
//                     >
//                         <FaMoneyBillWave />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         $145K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Delivery Revenue
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
//                         placeholder="Search reports..."
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
//                         <option>All Status</option>
//                         <option>Delivered</option>
//                         <option>Delayed</option>
//                         <option>Cancelled</option>
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

//             {/* REPORT TABLE */}

//             <div
//                 className="
//           bg-white
//           rounded-[32px]
//           border
//           border-gray-100
//           shadow-sm
//           overflow-hidden
//         "
//             >
//                 {/* TABLE HEADER */}

//                 <div
//                     className="
//             flex
//             items-center
//             justify-between
//             px-6
//             py-5
//             border-b
//             border-gray-100
//           "
//                 >
//                     <div className="flex items-center gap-3">
//                         <FaChartLine className="text-orange-500 text-xl" />

//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//               "
//                         >
//                             Delivery Analytics
//                         </h2>
//                     </div>
//                 </div>

//                 {/* TABLE */}

//                 <div className="overflow-x-auto">
//                     <table className="w-full min-w-[1100px]">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th
//                                     className="
//                     text-left
//                     px-6
//                     py-5
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Order
//                                 </th>

//                                 <th
//                                     className="
//                     text-left
//                     px-6
//                     py-5
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Customer
//                                 </th>

//                                 <th
//                                     className="
//                     text-left
//                     px-6
//                     py-5
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Rider
//                                 </th>

//                                 <th
//                                     className="
//                     text-left
//                     px-6
//                     py-5
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Restaurant
//                                 </th>

//                                 <th
//                                     className="
//                     text-left
//                     px-6
//                     py-5
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     City
//                                 </th>

//                                 <th
//                                     className="
//                     text-left
//                     px-6
//                     py-5
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Time
//                                 </th>

//                                 <th
//                                     className="
//                     text-left
//                     px-6
//                     py-5
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Amount
//                                 </th>

//                                 <th
//                                     className="
//                     text-left
//                     px-6
//                     py-5
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Status
//                                 </th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {reports.map((item, index) => (
//                                 <tr
//                                     key={index}
//                                     className="
//                     border-b
//                     border-gray-100
//                     hover:bg-gray-50
//                     transition-all
//                   "
//                                 >
//                                     {/* ORDER */}

//                                     <td className="px-6 py-5">
//                                         <div className="flex items-center gap-3">
//                                             <div
//                                                 className="
//                           w-12
//                           h-12
//                           rounded-2xl
//                           bg-orange-100
//                           text-orange-500
//                           flex
//                           items-center
//                           justify-center
//                         "
//                                             >
//                                                 <FaBox />
//                                             </div>

//                                             <div>
//                                                 <h3 className="font-bold text-gray-900">
//                                                     {item.id}
//                                                 </h3>

//                                                 <p className="text-gray-500 text-sm mt-1">
//                                                     {item.date}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </td>

//                                     {/* CUSTOMER */}

//                                     <td className="px-6 py-5">
//                                         <div className="flex items-center gap-3">
//                                             <FaUser className="text-gray-400" />

//                                             <span className="font-semibold text-gray-700">
//                                                 {item.customer}
//                                             </span>
//                                         </div>
//                                     </td>

//                                     {/* RIDER */}

//                                     <td className="px-6 py-5">
//                                         <div className="flex items-center gap-3">
//                                             <FaMotorcycle className="text-orange-500" />

//                                             <span className="font-semibold text-gray-700">
//                                                 {item.rider}
//                                             </span>
//                                         </div>
//                                     </td>

//                                     {/* RESTAURANT */}

//                                     <td className="px-6 py-5">
//                                         <div className="flex items-center gap-3">
//                                             <FaStore className="text-red-500" />

//                                             <span className="font-semibold text-gray-700">
//                                                 {item.restaurant}
//                                             </span>
//                                         </div>
//                                     </td>

//                                     {/* CITY */}

//                                     <td className="px-6 py-5">
//                                         <div className="flex items-center gap-3">
//                                             <FaMapMarkerAlt className="text-blue-500" />

//                                             <span className="font-semibold text-gray-700">
//                                                 {item.city}
//                                             </span>
//                                         </div>
//                                     </td>

//                                     {/* TIME */}

//                                     <td className="px-6 py-5">
//                                         <span className="font-bold text-gray-900">
//                                             {item.time}
//                                         </span>
//                                     </td>

//                                     {/* AMOUNT */}

//                                     <td className="px-6 py-5">
//                                         <span
//                                             className="
//                         text-lg
//                         font-extrabold
//                         text-orange-500
//                       "
//                                         >
//                                             {item.amount}
//                                         </span>
//                                     </td>

//                                     {/* STATUS */}

//                                     <td className="px-6 py-5">
//                                         <div
//                                             className={`
//                         inline-flex
//                         items-center
//                         px-4
//                         py-2
//                         rounded-full
//                         text-sm
//                         font-bold

//                         ${item.status === "Delivered"
//                                                     ? "bg-green-100 text-green-600"

//                                                     : item.status === "Delayed"
//                                                         ? "bg-yellow-100 text-yellow-600"

//                                                         : "bg-red-100 text-red-600"
//                                                 }
//                       `}
//                                         >
//                                             {item.status}
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DeliveryReports;



// /client/src/admin/pages/analytics/DeliveryReports.jsx

import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import {
    FaMotorcycle,
    FaCheckCircle,
    FaClock,
    FaMoneyBillWave,
    FaChartLine,
    FaSearch,
    FaFilter,
    FaDownload,
    FaMapMarkerAlt,
    FaUser,
    FaStore,
    FaBox,
} from "react-icons/fa";

const DeliveryReports = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");

    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState({
        totalDeliveries: 0,
        successfulDeliveries: 0,
        averageDeliveryTime: 0,
        deliveryRevenue: 0,
    });

    // BACKEND URL
    const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000";

    // FETCH REPORTS
    const fetchReports = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `${API_URL}/api/admin/delivery-reports`
            );

            setReports(data.reports || []);

            setStats({
                totalDeliveries: data.totalDeliveries || 0,
                successfulDeliveries:
                    data.successfulDeliveries || 0,
                averageDeliveryTime:
                    data.averageDeliveryTime || 0,
                deliveryRevenue: data.deliveryRevenue || 0,
            });
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to fetch delivery reports"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    // FILTERED REPORTS
    const filteredReports = useMemo(() => {
        return reports.filter((item) => {
            const matchesSearch =
                item.customer
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.rider
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.restaurant
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.city
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.id
                    ?.toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "All Status"
                    ? true
                    : item.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [reports, search, statusFilter]);

    // EXPORT CSV
    const exportCSV = () => {
        const headers = [
            "Order ID",
            "Customer",
            "Rider",
            "Restaurant",
            "City",
            "Time",
            "Amount",
            "Status",
            "Date",
        ];

        const rows = filteredReports.map((item) => [
            item.id,
            item.customer,
            item.rider,
            item.restaurant,
            item.city,
            item.time,
            item.amount,
            item.status,
            item.date,
        ]);

        let csvContent =
            "data:text/csv;charset=utf-8," +
            [headers, ...rows]
                .map((e) => e.join(","))
                .join("\n");

        const encodedUri = encodeURI(csvContent);

        const link = document.createElement("a");

        link.setAttribute("href", encodedUri);

        link.setAttribute(
            "download",
            "delivery_reports.csv"
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
                        Delivery Reports
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Analyze delivery performance and order reports
                    </p>
                </div>

                {/* RIGHT */}

                <button
                    onClick={exportCSV}
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

                    Export Report
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
                        <FaMotorcycle />
                    </div>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
            "
                    >
                        {stats.totalDeliveries}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Deliveries
                    </p>
                </div>

                {/* DELIVERED */}

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
                        {stats.successfulDeliveries}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Successful Deliveries
                    </p>
                </div>

                {/* AVERAGE */}

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
              bg-blue-100
              text-blue-500
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
                        {stats.averageDeliveryTime} Min
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Average Delivery Time
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
              bg-yellow-100
              text-yellow-500
              flex
              items-center
              justify-center
              text-2xl
              mb-5
            "
                    >
                        <FaMoneyBillWave />
                    </div>

                    <h2
                        className="
              text-3xl
              font-extrabold
              text-gray-900
            "
                    >
                        ${stats.deliveryRevenue}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Delivery Revenue
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
                        placeholder="Search reports..."
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
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(e.target.value)
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
                        <option>Delivered</option>
                        <option>Delayed</option>
                        <option>Cancelled</option>
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

            {/* REPORT TABLE */}

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
                {/* TABLE HEADER */}

                <div
                    className="
            flex
            items-center
            justify-between
            px-6
            py-5
            border-b
            border-gray-100
          "
                >
                    <div className="flex items-center gap-3">
                        <FaChartLine className="text-orange-500 text-xl" />

                        <h2
                            className="
                text-2xl
                font-extrabold
                text-gray-900
              "
                        >
                            Delivery Analytics
                        </h2>
                    </div>
                </div>

                {/* TABLE */}

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1100px]">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Order
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Customer
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Rider
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Restaurant
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    City
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Time
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Amount
                                </th>

                                <th className="text-left px-6 py-5 text-sm font-bold text-gray-600">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="
                      text-center
                      py-10
                      font-semibold
                      text-gray-500
                    "
                                    >
                                        Loading reports...
                                    </td>
                                </tr>
                            ) : filteredReports.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="
                      text-center
                      py-10
                      font-semibold
                      text-gray-500
                    "
                                    >
                                        No reports found
                                    </td>
                                </tr>
                            ) : (
                                filteredReports.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="
                      border-b
                      border-gray-100
                      hover:bg-gray-50
                      transition-all
                    "
                                    >
                                        {/* ORDER */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="
                            w-12
                            h-12
                            rounded-2xl
                            bg-orange-100
                            text-orange-500
                            flex
                            items-center
                            justify-center
                          "
                                                >
                                                    <FaBox />
                                                </div>

                                                <div>
                                                    <h3 className="font-bold text-gray-900">
                                                        {item.id}
                                                    </h3>

                                                    <p className="text-gray-500 text-sm mt-1">
                                                        {item.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* CUSTOMER */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <FaUser className="text-gray-400" />

                                                <span className="font-semibold text-gray-700">
                                                    {item.customer}
                                                </span>
                                            </div>
                                        </td>

                                        {/* RIDER */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <FaMotorcycle className="text-orange-500" />

                                                <span className="font-semibold text-gray-700">
                                                    {item.rider}
                                                </span>
                                            </div>
                                        </td>

                                        {/* RESTAURANT */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <FaStore className="text-red-500" />

                                                <span className="font-semibold text-gray-700">
                                                    {item.restaurant}
                                                </span>
                                            </div>
                                        </td>

                                        {/* CITY */}

                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <FaMapMarkerAlt className="text-blue-500" />

                                                <span className="font-semibold text-gray-700">
                                                    {item.city}
                                                </span>
                                            </div>
                                        </td>

                                        {/* TIME */}

                                        <td className="px-6 py-5">
                                            <span className="font-bold text-gray-900">
                                                {item.time}
                                            </span>
                                        </td>

                                        {/* AMOUNT */}

                                        <td className="px-6 py-5">
                                            <span
                                                className="
                          text-lg
                          font-extrabold
                          text-orange-500
                        "
                                            >
                                                ${item.amount}
                                            </span>
                                        </td>

                                        {/* STATUS */}

                                        <td className="px-6 py-5">
                                            <div
                                                className={`
                        inline-flex
                        items-center
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-bold

                        ${item.status === "Delivered"
                                                        ? "bg-green-100 text-green-600"
                                                        : item.status === "Delayed"
                                                            ? "bg-yellow-100 text-yellow-600"
                                                            : "bg-red-100 text-red-600"
                                                    }
                      `}
                                            >
                                                {item.status}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DeliveryReports;