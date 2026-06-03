// import axios from "axios";

// const API = axios.create({
//     baseURL: "http://localhost:5000/api",
// });


import axios from "axios";

const API = axios.create({
    baseURL:
        import.meta.env.VITE_API_URL,
});


API.interceptors.request.use((req) => {

    // Don't overwrite if already set
    if (!req.headers.Authorization) {

        const token =
            localStorage.getItem("userToken");

        if (token) {
            req.headers.Authorization =
                `Bearer ${token}`;
        }
    }

    // req.headers.Authorization = `Bearer ${localStorage.getItem("userToken")}`;

    return req;
});

export default API;