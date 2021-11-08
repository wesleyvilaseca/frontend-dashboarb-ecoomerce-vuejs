<template>
  <DashBoardComponent :layout="true">
    <template v-slot:page-content>

      categorias

    </template>
  </DashBoardComponent>
</template>

<style scoped>

</style>

<script>
import DashBoardComponent from "../../components/Layout/Dashboard/DashboardComponent.vue";

export default {
  components: {
    DashBoardComponent,
  },
};
</script>