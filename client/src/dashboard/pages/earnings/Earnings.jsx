const Earnings = () => {
    return (
        <div>

            <h1 className="text-4xl font-extrabold mb-10">
                Earnings
            </h1>

            <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-white rounded-3xl p-10 shadow-md">

                    <h3 className="text-gray-500">
                        Total Revenue
                    </h3>

                    <h1 className="text-5xl font-extrabold mt-5">
                        ₹1,25,000
                    </h1>
                </div>

                <div className="bg-white rounded-3xl p-10 shadow-md">

                    <h3 className="text-gray-500">
                        Monthly Revenue
                    </h3>

                    <h1 className="text-5xl font-extrabold mt-5">
                        ₹52,000
                    </h1>
                </div>

                <div className="bg-white rounded-3xl p-10 shadow-md">

                    <h3 className="text-gray-500">
                        Today's Revenue
                    </h3>

                    <h1 className="text-5xl font-extrabold mt-5">
                        ₹8,500
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Earnings;