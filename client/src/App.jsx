// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// import Home from "./pages/Home";
// import Restaurants from "./pages/Restaurants";
// import Offers from "./pages/Offers";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Cart from "./pages/Cart";

// function App() {
//     return (
//         <div className="bg-slate-50 min-h-screen">

//             <Navbar />

//             <Routes>

//                 <Route path="/" element={<Home />} />

//                 <Route
//                     path="/restaurants"
//                     element={<Restaurants />}
//                 />

//                 <Route
//                     path="/offers"
//                     element={<Offers />}
//                 />

//                 <Route
//                     path="/about"
//                     element={<About />}
//                 />

//                 <Route
//                     path="/contact"
//                     element={<Contact />}
//                 />

//                 <Route
//                     path="/cart"
//                     element={<Cart />}
//                 />

//             </Routes>

//             <Footer />
//         </div>
//     );
// }

// export default App;


import AppRoutes from "./routes/AppRoutes";

function App() {
    return <AppRoutes />;
}

export default App;