// // /client/src/admin/pages/payments/PaymentSettings.jsx


// import { useState } from "react";

// import {
//     FaCreditCard,
//     FaUniversity,
//     FaPaypal,
//     FaWallet,
//     FaMoneyCheckAlt,
//     FaBell,
//     FaLock,
//     FaSave,
//     FaShieldAlt,
// } from "react-icons/fa";

// const PaymentSettings = () => {
//     const [settings, setSettings] = useState({
//         stripe: true,
//         paypal: true,
//         razorpay: true,
//         cod: false,

//         autoWithdraw: true,
//         emailNotification: true,
//         smsNotification: false,

//         transactionFee: "5",
//         minWithdraw: "100",
//         currency: "USD",
//     });

//     const handleToggle = (field) => {
//         setSettings({
//             ...settings,
//             [field]: !settings[field],
//         });
//     };

//     const handleChange = (e) => {
//         setSettings({
//             ...settings,
//             [e.target.name]: e.target.value,
//         });
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
//                         Payment Settings
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Configure payment gateways, withdrawals and transaction settings
//                     </p>
//                 </div>

//                 {/* BUTTON */}

//                 <button
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

//                     Save Settings
//                 </button>
//             </div>

//             {/* PAYMENT GATEWAYS */}

//             <div
//                 className="
//           bg-white
//           rounded-[32px]
//           border
//           border-gray-100
//           shadow-sm
//           p-6
//         "
//             >
//                 {/* TITLE */}

//                 <div className="mb-8">
//                     <h2
//                         className="
//               text-2xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         Payment Gateways
//                     </h2>

//                     <p className="text-gray-500 mt-2">
//                         Enable or disable payment methods
//                     </p>
//                 </div>

//                 {/* GATEWAY GRID */}

//                 <div
//                     className="
//             grid
//             grid-cols-1
//             md:grid-cols-2
//             gap-6
//           "
//                 >
//                     {/* STRIPE */}

//                     <div
//                         className="
//               border
//               border-gray-100
//               rounded-3xl
//               p-6
//               flex
//               items-center
//               justify-between
//             "
//                     >
//                         <div className="flex items-center gap-5">
//                             <div
//                                 className="
//                   w-16
//                   h-16
//                   rounded-3xl
//                   bg-blue-100
//                   text-blue-500
//                   flex
//                   items-center
//                   justify-center
//                   text-3xl
//                 "
//                             >
//                                 <FaCreditCard />
//                             </div>

//                             <div>
//                                 <h3
//                                     className="
//                     text-xl
//                     font-bold
//                     text-gray-900
//                   "
//                                 >
//                                     Stripe
//                                 </h3>

//                                 <p className="text-gray-500 mt-1">
//                                     Card payments and subscriptions
//                                 </p>
//                             </div>
//                         </div>

//                         <button
//                             onClick={() => handleToggle("stripe")}
//                             className={`
//                 relative
//                 w-16
//                 h-9
//                 rounded-full
//                 transition-all

//                 ${settings.stripe
//                                     ? "bg-orange-500"
//                                     : "bg-gray-300"
//                                 }
//               `}
//                         >
//                             <div
//                                 className={`
//                   absolute
//                   top-1
//                   w-7
//                   h-7
//                   bg-white
//                   rounded-full
//                   transition-all

//                   ${settings.stripe
//                                         ? "left-8"
//                                         : "left-1"
//                                     }
//                 `}
//                             />
//                         </button>
//                     </div>

//                     {/* PAYPAL */}

//                     <div
//                         className="
//               border
//               border-gray-100
//               rounded-3xl
//               p-6
//               flex
//               items-center
//               justify-between
//             "
//                     >
//                         <div className="flex items-center gap-5">
//                             <div
//                                 className="
//                   w-16
//                   h-16
//                   rounded-3xl
//                   bg-indigo-100
//                   text-indigo-500
//                   flex
//                   items-center
//                   justify-center
//                   text-3xl
//                 "
//                             >
//                                 <FaPaypal />
//                             </div>

//                             <div>
//                                 <h3
//                                     className="
//                     text-xl
//                     font-bold
//                     text-gray-900
//                   "
//                                 >
//                                     PayPal
//                                 </h3>

//                                 <p className="text-gray-500 mt-1">
//                                     International online payments
//                                 </p>
//                             </div>
//                         </div>

//                         <button
//                             onClick={() => handleToggle("paypal")}
//                             className={`
//                 relative
//                 w-16
//                 h-9
//                 rounded-full
//                 transition-all

//                 ${settings.paypal
//                                     ? "bg-orange-500"
//                                     : "bg-gray-300"
//                                 }
//               `}
//                         >
//                             <div
//                                 className={`
//                   absolute
//                   top-1
//                   w-7
//                   h-7
//                   bg-white
//                   rounded-full
//                   transition-all

//                   ${settings.paypal
//                                         ? "left-8"
//                                         : "left-1"
//                                     }
//                 `}
//                             />
//                         </button>
//                     </div>

//                     {/* RAZORPAY */}

//                     <div
//                         className="
//               border
//               border-gray-100
//               rounded-3xl
//               p-6
//               flex
//               items-center
//               justify-between
//             "
//                     >
//                         <div className="flex items-center gap-5">
//                             <div
//                                 className="
//                   w-16
//                   h-16
//                   rounded-3xl
//                   bg-green-100
//                   text-green-500
//                   flex
//                   items-center
//                   justify-center
//                   text-3xl
//                 "
//                             >
//                                 <FaUniversity />
//                             </div>

//                             <div>
//                                 <h3
//                                     className="
//                     text-xl
//                     font-bold
//                     text-gray-900
//                   "
//                                 >
//                                     Razorpay
//                                 </h3>

//                                 <p className="text-gray-500 mt-1">
//                                     UPI, wallet and banking payments
//                                 </p>
//                             </div>
//                         </div>

//                         <button
//                             onClick={() => handleToggle("razorpay")}
//                             className={`
//                 relative
//                 w-16
//                 h-9
//                 rounded-full
//                 transition-all

//                 ${settings.razorpay
//                                     ? "bg-orange-500"
//                                     : "bg-gray-300"
//                                 }
//               `}
//                         >
//                             <div
//                                 className={`
//                   absolute
//                   top-1
//                   w-7
//                   h-7
//                   bg-white
//                   rounded-full
//                   transition-all

//                   ${settings.razorpay
//                                         ? "left-8"
//                                         : "left-1"
//                                     }
//                 `}
//                             />
//                         </button>
//                     </div>

//                     {/* COD */}

//                     <div
//                         className="
//               border
//               border-gray-100
//               rounded-3xl
//               p-6
//               flex
//               items-center
//               justify-between
//             "
//                     >
//                         <div className="flex items-center gap-5">
//                             <div
//                                 className="
//                   w-16
//                   h-16
//                   rounded-3xl
//                   bg-yellow-100
//                   text-yellow-500
//                   flex
//                   items-center
//                   justify-center
//                   text-3xl
//                 "
//                             >
//                                 <FaWallet />
//                             </div>

//                             <div>
//                                 <h3
//                                     className="
//                     text-xl
//                     font-bold
//                     text-gray-900
//                   "
//                                 >
//                                     Cash On Delivery
//                                 </h3>

//                                 <p className="text-gray-500 mt-1">
//                                     Accept cash payments on delivery
//                                 </p>
//                             </div>
//                         </div>

//                         <button
//                             onClick={() => handleToggle("cod")}
//                             className={`
//                 relative
//                 w-16
//                 h-9
//                 rounded-full
//                 transition-all

//                 ${settings.cod
//                                     ? "bg-orange-500"
//                                     : "bg-gray-300"
//                                 }
//               `}
//                         >
//                             <div
//                                 className={`
//                   absolute
//                   top-1
//                   w-7
//                   h-7
//                   bg-white
//                   rounded-full
//                   transition-all

//                   ${settings.cod
//                                         ? "left-8"
//                                         : "left-1"
//                                     }
//                 `}
//                             />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* TRANSACTION SETTINGS */}

//             <div
//                 className="
//           grid
//           grid-cols-1
//           xl:grid-cols-2
//           gap-6
//         "
//             >
//                 {/* LEFT SIDE */}

//                 <div
//                     className="
//             bg-white
//             rounded-[32px]
//             border
//             border-gray-100
//             shadow-sm
//             p-6
//             space-y-6
//           "
//                 >
//                     <div>
//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//               "
//                         >
//                             Transaction Settings
//                         </h2>

//                         <p className="text-gray-500 mt-2">
//                             Configure transaction fees and withdrawal limits
//                         </p>
//                     </div>

//                     {/* FIELDS */}

//                     <div className="space-y-5">
//                         {/* FEE */}

//                         <div>
//                             <label className="block mb-2 font-semibold text-gray-700">
//                                 Transaction Fee (%)
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
//                                 <FaMoneyCheckAlt className="text-orange-500" />

//                                 <input
//                                     type="number"
//                                     name="transactionFee"
//                                     value={settings.transactionFee}
//                                     onChange={handleChange}
//                                     className="
//                     w-full
//                     outline-none
//                     bg-transparent
//                   "
//                                 />
//                             </div>
//                         </div>

//                         {/* MIN WITHDRAW */}

//                         <div>
//                             <label className="block mb-2 font-semibold text-gray-700">
//                                 Minimum Withdrawal Amount
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
//                                 <FaWallet className="text-orange-500" />

//                                 <input
//                                     type="number"
//                                     name="minWithdraw"
//                                     value={settings.minWithdraw}
//                                     onChange={handleChange}
//                                     className="
//                     w-full
//                     outline-none
//                     bg-transparent
//                   "
//                                 />
//                             </div>
//                         </div>

//                         {/* CURRENCY */}

//                         <div>
//                             <label className="block mb-2 font-semibold text-gray-700">
//                                 Currency
//                             </label>

//                             <select
//                                 name="currency"
//                                 value={settings.currency}
//                                 onChange={handleChange}
//                                 className="
//                   w-full
//                   border
//                   border-gray-200
//                   rounded-2xl
//                   px-5
//                   py-4
//                   outline-none
//                 "
//                             >
//                                 <option value="USD">USD</option>

//                                 <option value="INR">INR</option>

//                                 <option value="EUR">EUR</option>

//                                 <option value="GBP">GBP</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>

//                 {/* RIGHT SIDE */}

//                 <div
//                     className="
//             bg-white
//             rounded-[32px]
//             border
//             border-gray-100
//             shadow-sm
//             p-6
//             space-y-6
//           "
//                 >
//                     <div>
//                         <h2
//                             className="
//                 text-2xl
//                 font-extrabold
//                 text-gray-900
//               "
//                         >
//                             Security & Notifications
//                         </h2>

//                         <p className="text-gray-500 mt-2">
//                             Manage alerts and payment security settings
//                         </p>
//                     </div>

//                     {/* TOGGLES */}

//                     <div className="space-y-5">
//                         {/* AUTO WITHDRAW */}

//                         <div
//                             className="
//                 flex
//                 items-center
//                 justify-between
//                 border
//                 border-gray-100
//                 rounded-2xl
//                 p-5
//               "
//                         >
//                             <div className="flex items-center gap-4">
//                                 <div
//                                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-orange-100
//                     text-orange-500
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
//                   "
//                                 >
//                                     <FaWallet />
//                                 </div>

//                                 <div>
//                                     <h3 className="font-bold text-gray-900">
//                                         Auto Withdraw
//                                     </h3>

//                                     <p className="text-gray-500 text-sm mt-1">
//                                         Automatically transfer restaurant earnings
//                                     </p>
//                                 </div>
//                             </div>

//                             <button
//                                 onClick={() => handleToggle("autoWithdraw")}
//                                 className={`
//                   relative
//                   w-16
//                   h-9
//                   rounded-full
//                   transition-all

//                   ${settings.autoWithdraw
//                                         ? "bg-orange-500"
//                                         : "bg-gray-300"
//                                     }
//                 `}
//                             >
//                                 <div
//                                     className={`
//                     absolute
//                     top-1
//                     w-7
//                     h-7
//                     bg-white
//                     rounded-full
//                     transition-all

//                     ${settings.autoWithdraw
//                                             ? "left-8"
//                                             : "left-1"
//                                         }
//                   `}
//                                 />
//                             </button>
//                         </div>

//                         {/* EMAIL */}

//                         <div
//                             className="
//                 flex
//                 items-center
//                 justify-between
//                 border
//                 border-gray-100
//                 rounded-2xl
//                 p-5
//               "
//                         >
//                             <div className="flex items-center gap-4">
//                                 <div
//                                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-blue-100
//                     text-blue-500
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
//                   "
//                                 >
//                                     <FaBell />
//                                 </div>

//                                 <div>
//                                     <h3 className="font-bold text-gray-900">
//                                         Email Notifications
//                                     </h3>

//                                     <p className="text-gray-500 text-sm mt-1">
//                                         Receive payment alerts via email
//                                     </p>
//                                 </div>
//                             </div>

//                             <button
//                                 onClick={() =>
//                                     handleToggle("emailNotification")
//                                 }
//                                 className={`
//                   relative
//                   w-16
//                   h-9
//                   rounded-full
//                   transition-all

//                   ${settings.emailNotification
//                                         ? "bg-orange-500"
//                                         : "bg-gray-300"
//                                     }
//                 `}
//                             >
//                                 <div
//                                     className={`
//                     absolute
//                     top-1
//                     w-7
//                     h-7
//                     bg-white
//                     rounded-full
//                     transition-all

//                     ${settings.emailNotification
//                                             ? "left-8"
//                                             : "left-1"
//                                         }
//                   `}
//                                 />
//                             </button>
//                         </div>

//                         {/* SMS */}

//                         <div
//                             className="
//                 flex
//                 items-center
//                 justify-between
//                 border
//                 border-gray-100
//                 rounded-2xl
//                 p-5
//               "
//                         >
//                             <div className="flex items-center gap-4">
//                                 <div
//                                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-green-100
//                     text-green-500
//                     flex
//                     items-center
//                     justify-center
//                     text-2xl
//                   "
//                                 >
//                                     <FaBell />
//                                 </div>

//                                 <div>
//                                     <h3 className="font-bold text-gray-900">
//                                         SMS Notifications
//                                     </h3>

//                                     <p className="text-gray-500 text-sm mt-1">
//                                         Receive payment alerts via SMS
//                                     </p>
//                                 </div>
//                             </div>

//                             <button
//                                 onClick={() =>
//                                     handleToggle("smsNotification")
//                                 }
//                                 className={`
//                   relative
//                   w-16
//                   h-9
//                   rounded-full
//                   transition-all

//                   ${settings.smsNotification
//                                         ? "bg-orange-500"
//                                         : "bg-gray-300"
//                                     }
//                 `}
//                             >
//                                 <div
//                                     className={`
//                     absolute
//                     top-1
//                     w-7
//                     h-7
//                     bg-white
//                     rounded-full
//                     transition-all

//                     ${settings.smsNotification
//                                             ? "left-8"
//                                             : "left-1"
//                                         }
//                   `}
//                                 />
//                             </button>
//                         </div>

//                         {/* SECURITY CARD */}

//                         <div
//                             className="
//                 bg-gradient-to-r
//                 from-orange-500
//                 to-orange-400
//                 rounded-3xl
//                 p-6
//                 text-white
//                 mt-4
//               "
//                         >
//                             <div className="flex items-center gap-4">
//                                 <div
//                                     className="
//                     w-16
//                     h-16
//                     rounded-3xl
//                     bg-white/20
//                     flex
//                     items-center
//                     justify-center
//                     text-3xl
//                   "
//                                 >
//                                     <FaShieldAlt />
//                                 </div>

//                                 <div>
//                                     <h3 className="text-2xl font-extrabold">
//                                         Payment Security
//                                     </h3>

//                                     <p className="text-white/80 mt-2">
//                                         SSL encryption and fraud protection enabled
//                                     </p>
//                                 </div>
//                             </div>

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   gap-3
//                   mt-6
//                   bg-white/10
//                   px-5
//                   py-4
//                   rounded-2xl
//                 "
//                             >
//                                 <FaLock />

//                                 <span className="font-semibold">
//                                     Secure payment processing active
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaymentSettings;



// /client/src/admin/pages/payments/PaymentSettings.jsx

import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import {
    FaCreditCard,
    FaUniversity,
    FaPaypal,
    FaWallet,
    FaMoneyCheckAlt,
    FaBell,
    FaLock,
    FaSave,
    FaShieldAlt,
} from "react-icons/fa";

const PaymentSettings = () => {

    const [loading, setLoading] = useState(false);

    const [fetching, setFetching] = useState(true);

    const [settings, setSettings] = useState({
        stripe: true,
        paypal: true,
        razorpay: true,
        cod: false,

        autoWithdraw: true,
        emailNotification: true,
        smsNotification: false,

        transactionFee: "5",
        minWithdraw: "100",
        currency: "USD",
    });

    // =========================================
    // GET PAYMENT SETTINGS
    // =========================================

    const getPaymentSettings = async () => {
        try {

            setFetching(true);

            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/admin/payment-settings`,
                {
                    withCredentials: true,
                }
            );

            if (data?.success) {
                setSettings(data.settings);
            }

        } catch (error) {

            console.log(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to load payment settings"
            );

        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        getPaymentSettings();
    }, []);

    // =========================================
    // TOGGLE SWITCH
    // =========================================

    const handleToggle = (field) => {
        setSettings((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    // =========================================
    // INPUT CHANGE
    // =========================================

    const handleChange = (e) => {
        setSettings({
            ...settings,
            [e.target.name]: e.target.value,
        });
    };

    // =========================================
    // SAVE SETTINGS
    // =========================================

    const handleSaveSettings = async () => {

        try {

            setLoading(true);

            const { data } = await axios.put(
                `${import.meta.env.VITE_API_URL}/api/admin/payment-settings`,
                settings,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },

                    withCredentials: true,
                }
            );

            if (data?.success) {
                toast.success(data.message);
            }

        } catch (error) {

            console.log(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to save settings"
            );

        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <div className="text-center">
                    <div
                        className="
              w-16
              h-16
              border-4
              border-orange-500
              border-t-transparent
              rounded-full
              animate-spin
              mx-auto
            "
                    />

                    <h2 className="mt-5 text-xl font-bold text-gray-700">
                        Loading Payment Settings...
                    </h2>
                </div>
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
                        Payment Settings
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Configure payment gateways, withdrawals and transaction settings
                    </p>
                </div>

                {/* BUTTON */}

                <button
                    onClick={handleSaveSettings}
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
                    <FaSave />

                    {loading ? "Saving..." : "Save Settings"}
                </button>
            </div>

            {/* PAYMENT GATEWAYS */}

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
                {/* TITLE */}

                <div className="mb-8">

                    <h2
                        className="
              text-2xl
              font-extrabold
              text-gray-900
            "
                    >
                        Payment Gateways
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Enable or disable payment methods
                    </p>
                </div>

                {/* GATEWAY GRID */}

                <div
                    className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
                >
                    {/* STRIPE */}

                    <div
                        className="
              border
              border-gray-100
              rounded-3xl
              p-6
              flex
              items-center
              justify-between
            "
                    >
                        <div className="flex items-center gap-5">

                            <div
                                className="
                  w-16
                  h-16
                  rounded-3xl
                  bg-blue-100
                  text-blue-500
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
                            >
                                <FaCreditCard />
                            </div>

                            <div>

                                <h3
                                    className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                                >
                                    Stripe
                                </h3>

                                <p className="text-gray-500 mt-1">
                                    Card payments and subscriptions
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleToggle("stripe")}
                            className={`
                relative
                w-16
                h-9
                rounded-full
                transition-all

                ${settings.stripe
                                    ? "bg-orange-500"
                                    : "bg-gray-300"
                                }
              `}
                        >
                            <div
                                className={`
                  absolute
                  top-1
                  w-7
                  h-7
                  bg-white
                  rounded-full
                  transition-all

                  ${settings.stripe
                                        ? "left-8"
                                        : "left-1"
                                    }
                `}
                            />
                        </button>
                    </div>

                    {/* PAYPAL */}

                    <div
                        className="
              border
              border-gray-100
              rounded-3xl
              p-6
              flex
              items-center
              justify-between
            "
                    >
                        <div className="flex items-center gap-5">

                            <div
                                className="
                  w-16
                  h-16
                  rounded-3xl
                  bg-indigo-100
                  text-indigo-500
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
                            >
                                <FaPaypal />
                            </div>

                            <div>

                                <h3
                                    className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                                >
                                    PayPal
                                </h3>

                                <p className="text-gray-500 mt-1">
                                    International online payments
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleToggle("paypal")}
                            className={`
                relative
                w-16
                h-9
                rounded-full
                transition-all

                ${settings.paypal
                                    ? "bg-orange-500"
                                    : "bg-gray-300"
                                }
              `}
                        >
                            <div
                                className={`
                  absolute
                  top-1
                  w-7
                  h-7
                  bg-white
                  rounded-full
                  transition-all

                  ${settings.paypal
                                        ? "left-8"
                                        : "left-1"
                                    }
                `}
                            />
                        </button>
                    </div>

                    {/* RAZORPAY */}

                    <div
                        className="
              border
              border-gray-100
              rounded-3xl
              p-6
              flex
              items-center
              justify-between
            "
                    >
                        <div className="flex items-center gap-5">

                            <div
                                className="
                  w-16
                  h-16
                  rounded-3xl
                  bg-green-100
                  text-green-500
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
                            >
                                <FaUniversity />
                            </div>

                            <div>

                                <h3
                                    className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                                >
                                    Razorpay
                                </h3>

                                <p className="text-gray-500 mt-1">
                                    UPI, wallet and banking payments
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleToggle("razorpay")}
                            className={`
                relative
                w-16
                h-9
                rounded-full
                transition-all

                ${settings.razorpay
                                    ? "bg-orange-500"
                                    : "bg-gray-300"
                                }
              `}
                        >
                            <div
                                className={`
                  absolute
                  top-1
                  w-7
                  h-7
                  bg-white
                  rounded-full
                  transition-all

                  ${settings.razorpay
                                        ? "left-8"
                                        : "left-1"
                                    }
                `}
                            />
                        </button>
                    </div>

                    {/* COD */}

                    <div
                        className="
              border
              border-gray-100
              rounded-3xl
              p-6
              flex
              items-center
              justify-between
            "
                    >
                        <div className="flex items-center gap-5">

                            <div
                                className="
                  w-16
                  h-16
                  rounded-3xl
                  bg-yellow-100
                  text-yellow-500
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
                            >
                                <FaWallet />
                            </div>

                            <div>

                                <h3
                                    className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                                >
                                    Cash On Delivery
                                </h3>

                                <p className="text-gray-500 mt-1">
                                    Accept cash payments on delivery
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleToggle("cod")}
                            className={`
                relative
                w-16
                h-9
                rounded-full
                transition-all

                ${settings.cod
                                    ? "bg-orange-500"
                                    : "bg-gray-300"
                                }
              `}
                        >
                            <div
                                className={`
                  absolute
                  top-1
                  w-7
                  h-7
                  bg-white
                  rounded-full
                  transition-all

                  ${settings.cod
                                        ? "left-8"
                                        : "left-1"
                                    }
                `}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* TRANSACTION SETTINGS */}

            <div
                className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
            >
                {/* LEFT SIDE */}

                <div
                    className="
            bg-white
            rounded-[32px]
            border
            border-gray-100
            shadow-sm
            p-6
            space-y-6
          "
                >
                    <div>

                        <h2
                            className="
                text-2xl
                font-extrabold
                text-gray-900
              "
                        >
                            Transaction Settings
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Configure transaction fees and withdrawal limits
                        </p>
                    </div>

                    {/* FIELDS */}

                    <div className="space-y-5">
                        {/* FEE */}

                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Transaction Fee (%)
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
                                <FaMoneyCheckAlt className="text-orange-500" />

                                <input
                                    type="number"
                                    name="transactionFee"
                                    value={settings.transactionFee}
                                    onChange={handleChange}
                                    className="
                    w-full
                    outline-none
                    bg-transparent
                  "
                                />
                            </div>
                        </div>

                        {/* MIN WITHDRAW */}

                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Minimum Withdrawal Amount
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
                                <FaWallet className="text-orange-500" />

                                <input
                                    type="number"
                                    name="minWithdraw"
                                    value={settings.minWithdraw}
                                    onChange={handleChange}
                                    className="
                    w-full
                    outline-none
                    bg-transparent
                  "
                                />
                            </div>
                        </div>

                        {/* CURRENCY */}

                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Currency
                            </label>

                            <select
                                name="currency"
                                value={settings.currency}
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
                                <option value="USD">USD</option>

                                <option value="INR">INR</option>

                                <option value="EUR">EUR</option>

                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}

                <div
                    className="
            bg-white
            rounded-[32px]
            border
            border-gray-100
            shadow-sm
            p-6
            space-y-6
          "
                >
                    <div>

                        <h2
                            className="
                text-2xl
                font-extrabold
                text-gray-900
              "
                        >
                            Security & Notifications
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Manage alerts and payment security settings
                        </p>
                    </div>

                    {/* TOGGLES */}

                    <div className="space-y-5">

                        {/* AUTO WITHDRAW */}

                        <div
                            className="
                flex
                items-center
                justify-between
                border
                border-gray-100
                rounded-2xl
                p-5
              "
                        >
                            <div className="flex items-center gap-4">

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
                  "
                                >
                                    <FaWallet />
                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-900">
                                        Auto Withdraw
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Automatically transfer restaurant earnings
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleToggle("autoWithdraw")}
                                className={`
                  relative
                  w-16
                  h-9
                  rounded-full
                  transition-all

                  ${settings.autoWithdraw
                                        ? "bg-orange-500"
                                        : "bg-gray-300"
                                    }
                `}
                            >
                                <div
                                    className={`
                    absolute
                    top-1
                    w-7
                    h-7
                    bg-white
                    rounded-full
                    transition-all

                    ${settings.autoWithdraw
                                            ? "left-8"
                                            : "left-1"
                                        }
                  `}
                                />
                            </button>
                        </div>

                        {/* EMAIL */}

                        <div
                            className="
                flex
                items-center
                justify-between
                border
                border-gray-100
                rounded-2xl
                p-5
              "
                        >
                            <div className="flex items-center gap-4">

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
                  "
                                >
                                    <FaBell />
                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-900">
                                        Email Notifications
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Receive payment alerts via email
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() =>
                                    handleToggle("emailNotification")
                                }
                                className={`
                  relative
                  w-16
                  h-9
                  rounded-full
                  transition-all

                  ${settings.emailNotification
                                        ? "bg-orange-500"
                                        : "bg-gray-300"
                                    }
                `}
                            >
                                <div
                                    className={`
                    absolute
                    top-1
                    w-7
                    h-7
                    bg-white
                    rounded-full
                    transition-all

                    ${settings.emailNotification
                                            ? "left-8"
                                            : "left-1"
                                        }
                  `}
                                />
                            </button>
                        </div>

                        {/* SMS */}

                        <div
                            className="
                flex
                items-center
                justify-between
                border
                border-gray-100
                rounded-2xl
                p-5
              "
                        >
                            <div className="flex items-center gap-4">

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
                  "
                                >
                                    <FaBell />
                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-900">
                                        SMS Notifications
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Receive payment alerts via SMS
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() =>
                                    handleToggle("smsNotification")
                                }
                                className={`
                  relative
                  w-16
                  h-9
                  rounded-full
                  transition-all

                  ${settings.smsNotification
                                        ? "bg-orange-500"
                                        : "bg-gray-300"
                                    }
                `}
                            >
                                <div
                                    className={`
                    absolute
                    top-1
                    w-7
                    h-7
                    bg-white
                    rounded-full
                    transition-all

                    ${settings.smsNotification
                                            ? "left-8"
                                            : "left-1"
                                        }
                  `}
                                />
                            </button>
                        </div>

                        {/* SECURITY CARD */}

                        <div
                            className="
                bg-gradient-to-r
                from-orange-500
                to-orange-400
                rounded-3xl
                p-6
                text-white
                mt-4
              "
                        >
                            <div className="flex items-center gap-4">

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
                                    <FaShieldAlt />
                                </div>

                                <div>

                                    <h3 className="text-2xl font-extrabold">
                                        Payment Security
                                    </h3>

                                    <p className="text-white/80 mt-2">
                                        SSL encryption and fraud protection enabled
                                    </p>
                                </div>
                            </div>

                            <div
                                className="
                  flex
                  items-center
                  gap-3
                  mt-6
                  bg-white/10
                  px-5
                  py-4
                  rounded-2xl
                "
                            >
                                <FaLock />

                                <span className="font-semibold">
                                    Secure payment processing active
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSettings;