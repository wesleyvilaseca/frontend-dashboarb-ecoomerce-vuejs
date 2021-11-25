<template>
  <DashBoardComponent>
    <template v-slot:page-content>
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
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Nome do departamento</label
            >
            <input type="text" class="form-control" v-model="name" />
          </div>
          <div
            class="mb-3 position-relative"
            v-if="departaments_selected.length <= 0"
          >
            <label for="exampleInputPassword1" class="form-label"
              >Departamento pai</label
            >
            <input
              type="text"
              class="form-control"
              v-model="search"
              autocomplete="off"
              @keyup="searchDepartament"
            />

            <div
              v-if="departaments.length > 0"
              class="position-absolute drop-list"
            >
              <div class="list">
                <ul>
                  <li
                    class="d-block"
                    v-for="(departament, index) in departaments"
                    :key="index"
                    @click="selectDepartament(departament)"
                  >
                    {{ departament.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div v-if="departaments_selected.length > 0">
            <div class="card mt-2 mb-2">
              <div class="card-header">Departamento selecionado</div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item"
                    v-for="(departament, index) in departaments_selected"
                    :key="index"
                  >
                    {{ departament.name }}
                    <span
                      class="ms-5 fs-5 text-danger"
                      @click="unselectDepartament(index)"
                      ><i class="fas fa-times"></i
                    ></span>
                  </li>
                </ul>
              </div>
            </div>
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
export default {
  name: "CreateDepartamentComponent",
  components: { DashBoardComponent },
  data() {
    return {
      name: "",
      search: "",
      departaments: [],
      departaments_selected: [],
    };
  },
  methods: {
    async searchDepartament() {
      if (this.search == "") {
        return (this.departaments = []);
      }

      try {
        const { data } = await this.$http.get(
          "admin-departament/search?name=" + this.search
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

    unselectDepartament(index) {
      this.departaments_selected.splice(index, 1);
      // const filter = this.departaments_selected.filter(element => element !== departament);
      // this.departaments_selected = filter;
    },

    async save() {
      try {
        const { data } = await this.$http.post("admin-departament/save", {
          name: this.name,
          parent_id: this.departaments_selected
        });

        this.$toast.success(`${data.msg}`, {  position: "top" });

        this.$router.push({name: 'admin-departament'});
        
      } catch (error) {
        const { data } = error;
        this.$toast.error(`${data.error}`, {  position: "top" });
      }
    },
  },
  mounted() {
    const event = new CustomEvent("catalog");
    window.dispatchEvent(event);
  },
  watch: {},
};
</script>