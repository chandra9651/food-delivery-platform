// // /client/src/admin/pages/users/BlockedUsers.jsx

// import { useState } from "react";

// import UsersTable from "../../components/tables/UsersTable";

// import {
//     FaUserSlash,
//     FaUserCheck,
//     FaSearch,
//     FaFilter,
//     FaShieldAlt,
//     FaDownload,
// } from "react-icons/fa";

// const BlockedUsers = () => {
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
//                         Blocked Users
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Manage suspended & restricted user accounts
//                     </p>
//                 </div>

//                 {/* RIGHT */}

//                 <button
//                     className="
//             bg-red-500
//             hover:bg-red-600
//             text-white
//             px-6
//             py-4
//             rounded-2xl
//             font-bold
//             flex
//             items-center
//             gap-3
//             shadow-lg
//             shadow-red-200
//             transition-all
//           "
//                 >
//                     <FaDownload />

//                     Export List
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
//                 {/* BLOCKED USERS */}

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
//                         <FaUserSlash />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         320
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Total Blocked
//                     </p>
//                 </div>

//                 {/* ACTIVE USERS */}

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
//                         <FaUserCheck />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         16.2K
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Active Users
//                     </p>
//                 </div>

//                 {/* SECURITY ALERTS */}

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
//                         <FaShieldAlt />
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         48
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Security Alerts
//                     </p>
//                 </div>

//                 {/* THIS MONTH */}

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
//                         🚫
//                     </div>

//                     <h2
//                         className="
//               text-3xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         28
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Blocked This Month
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
//                         placeholder="Search blocked users..."
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
//               focus:ring-red-300
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
//                         <option>All Reasons</option>
//                         <option>Spam Activity</option>
//                         <option>Fraud</option>
//                         <option>Fake Orders</option>
//                         <option>Policy Violation</option>
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

//             {/* USERS TABLE */}

//             <UsersTable />
//         </div>
//     );
// };

// export default BlockedUsers;

// /client/src/admin/pages/users/BlockedUsers.jsx

import { useEffect, useState } from "react";

import API from "../../../api/axios";

import UsersTable from "../../components/tables/UsersTable";

import {
    FaUserSlash,
    FaUserCheck,
    FaSearch,
    FaFilter,
    FaShieldAlt,
    FaDownload,
} from "react-icons/fa";

const BlockedUsers = () => {

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(false);

    const [blockedUsers, setBlockedUsers] = useState([]);

    const [stats, setStats] = useState({
        totalBlocked: 0,
        activeUsers: 0,
        securityAlerts: 0,
        blockedThisMonth: 0,
    });

    const [filters, setFilters] = useState({
        reason: "All Reasons",
        sort: "Newest First",
    });

    // FETCH BLOCKED USERS

    const fetchBlockedUsers = async () => {

        try {

            setLoading(true);

            const { data } = await API.get(
                `/admin/users/blocked`,
                {
                    params: {
                        search,
                        reason: filters.reason,
                        sort: filters.sort,
                    },
                }
            );

            setBlockedUsers(data?.users || []);

            setStats({
                totalBlocked: data?.stats?.totalBlocked || 0,
                activeUsers: data?.stats?.activeUsers || 0,
                securityAlerts: data?.stats?.securityAlerts || 0,
                blockedThisMonth:
                    data?.stats?.blockedThisMonth || 0,
            });

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);
        }
    };

    // EXPORT USERS

    const exportBlockedUsers = async () => {

        try {

            const response = await API.get(
                "/admin/users/blocked/export",
                {
                    responseType: "blob",
                }
            );

            const url = window.URL.createObjectURL(
                new Blob([response.data])
            );

            const link = document.createElement("a");

            link.href = url;

            link.setAttribute(
                "download",
                "blocked-users.csv"
            );

            document.body.appendChild(link);

            link.click();

            link.remove();

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        const delayDebounce = setTimeout(() => {

            fetchBlockedUsers();

        }, 500);

        return () => clearTimeout(delayDebounce);

    }, [search, filters]);

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
                        Blocked Users
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage suspended & restricted user accounts
                    </p>

                </div>

                {/* RIGHT */}

                <button
                    onClick={exportBlockedUsers}
                    className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-6
                        py-4
                        rounded-2xl
                        font-bold
                        flex
                        items-center
                        gap-3
                        shadow-lg
                        shadow-red-200
                        transition-all
                    "
                >

                    <FaDownload />

                    Export List

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

                {/* BLOCKED USERS */}

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
                        <FaUserSlash />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.totalBlocked}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Total Blocked
                    </p>

                </div>

                {/* ACTIVE USERS */}

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
                        <FaUserCheck />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.activeUsers}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Active Users
                    </p>

                </div>

                {/* SECURITY ALERTS */}

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
                        <FaShieldAlt />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.securityAlerts}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Security Alerts
                    </p>

                </div>

                {/* THIS MONTH */}

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
                        🚫
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        {stats.blockedThisMonth}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Blocked This Month
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
                        placeholder="Search blocked users..."
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
                            focus:ring-red-300
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
                        value={filters.reason}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                reason: e.target.value,
                            })
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

                        <option>All Reasons</option>

                        <option>Spam Activity</option>

                        <option>Fraud</option>

                        <option>Fake Orders</option>

                        <option>Policy Violation</option>

                    </select>

                    <select
                        value={filters.sort}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                sort: e.target.value,
                            })
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

                        <option>Newest First</option>

                        <option>Oldest First</option>

                    </select>

                    <button
                        onClick={fetchBlockedUsers}
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

            {/* TABLE SECTION */}

            <div
                className="
                    bg-white
                    rounded-[30px]
                    border
                    border-gray-100
                    shadow-sm
                    p-5
                "
            >

                {loading ? (

                    <div className="py-16 text-center">

                        <div
                            className="
                                w-12
                                h-12
                                border-4
                                border-red-200
                                border-t-red-500
                                rounded-full
                                animate-spin
                                mx-auto
                            "
                        />

                        <p className="mt-4 text-gray-500">
                            Loading blocked users...
                        </p>

                    </div>

                ) : (

                    <UsersTable users={blockedUsers} />

                )}

            </div>

        </div>
    );
};

export default BlockedUsers;