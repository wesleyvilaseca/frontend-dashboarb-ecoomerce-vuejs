import { createApp } from 'vue';
import App from './App.vue';
import router from './config/router/router';
import "@/assets/css/all.css";
import Toaster from "@meforma/vue-toaster";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_ROOT_APIURL;

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(Toaster);
app.use(router);
app.mount('#app');