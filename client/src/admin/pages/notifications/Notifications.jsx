// // /client/src/admin/pages/notifications/Notifications.jsx


// import { useState } from "react";

// import {
//     FaBell,
//     FaSearch,
//     FaCheckCircle,
//     FaExclamationTriangle,
//     FaInfoCircle,
//     FaTrash,
//     FaEye,
//     FaPaperPlane,
//     FaUsers,
//     FaStore,
//     FaMotorcycle,
//     FaShoppingCart,
//     FaCalendarAlt,
//     FaFilter,
// } from "react-icons/fa";

// const Notifications = () => {
//     const [search, setSearch] = useState("");

//     /* DUMMY DATA */

//     const notifications = [
//         {
//             id: 1,
//             title: "New Restaurant Request",
//             message:
//                 "Burger Point requested approval to join the platform.",
//             type: "warning",
//             audience: "Admin",
//             date: "12 May 2026",
//             status: "Unread",
//             icon: <FaStore />,
//         },

//         {
//             id: 2,
//             title: "Order Delivered Successfully",
//             message:
//                 "Order #ORD-1201 delivered successfully to customer.",
//             type: "success",
//             audience: "Customer",
//             date: "11 May 2026",
//             status: "Read",
//             icon: <FaShoppingCart />,
//         },

//         {
//             id: 3,
//             title: "New Delivery Partner Joined",
//             message:
//                 "A new delivery partner has completed registration.",
//             type: "info",
//             audience: "Delivery",
//             date: "10 May 2026",
//             status: "Unread",
//             icon: <FaMotorcycle />,
//         },

//         {
//             id: 4,
//             title: "System Maintenance Update",
//             message:
//                 "Platform maintenance scheduled for this weekend.",
//             type: "info",
//             audience: "All Users",
//             date: "09 May 2026",
//             status: "Read",
//             icon: <FaInfoCircle />,
//         },

//         {
//             id: 5,
//             title: "Payment Failed",
//             message:
//                 "Transaction failed for Order #ORD-1409.",
//             type: "danger",
//             audience: "Customer",
//             date: "08 May 2026",
//             status: "Unread",
//             icon: <FaExclamationTriangle />,
//         },
//     ];

//     const stats = [
//         {
//             title: "Total Notifications",
//             value: "12.4K",
//             icon: <FaBell />,
//             bg: "bg-orange-100",
//             text: "text-orange-500",
//         },

//         {
//             title: "Unread Alerts",
//             value: "248",
//             icon: <FaExclamationTriangle />,
//             bg: "bg-red-100",
//             text: "text-red-500",
//         },

//         {
//             title: "Announcements",
//             value: "1.2K",
//             icon: <FaPaperPlane />,
//             bg: "bg-blue-100",
//             text: "text-blue-500",
//         },

//         {
//             title: "User Messages",
//             value: "8.6K",
//             icon: <FaUsers />,
//             bg: "bg-green-100",
//             text: "text-green-500",
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
//                         Notifications Center
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Manage alerts, announcements and user notifications
//                     </p>
//                 </div>

//                 {/* ACTIONS */}

//                 <div className="flex flex-wrap gap-4">
//                     <button
//                         className="
//               bg-white
//               border
//               border-gray-200
//               hover:bg-gray-100
//               px-6
//               py-4
//               rounded-2xl
//               font-semibold
//               flex
//               items-center
//               gap-3
//               transition-all
//             "
//                     >
//                         <FaFilter />

//                         Filter
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
//               shadow-lg
//               shadow-orange-200
//               transition-all
//               flex
//               items-center
//               gap-3
//             "
//                     >
//                         <FaPaperPlane />

//                         Send Notification
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
//                 {stats.map((item, index) => (
//                     <div
//                         key={index}
//                         className="
//               bg-white
//               rounded-[30px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//             "
//                     >
//                         {/* TOP */}

//                         <div
//                             className="
//                 flex
//                 items-center
//                 justify-between
//               "
//                         >
//                             <div
//                                 className={`
//                   w-16
//                   h-16
//                   rounded-3xl
//                   flex
//                   items-center
//                   justify-center
//                   text-3xl
//                   ${item.bg}
//                   ${item.text}
//                 `}
//                             >
//                                 {item.icon}
//                             </div>

//                             <div
//                                 className="
//                   w-12
//                   h-12
//                   rounded-2xl
//                   bg-gray-100
//                   flex
//                   items-center
//                   justify-center
//                   text-gray-500
//                 "
//                             >
//                                 <FaBell />
//                             </div>
//                         </div>

//                         {/* CONTENT */}

//                         <h2
//                             className="
//                 text-4xl
//                 font-extrabold
//                 text-gray-900
//                 mt-8
//               "
//                         >
//                             {item.value}
//                         </h2>

//                         <p className="text-gray-500 mt-2">
//                             {item.title}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {/* NOTIFICATION TABLE */}

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
//             flex-col
//             lg:flex-row
//             lg:items-center
//             lg:justify-between
//             gap-5
//             px-6
//             py-5
//             border-b
//             border-gray-100
//           "
//                 >
//                     {/* LEFT */}

//                     <div>
//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//               "
//                         >
//                             Recent Notifications
//                         </h2>

//                         <p className="text-gray-500 mt-1">
//                             Platform notifications and activity updates
//                         </p>
//                     </div>

//                     {/* SEARCH */}

//                     <div
//                         className="
//               flex
//               items-center
//               gap-3
//               bg-gray-100
//               px-5
//               py-4
//               rounded-2xl
//               w-full
//               lg:w-[320px]
//             "
//                     >
//                         <FaSearch className="text-gray-400" />

//                         <input
//                             type="text"
//                             placeholder="Search notifications..."
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                             className="
//                 bg-transparent
//                 outline-none
//                 w-full
//                 text-gray-700
//               "
//                         />
//                     </div>
//                 </div>

//                 {/* TABLE */}

//                 <div className="overflow-x-auto">
//                     <table className="w-full min-w-[1200px]">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Notification
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Audience
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Date
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-left
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Status
//                                 </th>

//                                 <th
//                                     className="
//                     px-6
//                     py-5
//                     text-center
//                     text-sm
//                     font-bold
//                     text-gray-600
//                   "
//                                 >
//                                     Actions
//                                 </th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {notifications
//                                 .filter((item) =>
//                                     item.title
//                                         .toLowerCase()
//                                         .includes(search.toLowerCase())
//                                 )
//                                 .map((item) => (
//                                     <tr
//                                         key={item.id}
//                                         className="
//                       border-b
//                       border-gray-100
//                       hover:bg-gray-50
//                       transition-all
//                     "
//                                     >
//                                         {/* NOTIFICATION */}

//                                         <td className="px-6 py-5">
//                                             <div className="flex items-start gap-4">
//                                                 {/* ICON */}

//                                                 <div
//                                                     className={`
//                             w-14
//                             h-14
//                             rounded-2xl
//                             flex
//                             items-center
//                             justify-center
//                             text-2xl

//                             ${item.type === "success"
//                                                             ? "bg-green-100 text-green-500"

//                                                             : item.type === "warning"
//                                                                 ? "bg-yellow-100 text-yellow-500"

//                                                                 : item.type === "danger"
//                                                                     ? "bg-red-100 text-red-500"

//                                                                     : "bg-blue-100 text-blue-500"
//                                                         }
//                           `}
//                                                 >
//                                                     {item.icon}
//                                                 </div>

//                                                 {/* CONTENT */}

//                                                 <div>
//                                                     <h3
//                                                         className="
//                               font-bold
//                               text-gray-900
//                             "
//                                                     >
//                                                         {item.title}
//                                                     </h3>

//                                                     <p
//                                                         className="
//                               text-gray-500
//                               text-sm
//                               mt-1
//                               max-w-[450px]
//                             "
//                                                     >
//                                                         {item.message}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </td>

//                                         {/* AUDIENCE */}

//                                         <td className="px-6 py-5">
//                                             <div
//                                                 className="
//                           inline-flex
//                           items-center
//                           gap-2
//                           bg-gray-100
//                           px-4
//                           py-2
//                           rounded-full
//                           font-semibold
//                           text-gray-700
//                         "
//                                             >
//                                                 <FaUsers />

//                                                 {item.audience}
//                                             </div>
//                                         </td>

//                                         {/* DATE */}

//                                         <td className="px-6 py-5">
//                                             <div className="flex items-center gap-3">
//                                                 <FaCalendarAlt className="text-orange-500" />

//                                                 <span className="text-gray-700 font-medium">
//                                                     {item.date}
//                                                 </span>
//                                             </div>
//                                         </td>

//                                         {/* STATUS */}

//                                         <td className="px-6 py-5">
//                                             <div
//                                                 className={`
//                           inline-flex
//                           items-center
//                           px-4
//                           py-2
//                           rounded-full
//                           text-sm
//                           font-bold

//                           ${item.status === "Read"
//                                                         ? "bg-green-100 text-green-600"

//                                                         : "bg-red-100 text-red-600"
//                                                     }
//                         `}
//                                             >
//                                                 {item.status}
//                                             </div>
//                                         </td>

//                                         {/* ACTIONS */}

//                                         <td className="px-6 py-5">
//                                             <div
//                                                 className="
//                           flex
//                           items-center
//                           justify-center
//                           gap-3
//                         "
//                                             >
//                                                 {/* VIEW */}

//                                                 <button
//                                                     className="
//                             w-11
//                             h-11
//                             rounded-xl
//                             bg-blue-100
//                             text-blue-500
//                             hover:bg-blue-500
//                             hover:text-white
//                             transition-all
//                             flex
//                             items-center
//                             justify-center
//                           "
//                                                 >
//                                                     <FaEye />
//                                                 </button>

//                                                 {/* DELETE */}

//                                                 <button
//                                                     className="
//                             w-11
//                             h-11
//                             rounded-xl
//                             bg-red-100
//                             text-red-500
//                             hover:bg-red-500
//                             hover:text-white
//                             transition-all
//                             flex
//                             items-center
//                             justify-center
//                           "
//                                                 >
//                                                     <FaTrash />
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Notifications;




// /client/src/admin/pages/notifications/Notifications.jsx

import { useEffect, useMemo, useState } from "react";

import axios from "axios";

import {
    FaBell,
    FaSearch,
    FaCheckCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaTrash,
    FaEye,
    FaPaperPlane,
    FaUsers,
    FaStore,
    FaMotorcycle,
    FaShoppingCart,
    FaCalendarAlt,
    FaFilter,
    FaSpinner,
} from "react-icons/fa";

const Notifications = () => {
    const [search, setSearch] = useState("");
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(null);
    const [statusFilter, setStatusFilter] = useState("All");
    const [typeFilter, setTypeFilter] = useState("All");

    const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000";

    /* FETCH NOTIFICATIONS */

    const fetchNotifications = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `${API_URL}/api/admin/notifications`
            );

            setNotifications(data.notifications || []);
        } catch (error) {
            console.log(error);

            setNotifications([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    /* DELETE NOTIFICATION */

    const deleteNotification = async (id) => {
        try {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this notification?"
            );

            if (!confirmDelete) return;

            setDeleteLoading(id);

            await axios.delete(
                `${API_URL}/api/admin/notifications/${id}`
            );

            setNotifications((prev) =>
                prev.filter((item) => item._id !== id)
            );
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to delete notification"
            );
        } finally {
            setDeleteLoading(null);
        }
    };

    /* MARK AS READ */

    const markAsRead = async (id) => {
        try {
            const { data } = await axios.put(
                `${API_URL}/api/admin/notifications/${id}/read`
            );

            setNotifications((prev) =>
                prev.map((item) =>
                    item._id === id ? data.notification : item
                )
            );
        } catch (error) {
            console.log(error);
        }
    };

    /* FILTERED NOTIFICATIONS */

    const filteredNotifications = useMemo(() => {
        return notifications.filter((item) => {
            const matchesSearch =
                item.title
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.message
                    ?.toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "All"
                    ? true
                    : item.status === statusFilter;

            const matchesType =
                typeFilter === "All"
                    ? true
                    : item.type === typeFilter;

            return (
                matchesSearch &&
                matchesStatus &&
                matchesType
            );
        });
    }, [notifications, search, statusFilter, typeFilter]);

    /* STATS */

    const stats = [
        {
            title: "Total Notifications",
            value: notifications.length,
            icon: <FaBell />,
            bg: "bg-orange-100",
            text: "text-orange-500",
        },

        {
            title: "Unread Alerts",
            value: notifications.filter(
                (item) => item.status === "Unread"
            ).length,
            icon: <FaExclamationTriangle />,
            bg: "bg-red-100",
            text: "text-red-500",
        },

        {
            title: "Announcements",
            value: notifications.filter(
                (item) => item.type === "info"
            ).length,
            icon: <FaPaperPlane />,
            bg: "bg-blue-100",
            text: "text-blue-500",
        },

        {
            title: "User Messages",
            value: notifications.filter(
                (item) => item.audience === "Customer"
            ).length,
            icon: <FaUsers />,
            bg: "bg-green-100",
            text: "text-green-500",
        },
    ];

    /* ICON */

    const getIcon = (audience) => {
        switch (audience) {
            case "Restaurant":
                return <FaStore />;

            case "Delivery":
                return <FaMotorcycle />;

            case "Customer":
                return <FaShoppingCart />;

            default:
                return <FaInfoCircle />;
        }
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
                        Notifications Center
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage alerts, announcements and
                        user notifications
                    </p>
                </div>

                {/* ACTIONS */}

                <div className="flex flex-wrap gap-4">
                    <button
                        className="
                            bg-white
                            border
                            border-gray-200
                            hover:bg-gray-100
                            px-6
                            py-4
                            rounded-2xl
                            font-semibold
                            flex
                            items-center
                            gap-3
                            transition-all
                        "
                    >
                        <FaFilter />

                        Filters
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
                            shadow-lg
                            shadow-orange-200
                            transition-all
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <FaPaperPlane />

                        Send Notification
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
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="
                            bg-white
                            rounded-[30px]
                            border
                            border-gray-100
                            shadow-sm
                            p-6
                        "
                    >
                        {/* TOP */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                            "
                        >
                            <div
                                className={`
                                    w-16
                                    h-16
                                    rounded-3xl
                                    flex
                                    items-center
                                    justify-center
                                    text-3xl
                                    ${item.bg}
                                    ${item.text}
                                `}
                            >
                                {item.icon}
                            </div>

                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-2xl
                                    bg-gray-100
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-500
                                "
                            >
                                <FaBell />
                            </div>
                        </div>

                        {/* CONTENT */}

                        <h2
                            className="
                                text-4xl
                                font-extrabold
                                text-gray-900
                                mt-8
                            "
                        >
                            {item.value}
                        </h2>

                        <p className="text-gray-500 mt-2">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* NOTIFICATION TABLE */}

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
                        flex-col
                        xl:flex-row
                        xl:items-center
                        xl:justify-between
                        gap-5
                        px-6
                        py-5
                        border-b
                        border-gray-100
                    "
                >
                    {/* LEFT */}

                    <div>
                        <h2
                            className="
                                text-2xl
                                font-extrabold
                                text-gray-900
                            "
                        >
                            Recent Notifications
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Platform notifications and
                            activity updates
                        </p>
                    </div>

                    {/* FILTERS */}

                    <div
                        className="
                            flex
                            flex-col
                            lg:flex-row
                            gap-4
                            w-full
                            xl:w-auto
                        "
                    >
                        {/* SEARCH */}

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                bg-gray-100
                                px-5
                                py-4
                                rounded-2xl
                                w-full
                                lg:w-[320px]
                            "
                        >
                            <FaSearch className="text-gray-400" />

                            <input
                                type="text"
                                placeholder="Search notifications..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                                className="
                                    bg-transparent
                                    outline-none
                                    w-full
                                    text-gray-700
                                "
                            />
                        </div>

                        {/* STATUS */}

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
                            <option value="All">
                                All Status
                            </option>

                            <option value="Read">
                                Read
                            </option>

                            <option value="Unread">
                                Unread
                            </option>
                        </select>

                        {/* TYPE */}

                        <select
                            value={typeFilter}
                            onChange={(e) =>
                                setTypeFilter(
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
                            <option value="All">
                                All Types
                            </option>

                            <option value="success">
                                Success
                            </option>

                            <option value="warning">
                                Warning
                            </option>

                            <option value="danger">
                                Danger
                            </option>

                            <option value="info">
                                Info
                            </option>
                        </select>
                    </div>
                </div>

                {/* TABLE */}

                <div className="overflow-x-auto">
                    {loading ? (
                        <div className="py-24 flex items-center justify-center">
                            <FaSpinner className="animate-spin text-4xl text-orange-500" />
                        </div>
                    ) : filteredNotifications.length ===
                        0 ? (
                        <div className="py-24 text-center">
                            <h3 className="text-2xl font-bold text-gray-700">
                                No Notifications Found
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Notifications will appear here
                            </p>
                        </div>
                    ) : (
                        <table className="w-full min-w-[1200px]">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        className="
                                            px-6
                                            py-5
                                            text-left
                                            text-sm
                                            font-bold
                                            text-gray-600
                                        "
                                    >
                                        Notification
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-5
                                            text-left
                                            text-sm
                                            font-bold
                                            text-gray-600
                                        "
                                    >
                                        Audience
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-5
                                            text-left
                                            text-sm
                                            font-bold
                                            text-gray-600
                                        "
                                    >
                                        Date
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-5
                                            text-left
                                            text-sm
                                            font-bold
                                            text-gray-600
                                        "
                                    >
                                        Status
                                    </th>

                                    <th
                                        className="
                                            px-6
                                            py-5
                                            text-center
                                            text-sm
                                            font-bold
                                            text-gray-600
                                        "
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredNotifications.map(
                                    (item) => (
                                        <tr
                                            key={item._id}
                                            className="
                                                border-b
                                                border-gray-100
                                                hover:bg-gray-50
                                                transition-all
                                            "
                                        >
                                            {/* NOTIFICATION */}

                                            <td className="px-6 py-5">
                                                <div className="flex items-start gap-4">
                                                    {/* ICON */}

                                                    <div
                                                        className={`
                                                            w-14
                                                            h-14
                                                            rounded-2xl
                                                            flex
                                                            items-center
                                                            justify-center
                                                            text-2xl

                                                            ${item.type ===
                                                                "success"
                                                                ? "bg-green-100 text-green-500"
                                                                : item.type ===
                                                                    "warning"
                                                                    ? "bg-yellow-100 text-yellow-500"
                                                                    : item.type ===
                                                                        "danger"
                                                                        ? "bg-red-100 text-red-500"
                                                                        : "bg-blue-100 text-blue-500"
                                                            }
                                                        `}
                                                    >
                                                        {getIcon(
                                                            item.audience
                                                        )}
                                                    </div>

                                                    {/* CONTENT */}

                                                    <div>
                                                        <h3
                                                            className="
                                                                font-bold
                                                                text-gray-900
                                                            "
                                                        >
                                                            {
                                                                item.title
                                                            }
                                                        </h3>

                                                        <p
                                                            className="
                                                                text-gray-500
                                                                text-sm
                                                                mt-1
                                                                max-w-[450px]
                                                            "
                                                        >
                                                            {
                                                                item.message
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* AUDIENCE */}

                                            <td className="px-6 py-5">
                                                <div
                                                    className="
                                                        inline-flex
                                                        items-center
                                                        gap-2
                                                        bg-gray-100
                                                        px-4
                                                        py-2
                                                        rounded-full
                                                        font-semibold
                                                        text-gray-700
                                                    "
                                                >
                                                    <FaUsers />

                                                    {
                                                        item.audience
                                                    }
                                                </div>
                                            </td>

                                            {/* DATE */}

                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <FaCalendarAlt className="text-orange-500" />

                                                    <span className="text-gray-700 font-medium">
                                                        {new Date(
                                                            item.createdAt
                                                        ).toLocaleDateString(
                                                            "en-IN",
                                                            {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric",
                                                            }
                                                        )}
                                                    </span>
                                                </div>
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

                                                        ${item.status ===
                                                            "Read"
                                                            ? "bg-green-100 text-green-600"
                                                            : "bg-red-100 text-red-600"
                                                        }
                                                    `}
                                                >
                                                    {
                                                        item.status
                                                    }
                                                </div>
                                            </td>

                                            {/* ACTIONS */}

                                            <td className="px-6 py-5">
                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        justify-center
                                                        gap-3
                                                    "
                                                >
                                                    {/* VIEW */}

                                                    <button
                                                        onClick={() =>
                                                            markAsRead(
                                                                item._id
                                                            )
                                                        }
                                                        className="
                                                            w-11
                                                            h-11
                                                            rounded-xl
                                                            bg-blue-100
                                                            text-blue-500
                                                            hover:bg-blue-500
                                                            hover:text-white
                                                            transition-all
                                                            flex
                                                            items-center
                                                            justify-center
                                                        "
                                                    >
                                                        <FaEye />
                                                    </button>

                                                    {/* DELETE */}

                                                    <button
                                                        onClick={() =>
                                                            deleteNotification(
                                                                item._id
                                                            )
                                                        }
                                                        disabled={
                                                            deleteLoading ===
                                                            item._id
                                                        }
                                                        className="
                                                            w-11
                                                            h-11
                                                            rounded-xl
                                                            bg-red-100
                                                            text-red-500
                                                            hover:bg-red-500
                                                            hover:text-white
                                                            transition-all
                                                            flex
                                                            items-center
                                                            justify-center
                                                            disabled:opacity-50
                                                        "
                                                    >
                                                        {deleteLoading ===
                                                            item._id ? (
                                                            <FaSpinner className="animate-spin" />
                                                        ) : (
                                                            <FaTrash />
                                                        )}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notifications;