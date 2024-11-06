import axios from "axios";
console.log({ data: import.meta.env.VITE_API_BASE_URL });
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        Authorization: "Bearer " + import.meta.env.VITE_ACCESS_TOKEN,
    },
});

export default api;
