<template>
  <li>
    <a
      id="layout"
      class="nav-link px-3 sidebar-link"
      data-bs-toggle="collapse"
      :aria-expanded="config ? 'true' : 'false'"
      href="#config"
    >
      <span class="me-2"><i class="fas fa-cog"></i></span>
      <span>Configurações</span>
      <span class="ms-auto">
        <span class="right-icon">
          <i class="bi bi-chevron-down"></i>
        </span>
      </span>
    </a>
    <div
      class="collapse"
      v-bind:class="{ 'expand collapse show': config }"
      id="config"
    >
      <ul class="navbar-nav ps-3">
        <li>
          <a class="nav-link px-3">
            <span class="me-2"><i class="fas fa-angle-double-right"></i></span>
            <span>Grupos de usuários</span>
          </a>
        </li>
        <li>
          <a class="nav-link px-3">
            <span class="me-2"><i class="fas fa-angle-double-right"></i></span>
            <span>Usuarios</span>
          </a>
        </li>
        <li>
          <a class="nav-link px-3">
            <span class="me-2"><i class="fas fa-angle-double-right"></i></span>
            <span>Pagamentos</span>
          </a>
        </li>
        <li>
          <a class="nav-link px-3">
            <span class="me-2"><i class="fas fa-angle-double-right"></i></span>
            <span>Fretes</span>
          </a>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "ConfigMenuComponent",
  props: {
    config: Boolean
  }
};
</script>