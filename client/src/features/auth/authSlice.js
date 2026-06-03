// import { createSlice } from "@reduxjs/toolkit";

// const userFromStorage = localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user"))
//     : null;

// const authSlice = createSlice({
//     name: "auth",

//     initialState: {
//         user: userFromStorage,
//     },

//     reducers: {
//         setCredentials: (state, action) => {
//             state.user = action.payload;

//             localStorage.setItem(
//                 "user",
//                 JSON.stringify(action.payload)
//             );
//         },

//         logout: (state) => {
//             state.user = null;

//             localStorage.removeItem("user");
//         },
//     },
// });

// export const { setCredentials, logout } =
//     authSlice.actions;

// export default authSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user;

            state.token = action.payload.token;
        },

        logout: (state) => {
            state.user = null;

            state.token = null;
        },
    },
});

export const {
    setCredentials,
    logout,
} = authSlice.actions;

export default authSlice.reducer;