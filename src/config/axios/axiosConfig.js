import axios from "axios";
import router from '../router/router';

const http = axios;

http.defaults.baseURL = process.env.VUE_APP_ROOT_APIURL;

http.interceptors.request.use(
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

http.interceptors.response.use(
    async response => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    async error => {
        if (!error.response) {
            return alert('Erro!, tente mais tarde');
        }

        const originalRequest = error.config;
        if (error.response.status) {
            switch (error.response.status) {
                case 400:

                    //do something
                    break;

                case 401:
                    // alert("session expired");
                    try {
                        const response = await http.post("refresh-token");
                        localStorage.setItem("token", response.data.access_token);
                        return http(originalRequest);
                    } catch (error) {
                        // console.log(error);
                    }

                    break;
                case 403:
                    router.replace({
                        path: "/",
                        query: { redirect: router.currentRoute.fullPath }
                    });
                    break;
                case 404:
                    alert('page not exist');
                    break;
                case 502:
                    setTimeout(() => {
                        router.replace({
                            path: "/",
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;
                case 498:
                    localStorage.removeItem("token");
                    router.replace({
                        path: "/",
                    });
                    break;
            }
            return Promise.reject(error.response);
        }
    }
);

export default http;