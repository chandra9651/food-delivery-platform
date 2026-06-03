// // /client/src/admin/pages/settings/GeneralSettings.jsx

// import { useState } from "react";

// import {
//     FaCog,
//     FaSave,
//     FaGlobe,
//     FaPhoneAlt,
//     FaEnvelope,
//     FaMapMarkerAlt,
//     FaClock,
//     FaLanguage,
//     FaMoneyBillWave,
//     FaImage,
//     FaStore,
//     FaShieldAlt,
//     FaBell,
//     FaToggleOn,
// } from "react-icons/fa";

// const GeneralSettings = () => {
//     const [settings, setSettings] = useState({
//         siteName: "Foodie Admin",
//         supportEmail: "support@foodie.com",
//         supportPhone: "+91 9876543210",
//         address: "Lucknow, Uttar Pradesh, India",
//         timezone: "Asia/Kolkata",
//         language: "English",
//         currency: "INR",
//         orderAutoAccept: true,
//         maintenanceMode: false,
//         emailNotifications: true,
//         pushNotifications: true,
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
//                         General Settings
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Manage platform configuration and system settings
//                     </p>
//                 </div>

//                 {/* SAVE BUTTON */}

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

//             {/* SETTINGS SECTION */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           xl:grid-cols-3
//           gap-6
//         "
//             >
//                 {/* LEFT FORM */}

//                 <div
//                     className="
//             xl:col-span-2
//             space-y-6
//           "
//                 >
//                     {/* PLATFORM SETTINGS */}

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
//                                 Platform Information
//                             </h2>

//                             <p className="text-gray-500 mt-2">
//                                 Configure your platform basic information
//                             </p>
//                         </div>

//                         {/* FORM */}

//                         <div className="space-y-6">
//                             {/* SITE NAME */}

//                             <div>
//                                 <label
//                                     className="
//                     block
//                     mb-3
//                     font-bold
//                     text-gray-700
//                   "
//                                 >
//                                     Platform Name
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
//                                     <FaStore className="text-orange-500" />

//                                     <input
//                                         type="text"
//                                         name="siteName"
//                                         value={settings.siteName}
//                                         onChange={handleChange}
//                                         className="
//                       w-full
//                       outline-none
//                       bg-transparent
//                     "
//                                     />
//                                 </div>
//                             </div>

//                             {/* EMAIL & PHONE */}

//                             <div
//                                 className="
//                   grid
//                   grid-cols-1
//                   md:grid-cols-2
//                   gap-6
//                 "
//                             >
//                                 {/* EMAIL */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Support Email
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
//                                         <FaEnvelope className="text-blue-500" />

//                                         <input
//                                             type="email"
//                                             name="supportEmail"
//                                             value={settings.supportEmail}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* PHONE */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Support Phone
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
//                                         <FaPhoneAlt className="text-green-500" />

//                                         <input
//                                             type="text"
//                                             name="supportPhone"
//                                             value={settings.supportPhone}
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

//                             {/* ADDRESS */}

//                             <div>
//                                 <label
//                                     className="
//                     block
//                     mb-3
//                     font-bold
//                     text-gray-700
//                   "
//                                 >
//                                     Office Address
//                                 </label>

//                                 <div
//                                     className="
//                     flex
//                     items-start
//                     gap-3
//                     border
//                     border-gray-200
//                     rounded-2xl
//                     px-5
//                     py-4
//                   "
//                                 >
//                                     <FaMapMarkerAlt className="text-red-500 mt-1" />

//                                     <textarea
//                                         rows="4"
//                                         name="address"
//                                         value={settings.address}
//                                         onChange={handleChange}
//                                         className="
//                       w-full
//                       outline-none
//                       resize-none
//                       bg-transparent
//                     "
//                                     />
//                                 </div>
//                             </div>

//                             {/* TIMEZONE / LANGUAGE / CURRENCY */}

//                             <div
//                                 className="
//                   grid
//                   grid-cols-1
//                   md:grid-cols-3
//                   gap-6
//                 "
//                             >
//                                 {/* TIMEZONE */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Timezone
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
//                                         <FaClock className="text-orange-500" />

//                                         <select
//                                             name="timezone"
//                                             value={settings.timezone}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         >
//                                             <option value="Asia/Kolkata">
//                                                 Asia/Kolkata
//                                             </option>

//                                             <option value="UTC">
//                                                 UTC
//                                             </option>

//                                             <option value="America/New_York">
//                                                 America/New_York
//                                             </option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 {/* LANGUAGE */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Language
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
//                                         <FaLanguage className="text-blue-500" />

//                                         <select
//                                             name="language"
//                                             value={settings.language}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         >
//                                             <option value="English">
//                                                 English
//                                             </option>

//                                             <option value="Hindi">
//                                                 Hindi
//                                             </option>

//                                             <option value="French">
//                                                 French
//                                             </option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 {/* CURRENCY */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Currency
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

//                                         <select
//                                             name="currency"
//                                             value={settings.currency}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         >
//                                             <option value="INR">
//                                                 INR
//                                             </option>

//                                             <option value="USD">
//                                                 USD
//                                             </option>

//                                             <option value="EUR">
//                                                 EUR
//                                             </option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* SYSTEM SETTINGS */}

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
//                                 System Controls
//                             </h2>

//                             <p className="text-gray-500 mt-2">
//                                 Configure platform operational settings
//                             </p>
//                         </div>

//                         {/* TOGGLES */}

//                         <div className="space-y-6">
//                             {/* AUTO ACCEPT */}

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
//                                         <FaCog />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Auto Accept Orders
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Automatically accept incoming orders
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("orderAutoAccept")
//                                     }
//                                     className={`
//                     text-5xl
//                     transition-all

//                     ${settings.orderAutoAccept
//                                             ? "text-green-500"

//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* MAINTENANCE */}

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
//                                         <FaShieldAlt />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Maintenance Mode
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Temporarily disable platform access
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("maintenanceMode")
//                                     }
//                                     className={`
//                     text-5xl
//                     transition-all

//                     ${settings.maintenanceMode
//                                             ? "text-green-500"

//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* EMAIL NOTIFICATIONS */}

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
//                                         <FaEnvelope />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Email Notifications
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Send email notifications to users
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("emailNotifications")
//                                     }
//                                     className={`
//                     text-5xl
//                     transition-all

//                     ${settings.emailNotifications
//                                             ? "text-green-500"

//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* PUSH NOTIFICATIONS */}

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
//                                         <FaBell />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Push Notifications
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Enable mobile push notifications
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("pushNotifications")
//                                     }
//                                     className={`
//                     text-5xl
//                     transition-all

//                     ${settings.pushNotifications
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
//                     {/* LOGO CARD */}

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
//                             Platform Logo
//                         </h2>

//                         <label
//                             className="
//                 border-2
//                 border-dashed
//                 border-gray-300
//                 hover:border-orange-400
//                 rounded-3xl
//                 p-10
//                 flex
//                 flex-col
//                 items-center
//                 justify-center
//                 cursor-pointer
//                 transition-all
//               "
//                         >
//                             <div
//                                 className="
//                   w-20
//                   h-20
//                   rounded-3xl
//                   bg-orange-100
//                   text-orange-500
//                   flex
//                   items-center
//                   justify-center
//                   text-4xl
//                 "
//                             >
//                                 <FaImage />
//                             </div>

//                             <h3
//                                 className="
//                   text-xl
//                   font-bold
//                   text-gray-900
//                   mt-5
//                 "
//                             >
//                                 Upload Logo
//                             </h3>

//                             <p className="text-gray-500 mt-2 text-center">
//                                 PNG, JPG or SVG supported
//                             </p>

//                             <input
//                                 type="file"
//                                 className="hidden"
//                             />
//                         </label>
//                     </div>

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
//                             <FaCog />
//                         </div>

//                         {/* CONTENT */}

//                         <div className="mt-8">
//                             <h2
//                                 className="
//                   text-3xl
//                   font-extrabold
//                 "
//                             >
//                                 Platform Settings
//                             </h2>

//                             <p className="text-white/80 mt-4 leading-relaxed">
//                                 Manage global system configuration and operational settings
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
//                                 <FaGlobe />

//                                 <span className="font-semibold">
//                                     Global Configuration
//                                 </span>
//                             </div>

//                             <p className="text-white/80 text-sm mt-2">
//                                 All settings changes affect the complete platform
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GeneralSettings;


// /client/src/admin/pages/settings/GeneralSettings.jsx

import { useEffect, useState } from "react";

import API from "../../../api/axios";

import {
    FaCog,
    FaSave,
    FaGlobe,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaLanguage,
    FaMoneyBillWave,
    FaImage,
    FaStore,
    FaShieldAlt,
    FaBell,
    FaToggleOn,
} from "react-icons/fa";

const GeneralSettings = () => {
    const [loading, setLoading] = useState(false);

    const [logoPreview, setLogoPreview] = useState("");

    const [settings, setSettings] = useState({
        siteName: "",
        supportEmail: "",
        supportPhone: "",
        address: "",
        timezone: "Asia/Kolkata",
        language: "English",
        currency: "INR",
        orderAutoAccept: true,
        maintenanceMode: false,
        emailNotifications: true,
        pushNotifications: true,
        logo: null,
    });

    // =========================
    // GET SETTINGS
    // =========================

    const fetchSettings = async () => {
        try {
            setLoading(true);

            const { data } = await API.get(
                "/admin/settings/general"
            );

            if (data?.settings) {
                setSettings({
                    siteName: data.settings.siteName || "",
                    supportEmail: data.settings.supportEmail || "",
                    supportPhone: data.settings.supportPhone || "",
                    address: data.settings.address || "",
                    timezone:
                        data.settings.timezone || "Asia/Kolkata",
                    language:
                        data.settings.language || "English",
                    currency: data.settings.currency || "INR",
                    orderAutoAccept:
                        data.settings.orderAutoAccept ?? true,
                    maintenanceMode:
                        data.settings.maintenanceMode ?? false,
                    emailNotifications:
                        data.settings.emailNotifications ?? true,
                    pushNotifications:
                        data.settings.pushNotifications ?? true,
                    logo: null,
                });

                setLogoPreview(data.settings.logo || "");
            }
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to load settings"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSettings();
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
    // HANDLE LOGO
    // =========================

    const handleLogoChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        setSettings({
            ...settings,
            logo: file,
        });

        setLogoPreview(URL.createObjectURL(file));
    };

    // =========================
    // SUBMIT
    // =========================

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const formData = new FormData();

            formData.append("siteName", settings.siteName);
            formData.append(
                "supportEmail",
                settings.supportEmail
            );
            formData.append(
                "supportPhone",
                settings.supportPhone
            );
            formData.append("address", settings.address);
            formData.append("timezone", settings.timezone);
            formData.append("language", settings.language);
            formData.append("currency", settings.currency);

            formData.append(
                "orderAutoAccept",
                settings.orderAutoAccept
            );

            formData.append(
                "maintenanceMode",
                settings.maintenanceMode
            );

            formData.append(
                "emailNotifications",
                settings.emailNotifications
            );

            formData.append(
                "pushNotifications",
                settings.pushNotifications
            );

            if (settings.logo) {
                formData.append("logo", settings.logo);
            }

            const { data } = await API.put(
                "/admin/settings/general",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data",
                    },
                }
            );

            alert(
                data?.message ||
                "General settings updated successfully"
            );
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to update settings"
            );
        } finally {
            setLoading(false);
        }
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
                <div>
                    <h1
                        className="
                        text-3xl
                        md:text-4xl
                        font-extrabold
                        text-gray-900
                    "
                    >
                        General Settings
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage platform configuration and
                        system settings
                    </p>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
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
                    flex
                    items-center
                    gap-3
                    w-fit
                    disabled:opacity-60
                "
                >
                    <FaSave />

                    {loading
                        ? "Saving..."
                        : "Save Changes"}
                </button>
            </div>

            {/* SETTINGS SECTION */}

            <div
                className="
                grid
                grid-cols-1
                xl:grid-cols-3
                gap-6
            "
            >
                {/* LEFT FORM */}

                <div className="xl:col-span-2 space-y-6">
                    {/* PLATFORM SETTINGS */}

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
                                Platform Information
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Configure your platform basic
                                information
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* SITE NAME */}

                            <div>
                                <label className="block mb-3 font-bold text-gray-700">
                                    Platform Name
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
                                    <FaStore className="text-orange-500" />

                                    <input
                                        type="text"
                                        name="siteName"
                                        value={
                                            settings.siteName
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className="
                                        w-full
                                        outline-none
                                        bg-transparent
                                    "
                                    />
                                </div>
                            </div>

                            {/* EMAIL & PHONE */}

                            <div
                                className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-6
                            "
                            >
                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        Support Email
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
                                        <FaEnvelope className="text-blue-500" />

                                        <input
                                            type="email"
                                            name="supportEmail"
                                            value={
                                                settings.supportEmail
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        Support Phone
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
                                            name="supportPhone"
                                            value={
                                                settings.supportPhone
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ADDRESS */}

                            <div>
                                <label className="block mb-3 font-bold text-gray-700">
                                    Office Address
                                </label>

                                <div
                                    className="
                                    flex
                                    items-start
                                    gap-3
                                    border
                                    border-gray-200
                                    rounded-2xl
                                    px-5
                                    py-4
                                "
                                >
                                    <FaMapMarkerAlt className="text-red-500 mt-1" />

                                    <textarea
                                        rows="4"
                                        name="address"
                                        value={
                                            settings.address
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className="
                                        w-full
                                        outline-none
                                        resize-none
                                        bg-transparent
                                    "
                                    />
                                </div>
                            </div>

                            {/* SELECTS */}

                            <div
                                className="
                                grid
                                grid-cols-1
                                md:grid-cols-3
                                gap-6
                            "
                            >
                                {/* TIMEZONE */}

                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        Timezone
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
                                        <FaClock className="text-orange-500" />

                                        <select
                                            name="timezone"
                                            value={
                                                settings.timezone
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        >
                                            <option value="Asia/Kolkata">
                                                Asia/Kolkata
                                            </option>

                                            <option value="UTC">
                                                UTC
                                            </option>

                                            <option value="America/New_York">
                                                America/New_York
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* LANGUAGE */}

                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        Language
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
                                        <FaLanguage className="text-blue-500" />

                                        <select
                                            name="language"
                                            value={
                                                settings.language
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        >
                                            <option value="English">
                                                English
                                            </option>

                                            <option value="Hindi">
                                                Hindi
                                            </option>

                                            <option value="French">
                                                French
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* CURRENCY */}

                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        Currency
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

                                        <select
                                            name="currency"
                                            value={
                                                settings.currency
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="
                                            w-full
                                            outline-none
                                            bg-transparent
                                        "
                                        >
                                            <option value="INR">
                                                INR
                                            </option>

                                            <option value="USD">
                                                USD
                                            </option>

                                            <option value="EUR">
                                                EUR
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SYSTEM SETTINGS */}

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
                            <h2 className="text-2xl font-extrabold text-gray-900">
                                System Controls
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Configure platform operational
                                settings
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    title:
                                        "Auto Accept Orders",
                                    description:
                                        "Automatically accept incoming orders",
                                    field:
                                        "orderAutoAccept",
                                    icon: (
                                        <FaCog />
                                    ),
                                    bg:
                                        "bg-orange-100",
                                    color:
                                        "text-orange-500",
                                },

                                {
                                    title:
                                        "Maintenance Mode",
                                    description:
                                        "Temporarily disable platform access",
                                    field:
                                        "maintenanceMode",
                                    icon: (
                                        <FaShieldAlt />
                                    ),
                                    bg:
                                        "bg-red-100",
                                    color:
                                        "text-red-500",
                                },

                                {
                                    title:
                                        "Email Notifications",
                                    description:
                                        "Send email notifications to users",
                                    field:
                                        "emailNotifications",
                                    icon: (
                                        <FaEnvelope />
                                    ),
                                    bg:
                                        "bg-blue-100",
                                    color:
                                        "text-blue-500",
                                },

                                {
                                    title:
                                        "Push Notifications",
                                    description:
                                        "Enable mobile push notifications",
                                    field:
                                        "pushNotifications",
                                    icon: (
                                        <FaBell />
                                    ),
                                    bg:
                                        "bg-purple-100",
                                    color:
                                        "text-purple-500",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
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
                                            ${item.bg}
                                            ${item.color}
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
                                                {
                                                    item.title
                                                }
                                            </h3>

                                            <p className="text-gray-500 text-sm mt-1">
                                                {
                                                    item.description
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() =>
                                            toggleSwitch(
                                                item.field
                                            )
                                        }
                                        className={`
                                        text-5xl
                                        transition-all

                                        ${settings[
                                                item.field
                                            ]
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
                    {/* LOGO CARD */}

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
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                            Platform Logo
                        </h2>

                        <label
                            className="
                            border-2
                            border-dashed
                            border-gray-300
                            hover:border-orange-400
                            rounded-3xl
                            p-10
                            flex
                            flex-col
                            items-center
                            justify-center
                            cursor-pointer
                            transition-all
                        "
                        >
                            {logoPreview ? (
                                <img
                                    src={logoPreview}
                                    alt="Logo"
                                    className="
                                    w-32
                                    h-32
                                    object-cover
                                    rounded-3xl
                                    mb-5
                                "
                                />
                            ) : (
                                <div
                                    className="
                                    w-20
                                    h-20
                                    rounded-3xl
                                    bg-orange-100
                                    text-orange-500
                                    flex
                                    items-center
                                    justify-center
                                    text-4xl
                                "
                                >
                                    <FaImage />
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-gray-900 mt-5">
                                Upload Logo
                            </h3>

                            <p className="text-gray-500 mt-2 text-center">
                                PNG, JPG or SVG supported
                            </p>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={
                                    handleLogoChange
                                }
                                className="hidden"
                            />
                        </label>
                    </div>

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
                            <FaCog />
                        </div>

                        <div className="mt-8">
                            <h2 className="text-3xl font-extrabold">
                                Platform Settings
                            </h2>

                            <p className="text-white/80 mt-4 leading-relaxed">
                                Manage global system
                                configuration and operational
                                settings
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
                                <FaGlobe />

                                <span className="font-semibold">
                                    Global Configuration
                                </span>
                            </div>

                            <p className="text-white/80 text-sm mt-2">
                                All settings changes affect
                                the complete platform
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralSettings;