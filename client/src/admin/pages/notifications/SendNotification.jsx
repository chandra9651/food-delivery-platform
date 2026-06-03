// // /client/src/admin/pages/notifications/SendNotification.jsx

// import { useState } from "react";

// import {
//     FaPaperPlane,
//     FaBell,
//     FaUsers,
//     FaStore,
//     FaMotorcycle,
//     FaUserFriends,
//     FaHeading,
//     FaAlignLeft,
//     FaImage,
//     FaCalendarAlt,
//     FaArrowLeft,
//     FaCheckCircle,
//     FaMobileAlt,
//     FaEnvelope,
//     FaGlobe,
// } from "react-icons/fa";

// const SendNotification = () => {
//     const [formData, setFormData] = useState({
//         audience: "customers",
//         title: "",
//         message: "",
//         deliveryType: "instant",
//         scheduledDate: "",
//         channel: "push",
//         image: "",
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         console.log(formData);
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

//                 <div className="flex items-center gap-4">
//                     <button
//                         className="
//               w-14
//               h-14
//               rounded-2xl
//               bg-white
//               border
//               border-gray-200
//               hover:bg-gray-100
//               flex
//               items-center
//               justify-center
//               transition-all
//             "
//                     >
//                         <FaArrowLeft className="text-gray-700 text-lg" />
//                     </button>

//                     <div>
//                         <h1
//                             className="
//                 text-3xl
//                 md:text-4xl
//                 font-extrabold
//                 text-gray-900
//               "
//                         >
//                             Send Notification
//                         </h1>

//                         <p className="text-gray-500 mt-2">
//                             Send announcements and updates to users
//                         </p>
//                     </div>
//                 </div>

//                 {/* SEND BUTTON */}

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
//                     <FaPaperPlane />

//                     Send Notification
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
//                 {/* LEFT FORM */}

//                 <div
//                     className="
//             xl:col-span-2
//             bg-white
//             rounded-[32px]
//             border
//             border-gray-100
//             shadow-sm
//             p-6
//           "
//                 >
//                     {/* TITLE */}

//                     <div className="mb-8">
//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//               "
//                         >
//                             Notification Details
//                         </h2>

//                         <p className="text-gray-500 mt-2">
//                             Create and customize notification message
//                         </p>
//                     </div>

//                     {/* FORM */}

//                     <form className="space-y-6">
//                         {/* AUDIENCE */}

//                         <div>
//                             <label
//                                 className="
//                   block
//                   mb-3
//                   font-bold
//                   text-gray-700
//                 "
//                             >
//                                 Select Audience
//                             </label>

//                             <div
//                                 className="
//                   grid
//                   grid-cols-1
//                   sm:grid-cols-2
//                   lg:grid-cols-4
//                   gap-4
//                 "
//                             >
//                                 {/* CUSTOMERS */}

//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setFormData({
//                                             ...formData,
//                                             audience: "customers",
//                                         })
//                                     }
//                                     className={`
//                     border
//                     rounded-3xl
//                     p-5
//                     transition-all

//                     ${formData.audience === "customers"
//                                             ? "border-orange-500 bg-orange-50"

//                                             : "border-gray-200 hover:border-orange-300"
//                                         }
//                   `}
//                                 >
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
//                       mx-auto
//                     "
//                                     >
//                                         <FaUsers />
//                                     </div>

//                                     <h3
//                                         className="
//                       text-center
//                       font-bold
//                       text-gray-900
//                       mt-4
//                     "
//                                     >
//                                         Customers
//                                     </h3>
//                                 </button>

//                                 {/* RESTAURANTS */}

//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setFormData({
//                                             ...formData,
//                                             audience: "restaurants",
//                                         })
//                                     }
//                                     className={`
//                     border
//                     rounded-3xl
//                     p-5
//                     transition-all

//                     ${formData.audience === "restaurants"
//                                             ? "border-orange-500 bg-orange-50"

//                                             : "border-gray-200 hover:border-orange-300"
//                                         }
//                   `}
//                                 >
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
//                       mx-auto
//                     "
//                                     >
//                                         <FaStore />
//                                     </div>

//                                     <h3
//                                         className="
//                       text-center
//                       font-bold
//                       text-gray-900
//                       mt-4
//                     "
//                                     >
//                                         Restaurants
//                                     </h3>
//                                 </button>

//                                 {/* DELIVERY */}

//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setFormData({
//                                             ...formData,
//                                             audience: "delivery",
//                                         })
//                                     }
//                                     className={`
//                     border
//                     rounded-3xl
//                     p-5
//                     transition-all

//                     ${formData.audience === "delivery"
//                                             ? "border-orange-500 bg-orange-50"

//                                             : "border-gray-200 hover:border-orange-300"
//                                         }
//                   `}
//                                 >
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
//                       mx-auto
//                     "
//                                     >
//                                         <FaMotorcycle />
//                                     </div>

//                                     <h3
//                                         className="
//                       text-center
//                       font-bold
//                       text-gray-900
//                       mt-4
//                     "
//                                     >
//                                         Delivery
//                                     </h3>
//                                 </button>

//                                 {/* ALL USERS */}

//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setFormData({
//                                             ...formData,
//                                             audience: "all",
//                                         })
//                                     }
//                                     className={`
//                     border
//                     rounded-3xl
//                     p-5
//                     transition-all

//                     ${formData.audience === "all"
//                                             ? "border-orange-500 bg-orange-50"

//                                             : "border-gray-200 hover:border-orange-300"
//                                         }
//                   `}
//                                 >
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
//                       mx-auto
//                     "
//                                     >
//                                         <FaUserFriends />
//                                     </div>

//                                     <h3
//                                         className="
//                       text-center
//                       font-bold
//                       text-gray-900
//                       mt-4
//                     "
//                                     >
//                                         All Users
//                                     </h3>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* TITLE */}

//                         <div>
//                             <label
//                                 className="
//                   block
//                   mb-3
//                   font-bold
//                   text-gray-700
//                 "
//                             >
//                                 Notification Title
//                             </label>

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   gap-3
//                   border
//                   border-gray-200
//                   rounded-2xl
//                   px-5
//                   py-4
//                 "
//                             >
//                                 <FaHeading className="text-orange-500" />

//                                 <input
//                                     type="text"
//                                     name="title"
//                                     placeholder="Enter notification title"
//                                     value={formData.title}
//                                     onChange={handleChange}
//                                     className="
//                     w-full
//                     outline-none
//                     bg-transparent
//                   "
//                                 />
//                             </div>
//                         </div>

//                         {/* MESSAGE */}

//                         <div>
//                             <label
//                                 className="
//                   block
//                   mb-3
//                   font-bold
//                   text-gray-700
//                 "
//                             >
//                                 Notification Message
//                             </label>

//                             <div
//                                 className="
//                   border
//                   border-gray-200
//                   rounded-2xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-start gap-3">
//                                     <FaAlignLeft className="text-orange-500 mt-1" />

//                                     <textarea
//                                         rows="7"
//                                         name="message"
//                                         placeholder="Write your notification message..."
//                                         value={formData.message}
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
//                         </div>

//                         {/* ROW */}

//                         <div
//                             className="
//                 grid
//                 grid-cols-1
//                 md:grid-cols-2
//                 gap-6
//               "
//                         >
//                             {/* DELIVERY TYPE */}

//                             <div>
//                                 <label
//                                     className="
//                     block
//                     mb-3
//                     font-bold
//                     text-gray-700
//                   "
//                                 >
//                                     Delivery Type
//                                 </label>

//                                 <select
//                                     name="deliveryType"
//                                     value={formData.deliveryType}
//                                     onChange={handleChange}
//                                     className="
//                     w-full
//                     border
//                     border-gray-200
//                     rounded-2xl
//                     px-5
//                     py-4
//                     outline-none
//                   "
//                                 >
//                                     <option value="instant">
//                                         Send Instantly
//                                     </option>

//                                     <option value="schedule">
//                                         Schedule Notification
//                                     </option>
//                                 </select>
//                             </div>

//                             {/* DATE */}

//                             <div>
//                                 <label
//                                     className="
//                     block
//                     mb-3
//                     font-bold
//                     text-gray-700
//                   "
//                                 >
//                                     Schedule Date
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
//                                     <FaCalendarAlt className="text-orange-500" />

//                                     <input
//                                         type="datetime-local"
//                                         name="scheduledDate"
//                                         value={formData.scheduledDate}
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

//                         {/* CHANNEL */}

//                         <div>
//                             <label
//                                 className="
//                   block
//                   mb-3
//                   font-bold
//                   text-gray-700
//                 "
//                             >
//                                 Notification Channel
//                             </label>

//                             <div
//                                 className="
//                   grid
//                   grid-cols-1
//                   md:grid-cols-3
//                   gap-4
//                 "
//                             >
//                                 {/* PUSH */}

//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setFormData({
//                                             ...formData,
//                                             channel: "push",
//                                         })
//                                     }
//                                     className={`
//                     border
//                     rounded-3xl
//                     p-5
//                     transition-all

//                     ${formData.channel === "push"
//                                             ? "border-orange-500 bg-orange-50"

//                                             : "border-gray-200"
//                                         }
//                   `}
//                                 >
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
//                       mx-auto
//                     "
//                                     >
//                                         <FaBell />
//                                     </div>

//                                     <h3
//                                         className="
//                       text-center
//                       font-bold
//                       text-gray-900
//                       mt-4
//                     "
//                                     >
//                                         Push Notification
//                                     </h3>
//                                 </button>

//                                 {/* EMAIL */}

//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setFormData({
//                                             ...formData,
//                                             channel: "email",
//                                         })
//                                     }
//                                     className={`
//                     border
//                     rounded-3xl
//                     p-5
//                     transition-all

//                     ${formData.channel === "email"
//                                             ? "border-orange-500 bg-orange-50"

//                                             : "border-gray-200"
//                                         }
//                   `}
//                                 >
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
//                       mx-auto
//                     "
//                                     >
//                                         <FaEnvelope />
//                                     </div>

//                                     <h3
//                                         className="
//                       text-center
//                       font-bold
//                       text-gray-900
//                       mt-4
//                     "
//                                     >
//                                         Email
//                                     </h3>
//                                 </button>

//                                 {/* SMS */}

//                                 <button
//                                     type="button"
//                                     onClick={() =>
//                                         setFormData({
//                                             ...formData,
//                                             channel: "sms",
//                                         })
//                                     }
//                                     className={`
//                     border
//                     rounded-3xl
//                     p-5
//                     transition-all

//                     ${formData.channel === "sms"
//                                             ? "border-orange-500 bg-orange-50"

//                                             : "border-gray-200"
//                                         }
//                   `}
//                                 >
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
//                       mx-auto
//                     "
//                                     >
//                                         <FaMobileAlt />
//                                     </div>

//                                     <h3
//                                         className="
//                       text-center
//                       font-bold
//                       text-gray-900
//                       mt-4
//                     "
//                                     >
//                                         SMS
//                                     </h3>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* IMAGE */}

//                         <div>
//                             <label
//                                 className="
//                   block
//                   mb-3
//                   font-bold
//                   text-gray-700
//                 "
//                             >
//                                 Upload Banner Image
//                             </label>

//                             <label
//                                 className="
//                   border-2
//                   border-dashed
//                   border-gray-300
//                   hover:border-orange-400
//                   rounded-3xl
//                   p-10
//                   flex
//                   flex-col
//                   items-center
//                   justify-center
//                   cursor-pointer
//                   transition-all
//                 "
//                             >
//                                 <div
//                                     className="
//                     w-20
//                     h-20
//                     rounded-3xl
//                     bg-orange-100
//                     text-orange-500
//                     flex
//                     items-center
//                     justify-center
//                     text-4xl
//                   "
//                                 >
//                                     <FaImage />
//                                 </div>

//                                 <h3
//                                     className="
//                     text-xl
//                     font-bold
//                     text-gray-900
//                     mt-5
//                   "
//                                 >
//                                     Upload Notification Banner
//                                 </h3>

//                                 <p className="text-gray-500 mt-2 text-center">
//                                     PNG, JPG or WEBP image supported
//                                 </p>

//                                 <input
//                                     type="file"
//                                     className="hidden"
//                                 />
//                             </label>
//                         </div>
//                     </form>
//                 </div>

//                 {/* RIGHT SIDEBAR */}

//                 <div className="space-y-6">
//                     {/* LIVE PREVIEW */}

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
//                         {/* TOP */}

//                         <div
//                             className="
//                 flex
//                 items-center
//                 justify-between
//               "
//                         >
//                             <div
//                                 className="
//                   w-16
//                   h-16
//                   rounded-3xl
//                   bg-white/20
//                   flex
//                   items-center
//                   justify-center
//                   text-3xl
//                 "
//                             >
//                                 <FaBell />
//                             </div>

//                             <div
//                                 className="
//                   bg-white/20
//                   px-4
//                   py-2
//                   rounded-full
//                   text-sm
//                   font-bold
//                 "
//                             >
//                                 LIVE PREVIEW
//                             </div>
//                         </div>

//                         {/* CONTENT */}

//                         <div className="mt-8">
//                             <h2
//                                 className="
//                   text-3xl
//                   font-extrabold
//                 "
//                             >
//                                 {formData.title || "Special Offer"}
//                             </h2>

//                             <p className="text-white/80 mt-4 leading-relaxed">
//                                 {formData.message ||
//                                     "Your notification message preview will appear here."}
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
//                             <div
//                                 className="
//                   flex
//                   items-center
//                   gap-3
//                 "
//                             >
//                                 <FaGlobe />

//                                 <span className="font-semibold capitalize">
//                                     {formData.channel} Notification
//                                 </span>
//                             </div>

//                             <p className="text-white/80 text-sm mt-2 capitalize">
//                                 Audience: {formData.audience}
//                             </p>
//                         </div>
//                     </div>

//                     {/* QUICK INFO */}

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
//                             Notification Tips
//                         </h2>

//                         <div className="space-y-5">
//                             {/* TIP */}

//                             <div className="flex items-start gap-4">
//                                 <div
//                                     className="
//                     w-10
//                     h-10
//                     rounded-xl
//                     bg-orange-100
//                     text-orange-500
//                     flex
//                     items-center
//                     justify-center
//                   "
//                                 >
//                                     <FaCheckCircle />
//                                 </div>

//                                 <div>
//                                     <h3 className="font-bold text-gray-900">
//                                         Clear Message
//                                     </h3>

//                                     <p className="text-gray-500 text-sm mt-1">
//                                         Keep notification short and easy to understand
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* TIP */}

//                             <div className="flex items-start gap-4">
//                                 <div
//                                     className="
//                     w-10
//                     h-10
//                     rounded-xl
//                     bg-blue-100
//                     text-blue-500
//                     flex
//                     items-center
//                     justify-center
//                   "
//                                 >
//                                     <FaUsers />
//                                 </div>

//                                 <div>
//                                     <h3 className="font-bold text-gray-900">
//                                         Right Audience
//                                     </h3>

//                                     <p className="text-gray-500 text-sm mt-1">
//                                         Send targeted notifications for better engagement
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* TIP */}

//                             <div className="flex items-start gap-4">
//                                 <div
//                                     className="
//                     w-10
//                     h-10
//                     rounded-xl
//                     bg-green-100
//                     text-green-500
//                     flex
//                     items-center
//                     justify-center
//                   "
//                                 >
//                                     <FaCalendarAlt />
//                                 </div>

//                                 <div>
//                                     <h3 className="font-bold text-gray-900">
//                                         Schedule Timing
//                                     </h3>

//                                     <p className="text-gray-500 text-sm mt-1">
//                                         Schedule notifications during peak user activity
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SendNotification;




// /client/src/admin/pages/notifications/SendNotification.jsx

import { useEffect, useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import {
    FaPaperPlane,
    FaBell,
    FaUsers,
    FaStore,
    FaMotorcycle,
    FaUserFriends,
    FaHeading,
    FaAlignLeft,
    FaImage,
    FaCalendarAlt,
    FaArrowLeft,
    FaCheckCircle,
    FaMobileAlt,
    FaEnvelope,
    FaGlobe,
    FaSpinner,
} from "react-icons/fa";

const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const SendNotification = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [previewImage, setPreviewImage] = useState("");

    const [stats, setStats] = useState({
        customers: 0,
        restaurants: 0,
        delivery: 0,
        all: 0,
    });

    const [formData, setFormData] = useState({
        audience: "customers",
        title: "",
        message: "",
        deliveryType: "instant",
        scheduledDate: "",
        channel: "push",
        image: null,
    });

    // FETCH USERS COUNT

    const fetchAudienceStats = async () => {
        try {
            const { data } = await axios.get(
                `${API_URL}/admin/notifications/audience-stats`
            );

            if (data?.success) {
                setStats(data.stats);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAudienceStats();
    }, []);

    // INPUT CHANGE

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // IMAGE CHANGE

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        setFormData({
            ...formData,
            image: file,
        });

        setPreviewImage(URL.createObjectURL(file));
    };

    // SUBMIT

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            return toast.error("Notification title is required");
        }

        if (!formData.message.trim()) {
            return toast.error("Notification message is required");
        }

        if (
            formData.deliveryType === "schedule" &&
            !formData.scheduledDate
        ) {
            return toast.error("Please select schedule date");
        }

        try {
            setLoading(true);

            const sendData = new FormData();

            sendData.append("audience", formData.audience);
            sendData.append("title", formData.title);
            sendData.append("message", formData.message);
            sendData.append(
                "deliveryType",
                formData.deliveryType
            );
            sendData.append(
                "scheduledDate",
                formData.scheduledDate
            );
            sendData.append("channel", formData.channel);

            if (formData.image) {
                sendData.append("image", formData.image);
            }

            const { data } = await axios.post(
                `${API_URL}/admin/notifications/send`,
                sendData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                }
            );

            if (data?.success) {
                toast.success(data.message);

                navigate("/admin/notifications");

                setFormData({
                    audience: "customers",
                    title: "",
                    message: "",
                    deliveryType: "instant",
                    scheduledDate: "",
                    channel: "push",
                    image: null,
                });

                setPreviewImage("");
            }
        } catch (error) {
            console.log(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to send notification"
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
                {/* LEFT */}

                <div className="flex items-center gap-4">
                    <Link
                        to="/admin/notifications"
                        className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-white
                            border
                            border-gray-200
                            hover:bg-gray-100
                            flex
                            items-center
                            justify-center
                            transition-all
                        "
                    >
                        <FaArrowLeft className="text-gray-700 text-lg" />
                    </Link>

                    <div>
                        <h1
                            className="
                                text-3xl
                                md:text-4xl
                                font-extrabold
                                text-gray-900
                            "
                        >
                            Send Notification
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Send announcements and updates to users
                        </p>
                    </div>
                </div>

                {/* SEND BUTTON */}

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="
                        bg-orange-500
                        hover:bg-orange-600
                        disabled:opacity-70
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
                    {loading ? (
                        <FaSpinner className="animate-spin" />
                    ) : (
                        <FaPaperPlane />
                    )}

                    {loading
                        ? "Sending..."
                        : "Send Notification"}
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
                {/* LEFT FORM */}

                <div
                    className="
                        xl:col-span-2
                        bg-white
                        rounded-[32px]
                        border
                        border-gray-100
                        shadow-sm
                        p-6
                    "
                >
                    {/* TITLE */}

                    <div className="mb-8">
                        <h2
                            className="
                                text-2xl
                                font-extrabold
                                text-gray-900
                            "
                        >
                            Notification Details
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Create and customize notification
                            message
                        </p>
                    </div>

                    {/* FORM */}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        {/* AUDIENCE */}

                        <div>
                            <label
                                className="
                                    block
                                    mb-3
                                    font-bold
                                    text-gray-700
                                "
                            >
                                Select Audience
                            </label>

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    sm:grid-cols-2
                                    lg:grid-cols-4
                                    gap-4
                                "
                            >
                                {/* CUSTOMERS */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData({
                                            ...formData,
                                            audience:
                                                "customers",
                                        })
                                    }
                                    className={`
                                        border
                                        rounded-3xl
                                        p-5
                                        transition-all

                                        ${formData.audience ===
                                            "customers"
                                            ? "border-orange-500 bg-orange-50"
                                            : "border-gray-200 hover:border-orange-300"
                                        }
                                    `}
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
                                            mx-auto
                                        "
                                    >
                                        <FaUsers />
                                    </div>

                                    <h3
                                        className="
                                            text-center
                                            font-bold
                                            text-gray-900
                                            mt-4
                                        "
                                    >
                                        Customers
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {stats.customers} Users
                                    </p>
                                </button>

                                {/* RESTAURANTS */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData({
                                            ...formData,
                                            audience:
                                                "restaurants",
                                        })
                                    }
                                    className={`
                                        border
                                        rounded-3xl
                                        p-5
                                        transition-all

                                        ${formData.audience ===
                                            "restaurants"
                                            ? "border-orange-500 bg-orange-50"
                                            : "border-gray-200 hover:border-orange-300"
                                        }
                                    `}
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
                                            mx-auto
                                        "
                                    >
                                        <FaStore />
                                    </div>

                                    <h3
                                        className="
                                            text-center
                                            font-bold
                                            text-gray-900
                                            mt-4
                                        "
                                    >
                                        Restaurants
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {stats.restaurants} Users
                                    </p>
                                </button>

                                {/* DELIVERY */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData({
                                            ...formData,
                                            audience:
                                                "delivery",
                                        })
                                    }
                                    className={`
                                        border
                                        rounded-3xl
                                        p-5
                                        transition-all

                                        ${formData.audience ===
                                            "delivery"
                                            ? "border-orange-500 bg-orange-50"
                                            : "border-gray-200 hover:border-orange-300"
                                        }
                                    `}
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
                                            mx-auto
                                        "
                                    >
                                        <FaMotorcycle />
                                    </div>

                                    <h3
                                        className="
                                            text-center
                                            font-bold
                                            text-gray-900
                                            mt-4
                                        "
                                    >
                                        Delivery
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {stats.delivery} Users
                                    </p>
                                </button>

                                {/* ALL USERS */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData({
                                            ...formData,
                                            audience: "all",
                                        })
                                    }
                                    className={`
                                        border
                                        rounded-3xl
                                        p-5
                                        transition-all

                                        ${formData.audience ===
                                            "all"
                                            ? "border-orange-500 bg-orange-50"
                                            : "border-gray-200 hover:border-orange-300"
                                        }
                                    `}
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
                                            mx-auto
                                        "
                                    >
                                        <FaUserFriends />
                                    </div>

                                    <h3
                                        className="
                                            text-center
                                            font-bold
                                            text-gray-900
                                            mt-4
                                        "
                                    >
                                        All Users
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {stats.all} Users
                                    </p>
                                </button>
                            </div>
                        </div>

                        {/* TITLE */}

                        <div>
                            <label
                                className="
                                    block
                                    mb-3
                                    font-bold
                                    text-gray-700
                                "
                            >
                                Notification Title
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
                                <FaHeading className="text-orange-500" />

                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter notification title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        outline-none
                                        bg-transparent
                                    "
                                />
                            </div>
                        </div>

                        {/* MESSAGE */}

                        <div>
                            <label
                                className="
                                    block
                                    mb-3
                                    font-bold
                                    text-gray-700
                                "
                            >
                                Notification Message
                            </label>

                            <div
                                className="
                                    border
                                    border-gray-200
                                    rounded-2xl
                                    p-5
                                "
                            >
                                <div className="flex items-start gap-3">
                                    <FaAlignLeft className="text-orange-500 mt-1" />

                                    <textarea
                                        rows="7"
                                        name="message"
                                        placeholder="Write your notification message..."
                                        value={
                                            formData.message
                                        }
                                        onChange={handleChange}
                                        className="
                                            w-full
                                            outline-none
                                            resize-none
                                            bg-transparent
                                        "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ROW */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-6
                            "
                        >
                            {/* DELIVERY TYPE */}

                            <div>
                                <label
                                    className="
                                        block
                                        mb-3
                                        font-bold
                                        text-gray-700
                                    "
                                >
                                    Delivery Type
                                </label>

                                <select
                                    name="deliveryType"
                                    value={
                                        formData.deliveryType
                                    }
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        border
                                        border-gray-200
                                        rounded-2xl
                                        px-5
                                        py-4
                                        outline-none
                                    "
                                >
                                    <option value="instant">
                                        Send Instantly
                                    </option>

                                    <option value="schedule">
                                        Schedule Notification
                                    </option>
                                </select>
                            </div>

                            {/* DATE */}

                            <div>
                                <label
                                    className="
                                        block
                                        mb-3
                                        font-bold
                                        text-gray-700
                                    "
                                >
                                    Schedule Date
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
                                    <FaCalendarAlt className="text-orange-500" />

                                    <input
                                        type="datetime-local"
                                        name="scheduledDate"
                                        value={
                                            formData.scheduledDate
                                        }
                                        onChange={handleChange}
                                        disabled={
                                            formData.deliveryType !==
                                            "schedule"
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

                        {/* CHANNEL */}

                        <div>
                            <label
                                className="
                                    block
                                    mb-3
                                    font-bold
                                    text-gray-700
                                "
                            >
                                Notification Channel
                            </label>

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    md:grid-cols-3
                                    gap-4
                                "
                            >
                                {[
                                    {
                                        name: "push",
                                        icon: <FaBell />,
                                        label:
                                            "Push Notification",
                                        bg: "bg-orange-100",
                                        text: "text-orange-500",
                                    },

                                    {
                                        name: "email",
                                        icon: <FaEnvelope />,
                                        label: "Email",
                                        bg: "bg-blue-100",
                                        text: "text-blue-500",
                                    },

                                    {
                                        name: "sms",
                                        icon: <FaMobileAlt />,
                                        label: "SMS",
                                        bg: "bg-green-100",
                                        text: "text-green-500",
                                    },
                                ].map((item) => (
                                    <button
                                        key={item.name}
                                        type="button"
                                        onClick={() =>
                                            setFormData({
                                                ...formData,
                                                channel:
                                                    item.name,
                                            })
                                        }
                                        className={`
                                            border
                                            rounded-3xl
                                            p-5
                                            transition-all

                                            ${formData.channel ===
                                                item.name
                                                ? "border-orange-500 bg-orange-50"
                                                : "border-gray-200"
                                            }
                                        `}
                                    >
                                        <div
                                            className={`
                                                w-14
                                                h-14
                                                rounded-2xl
                                                ${item.bg}
                                                ${item.text}
                                                flex
                                                items-center
                                                justify-center
                                                text-2xl
                                                mx-auto
                                            `}
                                        >
                                            {item.icon}
                                        </div>

                                        <h3
                                            className="
                                                text-center
                                                font-bold
                                                text-gray-900
                                                mt-4
                                            "
                                        >
                                            {item.label}
                                        </h3>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* IMAGE */}

                        <div>
                            <label
                                className="
                                    block
                                    mb-3
                                    font-bold
                                    text-gray-700
                                "
                            >
                                Upload Banner Image
                            </label>

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
                                {previewImage ? (
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        className="
                                            w-full
                                            h-64
                                            object-cover
                                            rounded-3xl
                                        "
                                    />
                                ) : (
                                    <>
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

                                        <h3
                                            className="
                                                text-xl
                                                font-bold
                                                text-gray-900
                                                mt-5
                                            "
                                        >
                                            Upload Notification
                                            Banner
                                        </h3>

                                        <p className="text-gray-500 mt-2 text-center">
                                            PNG, JPG or WEBP image
                                            supported
                                        </p>
                                    </>
                                )}

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={
                                        handleImageChange
                                    }
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </form>
                </div>

                {/* RIGHT SIDEBAR */}

                <div className="space-y-6">
                    {/* LIVE PREVIEW */}

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
                        {/* TOP */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
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
                                <FaBell />
                            </div>

                            <div
                                className="
                                    bg-white/20
                                    px-4
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-bold
                                "
                            >
                                LIVE PREVIEW
                            </div>
                        </div>

                        {/* IMAGE */}

                        {previewImage && (
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="
                                    w-full
                                    h-52
                                    object-cover
                                    rounded-3xl
                                    mt-6
                                "
                            />
                        )}

                        {/* CONTENT */}

                        <div className="mt-8">
                            <h2
                                className="
                                    text-3xl
                                    font-extrabold
                                "
                            >
                                {formData.title ||
                                    "Special Offer"}
                            </h2>

                            <p className="text-white/80 mt-4 leading-relaxed">
                                {formData.message ||
                                    "Your notification message preview will appear here."}
                            </p>
                        </div>

                        {/* FOOTER */}

                        <div
                            className="
                                mt-8
                                bg-white/10
                                rounded-2xl
                                p-4
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <FaGlobe />

                                <span className="font-semibold capitalize">
                                    {formData.channel} Notification
                                </span>
                            </div>

                            <p className="text-white/80 text-sm mt-2 capitalize">
                                Audience:{" "}
                                {formData.audience}
                            </p>
                        </div>
                    </div>

                    {/* QUICK INFO */}

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
                        <h2
                            className="
                                text-2xl
                                font-extrabold
                                text-gray-900
                                mb-6
                            "
                        >
                            Notification Tips
                        </h2>

                        <div className="space-y-5">
                            {[
                                {
                                    icon: (
                                        <FaCheckCircle />
                                    ),
                                    title: "Clear Message",
                                    desc: "Keep notification short and easy to understand",
                                    bg: "bg-orange-100",
                                    text: "text-orange-500",
                                },

                                {
                                    icon: <FaUsers />,
                                    title:
                                        "Right Audience",
                                    desc: "Send targeted notifications for better engagement",
                                    bg: "bg-blue-100",
                                    text: "text-blue-500",
                                },

                                {
                                    icon: (
                                        <FaCalendarAlt />
                                    ),
                                    title:
                                        "Schedule Timing",
                                    desc: "Schedule notifications during peak user activity",
                                    bg: "bg-green-100",
                                    text: "text-green-500",
                                },
                            ].map((tip, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <div
                                        className={`
                                            w-10
                                            h-10
                                            rounded-xl
                                            ${tip.bg}
                                            ${tip.text}
                                            flex
                                            items-center
                                            justify-center
                                        `}
                                    >
                                        {tip.icon}
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900">
                                            {tip.title}
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            {tip.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendNotification;