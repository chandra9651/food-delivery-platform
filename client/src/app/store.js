// import { configureStore } from "@reduxjs/toolkit";

// import authReducer from "../features/auth/authSlice";

// import cartReducer from "../features/cart/cartSlice";

// import restaurantReducer from "../features/restaurant/restaurantSlice";

// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         cart: cartReducer,
//         restaurant: restaurantReducer,
//     },
// });


import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;