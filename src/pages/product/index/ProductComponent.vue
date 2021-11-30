<template>
  <DashBoardComponent>
    <template v-slot:page-content>
      <div class="contatiner d-flex justify-content-between">
        <h4>Produtos</h4>
        <button class="btn btn-sm btn-primary" @click="$router.push({name: 'admin-product-create'})">
          Adicionar
        </button>
      </div>
    </template>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "@/components/Layout/Dashboard/DashboardComponent/DashboardComponent.vue";

export default {
  name: "ProductComponent",
  components: { DashBoardComponent },
  data() {
    return {};
  },
  methods: {
    sendEvent() {
      const event = new CustomEvent('catalog');
      window.dispatchEvent(event);
    }
  },
  mounted() {
      this.sendEvent();
  }
};
</script>
