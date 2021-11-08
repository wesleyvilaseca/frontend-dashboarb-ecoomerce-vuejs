<template>
  <DashBoardComponent :layout="true">
    <template v-slot:page-content> categorias </template>
  </DashBoardComponent>
</template>

<style scoped>
</style>

<script>
import DashBoardComponent from "../../components/Layout/Dashboard/DashboardComponent.vue";
import axios from "axios";

export default {
  components: {
    DashBoardComponent,
  },
  data() {
    return {
      categories: "",
    };
  },
  async mounted() {
    try {
      const response = await axios.get("admin-category/all");
      this.categories = response.data;
    } catch (error) {
      console.log('aqui');
    }
  },
};
</script>