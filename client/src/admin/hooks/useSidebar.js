// hooks/useSidebar.js

import { useEffect, useState } from "react";

/* ======================================================
   CUSTOM SIDEBAR HOOK
====================================================== */

const useSidebar = () => {
    /* ======================================================
       STATES
    ====================================================== */

    const [isSidebarOpen, setIsSidebarOpen] =
        useState(true);

    const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
        useState(false);

    const [activeMenu, setActiveMenu] =
        useState("");

    /* ======================================================
       TOGGLE DESKTOP SIDEBAR
    ====================================================== */

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    /* ======================================================
       OPEN MOBILE SIDEBAR
    ====================================================== */

    const openMobileSidebar = () => {
        setIsMobileSidebarOpen(true);
    };

    /* ======================================================
       CLOSE MOBILE SIDEBAR
    ====================================================== */

    const closeMobileSidebar = () => {
        setIsMobileSidebarOpen(false);
    };

    /* ======================================================
       TOGGLE MOBILE SIDEBAR
    ====================================================== */

    const toggleMobileSidebar = () => {
        setIsMobileSidebarOpen((prev) => !prev);
    };

    /* ======================================================
       SET ACTIVE MENU
    ====================================================== */

    const handleActiveMenu = (menu) => {
        setActiveMenu(menu);
    };

    /* ======================================================
       CLOSE MOBILE SIDEBAR ON RESIZE
    ====================================================== */

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileSidebarOpen(false);
            }

            if (window.innerWidth < 1024) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        handleResize();

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {
            window.removeEventListener(
                "resize",
                handleResize
            );
        };
    }, []);

    /* ======================================================
       PREVENT BODY SCROLL ON MOBILE SIDEBAR
    ====================================================== */

    useEffect(() => {
        if (isMobileSidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileSidebarOpen]);

    /* ======================================================
       RETURN
    ====================================================== */

    return {
        isSidebarOpen,

        isMobileSidebarOpen,

        activeMenu,

        toggleSidebar,

        openMobileSidebar,

        closeMobileSidebar,

        toggleMobileSidebar,

        handleActiveMenu,
    };
};

export default useSidebar;