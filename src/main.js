import { createApp } from 'vue';
import App from './App.vue';
import router from './config/router/router';
import "@/assets/css/all.css";
import Toaster from "@meforma/vue-toaster";
import "./config/axios/axiosConfig";
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(Toaster);
app.use(router);
app.mount('#app');