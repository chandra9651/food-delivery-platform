const Footer = () => {
    return (
        <footer className="bg-white">

            <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">

                {/* LOGO */}

                <div>

                    <h2 className="text-3xl font-extrabold text-orange-500">
                        Foodie
                    </h2>

                    <p className="text-gray-500 mt-5 leading-7">
                        Delicious food delivered quickly at your doorstep.
                    </p>
                </div>

                {/* COMPANY */}

                <div>

                    <h3 className="font-bold text-xl mb-5">
                        Company
                    </h3>

                    <div className="flex flex-col gap-3 text-gray-500">

                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

                {/* SUPPORT */}

                <div>

                    <h3 className="font-bold text-xl mb-5">
                        Support
                    </h3>

                    <div className="flex flex-col gap-3 text-gray-500">

                        <a href="#">Help Center</a>
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">FAQs</a>
                    </div>
                </div>

                {/* CONTACT */}

                <div>

                    <h3 className="font-bold text-xl mb-5">
                        Contact
                    </h3>

                    <div className="text-gray-500 space-y-3">

                        <p>support@foodie.com</p>

                        <p>+91 9876543210</p>

                        <p>Prayagraj, India</p>
                    </div>
                </div>
            </div>

            <div className="border-t py-6 text-center text-gray-500">
                © 2026 Foodie. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;