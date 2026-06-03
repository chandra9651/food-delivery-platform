const DashboardHome = () => {
    return (
        <div>

            <h1 className="text-4xl font-extrabold mb-10">
                Dashboard Overview
            </h1>

            {/* CARDS */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white p-8 rounded-3xl shadow-md">

                    <h3 className="text-gray-500">
                        Total Orders
                    </h3>

                    <h1 className="text-5xl font-extrabold mt-4">
                        245
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-md">

                    <h3 className="text-gray-500">
                        Revenue
                    </h3>

                    <h1 className="text-5xl font-extrabold mt-4">
                        ₹52K
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-md">

                    <h3 className="text-gray-500">
                        Foods
                    </h3>

                    <h1 className="text-5xl font-extrabold mt-4">
                        120
                    </h1>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-md">

                    <h3 className="text-gray-500">
                        Customers
                    </h3>

                    <h1 className="text-5xl font-extrabold mt-4">
                        1.2K
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;