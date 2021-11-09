<template>
  <DashBoardComponent :layout="true">
    <template v-slot:page-content>
      <h6>categorias</h6>
      <div>
        <template v-if="categories">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(categoria, index) in categories" :key="index">
                <td>{{ categoria.name }}</td>
              </tr>
            </tbody>
          </table>

          <PaginateTable :currentpage="current_page" :lastpage="last_page" :links="links" :callMethod="getCategories" />
        </template>
      </div>
    </template>
  </DashBoardComponent>
</template>

<style scoped>
</style>

<script>
import DashBoardComponent from "../../components/Layout/Dashboard/DashboardComponent.vue";
import PaginateTable from "../../components/PaginateTable/PaginateTable.vue";

import axios from "axios";

export default {
  components: {
    DashBoardComponent,
    PaginateTable,
  },
  data() {
    return {
      loading: false,
      categories: "",
      paginate: "",
      last_page: "",
      next_page: "",
      current_page: "",
      links: "",
      paginateLimit: 2,
    };
  },
  methods: {
    async getCategories(page = 1) {
      this.loading = true;
      try {
        const { data }    = await axios.get("admin-category/all?page=" + page);
        this.loading      = false;
        this.categories   = data.data;
        this.paginate     = data.links;
        this.last_page    = data.last_page;
        this.current_page = data.current_page;
        this.links        = data.links;
        
        this.links.shift();
        this.links.pop();
      } catch (error) {
        this.$toast.error(`error`, { position: "top" });
      }
    },
  },
  async mounted() {
    await this.getCategories();
  }
};
</script>