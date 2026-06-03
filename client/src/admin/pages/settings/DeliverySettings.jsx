// // /client/src/admin/pages/settings/DeliverySettings.jsx


// import { useState } from "react";

// import {
//     FaMotorcycle,
//     FaSave,
//     FaMapMarkedAlt,
//     FaMoneyBillWave,
//     FaClock,
//     FaToggleOn,
//     FaShippingFast,
//     FaRoad,
//     FaUserShield,
//     FaPhoneAlt,
//     FaGlobeAsia,
//     FaPercent,
//     FaTruck,
//     FaCheckCircle,
// } from "react-icons/fa";

// const DeliverySettings = () => {
//     const [settings, setSettings] = useState({
//         baseFee: "40",
//         perKmCharge: "8",
//         maxRadius: "15",
//         estimatedTime: "30",
//         codEnabled: true,
//         liveTracking: true,
//         autoAssign: true,
//         expressDelivery: false,
//         supportNumber: "+91 9876543210",
//         commissionRate: "15",
//         minimumOrder: "149",
//         deliveryPartnerVerification: true,
//     });

//     const handleChange = (e) => {
//         setSettings({
//             ...settings,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const toggleSwitch = (field) => {
//         setSettings({
//             ...settings,
//             [field]: !settings[field],
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         console.log(settings);
//     };

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
//                         Delivery Settings
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Configure delivery system, charges and rider controls
//                     </p>
//                 </div>

//                 {/* BUTTON */}

//                 <button
//                     onClick={handleSubmit}
//                     className="
//             bg-orange-500
//             hover:bg-orange-600
//             text-white
//             px-7
//             py-4
//             rounded-2xl
//             font-bold
//             shadow-lg
//             shadow-orange-200
//             transition-all
//             flex
//             items-center
//             gap-3
//             w-fit
//           "
//                 >
//                     <FaSave />

//                     Save Changes
//                 </button>
//             </div>

//             {/* MAIN SECTION */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           xl:grid-cols-3
//           gap-6
//         "
//             >
//                 {/* LEFT SECTION */}

//                 <div className="xl:col-span-2 space-y-6">
//                     {/* DELIVERY CONFIGURATION */}

//                     <div
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//             "
//                     >
//                         {/* HEADER */}

//                         <div className="mb-8">
//                             <h2
//                                 className="
//                   text-2xl
//                   font-extrabold
//                   text-gray-900
//                 "
//                             >
//                                 Delivery Configuration
//                             </h2>

//                             <p className="text-gray-500 mt-2">
//                                 Manage delivery pricing and service settings
//                             </p>
//                         </div>

//                         {/* FORM */}

//                         <div className="space-y-6">
//                             {/* ROW 1 */}

//                             <div
//                                 className="
//                   grid
//                   grid-cols-1
//                   md:grid-cols-2
//                   gap-6
//                 "
//                             >
//                                 {/* BASE DELIVERY FEE */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Base Delivery Fee
//                                     </label>

//                                     <div
//                                         className="
//                       flex
//                       items-center
//                       gap-3
//                       border
//                       border-gray-200
//                       rounded-2xl
//                       px-5
//                       py-4
//                     "
//                                     >
//                                         <FaMoneyBillWave className="text-green-500" />

//                                         <input
//                                             type="number"
//                                             name="baseFee"
//                                             value={settings.baseFee}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* PER KM CHARGE */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Per KM Charge
//                                     </label>

//                                     <div
//                                         className="
//                       flex
//                       items-center
//                       gap-3
//                       border
//                       border-gray-200
//                       rounded-2xl
//                       px-5
//                       py-4
//                     "
//                                     >
//                                         <FaRoad className="text-orange-500" />

//                                         <input
//                                             type="number"
//                                             name="perKmCharge"
//                                             value={settings.perKmCharge}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* ROW 2 */}

//                             <div
//                                 className="
//                   grid
//                   grid-cols-1
//                   md:grid-cols-2
//                   gap-6
//                 "
//                             >
//                                 {/* MAX RADIUS */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Delivery Radius (KM)
//                                     </label>

//                                     <div
//                                         className="
//                       flex
//                       items-center
//                       gap-3
//                       border
//                       border-gray-200
//                       rounded-2xl
//                       px-5
//                       py-4
//                     "
//                                     >
//                                         <FaMapMarkedAlt className="text-blue-500" />

//                                         <input
//                                             type="number"
//                                             name="maxRadius"
//                                             value={settings.maxRadius}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* DELIVERY TIME */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Estimated Delivery Time
//                                     </label>

//                                     <div
//                                         className="
//                       flex
//                       items-center
//                       gap-3
//                       border
//                       border-gray-200
//                       rounded-2xl
//                       px-5
//                       py-4
//                     "
//                                     >
//                                         <FaClock className="text-purple-500" />

//                                         <input
//                                             type="number"
//                                             name="estimatedTime"
//                                             value={settings.estimatedTime}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* ROW 3 */}

//                             <div
//                                 className="
//                   grid
//                   grid-cols-1
//                   md:grid-cols-2
//                   gap-6
//                 "
//                             >
//                                 {/* COMMISSION */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Delivery Commission %
//                                     </label>

//                                     <div
//                                         className="
//                       flex
//                       items-center
//                       gap-3
//                       border
//                       border-gray-200
//                       rounded-2xl
//                       px-5
//                       py-4
//                     "
//                                     >
//                                         <FaPercent className="text-red-500" />

//                                         <input
//                                             type="number"
//                                             name="commissionRate"
//                                             value={settings.commissionRate}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* MINIMUM ORDER */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Minimum Order Amount
//                                     </label>

//                                     <div
//                                         className="
//                       flex
//                       items-center
//                       gap-3
//                       border
//                       border-gray-200
//                       rounded-2xl
//                       px-5
//                       py-4
//                     "
//                                     >
//                                         <FaTruck className="text-orange-500" />

//                                         <input
//                                             type="number"
//                                             name="minimumOrder"
//                                             value={settings.minimumOrder}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* SUPPORT NUMBER */}

//                             <div>
//                                 <label
//                                     className="
//                     block
//                     mb-3
//                     font-bold
//                     text-gray-700
//                   "
//                                 >
//                                     Delivery Support Number
//                                 </label>

//                                 <div
//                                     className="
//                     flex
//                     items-center
//                     gap-3
//                     border
//                     border-gray-200
//                     rounded-2xl
//                     px-5
//                     py-4
//                   "
//                                 >
//                                     <FaPhoneAlt className="text-green-500" />

//                                     <input
//                                         type="text"
//                                         name="supportNumber"
//                                         value={settings.supportNumber}
//                                         onChange={handleChange}
//                                         className="
//                       w-full
//                       outline-none
//                       bg-transparent
//                     "
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* DELIVERY CONTROLS */}

//                     <div
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//             "
//                     >
//                         {/* HEADER */}

//                         <div className="mb-8">
//                             <h2
//                                 className="
//                   text-2xl
//                   font-extrabold
//                   text-gray-900
//                 "
//                             >
//                                 Delivery Controls
//                             </h2>

//                             <p className="text-gray-500 mt-2">
//                                 Enable or disable delivery system features
//                             </p>
//                         </div>

//                         {/* SWITCHES */}

//                         <div className="space-y-6">
//                             {/* COD */}

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   justify-between
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className="
//                       w-14
//                       h-14
//                       rounded-2xl
//                       bg-green-100
//                       text-green-500
//                       flex
//                       items-center
//                       justify-center
//                       text-2xl
//                     "
//                                     >
//                                         <FaMoneyBillWave />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Cash On Delivery
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Allow customers to pay after delivery
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() => toggleSwitch("codEnabled")}
//                                     className={`
//                     text-5xl

//                     ${settings.codEnabled
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* LIVE TRACKING */}

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   justify-between
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className="
//                       w-14
//                       h-14
//                       rounded-2xl
//                       bg-blue-100
//                       text-blue-500
//                       flex
//                       items-center
//                       justify-center
//                       text-2xl
//                     "
//                                     >
//                                         <FaGlobeAsia />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Live Order Tracking
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Track delivery partners in real-time
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() => toggleSwitch("liveTracking")}
//                                     className={`
//                     text-5xl

//                     ${settings.liveTracking
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* AUTO ASSIGN */}

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   justify-between
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className="
//                       w-14
//                       h-14
//                       rounded-2xl
//                       bg-orange-100
//                       text-orange-500
//                       flex
//                       items-center
//                       justify-center
//                       text-2xl
//                     "
//                                     >
//                                         <FaShippingFast />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Auto Assign Riders
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Automatically assign nearest rider
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() => toggleSwitch("autoAssign")}
//                                     className={`
//                     text-5xl

//                     ${settings.autoAssign
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* EXPRESS */}

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   justify-between
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className="
//                       w-14
//                       h-14
//                       rounded-2xl
//                       bg-purple-100
//                       text-purple-500
//                       flex
//                       items-center
//                       justify-center
//                       text-2xl
//                     "
//                                     >
//                                         <FaMotorcycle />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Express Delivery
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Enable priority fast delivery option
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("expressDelivery")
//                                     }
//                                     className={`
//                     text-5xl

//                     ${settings.expressDelivery
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* VERIFICATION */}

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   justify-between
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className="
//                       w-14
//                       h-14
//                       rounded-2xl
//                       bg-red-100
//                       text-red-500
//                       flex
//                       items-center
//                       justify-center
//                       text-2xl
//                     "
//                                     >
//                                         <FaUserShield />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Rider Verification
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Verify all delivery partners before activation
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch(
//                                             "deliveryPartnerVerification"
//                                         )
//                                     }
//                                     className={`
//                     text-5xl

//                     ${settings.deliveryPartnerVerification
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT SIDEBAR */}

//                 <div className="space-y-6">
//                     {/* INFO CARD */}

//                     <div
//                         className="
//               bg-gradient-to-r
//               from-orange-500
//               to-orange-400
//               rounded-[32px]
//               p-6
//               text-white
//               shadow-lg
//             "
//                     >
//                         {/* ICON */}

//                         <div
//                             className="
//                 w-16
//                 h-16
//                 rounded-3xl
//                 bg-white/20
//                 flex
//                 items-center
//                 justify-center
//                 text-3xl
//               "
//                         >
//                             <FaMotorcycle />
//                         </div>

//                         {/* CONTENT */}

//                         <div className="mt-8">
//                             <h2
//                                 className="
//                   text-3xl
//                   font-extrabold
//                 "
//                             >
//                                 Delivery System
//                             </h2>

//                             <p className="text-white/80 mt-4 leading-relaxed">
//                                 Manage delivery charges, riders and logistics
//                                 settings for your platform
//                             </p>
//                         </div>

//                         {/* FOOTER */}

//                         <div
//                             className="
//                 mt-8
//                 bg-white/10
//                 rounded-2xl
//                 p-4
//               "
//                         >
//                             <div className="flex items-center gap-3">
//                                 <FaCheckCircle />

//                                 <span className="font-semibold">
//                                     Delivery Active
//                                 </span>
//                             </div>

//                             <p className="text-white/80 text-sm mt-2">
//                                 Delivery services are currently enabled
//                             </p>
//                         </div>
//                     </div>

//                     {/* QUICK STATS */}

//                     <div
//                         className="
//               bg-white
//               rounded-[32px]
//               border
//               border-gray-100
//               shadow-sm
//               p-6
//             "
//                     >
//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//                 mb-6
//               "
//                         >
//                             Delivery Overview
//                         </h2>

//                         <div className="space-y-5">
//                             {/* CARD */}

//                             <div
//                                 className="
//                   bg-orange-50
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <p className="text-gray-500 text-sm">
//                                     Active Riders
//                                 </p>

//                                 <h3
//                                     className="
//                     text-3xl
//                     font-extrabold
//                     text-orange-500
//                     mt-2
//                   "
//                                 >
//                                     248
//                                 </h3>
//                             </div>

//                             {/* CARD */}

//                             <div
//                                 className="
//                   bg-green-50
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <p className="text-gray-500 text-sm">
//                                     Completed Deliveries
//                                 </p>

//                                 <h3
//                                     className="
//                     text-3xl
//                     font-extrabold
//                     text-green-500
//                     mt-2
//                   "
//                                 >
//                                     18.4K
//                                 </h3>
//                             </div>

//                             {/* CARD */}

//                             <div
//                                 className="
//                   bg-blue-50
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <p className="text-gray-500 text-sm">
//                                     Average Delivery Time
//                                 </p>

//                                 <h3
//                                     className="
//                     text-3xl
//                     font-extrabold
//                     text-blue-500
//                     mt-2
//                   "
//                                 >
//                                     28 Min
//                                 </h3>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DeliverySettings;




// /client/src/admin/pages/settings/DeliverySettings.jsx

import { useEffect, useState } from "react";

import API from "../../../api/axios";

import {
    FaMotorcycle,
    FaSave,
    FaMapMarkedAlt,
    FaMoneyBillWave,
    FaClock,
    FaToggleOn,
    FaShippingFast,
    FaRoad,
    FaUserShield,
    FaPhoneAlt,
    FaGlobeAsia,
    FaPercent,
    FaTruck,
    FaCheckCircle,
} from "react-icons/fa";

const DeliverySettings = () => {

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [settings, setSettings] = useState({
        baseFee: "",
        perKmCharge: "",
        maxRadius: "",
        estimatedTime: "",
        codEnabled: true,
        liveTracking: true,
        autoAssign: true,
        expressDelivery: false,
        supportNumber: "",
        commissionRate: "",
        minimumOrder: "",
        deliveryPartnerVerification: true,
    });

    // =========================
    // GET DELIVERY SETTINGS
    // =========================

    const getDeliverySettings = async () => {
        try {

            setLoading(true);

            const { data } = await API.get(
                "/admin/settings/delivery"
            );

            setSettings({
                baseFee: data?.baseFee || "",
                perKmCharge: data?.perKmCharge || "",
                maxRadius: data?.maxRadius || "",
                estimatedTime: data?.estimatedTime || "",
                codEnabled: data?.codEnabled ?? true,
                liveTracking: data?.liveTracking ?? true,
                autoAssign: data?.autoAssign ?? true,
                expressDelivery: data?.expressDelivery ?? false,
                supportNumber: data?.supportNumber || "",
                commissionRate: data?.commissionRate || "",
                minimumOrder: data?.minimumOrder || "",
                deliveryPartnerVerification:
                    data?.deliveryPartnerVerification ?? true,
            });

        } catch (error) {

            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to load delivery settings"
            );

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {
        getDeliverySettings();
    }, []);

    // =========================
    // HANDLE CHANGE
    // =========================

    const handleChange = (e) => {

        setSettings({
            ...settings,
            [e.target.name]: e.target.value,
        });
    };

    // =========================
    // TOGGLE SWITCH
    // =========================

    const toggleSwitch = (field) => {

        setSettings({
            ...settings,
            [field]: !settings[field],
        });
    };

    // =========================
    // UPDATE SETTINGS
    // =========================

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setSaving(true);

            const { data } = await API.put(
                "/admin/settings/delivery",
                settings
            );

            alert(
                data?.message ||
                "Delivery settings updated successfully"
            );

        } catch (error) {

            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to update settings"
            );

        } finally {

            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="text-center py-20 text-xl font-bold">
                Loading Delivery Settings...
            </div>
        );
    }

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
                        Delivery Settings
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Configure delivery system, charges and rider controls
                    </p>
                </div>

                {/* BUTTON */}

                <button
                    onClick={handleSubmit}
                    disabled={saving}
                    className="
                    bg-orange-500
                    hover:bg-orange-600
                    disabled:bg-orange-300
                    text-white
                    px-7
                    py-4
                    rounded-2xl
                    font-bold
                    shadow-lg
                    shadow-orange-200
                    transition-all
                    flex
                    items-center
                    gap-3
                    w-fit
                "
                >
                    <FaSave />

                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>

            {/* MAIN SECTION */}

            <div
                className="
                grid
                grid-cols-1
                xl:grid-cols-3
                gap-6
            "
            >

                {/* LEFT SECTION */}

                <div className="xl:col-span-2 space-y-6">

                    {/* DELIVERY CONFIGURATION */}

                    <div
                        className="
                        bg-white
                        rounded-[32px]
                        border
                        border-gray-100
                        shadow-sm
                        p-6
                    "
                    >
                        {/* HEADER */}

                        <div className="mb-8">

                            <h2
                                className="
                                text-2xl
                                font-extrabold
                                text-gray-900
                            "
                            >
                                Delivery Configuration
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Manage delivery pricing and service settings
                            </p>
                        </div>

                        {/* FORM */}

                        <div className="space-y-6">

                            {/* ROW 1 */}

                            <div
                                className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-6
                            "
                            >

                                {/* BASE DELIVERY FEE */}

                                <div>

                                    <label
                                        className="
                                        block
                                        mb-3
                                        font-bold
                                        text-gray-700
                                    "
                                    >
                                        Base Delivery Fee
                                    </label>

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                    "
                                    >
                                        <FaMoneyBillWave className="text-green-500" />

                                        <input
                                            type="number"
                                            name="baseFee"
                                            value={settings.baseFee}
                                            onChange={handleChange}
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        />
                                    </div>
                                </div>

                                {/* PER KM CHARGE */}

                                <div>

                                    <label
                                        className="
                                        block
                                        mb-3
                                        font-bold
                                        text-gray-700
                                    "
                                    >
                                        Per KM Charge
                                    </label>

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                    "
                                    >
                                        <FaRoad className="text-orange-500" />

                                        <input
                                            type="number"
                                            name="perKmCharge"
                                            value={settings.perKmCharge}
                                            onChange={handleChange}
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ROW 2 */}

                            <div
                                className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-6
                            "
                            >

                                {/* MAX RADIUS */}

                                <div>

                                    <label
                                        className="
                                        block
                                        mb-3
                                        font-bold
                                        text-gray-700
                                    "
                                    >
                                        Delivery Radius (KM)
                                    </label>

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                    "
                                    >
                                        <FaMapMarkedAlt className="text-blue-500" />

                                        <input
                                            type="number"
                                            name="maxRadius"
                                            value={settings.maxRadius}
                                            onChange={handleChange}
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        />
                                    </div>
                                </div>

                                {/* DELIVERY TIME */}

                                <div>

                                    <label
                                        className="
                                        block
                                        mb-3
                                        font-bold
                                        text-gray-700
                                    "
                                    >
                                        Estimated Delivery Time
                                    </label>

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                    "
                                    >
                                        <FaClock className="text-purple-500" />

                                        <input
                                            type="number"
                                            name="estimatedTime"
                                            value={settings.estimatedTime}
                                            onChange={handleChange}
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ROW 3 */}

                            <div
                                className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-6
                            "
                            >

                                {/* COMMISSION */}

                                <div>

                                    <label
                                        className="
                                        block
                                        mb-3
                                        font-bold
                                        text-gray-700
                                    "
                                    >
                                        Delivery Commission %
                                    </label>

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                    "
                                    >
                                        <FaPercent className="text-red-500" />

                                        <input
                                            type="number"
                                            name="commissionRate"
                                            value={settings.commissionRate}
                                            onChange={handleChange}
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        />
                                    </div>
                                </div>

                                {/* MINIMUM ORDER */}

                                <div>

                                    <label
                                        className="
                                        block
                                        mb-3
                                        font-bold
                                        text-gray-700
                                    "
                                    >
                                        Minimum Order Amount
                                    </label>

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-3
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                    "
                                    >
                                        <FaTruck className="text-orange-500" />

                                        <input
                                            type="number"
                                            name="minimumOrder"
                                            value={settings.minimumOrder}
                                            onChange={handleChange}
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SUPPORT NUMBER */}

                            <div>

                                <label
                                    className="
                                    block
                                    mb-3
                                    font-bold
                                    text-gray-700
                                "
                                >
                                    Delivery Support Number
                                </label>

                                <div
                                    className="
                                    flex
                                    items-center
                                    gap-3
                                    border
                                    border-gray-200
                                    rounded-2xl
                                    px-5
                                    py-4
                                "
                                >
                                    <FaPhoneAlt className="text-green-500" />

                                    <input
                                        type="text"
                                        name="supportNumber"
                                        value={settings.supportNumber}
                                        onChange={handleChange}
                                        className="
                                        w-full
                                        outline-none
                                        bg-transparent
                                    "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DELIVERY CONTROLS */}

                    <div
                        className="
                        bg-white
                        rounded-[32px]
                        border
                        border-gray-100
                        shadow-sm
                        p-6
                    "
                    >

                        <div className="mb-8">

                            <h2
                                className="
                                text-2xl
                                font-extrabold
                                text-gray-900
                            "
                            >
                                Delivery Controls
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Enable or disable delivery system features
                            </p>
                        </div>

                        <div className="space-y-6">

                            {[
                                {
                                    key: "codEnabled",
                                    title: "Cash On Delivery",
                                    desc: "Allow customers to pay after delivery",
                                    icon: <FaMoneyBillWave />,
                                    color: "green",
                                },

                                {
                                    key: "liveTracking",
                                    title: "Live Order Tracking",
                                    desc: "Track delivery partners in real-time",
                                    icon: <FaGlobeAsia />,
                                    color: "blue",
                                },

                                {
                                    key: "autoAssign",
                                    title: "Auto Assign Riders",
                                    desc: "Automatically assign nearest rider",
                                    icon: <FaShippingFast />,
                                    color: "orange",
                                },

                                {
                                    key: "expressDelivery",
                                    title: "Express Delivery",
                                    desc: "Enable priority fast delivery option",
                                    icon: <FaMotorcycle />,
                                    color: "purple",
                                },

                                {
                                    key: "deliveryPartnerVerification",
                                    title: "Rider Verification",
                                    desc: "Verify all delivery partners before activation",
                                    icon: <FaUserShield />,
                                    color: "red",
                                },
                            ].map((item) => (
                                <div
                                    key={item.key}
                                    className="
                                    flex
                                    items-center
                                    justify-between
                                    border
                                    border-gray-100
                                    rounded-3xl
                                    p-5
                                "
                                >

                                    <div className="flex items-center gap-4">

                                        <div
                                            className={`
                                            w-14
                                            h-14
                                            rounded-2xl
                                            bg-${item.color}-100
                                            text-${item.color}-500
                                            flex
                                            items-center
                                            justify-center
                                            text-2xl
                                        `}
                                        >
                                            {item.icon}
                                        </div>

                                        <div>

                                            <h3 className="font-bold text-gray-900">
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-500 text-sm mt-1">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() =>
                                            toggleSwitch(item.key)
                                        }
                                        className={`
                                        text-5xl
                                        ${settings[item.key]
                                                ? "text-green-500"
                                                : "text-gray-300"
                                            }
                                    `}
                                    >
                                        <FaToggleOn />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}

                <div className="space-y-6">

                    {/* INFO CARD */}

                    <div
                        className="
                        bg-gradient-to-r
                        from-orange-500
                        to-orange-400
                        rounded-[32px]
                        p-6
                        text-white
                        shadow-lg
                    "
                    >

                        <div
                            className="
                            w-16
                            h-16
                            rounded-3xl
                            bg-white/20
                            flex
                            items-center
                            justify-center
                            text-3xl
                        "
                        >
                            <FaMotorcycle />
                        </div>

                        <div className="mt-8">

                            <h2
                                className="
                                text-3xl
                                font-extrabold
                            "
                            >
                                Delivery System
                            </h2>

                            <p className="text-white/80 mt-4 leading-relaxed">
                                Manage delivery charges, riders and logistics
                                settings for your platform
                            </p>
                        </div>

                        <div
                            className="
                            mt-8
                            bg-white/10
                            rounded-2xl
                            p-4
                        "
                        >

                            <div className="flex items-center gap-3">

                                <FaCheckCircle />

                                <span className="font-semibold">
                                    Delivery Active
                                </span>
                            </div>

                            <p className="text-white/80 text-sm mt-2">
                                Delivery services are currently enabled
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliverySettings;