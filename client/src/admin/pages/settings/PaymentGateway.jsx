// /client/src/admin/pages/settings/PaymentGateway.jsx

// import { useState } from "react";

// import {
//     FaCreditCard,
//     FaPaypal,
//     FaUniversity,
//     FaWallet,
//     FaSave,
//     FaToggleOn,
//     FaKey,
//     FaLock,
//     FaMoneyCheckAlt,
//     FaShieldAlt,
//     FaCheckCircle,
//     FaGlobe,
//     FaCog,
//     FaMobileAlt,
// } from "react-icons/fa";

// const PaymentGateway = () => {
//     const [settings, setSettings] = useState({
//         stripeEnabled: true,
//         paypalEnabled: false,
//         razorpayEnabled: true,
//         codEnabled: true,
//         walletEnabled: true,

//         stripePublicKey: "",
//         stripeSecretKey: "",

//         razorpayKeyId: "",
//         razorpaySecret: "",

//         paypalClientId: "",
//         paypalSecret: "",

//         currency: "INR",
//         transactionFee: "2.5",
//         autoRefund: true,
//         securePayments: true,
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
//                         Payment Gateway Settings
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Configure payment gateways and transaction settings
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

//                     Save Settings
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
//                     {/* PAYMENT METHODS */}

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
//                                 Payment Methods
//                             </h2>

//                             <p className="text-gray-500 mt-2">
//                                 Enable or disable payment gateways
//                             </p>
//                         </div>

//                         {/* METHODS */}

//                         <div className="space-y-5">
//                             {/* STRIPE */}

//                             <div
//                                 className="
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
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
//                                         <FaCreditCard />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Stripe
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Accept international card payments
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("stripeEnabled")
//                                     }
//                                     className={`
//                     text-5xl

//                     ${settings.stripeEnabled
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* RAZORPAY */}

//                             <div
//                                 className="
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
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
//                                         <FaUniversity />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Razorpay
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             UPI, cards and Indian payments
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("razorpayEnabled")
//                                     }
//                                     className={`
//                     text-5xl

//                     ${settings.razorpayEnabled
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* PAYPAL */}

//                             <div
//                                 className="
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
//                 "
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className="
//                       w-14
//                       h-14
//                       rounded-2xl
//                       bg-sky-100
//                       text-sky-500
//                       flex
//                       items-center
//                       justify-center
//                       text-2xl
//                     "
//                                     >
//                                         <FaPaypal />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             PayPal
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             International wallet payments
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("paypalEnabled")
//                                     }
//                                     className={`
//                     text-5xl

//                     ${settings.paypalEnabled
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* WALLET */}

//                             <div
//                                 className="
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
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
//                                         <FaWallet />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Wallet Payments
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Allow users to pay via wallet balance
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("walletEnabled")
//                                     }
//                                     className={`
//                     text-5xl

//                     ${settings.walletEnabled
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* COD */}

//                             <div
//                                 className="
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
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
//                                         <FaMoneyCheckAlt />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Cash On Delivery
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Allow cash payments on delivery
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
//                         </div>
//                     </div>

//                     {/* API KEYS */}

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
//                                 API Configuration
//                             </h2>

//                             <p className="text-gray-500 mt-2">
//                                 Configure API credentials for payment gateways
//                             </p>
//                         </div>

//                         {/* FORM */}

//                         <div className="space-y-8">
//                             {/* STRIPE */}

//                             <div>
//                                 <h3
//                                     className="
//                     text-lg
//                     font-bold
//                     text-gray-900
//                     mb-5
//                   "
//                                 >
//                                     Stripe API Keys
//                                 </h3>

//                                 <div className="space-y-5">
//                                     {/* PUBLIC KEY */}

//                                     <div>
//                                         <label className="block mb-3 font-bold text-gray-700">
//                                             Publishable Key
//                                         </label>

//                                         <div
//                                             className="
//                         flex
//                         items-center
//                         gap-3
//                         border
//                         border-gray-200
//                         rounded-2xl
//                         px-5
//                         py-4
//                       "
//                                         >
//                                             <FaKey className="text-blue-500" />

//                                             <input
//                                                 type="text"
//                                                 name="stripePublicKey"
//                                                 placeholder="Enter Stripe publishable key"
//                                                 value={settings.stripePublicKey}
//                                                 onChange={handleChange}
//                                                 className="
//                           w-full
//                           outline-none
//                           bg-transparent
//                         "
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* SECRET KEY */}

//                                     <div>
//                                         <label className="block mb-3 font-bold text-gray-700">
//                                             Secret Key
//                                         </label>

//                                         <div
//                                             className="
//                         flex
//                         items-center
//                         gap-3
//                         border
//                         border-gray-200
//                         rounded-2xl
//                         px-5
//                         py-4
//                       "
//                                         >
//                                             <FaLock className="text-red-500" />

//                                             <input
//                                                 type="password"
//                                                 name="stripeSecretKey"
//                                                 placeholder="Enter Stripe secret key"
//                                                 value={settings.stripeSecretKey}
//                                                 onChange={handleChange}
//                                                 className="
//                           w-full
//                           outline-none
//                           bg-transparent
//                         "
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* RAZORPAY */}

//                             <div>
//                                 <h3
//                                     className="
//                     text-lg
//                     font-bold
//                     text-gray-900
//                     mb-5
//                   "
//                                 >
//                                     Razorpay API Keys
//                                 </h3>

//                                 <div className="space-y-5">
//                                     {/* KEY ID */}

//                                     <div>
//                                         <label className="block mb-3 font-bold text-gray-700">
//                                             Key ID
//                                         </label>

//                                         <div
//                                             className="
//                         flex
//                         items-center
//                         gap-3
//                         border
//                         border-gray-200
//                         rounded-2xl
//                         px-5
//                         py-4
//                       "
//                                         >
//                                             <FaKey className="text-orange-500" />

//                                             <input
//                                                 type="text"
//                                                 name="razorpayKeyId"
//                                                 placeholder="Enter Razorpay key id"
//                                                 value={settings.razorpayKeyId}
//                                                 onChange={handleChange}
//                                                 className="
//                           w-full
//                           outline-none
//                           bg-transparent
//                         "
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* SECRET */}

//                                     <div>
//                                         <label className="block mb-3 font-bold text-gray-700">
//                                             Secret Key
//                                         </label>

//                                         <div
//                                             className="
//                         flex
//                         items-center
//                         gap-3
//                         border
//                         border-gray-200
//                         rounded-2xl
//                         px-5
//                         py-4
//                       "
//                                         >
//                                             <FaLock className="text-red-500" />

//                                             <input
//                                                 type="password"
//                                                 name="razorpaySecret"
//                                                 placeholder="Enter Razorpay secret key"
//                                                 value={settings.razorpaySecret}
//                                                 onChange={handleChange}
//                                                 className="
//                           w-full
//                           outline-none
//                           bg-transparent
//                         "
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* GLOBAL SETTINGS */}

//                             <div
//                                 className="
//                   grid
//                   grid-cols-1
//                   md:grid-cols-2
//                   gap-6
//                 "
//                             >
//                                 {/* CURRENCY */}

//                                 <div>
//                                     <label className="block mb-3 font-bold text-gray-700">
//                                         Default Currency
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
//                                         <FaGlobe className="text-green-500" />

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
//                                             <option value="INR">INR</option>
//                                             <option value="USD">USD</option>
//                                             <option value="EUR">EUR</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 {/* TRANSACTION FEE */}

//                                 <div>
//                                     <label className="block mb-3 font-bold text-gray-700">
//                                         Transaction Fee %
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
//                                         <FaCreditCard className="text-orange-500" />

//                                         <input
//                                             type="number"
//                                             name="transactionFee"
//                                             value={settings.transactionFee}
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
//                             <FaCreditCard />
//                         </div>

//                         {/* CONTENT */}

//                         <div className="mt-8">
//                             <h2
//                                 className="
//                   text-3xl
//                   font-extrabold
//                 "
//                             >
//                                 Secure Payments
//                             </h2>

//                             <p className="text-white/80 mt-4 leading-relaxed">
//                                 Manage online transactions and payment gateway security
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
//                                     Payment System Active
//                                 </span>
//                             </div>

//                             <p className="text-white/80 text-sm mt-2">
//                                 All payment gateways are securely configured
//                             </p>
//                         </div>
//                     </div>

//                     {/* SECURITY SETTINGS */}

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
//                             Security Controls
//                         </h2>

//                         <div className="space-y-5">
//                             {/* AUTO REFUND */}

//                             <div
//                                 className="
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
//                 "
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className="
//                       w-12
//                       h-12
//                       rounded-2xl
//                       bg-green-100
//                       text-green-500
//                       flex
//                       items-center
//                       justify-center
//                     "
//                                     >
//                                         <FaMoneyCheckAlt />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Auto Refund
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Process automatic refunds
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("autoRefund")
//                                     }
//                                     className={`
//                     text-5xl

//                     ${settings.autoRefund
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* SECURE PAYMENT */}

//                             <div
//                                 className="
//                   border
//                   border-gray-100
//                   rounded-3xl
//                   p-5
//                   flex
//                   items-center
//                   justify-between
//                 "
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className="
//                       w-12
//                       h-12
//                       rounded-2xl
//                       bg-red-100
//                       text-red-500
//                       flex
//                       items-center
//                       justify-center
//                     "
//                                     >
//                                         <FaShieldAlt />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Secure Payments
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Enable encrypted transactions
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() =>
//                                         toggleSwitch("securePayments")
//                                     }
//                                     className={`
//                     text-5xl

//                     ${settings.securePayments
//                                             ? "text-green-500"
//                                             : "text-gray-300"
//                                         }
//                   `}
//                                 >
//                                     <FaToggleOn />
//                                 </button>
//                             </div>

//                             {/* MOBILE PAYMENT */}

//                             <div
//                                 className="
//                   bg-orange-50
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className="
//                       w-12
//                       h-12
//                       rounded-2xl
//                       bg-orange-100
//                       text-orange-500
//                       flex
//                       items-center
//                       justify-center
//                     "
//                                     >
//                                         <FaMobileAlt />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Mobile Payments
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             UPI and mobile wallets supported
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* SETTINGS */}

//                             <div
//                                 className="
//                   bg-blue-50
//                   rounded-3xl
//                   p-5
//                 "
//                             >
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className="
//                       w-12
//                       h-12
//                       rounded-2xl
//                       bg-blue-100
//                       text-blue-500
//                       flex
//                       items-center
//                       justify-center
//                     "
//                                     >
//                                         <FaCog />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Gateway Config
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Multiple payment providers integrated
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaymentGateway;


// /client/src/admin/pages/settings/PaymentGateway.jsx

import { useEffect, useState } from "react";

import API from "../../../api/axios";

import toast from "react-hot-toast";

import {
    FaCreditCard,
    FaPaypal,
    FaUniversity,
    FaWallet,
    FaSave,
    FaToggleOn,
    FaKey,
    FaLock,
    FaMoneyCheckAlt,
    FaShieldAlt,
    FaCheckCircle,
    FaGlobe,
    FaCog,
    FaMobileAlt,
} from "react-icons/fa";

const PaymentGateway = () => {
    const [loading, setLoading] = useState(false);

    const [fetching, setFetching] = useState(true);

    const [settings, setSettings] = useState({
        stripeEnabled: true,
        paypalEnabled: false,
        razorpayEnabled: true,
        codEnabled: true,
        walletEnabled: true,

        stripePublicKey: "",
        stripeSecretKey: "",

        razorpayKeyId: "",
        razorpaySecret: "",

        paypalClientId: "",
        paypalSecret: "",

        currency: "INR",
        transactionFee: "2.5",

        autoRefund: true,
        securePayments: true,
    });

    // ================= FETCH SETTINGS =================

    const fetchSettings = async () => {
        try {
            setFetching(true);

            const { data } = await API.get(
                "/settings/payment"
            );

            if (data?.success) {
                setSettings(data.settings);
            }
        } catch (error) {
            console.log(error);

            toast.error("Failed to load payment settings");
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        fetchSettings();
    }, []);

    // ================= INPUT CHANGE =================

    const handleChange = (e) => {
        setSettings({
            ...settings,
            [e.target.name]: e.target.value,
        });
    };

    // ================= TOGGLE SWITCH =================

    const toggleSwitch = (field) => {
        setSettings({
            ...settings,
            [field]: !settings[field],
        });
    };

    // ================= SAVE SETTINGS =================

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const { data } = await API.put(
                "/settings/payment",
                settings
            );

            if (data?.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
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
                <div className="text-xl font-bold text-orange-500">
                    Loading Payment Settings...
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
                <div>
                    <h1
                        className="
                            text-3xl
                            md:text-4xl
                            font-extrabold
                            text-gray-900
                        "
                    >
                        Payment Gateway Settings
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Configure payment gateways and transaction settings
                    </p>
                </div>

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
                    <FaSave />

                    {loading ? "Saving..." : "Save Settings"}
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
                    {/* PAYMENT METHODS */}

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
                                Payment Methods
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Enable or disable payment gateways
                            </p>
                        </div>

                        <div className="space-y-5">
                            {/* STRIPE */}

                            <div className="border border-gray-100 rounded-3xl p-5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center text-2xl">
                                        <FaCreditCard />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900">
                                            Stripe
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Accept international card payments
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        toggleSwitch("stripeEnabled")
                                    }
                                    className={`text-5xl ${settings.stripeEnabled
                                        ? "text-green-500"
                                        : "text-gray-300"
                                        }`}
                                >
                                    <FaToggleOn />
                                </button>
                            </div>

                            {/* RAZORPAY */}

                            <div className="border border-gray-100 rounded-3xl p-5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl">
                                        <FaUniversity />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900">
                                            Razorpay
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            UPI, cards and Indian payments
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        toggleSwitch("razorpayEnabled")
                                    }
                                    className={`text-5xl ${settings.razorpayEnabled
                                        ? "text-green-500"
                                        : "text-gray-300"
                                        }`}
                                >
                                    <FaToggleOn />
                                </button>
                            </div>

                            {/* PAYPAL */}

                            <div className="border border-gray-100 rounded-3xl p-5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-500 flex items-center justify-center text-2xl">
                                        <FaPaypal />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900">
                                            PayPal
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            International wallet payments
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        toggleSwitch("paypalEnabled")
                                    }
                                    className={`text-5xl ${settings.paypalEnabled
                                        ? "text-green-500"
                                        : "text-gray-300"
                                        }`}
                                >
                                    <FaToggleOn />
                                </button>
                            </div>

                            {/* WALLET */}

                            <div className="border border-gray-100 rounded-3xl p-5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-500 flex items-center justify-center text-2xl">
                                        <FaWallet />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900">
                                            Wallet Payments
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Allow users to pay via wallet balance
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        toggleSwitch("walletEnabled")
                                    }
                                    className={`text-5xl ${settings.walletEnabled
                                        ? "text-green-500"
                                        : "text-gray-300"
                                        }`}
                                >
                                    <FaToggleOn />
                                </button>
                            </div>

                            {/* COD */}

                            <div className="border border-gray-100 rounded-3xl p-5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-500 flex items-center justify-center text-2xl">
                                        <FaMoneyCheckAlt />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900">
                                            Cash On Delivery
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Allow cash payments on delivery
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        toggleSwitch("codEnabled")
                                    }
                                    className={`text-5xl ${settings.codEnabled
                                        ? "text-green-500"
                                        : "text-gray-300"
                                        }`}
                                >
                                    <FaToggleOn />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}

                <div className="space-y-6">
                    {/* INFO CARD */}

                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-[32px] p-6 text-white shadow-lg">
                        <div className="w-16 h-16 rounded-3xl bg-white/20 flex items-center justify-center text-3xl">
                            <FaCreditCard />
                        </div>

                        <div className="mt-8">
                            <h2 className="text-3xl font-extrabold">
                                Secure Payments
                            </h2>

                            <p className="text-white/80 mt-4 leading-relaxed">
                                Manage online transactions and payment gateway security
                            </p>
                        </div>

                        <div className="mt-8 bg-white/10 rounded-2xl p-4">
                            <div className="flex items-center gap-3">
                                <FaCheckCircle />

                                <span className="font-semibold">
                                    Payment System Active
                                </span>
                            </div>

                            <p className="text-white/80 text-sm mt-2">
                                All payment gateways are securely configured
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentGateway;