import DashBoardComponent from "@/components/Layout/Dashboard/DashboardComponent/DashboardComponent.vue";
import TableComponent from "@/components/Widgets/TableComponent/TableComponent.vue";
import PaginateTable from "@/components/Widgets/PaginateTableComponent/PaginateTable.vue";
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
          key: "seo",
          title: "SEO",
        }
      ],
      departaments: "",
      last_page: "",
      current_page: "",
      links: ""
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
    newdepartament() {
      return this.$router.push({ name: "admin-create-departament" });
    },

    edit(obj) {
      return this.$router.push('/admin-departament/edit/' + obj.id);
    },

    async delet(obj) {

      if (confirm(`Tem certeza que deseja remover o departamento ${obj.name}?`)) {
        try {
          const { data } = await axios.post("admin-departament/delete", {
            id: obj.id
          });
          this.$toast.success(`${data.msg}`, { position: "top" });

          /**
           * if on del the current page is the first, only request the departaments
           * if on del has departamens in the obj this.departament, get departaments sending de actual current page
           * if on del the obj this.departamens is empty, get departaments sending the actual page - 1
           */
          this.getDepartaments(this.current_page == 1 ? this.getDepartaments() : this.departaments.length > 0 ? this.getDepartaments(this.current_page) : this.getDepartaments(this.current_page - 1));

        } catch (error) {
          this.$toast.error(`error`, { position: "top" });
        }
      }
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