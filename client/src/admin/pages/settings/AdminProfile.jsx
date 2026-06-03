// // /client/src/admin/pages/settings/AdminProfile.jsx

// import { useState } from "react";

// import {
//     FaUserShield,
//     FaEnvelope,
//     FaPhoneAlt,
//     FaMapMarkerAlt,
//     FaCamera,
//     FaLock,
//     FaSave,
//     FaUser,
//     FaGlobe,
//     FaCalendarAlt,
//     FaEdit,
//     FaCheckCircle,
//     FaShieldAlt,
//     FaKey,
//     FaBell,
// } from "react-icons/fa";

// const AdminProfile = () => {
//     const [profile, setProfile] = useState({
//         fullName: "Chandra Prakash",
//         email: "admin@foodie.com",
//         phone: "+91 9876543210",
//         address: "Lucknow, Uttar Pradesh, India",
//         role: "Super Admin",
//         website: "www.foodieadmin.com",
//         joinDate: "2025-01-12",
//         bio: "Experienced administrator managing the entire food delivery platform system and operations.",
//         currentPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//     });

//     const handleChange = (e) => {
//         setProfile({
//             ...profile,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         console.log(profile);
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
//                 <div>
//                     <h1
//                         className="
//               text-3xl
//               md:text-4xl
//               font-extrabold
//               text-gray-900
//             "
//                     >
//                         Admin Profile
//                     </h1>

//                     <p className="text-gray-500 mt-2">
//                         Manage your admin account information and security settings
//                     </p>
//                 </div>

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
//                     {/* PROFILE INFORMATION */}

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
//                                 Personal Information
//                             </h2>

//                             <p className="text-gray-500 mt-2">
//                                 Update your profile details and contact information
//                             </p>
//                         </div>

//                         {/* PROFILE IMAGE */}

//                         <div
//                             className="
//                 flex
//                 flex-col
//                 md:flex-row
//                 md:items-center
//                 gap-6
//                 mb-10
//               "
//                         >
//                             <div className="relative w-fit">
//                                 <img
//                                     src="https://i.pravatar.cc/300"
//                                     alt="Admin"
//                                     className="
//                     w-32
//                     h-32
//                     rounded-[32px]
//                     object-cover
//                     border-4
//                     border-orange-100
//                   "
//                                 />

//                                 <button
//                                     className="
//                     absolute
//                     -bottom-2
//                     -right-2
//                     w-12
//                     h-12
//                     rounded-2xl
//                     bg-orange-500
//                     hover:bg-orange-600
//                     text-white
//                     flex
//                     items-center
//                     justify-center
//                     shadow-lg
//                     transition-all
//                   "
//                                 >
//                                     <FaCamera />
//                                 </button>
//                             </div>

//                             <div>
//                                 <h3
//                                     className="
//                     text-2xl
//                     font-extrabold
//                     text-gray-900
//                   "
//                                 >
//                                     {profile.fullName}
//                                 </h3>

//                                 <p className="text-gray-500 mt-2">
//                                     {profile.role}
//                                 </p>

//                                 <div
//                                     className="
//                     mt-4
//                     flex
//                     items-center
//                     gap-2
//                     bg-green-100
//                     text-green-600
//                     px-4
//                     py-2
//                     rounded-full
//                     w-fit
//                     font-semibold
//                     text-sm
//                   "
//                                 >
//                                     <FaCheckCircle />

//                                     Active Account
//                                 </div>
//                             </div>
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
//                                 {/* FULL NAME */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Full Name
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
//                                         <FaUser className="text-orange-500" />

//                                         <input
//                                             type="text"
//                                             name="fullName"
//                                             value={profile.fullName}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         />
//                                     </div>
//                                 </div>

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
//                                         Email Address
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
//                                             name="email"
//                                             value={profile.email}
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
//                                         Phone Number
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
//                                             name="phone"
//                                             value={profile.phone}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* WEBSITE */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Website
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
//                                         <FaGlobe className="text-purple-500" />

//                                         <input
//                                             type="text"
//                                             name="website"
//                                             value={profile.website}
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
//                                     Address
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
//                                         value={profile.address}
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

//                             {/* BIO */}

//                             <div>
//                                 <label
//                                     className="
//                     block
//                     mb-3
//                     font-bold
//                     text-gray-700
//                   "
//                                 >
//                                     Bio
//                                 </label>

//                                 <div
//                                     className="
//                     border
//                     border-gray-200
//                     rounded-2xl
//                     p-5
//                   "
//                                 >
//                                     <textarea
//                                         rows="5"
//                                         name="bio"
//                                         value={profile.bio}
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
//                     </div>

//                     {/* PASSWORD SECTION */}

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
//                                 Security Settings
//                             </h2>

//                             <p className="text-gray-500 mt-2">
//                                 Change your password and secure your account
//                             </p>
//                         </div>

//                         {/* PASSWORD FORM */}

//                         <div className="space-y-6">
//                             {/* CURRENT PASSWORD */}

//                             <div>
//                                 <label
//                                     className="
//                     block
//                     mb-3
//                     font-bold
//                     text-gray-700
//                   "
//                                 >
//                                     Current Password
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
//                                     <FaLock className="text-orange-500" />

//                                     <input
//                                         type="password"
//                                         name="currentPassword"
//                                         placeholder="Enter current password"
//                                         value={profile.currentPassword}
//                                         onChange={handleChange}
//                                         className="
//                       w-full
//                       outline-none
//                       bg-transparent
//                     "
//                                     />
//                                 </div>
//                             </div>

//                             {/* NEW PASSWORD */}

//                             <div
//                                 className="
//                   grid
//                   grid-cols-1
//                   md:grid-cols-2
//                   gap-6
//                 "
//                             >
//                                 {/* NEW */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         New Password
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
//                                         <FaKey className="text-green-500" />

//                                         <input
//                                             type="password"
//                                             name="newPassword"
//                                             placeholder="Enter new password"
//                                             value={profile.newPassword}
//                                             onChange={handleChange}
//                                             className="
//                         w-full
//                         outline-none
//                         bg-transparent
//                       "
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* CONFIRM */}

//                                 <div>
//                                     <label
//                                         className="
//                       block
//                       mb-3
//                       font-bold
//                       text-gray-700
//                     "
//                                     >
//                                         Confirm Password
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
//                                         <FaShieldAlt className="text-red-500" />

//                                         <input
//                                             type="password"
//                                             name="confirmPassword"
//                                             placeholder="Confirm password"
//                                             value={profile.confirmPassword}
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
//                     {/* PROFILE CARD */}

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
//                                 <FaUserShield />
//                             </div>

//                             <button
//                                 className="
//                   w-12
//                   h-12
//                   rounded-2xl
//                   bg-white/20
//                   flex
//                   items-center
//                   justify-center
//                 "
//                             >
//                                 <FaEdit />
//                             </button>
//                         </div>

//                         {/* CONTENT */}

//                         <div className="mt-8">
//                             <h2
//                                 className="
//                   text-3xl
//                   font-extrabold
//                 "
//                             >
//                                 {profile.fullName}
//                             </h2>

//                             <p className="text-white/80 mt-3">
//                                 {profile.role}
//                             </p>
//                         </div>

//                         {/* INFO */}

//                         <div className="mt-8 space-y-4">
//                             <div className="flex items-center gap-3">
//                                 <FaEnvelope />

//                                 <span>{profile.email}</span>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <FaPhoneAlt />

//                                 <span>{profile.phone}</span>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <FaCalendarAlt />

//                                 <span>
//                                     Joined: {profile.joinDate}
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* ACCOUNT STATUS */}

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
//                             Account Status
//                         </h2>

//                         <div className="space-y-5">
//                             {/* STATUS */}

//                             <div
//                                 className="
//                   bg-green-50
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
//                       bg-green-100
//                       text-green-500
//                       flex
//                       items-center
//                       justify-center
//                     "
//                                     >
//                                         <FaCheckCircle />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Account Verified
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Your admin account is verified
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* SECURITY */}

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
//                                         <FaShieldAlt />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             High Security
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             2FA and encrypted login enabled
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* NOTIFICATIONS */}

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
//                                         <FaBell />
//                                     </div>

//                                     <div>
//                                         <h3 className="font-bold text-gray-900">
//                                             Notifications Active
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             Email and push alerts enabled
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
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
//                             Activity
//                         </h2>

//                         <div className="space-y-5">
//                             <div
//                                 className="
//                   flex
//                   items-center
//                   justify-between
//                   border-b
//                   border-gray-100
//                   pb-4
//                 "
//                             >
//                                 <p className="text-gray-500">
//                                     Last Login
//                                 </p>

//                                 <h4 className="font-bold text-gray-900">
//                                     Today
//                                 </h4>
//                             </div>

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   justify-between
//                   border-b
//                   border-gray-100
//                   pb-4
//                 "
//                             >
//                                 <p className="text-gray-500">
//                                     Total Sessions
//                                 </p>

//                                 <h4 className="font-bold text-gray-900">
//                                     1,248
//                                 </h4>
//                             </div>

//                             <div
//                                 className="
//                   flex
//                   items-center
//                   justify-between
//                 "
//                             >
//                                 <p className="text-gray-500">
//                                     Role Access
//                                 </p>

//                                 <h4 className="font-bold text-orange-500">
//                                     Full Access
//                                 </h4>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminProfile;

// /client/src/admin/pages/settings/AdminProfile.jsx

import { useEffect, useState } from "react";

import API from "../../../api/axios";

import {
    FaUserShield,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaCamera,
    FaLock,
    FaSave,
    FaUser,
    FaGlobe,
    FaCalendarAlt,
    FaEdit,
    FaCheckCircle,
    FaShieldAlt,
    FaKey,
    FaBell,
} from "react-icons/fa";

const AdminProfile = () => {
    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        role: "",
        website: "",
        joinDate: "",
        bio: "",
        profileImage: "",

        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    // GET ADMIN PROFILE

    const fetchProfile = async () => {
        try {
            setLoading(true);

            const { data } = await API.get("/admin/profile");

            setProfile((prev) => ({
                ...prev,

                fullName: data?.admin?.fullName || "",
                email: data?.admin?.email || "",
                phone: data?.admin?.phone || "",
                address: data?.admin?.address || "",
                role: data?.admin?.role || "Admin",
                website: data?.admin?.website || "",
                joinDate: data?.admin?.createdAt
                    ? new Date(
                        data.admin.createdAt
                    ).toLocaleDateString()
                    : "",
                bio: data?.admin?.bio || "",
                profileImage:
                    data?.admin?.profileImage ||
                    "https://i.pravatar.cc/300",
            }));
        } catch (error) {
            console.log(error);
            alert(
                error?.response?.data?.message ||
                "Failed to load profile"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    // HANDLE INPUT CHANGE

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    // UPDATE PROFILE

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSaving(true);

            // PASSWORD VALIDATION

            if (
                profile.newPassword ||
                profile.confirmPassword
            ) {
                if (
                    profile.newPassword !==
                    profile.confirmPassword
                ) {
                    return alert(
                        "New password and confirm password do not match"
                    );
                }
            }

            const payload = {
                fullName: profile.fullName,
                email: profile.email,
                phone: profile.phone,
                address: profile.address,
                website: profile.website,
                bio: profile.bio,
                currentPassword:
                    profile.currentPassword,
                newPassword: profile.newPassword,
            };

            const { data } = await API.put(
                "/admin/profile",
                payload
            );

            alert(
                data?.message ||
                "Profile updated successfully"
            );

            // CLEAR PASSWORD FIELDS

            setProfile((prev) => ({
                ...prev,
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            }));
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message ||
                "Failed to update profile"
            );
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <h2 className="text-2xl font-bold text-orange-500">
                    Loading Profile...
                </h2>
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
                        Admin Profile
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your admin account
                        information and security
                        settings
                    </p>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={saving}
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
                    disabled:opacity-70
                "
                >
                    <FaSave />

                    {saving
                        ? "Saving..."
                        : "Save Changes"}
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
                    {/* PROFILE INFORMATION */}

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
                                Personal Information
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Update your profile
                                details and contact
                                information
                            </p>
                        </div>

                        {/* PROFILE IMAGE */}

                        <div
                            className="
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            gap-6
                            mb-10
                        "
                        >
                            <div className="relative w-fit">
                                <img
                                    src={
                                        profile.profileImage
                                    }
                                    alt="Admin"
                                    className="
                                    w-32
                                    h-32
                                    rounded-[32px]
                                    object-cover
                                    border-4
                                    border-orange-100
                                "
                                />

                                <button
                                    className="
                                    absolute
                                    -bottom-2
                                    -right-2
                                    w-12
                                    h-12
                                    rounded-2xl
                                    bg-orange-500
                                    hover:bg-orange-600
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    shadow-lg
                                    transition-all
                                "
                                >
                                    <FaCamera />
                                </button>
                            </div>

                            <div>
                                <h3
                                    className="
                                    text-2xl
                                    font-extrabold
                                    text-gray-900
                                "
                                >
                                    {profile.fullName}
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    {profile.role}
                                </p>

                                <div
                                    className="
                                    mt-4
                                    flex
                                    items-center
                                    gap-2
                                    bg-green-100
                                    text-green-600
                                    px-4
                                    py-2
                                    rounded-full
                                    w-fit
                                    font-semibold
                                    text-sm
                                "
                                >
                                    <FaCheckCircle />

                                    Active Account
                                </div>
                            </div>
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
                                {/* FULL NAME */}

                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        Full Name
                                    </label>

                                    <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4">
                                        <FaUser className="text-orange-500" />

                                        <input
                                            type="text"
                                            name="fullName"
                                            value={
                                                profile.fullName
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* EMAIL */}

                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        Email Address
                                    </label>

                                    <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4">
                                        <FaEnvelope className="text-blue-500" />

                                        <input
                                            type="email"
                                            name="email"
                                            value={
                                                profile.email
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ROW 2 */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* PHONE */}

                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        Phone Number
                                    </label>

                                    <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4">
                                        <FaPhoneAlt className="text-green-500" />

                                        <input
                                            type="text"
                                            name="phone"
                                            value={
                                                profile.phone
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* WEBSITE */}

                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        Website
                                    </label>

                                    <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4">
                                        <FaGlobe className="text-purple-500" />

                                        <input
                                            type="text"
                                            name="website"
                                            value={
                                                profile.website
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ADDRESS */}

                            <div>
                                <label className="block mb-3 font-bold text-gray-700">
                                    Address
                                </label>

                                <div className="flex items-start gap-3 border border-gray-200 rounded-2xl px-5 py-4">
                                    <FaMapMarkerAlt className="text-red-500 mt-1" />

                                    <textarea
                                        rows="4"
                                        name="address"
                                        value={
                                            profile.address
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className="w-full outline-none resize-none bg-transparent"
                                    />
                                </div>
                            </div>

                            {/* BIO */}

                            <div>
                                <label className="block mb-3 font-bold text-gray-700">
                                    Bio
                                </label>

                                <div className="border border-gray-200 rounded-2xl p-5">
                                    <textarea
                                        rows="5"
                                        name="bio"
                                        value={profile.bio}
                                        onChange={
                                            handleChange
                                        }
                                        className="w-full outline-none resize-none bg-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PASSWORD SECTION */}

                    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-extrabold text-gray-900">
                                Security Settings
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Change your password
                                and secure your account
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* CURRENT PASSWORD */}

                            <div>
                                <label className="block mb-3 font-bold text-gray-700">
                                    Current Password
                                </label>

                                <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4">
                                    <FaLock className="text-orange-500" />

                                    <input
                                        type="password"
                                        name="currentPassword"
                                        placeholder="Enter current password"
                                        value={
                                            profile.currentPassword
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className="w-full outline-none bg-transparent"
                                    />
                                </div>
                            </div>

                            {/* NEW PASSWORD */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        New Password
                                    </label>

                                    <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4">
                                        <FaKey className="text-green-500" />

                                        <input
                                            type="password"
                                            name="newPassword"
                                            placeholder="Enter new password"
                                            value={
                                                profile.newPassword
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-3 font-bold text-gray-700">
                                        Confirm Password
                                    </label>

                                    <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4">
                                        <FaShieldAlt className="text-red-500" />

                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm password"
                                            value={
                                                profile.confirmPassword
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            className="w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}

                <div className="space-y-6">
                    {/* PROFILE CARD */}

                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-[32px] p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div className="w-16 h-16 rounded-3xl bg-white/20 flex items-center justify-center text-3xl">
                                <FaUserShield />
                            </div>

                            <button className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                <FaEdit />
                            </button>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-3xl font-extrabold">
                                {profile.fullName}
                            </h2>

                            <p className="text-white/80 mt-3">
                                {profile.role}
                            </p>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <FaEnvelope />
                                <span>
                                    {profile.email}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt />
                                <span>
                                    {profile.phone}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCalendarAlt />

                                <span>
                                    Joined:
                                    {" "}
                                    {profile.joinDate}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ACCOUNT STATUS */}

                    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                            Account Status
                        </h2>

                        <div className="space-y-5">
                            <div className="bg-green-50 rounded-3xl p-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-500 flex items-center justify-center">
                                        <FaCheckCircle />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900">
                                            Account
                                            Verified
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Your admin
                                            account is
                                            verified
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 rounded-3xl p-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center">
                                        <FaShieldAlt />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900">
                                            High
                                            Security
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            2FA and
                                            encrypted
                                            login enabled
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-3xl p-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center">
                                        <FaBell />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900">
                                            Notifications
                                            Active
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Email and
                                            push alerts
                                            enabled
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QUICK STATS */}

                    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                            Activity
                        </h2>

                        <div className="space-y-5">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                <p className="text-gray-500">
                                    Last Login
                                </p>

                                <h4 className="font-bold text-gray-900">
                                    Today
                                </h4>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                <p className="text-gray-500">
                                    Total Sessions
                                </p>

                                <h4 className="font-bold text-gray-900">
                                    1,248
                                </h4>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-gray-500">
                                    Role Access
                                </p>

                                <h4 className="font-bold text-orange-500">
                                    Full Access
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;