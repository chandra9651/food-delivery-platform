import { useState } from "react";

import { Outlet } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import MobileSidebar from "./MobileSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-slate-100 min-h-screen">

            {/* DESKTOP SIDEBAR */}

            <div className="hidden lg:block">
                <AdminSidebar />
            </div>

            {/* MOBILE SIDEBAR */}

            <MobileSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* MAIN CONTENT */}

            <div className="lg:ml-[290px]">

                {/* NAVBAR */}

                <AdminNavbar
                    setSidebarOpen={setSidebarOpen}
                />

                {/* PAGE CONTENT */}

                <main className="p-4 md:p-6 lg:p-8">

                    <div
                        className="
              min-h-[calc(100vh-120px)]
              rounded-3xl
            "
                    >
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;