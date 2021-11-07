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
            <slot />
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import TopBarComponent from './TopBarComponent.vue'
import SideBarComponent from './SideBarComponent.vue'

export default {
  components: {
    TopBarComponent,
    SideBarComponent
  },
  name: "DashBoardComponent",
};
</script>
