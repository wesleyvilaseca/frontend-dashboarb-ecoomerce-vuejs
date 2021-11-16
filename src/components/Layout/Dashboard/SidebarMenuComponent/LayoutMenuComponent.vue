<template>
  <li>
    <a
      id="layout"
      class="nav-link px-3 sidebar-link"
      data-bs-toggle="collapse"
      :aria-expanded="layout ? 'true' : 'false'"
      href="#layouts"
    >
      <span class="me-2"><i class="fas fa-desktop"></i></span>
      <span>Layout</span>
      <span class="ms-auto">
        <span class="right-icon">
          <i class="bi bi-chevron-down"></i>
        </span>
      </span>
    </a>
    <div
      v-bind:class="{ 'expand collapse show': layout }"
      class="collapse"
      id="layouts"
    >
      <ul class="navbar-nav ps-3">
        <li>
          <a class="nav-link px-3">
            <span class="me-2"><i class="fas fa-angle-double-right"></i></span>
            <span>Slide</span>
          </a>
        </li>
        <li>
          <a class="nav-link px-3">
            <span class="me-2"><i class="fas fa-angle-double-right"></i></span>
            <span>Produtos em destaque</span>
          </a>
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
export default {
  name: "LayoutMenuComponent",
  props: {
    layout: Boolean,
  },
};
</script>