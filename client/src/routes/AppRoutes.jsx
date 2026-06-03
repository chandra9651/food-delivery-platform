// import { Routes, Route } from "react-router-dom";

// /* LAYOUT */
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// /* PAGES */
// import Home from "../pages/Home";
// import Restaurants from "../pages/Restaurants";
// import Offers from "../pages/Offers";
// import About from "../pages/About";
// import Contact from "../pages/Contact";

// /* DASHBOARD */
// import DashboardLayout from "../dashboard/DashboardLayout";
// import DashboardHome from "../dashboard/pages/DashboardHome";

// import AddFood from "../dashboard/pages/AddFood";
// import ManageFoods from "../dashboard/pages/ManageFoods";
// import Orders from "../dashboard/pages/Orders";
// import Earnings from "../dashboard/pages/Earnings";
// import Settings from "../dashboard/pages/Settings";

// /* Admin */

// import AdminRoutes from "../admin/routes/AdminRoutes";


// const AppRoutes = () => {
//     return (
//         <>

//             <Navbar />

//             <Routes>

//                 {/* WEBSITE ROUTES */}
//                 <Route path="/" element={<Home />} />

//                 <Route path="/restaurants" element={<Restaurants />} />

//                 <Route path="/offers" element={<Offers />} />

//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />



//                 {/* DASHBOARD ROUTES */}
//                 <Route
//                     path="/dashboard"
//                     element={<DashboardLayout />}
//                 >

//                     <Route
//                         index
//                         element={<DashboardHome />}
//                     />

//                     <Route
//                         path="add-food"
//                         element={<AddFood />}
//                     />
//                     <Route
//                         path="manage-foods"
//                         element={<ManageFoods />}
//                     />
//                     <Route
//                         path="orders"
//                         element={<Orders />}
//                     />

//                     <Route
//                         path="earnings"
//                         element={<Earnings />}
//                     />
//                     <Route
//                         path="settings"
//                         element={<Settings />}
//                     />
//                 </Route>

//                 {/* ADMIN ROUTES */}
//                 <Route path="/admin/*" element={<AdminRoutes />} />

//             </Routes>

//             <Footer />

//         </>
//     );
// };

// export default AppRoutes;




// import { Routes, Route } from "react-router-dom";

// /* WEBSITE LAYOUT */
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// /* WEBSITE PAGES */
// import Home from "../pages/Home";
// import Restaurants from "../pages/Restaurants";
// import Offers from "../pages/Offers";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Cart from "../pages/Cart";
// import Login from "../pages/Login";
// import Register from "../pages/Register";

// /* DASHBOARD */
// import DashboardLayout from "../dashboard/DashboardLayout";
// import DashboardHome from "../dashboard/pages/DashboardHome";
// import AddFood from "../dashboard/pages/AddFood";
// import ManageFoods from "../dashboard/pages/ManageFoods";
// import Orders from "../dashboard/pages/Orders";
// import Earnings from "../dashboard/pages/Earnings";
// import Settings from "../dashboard/pages/Settings";

// /* ADMIN */
// import AdminRoutes from "../admin/routes/AdminRoutes";

// /* WEBSITE LAYOUT WRAPPER */

// const WebsiteLayout = ({ children }) => {
//     return (
//         <>
//             <Navbar />

//             {children}

//             <Footer />
//         </>
//     );
// };

// const AppRoutes = () => {
//     return (
//         <Routes>

//             {/* WEBSITE ROUTES */}

//             <Route
//                 path="/"
//                 element={
//                     <WebsiteLayout>
//                         <Home />
//                     </WebsiteLayout>
//                 }
//             />

//             <Route
//                 path="/restaurants"
//                 element={
//                     <WebsiteLayout>
//                         <Restaurants />
//                     </WebsiteLayout>
//                 }
//             />

//             <Route
//                 path="/offers"
//                 element={
//                     <WebsiteLayout>
//                         <Offers />
//                     </WebsiteLayout>
//                 }
//             />

//             <Route
//                 path="/about"
//                 element={
//                     <WebsiteLayout>
//                         <About />
//                     </WebsiteLayout>
//                 }
//             />

//             <Route
//                 path="/contact"
//                 element={
//                     <WebsiteLayout>
//                         <Contact />
//                     </WebsiteLayout>
//                 }
//             />

//             <Route
//                 path="/cart"
//                 element={
//                     <WebsiteLayout>
//                         <Cart />
//                     </WebsiteLayout>
//                 }
//             />

//             {/* AUTH */}

//             <Route
//                 path="/login"
//                 element={<Login />}
//             />

//             <Route
//                 path="/register"
//                 element={<Register />}
//             />

//             {/* USER DASHBOARD */}

//             <Route
//                 path="/restaurant-dashboard"
//                 element={<DashboardLayout />}
//             >
//                 <Route
//                     index
//                     element={<DashboardHome />}
//                 />

//                 <Route
//                     path="add-food"
//                     element={<AddFood />}
//                 />

//                 <Route
//                     path="manage-foods"
//                     element={<ManageFoods />}
//                 />

//                 <Route
//                     path="orders"
//                     element={<Orders />}
//                 />

//                 <Route
//                     path="earnings"
//                     element={<Earnings />}
//                 />

//                 <Route
//                     path="settings"
//                     element={<Settings />}
//                 />
//             </Route>

//             {/* ADMIN */}

//             <Route
//                 path="/admin/*"
//                 element={<AdminRoutes />}
//             />

//         </Routes>
//     );
// };

// export default AppRoutes;




// // src/routes/AppRoutes.jsx

// import { Routes, Route } from "react-router-dom";

// /* ======================================================
//    PUBLIC WEBSITE
// ====================================================== */

// import PublicRoutes from "../publicApp/routes/PublicRoutes";

// /* ======================================================
//    USER ROUTES
// ====================================================== */

// import UserRoutes from "../customer/routes/UserRoutes";

// /* ======================================================
//    RESTAURANT DASHBOARD
// ====================================================== */

// import RestaurantRoutes from "../dashboard/routes/RestaurantRoutes";

// /* ======================================================
//    ADMIN ROUTES
// ====================================================== */

// import AdminRoutes from "../admin/routes/AdminRoutes";

// /* ======================================================
//    APP ROUTES
// ====================================================== */

// const AppRoutes = () => {
//     return (
//         <Routes>

//             {/* ======================================================
//                 PUBLIC WEBSITE
//             ====================================================== */}

//             <Route
//                 path="/*"
//                 element={<PublicRoutes />}
//             />

//             {/* ======================================================
//                 USER ROUTES
//             ====================================================== */}

//             <Route
//                 path="/user/*"
//                 element={<UserRoutes />}
//             />

//             {/* ======================================================
//                 RESTAURANT DASHBOARD
//             ====================================================== */}

//             <Route
//                 path="/restaurant/*"
//                 element={<RestaurantRoutes />}
//             />

//             {/* ======================================================
//                 ADMIN PANEL
//             ====================================================== */}

//             <Route
//                 path="/admin/*"
//                 element={<AdminRoutes />}
//             />

//         </Routes>
//     );
// };

// export default AppRoutes;


// src/routes/AppRoutes.jsx

// import { Routes, Route } from "react-router-dom";

// /* PUBLIC WEBSITE */
// import PublicRoutes from "../publicApp/routes/PublicRoutes";

// /* CUSTOMER */
// import UserRoutes from "../customer/routes/UserRoutes";

// /* DASHBOARD */
// import RestaurantRoutes from "../dashboard/routes/RestaurantRoutes";

// /* ADMIN */
// import AdminRoutes from "../admin/routes/AdminRoutes";

// const AppRoutes = () => {
//     return (
//         <Routes>

//             {/* PUBLIC WEBSITE */}

//             <Route
//                 path="/*"
//                 element={<PublicRoutes />}
//             />

//             {/* CUSTOMER ROUTES */}

//             <Route
//                 path="/user/*"
//                 element={<UserRoutes />}
//             />

//             {/* RESTAURANT DASHBOARD */}

//             <Route
//                 path="/restaurant/*"
//                 element={<RestaurantRoutes />}
//             />

//             {/* ADMIN PANEL */}

//             <Route
//                 path="/admin/*"
//                 element={<AdminRoutes />}
//             />

//         </Routes>
//     );
// };

// export default AppRoutes;




// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

/* PUBLIC WEBSITE */
import PublicRoutes from "../publicApp/routes/PublicRoutes";

/* CUSTOMER */
import UserRoutes from "../customer/routes/UserRoutes";

/* DASHBOARD */
import RestaurantRoutes from "../dashboard/routes/RestaurantRoutes";

/* ADMIN */
import AdminRoutes from "../admin/routes/AdminRoutes";


const AppRoutes = () => {
    return (
        <Routes>

            {/* CUSTOMER */}

            <Route
                path="/user/*"
                element={<UserRoutes />}
            />

            {/* DASHBOARD */}

            <Route
                path="/restaurant/*"
                element={<RestaurantRoutes />}
            />

            {/* ADMIN */}

            <Route
                path="/admin/*"
                element={<AdminRoutes />}
            />

            {/* PUBLIC WEBSITE */}

            <Route
                path="/*"
                element={<PublicRoutes />}
            />

        </Routes>
    );
};

export default AppRoutes;