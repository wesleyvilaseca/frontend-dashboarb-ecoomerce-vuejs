<template>
  <DashBoardComponent>
    <template v-slot:page-content class="">
      <div class="contatiner d-flex justify-content-between">
        <h4>Produto</h4>
        <router-link
          class="btn btn-sm btn-primary"
          :to="{ name: 'admin-product' }"
        >
          <i class="fas fa-arrow-left"></i> Voltar
        </router-link>
      </div>
      <TabsComponent :tablist="tablist"> 
          <template v-slot:geral> Geral teste</template>
          <template v-slot:dados> Dados teste</template>
          <template v-slot:ligacoes> Ligações teste</template>
      </TabsComponent>
    </template>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "@/components/Layout/Dashboard/DashboardComponent/DashboardComponent.vue";
import TabsComponent from "@/components/Widgets/TabsComponent/TabsComponent.vue";

export default {
  name: "CreateProductComponent",
  components: { DashBoardComponent, TabsComponent },
  data() {
    return {
      tablist: [
        {
          title: "Geral",
          name: "geral",
          active: true,
        },
        {
          title: "Dados",
          name: "dados",
          active: false,
        },
        {
          title: "Ligações",
          name: "ligacoes",
          active: false,
        },
      ],
    };
  },
  methods: {
    sendEvent() {
      const event = new CustomEvent("catalog");
      window.dispatchEvent(event);
    },
  },
  mounted() {
    this.sendEvent();
  },
};
</script>
