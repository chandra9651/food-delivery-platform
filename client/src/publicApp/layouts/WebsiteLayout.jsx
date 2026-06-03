// src/publicApp/layouts/WebsiteLayout.jsx

import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";


const WebsiteLayout = () => {

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            {/* NAVBAR */}

            <Navbar />

            {/* MAIN CONTENT */}

            <main className="flex-1">

                <Outlet />

            </main>

            {/* FOOTER */}

            <Footer />

        </div>
    );
};

export default WebsiteLayout;