import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />

            <main>{children}</main>
        </>
    );
};

export default MainLayout;