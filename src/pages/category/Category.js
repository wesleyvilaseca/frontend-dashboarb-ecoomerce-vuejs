import DashBoardComponent from "../../components/Layout/Dashboard/DashboardComponent/DashboardComponent.vue";
import TableComponent from "../../components/Table/TableComponent.vue";
import PaginateTable from "../../components/PaginateTable/PaginateTable.vue";
import axios from "axios";

export default {
  components: {
    DashBoardComponent,
    TableComponent,
    PaginateTable,
  },
  data() {
    return {
      loading: false,
      config: [
        {
          key: "name",
          title: "Nome",
        },
        {
          key: "#",
          title: "#",
        },
      ],
      categories: "",
      last_page: "",
      current_page: "",
      links: "",
    };
  },
  methods: {
    async getCategories(page = 1) {
      this.loading = true;
      try {
        const { data } = await axios.get("admin-category/all?page=" + page);

        this.loading = false;
        this.categories = data.data;
        this.last_page = data.last_page;
        this.current_page = data.current_page;
        this.links = data.links;

        this.links.shift();
        this.links.pop();
      } catch (error) {
        this.$toast.error(`error`, { position: "top" });
      }
    },

    edit(id) {
      console.log(id);
    },
    delet(id) {
      console.log(id);
    },
  },
  async mounted() {
    await this.getCategories();
  },
};