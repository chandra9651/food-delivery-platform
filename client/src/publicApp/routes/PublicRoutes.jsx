// src/publicApp/routes/PublicRoutes.jsx

import { Routes, Route } from "react-router-dom";

/* ======================================================
   LAYOUT
====================================================== */

import WebsiteLayout from "../layouts/WebsiteLayout";

/* ======================================================
   PUBLIC PAGES
====================================================== */

import Home from "../pages/Home";

import Restaurants from "../pages/Restaurants";

import Offers from "../pages/Offers";

import About from "../pages/About";

import Contact from "../pages/Contact";

import RestaurantDetails from "../pages/RestaurantDetails";

import FoodDetails from "../pages/FoodDetails";

import Search from "../pages/Search";

import NotFound from "../pages/NotFound";

/* ======================================================
   PUBLIC ROUTES
====================================================== */

const PublicRoutes = () => {
    return (
        <Routes>

            {/* ======================================================
                WEBSITE LAYOUT
            ====================================================== */}

            <Route
                path="/"
                element={<WebsiteLayout />}
            >

                {/* HOME */}

                <Route
                    index
                    element={<Home />}
                />

                {/* RESTAURANTS */}

                <Route
                    path="restaurants"
                    element={<Restaurants />}
                />

                {/* RESTAURANT DETAILS */}

                <Route
                    path="restaurants/:id"
                    element={<RestaurantDetails />}
                />

                {/* FOOD DETAILS */}

                <Route
                    path="foods/:id"
                    element={<FoodDetails />}
                />

                {/* OFFERS */}

                <Route
                    path="offers"
                    element={<Offers />}
                />

                {/* ABOUT */}

                <Route
                    path="about"
                    element={<About />}
                />

                {/* CONTACT */}

                <Route
                    path="contact"
                    element={<Contact />}
                />

                {/* SEARCH */}

                <Route
                    path="search"
                    element={<Search />}
                />

            </Route>

            {/* ======================================================
                404 PAGE
            ====================================================== */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
};

export default PublicRoutes;



// src/publicApp/layouts/WebsiteLayout.jsx

// import { Outlet } from "react-router-dom";

// import Navbar from "../components/layout/Navbar";

// import Footer from "../components/layout/Footer";

// src/publicApp/routes/PublicRoutes.jsx

// const PublicRoutes = () => {
//     return (
//         <h1>Hello Public</h1>
//     );
// };

// export default PublicRoutes;