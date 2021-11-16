<template>
  <!-- top navigation bar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
        aria-controls="offcanvasExample"
      >
        <span class="navbar-toggler-icon" data-bs-target="#sidebar"></span>
      </button>
      <a
        class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
        href="#"
        >Administração</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topNavBar"
        aria-controls="topNavBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="topNavBar">
        <!-- <form class="d-flex ms-auto my-3 my-lg-0">
          <div class="input-group">
            <button class="btn btn-outline-warning" type="submit">
              Logout
            </button>
          </div>
        </form> -->
        <ul class="navbar-nav d-flex ms-auto my-3 my-lg-0 me-5">
          <li class="nav-item dropdown">
            <a class="nav-link">
              {{ name }}
            </a>
          </li>
        </ul>
        <form @submit.stop.prevent="logout">
          <button class="btn btn-outline-warning btn-sm"><i class="fas fa-sign-out-alt"></i> Logout</button>
        </form>
      </div>
      <!-- <div class="collapse navbar-collapse" id="topNavBar">
        <form class="d-flex ms-auto my-3 my-lg-0">
          <div class="input-group">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle ms-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-fill"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>

      </div> -->
    </div>
  </nav>
  <!-- top navigation bar -->
</template>

<script>
export default {
  name: "TopBarComponent",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    logout() {
      this.$http
        .post("logout")
        .then(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("_usx");
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    let userdata = JSON.parse(this.$cripto.Decrypt(localStorage.getItem('_usx')));
    let firstname = userdata.name.split(' ')[0];
    this.name = firstname;
    },
  created() {
    // console.log('created');
  }
};
</script>