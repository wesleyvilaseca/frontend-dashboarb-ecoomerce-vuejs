<template>
  <li>
    <a
      id="layout"
      class="nav-link px-3 sidebar-link"
      data-bs-toggle="collapse"
      :aria-expanded="catalog ? 'true' : 'false'"
      href="#catalog"
    >
      <span class="me-2"><i class="fas fa-tags"></i></span>
      <span>Catalogo</span>
      <span class="ms-auto">
        <span class="right-icon">
          <i class="bi bi-chevron-down"></i>
        </span>
      </span>
    </a>
    <div
      class="collapse"
      v-bind:class="{ 'expand collapse show': catalog }"
      id="catalog"
    >
      <ul class="navbar-nav ps-3">
        <li>
          <router-link :to="{ name: 'admin-category' }" class="nav-link px-3">
            <span class="me-2"><i class="fas fa-angle-double-right"></i></span>
            <span>Departamentos</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'admin-product' }" class="nav-link px-3">
            <span class="me-2"><i class="fas fa-angle-double-right"></i></span>
            <span>Produtos</span>
          </router-link>
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
export default {
  name: "CatalogMenuComponent",
  props: {
    catalog: Boolean,
  },
};
</script>