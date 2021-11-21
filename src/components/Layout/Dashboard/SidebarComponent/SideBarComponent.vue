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
            <div class="text-muted small fw-bold text-uppercase px-3">Navegação</div>
          </li>
          <li>
            <router-link
              :to="{ name: 'admin-home' }"
              class="nav-link px-3 active"
            >
              <span class="me-2"><i class="bi bi-speedometer2"></i></span>
              <span>Painel de controle</span>
            </router-link>
          </li>
          <CatalogMenuComponent />
          <LayoutMenuComponent />
          <li class="my-4"><hr class="dropdown-divider bg-light" /></li>
          <ConfigMenuComponent />
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
import CatalogMenuComponent from "../SidebarMenuComponent/CatalogmenuComponent";
import LayoutMenuComponent from "../SidebarMenuComponent/LayoutMenuComponent";
import ConfigMenuComponent from "../SidebarMenuComponent/ConfigMenuComponent";


export default {
  name: "SideBarComponent",
  components: {
    CatalogMenuComponent,
    LayoutMenuComponent,
    ConfigMenuComponent
  },
  props: {},
  data() {
    return {};
  },
  methods: {
  },
  mounted() {
    
  },
};
</script>