<template>
  <DashBoardComponent>
    <template v-slot:page-content class="">
      <div class="contatiner d-flex justify-content-between">
        <h4>Departamento</h4>
        <router-link
          class="btn btn-sm btn-primary"
          :to="{ name: 'admin-departament' }"
        >
          <i class="fas fa-arrow-left"></i> Voltar
        </router-link>
      </div>

      <div class="container-fluid">
        <form @submit.stop.prevent="save">
          <InputComponent
            :label="'Nome do departamento'"
            :type="'text'"
            v-model="name"
          />
          <div
            class="mb-3 position-relative"
            v-if="departaments_selected.length <= 0"
          >
            <InputSearchComponent
              :type="'text'"
              :label="'Departamento pai'"
              :searchMethod="searchDepartament"
            />

            <div v-if="departaments.length > 0">
              <SearchDropdownListComponent
                :obj="departaments"
                :itenKey="'name'"
                :selectMethod="selectDepartament"
              />
            </div>
          </div>

          <div v-if="departaments_selected.length > 0">
            <CardListComponent
              :list="departaments_selected"
              :itenKey="'name'"
              :unselect="true"
            />
          </div>

          <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
      </div>
    </template>
  </DashBoardComponent>
</template>

<script>
import "./style.css";
import DashBoardComponent from "@/components/Layout/Dashboard/DashboardComponent/DashboardComponent.vue";
import CardListComponent from "@/components/Widgets/CardListComponent/CardListComponent.vue";
import SearchDropdownListComponent from "@/components/Widgets/SearchDropdownListComponent/SearchDropdownListComponent.vue";
import InputSearchComponent from "@/components/Inputs/InputSearchComponent/InputSearchComponent.vue";
import InputComponent from "@/components/Inputs/Common/InputComponent.vue";

export default {
  name: "CreateDepartamentComponent",
  components: {
    DashBoardComponent,
    CardListComponent,
    SearchDropdownListComponent,
    InputSearchComponent,
    InputComponent,
  },
  data() {
    return {
      id: "",
      name: "",
      departaments: [],
      departaments_selected: [],
    };
  },
  methods: {
    async searchDepartament(search) {
      if (search == "") {
        return (this.departaments = []);
      }

      try {
        const { data } = await this.$http.get(
          "admin-departament/search?name=" + search
        );
        return (this.departaments = data);
      } catch (error) {
        console.log(error);
      }
    },

    selectDepartament(departament) {
      this.departaments = [];
      this.search = "";
      this.departaments_selected.push(departament);
    },

    async save() {
      const endpoint = this.id
        ? "admin-departament/update"
        : "admin-departament/save";

      try {
        const { data } = await this.$http.post(endpoint, {
          id: this.id,
          name: this.name,
          parent_id: this.departaments_selected,
        });

        this.$toast.success(`${data.msg}`, { position: "top" });

        this.$router.push({ name: "admin-departament" });
      } catch (error) {
        const { data } = error;
        this.$toast.error(`${data.error}`, { position: "top" });
      }
    },

    async getDepartament() {
      try {
        const { data } = await this.$http.post("admin-departament/get", {
          id: this.id,
        });

        this.name = data.name;
        if (data.parent) {
          this.departaments_selected.push(data.parent);
        }
      } catch (error) {
        const { data } = error;
        this.$toast.error(`${data.error}`, { position: "top" });
      }
    },
  },
  created() {
    console.log();
  },
  mounted() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.getDepartament();
    }

    const event = new CustomEvent("catalog");
    window.dispatchEvent(event);
  },
  watch: {},
};
</script>