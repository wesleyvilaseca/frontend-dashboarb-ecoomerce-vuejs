import { createApp } from 'vue';
import App from './App.vue';
import router from './config/router/router';
import "@/assets/css/all.css";
import Toaster from "@meforma/vue-toaster";
import http from "./config/axios/axiosConfig";
import cripto from './config/cripto/cripto';


const app = createApp(App);

app.config.globalProperties.$http = http;
app.config.globalProperties.$loading = false;
app.config.globalProperties.$cripto = cripto;


app.use(Toaster);
app.use(router);
app.mount('#app');