<template>
  <div class="back">
    <div class="div-center">
      <div class="content">
        <h3>Login</h3>
        <hr />
        <form @submit.stop.prevent="login">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              v-model="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <hr />
          <button type="button" class="btn btn-link">Signup</button>
          <button type="button" class="btn btn-link">Reset Password</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back {
  background: #e2e2e2;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}

.div-center {
  width: 400px;
  height: 400px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 1em 2em;
  border-bottom: 2px solid #ccc;
  display: table;
}

div.content {
  display: table-cell;
  vertical-align: middle;
}
</style>

<script>
import axios from "axios";
export default {
  name: "LoginComponent",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.access_token);
        this.$router.push({ name: "admin-home" });
      } catch (error) {
        this.$toast.error(`dados incorretos`, {
          position: "top",
        });
      }
    },
  },
};
</script>
