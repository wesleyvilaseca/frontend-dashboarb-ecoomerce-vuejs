<template>
  <body>
    <TopBarComponent />
    <!-- offcanvas -->
    <SideBarComponent />
    <!-- offcanvas -->
    <main class="mt-5 pt-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <slot name="page-content" />
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import TopBarComponent from "../TopBarComponent/TopBarComponent.vue";
import SideBarComponent from "../SidebarComponent/SideBarComponent.vue";

export default {
  props: {},
  data() {
    return {};
  },
  components: {
    TopBarComponent,
    SideBarComponent,
  },
  name: "DashBoardComponent",
};
</script>
