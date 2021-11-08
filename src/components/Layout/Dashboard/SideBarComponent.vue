<template>
  <div
    class="offcanvas offcanvas-start sidebar-nav bg-dark"
    tabindex="-1"
    id="sidebar"
  >
    <div class="offcanvas-body p-0">
      <nav class="navbar-dark">
        <ul class="navbar-nav">
          <li>
            <div class="text-muted small fw-bold text-uppercase px-3">CORE</div>
          </li>
          <li>
            <router-link
              :to="{ name: 'admin-home' }"
              class="nav-link px-3 active"
            >
              <span class="me-2"><i class="bi bi-speedometer2"></i></span>
              <span>Dashboard</span>
            </router-link>
          </li>
          <li class="my-4"><hr class="dropdown-divider bg-light" /></li>
          <li>
            <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
              Interface
            </div>
          </li>
          <li>
            <a
              id="layout"
              class="nav-link px-3 sidebar-link"
              data-bs-toggle="collapse"
              :aria-expanded="isLayout ? 'true' : 'false'"
              href="#layouts"
            >
              <span class="me-2"><i class="bi bi-layout-split"></i></span>
              <span>Layouts</span>
              <span class="ms-auto">
                <span class="right-icon">
                  <i class="bi bi-chevron-down"></i>
                </span>
              </span>
            </a>
            <div class="collapse" v-bind:class="{'expand collapse show': isLayout }" id="layouts">
              <ul class="navbar-nav ps-3">
                <li>
                  <router-link
                    :to="{ name: 'admin-category' }"
                    class="nav-link px-3"
                  >
                    <span class="me-2"><i class="bi bi-speedometer2"></i></span>
                    <span>Categorias</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-book-fill"></i></span>
              <span>Pages</span>
            </a>
          </li>
          <li class="my-4"><hr class="dropdown-divider bg-light" /></li>
          <li>
            <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
              Addons
            </div>
          </li>
          <li>
            <a href="#" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-graph-up"></i></span>
              <span>Charts</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-3">
              <span class="me-2"><i class="bi bi-table"></i></span>
              <span>Tables</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.expand {
  /* display: block !important; */
}
</style>

<script>
export default {
  name: "SideBarComponent",
  props: {
    layout: Boolean,
  },
  data() {
    return {
      isLayout: this.layout,
    };
  },
  created() {
    console.log(this.test)
  },
};
</script>