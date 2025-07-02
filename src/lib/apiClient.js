import axios from "axios";
import { useAuthStore } from "./store/authStore";


const API_URL = "https://finance-track-nf6s.onrender.com/api";

const api = axios.create({
    baseURL:API_URL
})


api.interceptors.request.use((config) =>{
    const token = useAuthStore.getState().token;

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default api;
