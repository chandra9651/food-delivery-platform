const Topbar = () => {
    return (
        <div className="bg-white p-6 shadow-sm flex justify-between items-center">

            <h2 className="text-3xl font-bold">
                Restaurant Dashboard
            </h2>

            <div className="flex items-center gap-4">

                <img
                    src="https://i.pravatar.cc/50"
                    alt=""
                    className="w-12 h-12 rounded-full"
                />

                <div>
                    <h3 className="font-bold">
                        Restaurant Owner
                    </h3>

                    <p className="text-gray-500 text-sm">
                        Admin
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Topbar;