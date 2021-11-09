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
                <th scope="row">{{ index }}</th>
                <td>{{ categoria.name }}</td>
              </tr>
            </tbody>
          </table>

          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" @click="getCategories(first_page)">Previous</a>
              </li>
              <li class="page-item" v-for="(n, index) in last_page" :key="index">
                <a class="page-link" @click="getCategories(n)">{{n}}</a>
                </li>
              <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li> -->
              <li class="page-item"><a class="page-link" @click="getCategories(last_page)">Next</a></li>
            </ul>
          </nav>

        </template>
      </div>
    </template>
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
      total: "",
      per_page: "",
      first_page:"",
      last_page: "",
      categories: "",
      pagesize: "",
      current: "",
    };
  },
  methods: {
    async getCategories(page = 1) {
      try {
        const { data } = await axios.get("admin-category/all?page=" + page);
        this.first_page = data.from;
        this.last_page = data.last_page;
        this.categories = data.data;
        this.per_page = data.per_page;
        this.total = data.total;
        this.currentPage = data.current_page;

        console.log(data);
      } catch (error) {
        this.$toast.error(`error`, { position: "top" });
      }
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>