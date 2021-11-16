<template>
  <div class="back">
    <div class="div-center">
      <div class="content">
        <h3>Login</h3>
        <hr />
        <form @submit.stop.prevent="login">
          <div class="form-group mb-2">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              v-model="email"
              required
            />
          </div>
          <div class="form-group mb-2">
            <label for="exampleInputPassword1">Senha</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
              v-model="password"
              required
            />
          </div>
          <div class="d-grid">
            <button
              type="submit"
              class="btn btn-primary"
              v-bind:class="{ disabled: loading }"
              v-html="loginButtonText"
            ></button>
          </div>
          <hr />
          <!-- <button type="button" class="btn btn-link">Signup</button> -->
          <div align="right">
            <button type="button" class="btn btn-link">Reset Password</button>
          </div>
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
import Login from "./Login";
export default Login;
</script>
