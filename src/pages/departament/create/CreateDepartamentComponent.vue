<template>
  <DashBoardComponent>
    <template v-slot:page-content>
      <div class="contatiner d-flex justify-content-between">
        <h4>Departamento</h4>
        <button class="btn btn-sm btn-primary" @click="back">
          <i class="fas fa-arrow-left"></i> Voltar
        </button>
      </div>

      <div class="container-fluid">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Nome do departamento</label
            >
            <input type="email" class="form-control" v-model="name" />
          </div>
          <div class="mb-3 position-relative">
            <label for="exampleInputPassword1" class="form-label"
              >Departamento pai</label
            >
            <input type="text" class="form-control" v-model="search" autocomplete="off" @keyup="searchDepartament" />

            <div v-if="departaments.length > 0" class="position-absolute drop-list">
              <div class="list">
                <ul>
                  <li class="d-block">item 1</li>
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
    sendEvent() {
      const event = new CustomEvent("catalog");
      window.dispatchEvent(event);
    },


    searchDepartament(){
      console.log(this.search);
    },


    back() {
      return this.$router.push({ name: "admin-departament" });
    },
  },
  mounted() {
    this.sendEvent();
  },
};
</script>