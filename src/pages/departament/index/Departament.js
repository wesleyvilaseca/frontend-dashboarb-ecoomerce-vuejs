import DashBoardComponent from "@/components/Layout/Dashboard/DashboardComponent/DashboardComponent.vue";
import TableComponent from "@/components/Table/TableComponent.vue";
import PaginateTable from "@/components/PaginateTable/PaginateTable.vue";
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
      departaments: "",
      last_page: "",
      current_page: "",
      links: "",
    };
  },
  methods: {
    async getDepartaments(page = 1) {
      this.loading = true;
      try {
        const { data } = await axios.get("admin-departament/all?page=" + page);

        this.loading = false;
        this.departaments = data.data;
        this.last_page = data.last_page;
        this.current_page = data.current_page;
        this.links = data.links;

        this.links.shift();
        this.links.pop();
      } catch (error) {
        this.$toast.error(`error`, { position: "top" });
      }
    },
    newdepartament(){
      return this.$router.push({ name: "admin-create-departament" });
    },
    edit(id) {
      console.log(id);
    },
    delet(id) {
      console.log(id);
    },
    sendEvent() {
      const event = new CustomEvent('catalog');
      window.dispatchEvent(event);
    }
  },
  async mounted() {
    await this.getDepartaments();
    this.sendEvent();
  },
};