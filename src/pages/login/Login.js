import cripto from "../../config/cripto/cripto";
export default {
    name: "LoginComponent",
    data() {
        return {
            loading: false,
            loginButtonText: "Login",
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            try {
                this.loading = true;
                const { data } = await this.$http.post("login", {
                    email: this.email,
                    password: this.password,
                });
                this.loading = false;
                
                localStorage.setItem("token", data.access_token);
                localStorage.setItem("_usx", cripto.Encrypt(JSON.stringify(data.userinfo)));
                this.$router.push({ name: "admin-home" });
            } catch (error) {
                this.loading = false;
                    this.$toast.error(`${error.statusText}`, {
                        position: "top",
                    });
            }
        },

        clearStorage() {
            localStorage.removeItem('token');
            localStorage.removeItem('_usx');
        }
    },
    mounted() {
        this.clearStorage();
    },
    watch: {
        loading() {
            this.loading ? this.loginButtonText = '<i class="fas fa-spinner fa-spin"></i> Carregando...' : this.loginButtonText = 'Login';
        }
    }
};