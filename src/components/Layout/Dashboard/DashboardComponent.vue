<template>
  <body>
      <TopBarComponent />
    <!-- offcanvas -->
    <SideBarComponent :layout="teste" />
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
import TopBarComponent from './TopBarComponent.vue'
import SideBarComponent from './SideBarComponent.vue'

export default {
  props: {
    layout: Boolean
  },
  data () {
    return {
      teste: this.layout
    }
  },
  components: {
    TopBarComponent,
    SideBarComponent
  },
  name: "DashBoardComponent",
};
</script>
