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
          <CatalogMenuComponent :catalog="catalog" />
          <LayoutMenuComponent :layout="layout" />
          <li class="my-4"><hr class="dropdown-divider bg-light" /></li>
          <ConfigMenuComponent :config="config" />
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
  props: {
    layout: Boolean,
    config: Boolean,
  },
  data() {
    return {
      catalog: false
    };
  },
  methods: {
    getEnvent(){
       window.addEventListener('catalog', () => { this.catalog = true; })
    }
  },
  mounted() {
    this.getEnvent();
  },
};
</script>